using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using OpenIddict.Abstractions;
using OpenIddict.Server;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;

using IdentityUser = Volo.Abp.Identity.IdentityUser;
using static OpenIddict.Server.OpenIddictServerEvents;

namespace AcroStack.AccountPro;

/// <summary>
/// 自定义 grant 处理器的公共逻辑：读取调用方 Bearer 令牌、校验、为目标用户
/// 构造 principal、触发 OpenIddict 签发。
/// </summary>
/// <remarks>
/// 两个 grant 都注册在 <see cref="HandleTokenRequestContext"/> 上并各自比对
/// <c>grant_type</c> 后决定是否处理，因此它们的公共部分可以安全共享。
/// </remarks>
public abstract class ImpersonationGrantHandlerBase : IOpenIddictServerHandler<HandleTokenRequestContext>
{
    protected IdentityUserManager UserManager { get; }
    protected SignInManager<IdentityUser> SignInManager { get; }
    protected IOpenIddictScopeManager ScopeManager { get; }
    protected ICurrentTenant CurrentTenant { get; }
    protected ICurrentPrincipalAccessor CurrentPrincipalAccessor { get; }
    protected IAbpClaimsPrincipalFactory ClaimsPrincipalFactory { get; }
    protected IOpenIddictServerDispatcher Dispatcher { get; }
    protected IHttpContextAccessor HttpContextAccessor { get; }
    protected ImpersonationTokenValidator TokenValidator { get; }
    protected ImpersonationOptions Options { get; }

    protected ImpersonationGrantHandlerBase(
        IdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant,
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IAbpClaimsPrincipalFactory claimsPrincipalFactory,
        IOpenIddictServerDispatcher dispatcher,
        IHttpContextAccessor httpContextAccessor,
        ImpersonationTokenValidator tokenValidator,
        IOptions<ImpersonationOptions> impersonationOptions)
    {
        UserManager = userManager;
        SignInManager = signInManager;
        ScopeManager = scopeManager;
        CurrentTenant = currentTenant;
        CurrentPrincipalAccessor = currentPrincipalAccessor;
        ClaimsPrincipalFactory = claimsPrincipalFactory;
        Dispatcher = dispatcher;
        HttpContextAccessor = httpContextAccessor;
        TokenValidator = tokenValidator;
        Options = impersonationOptions.Value;
    }

    public abstract ValueTask HandleAsync(HandleTokenRequestContext context);

    /// <summary>
    /// 读取调用方在 <c>Authorization</c> 头中携带的 Bearer 令牌。
    /// 返回 <c>null</c> 表示 HTTP 上下文不可用（已拒绝请求）或缺少令牌（未拒绝，
    /// 由调用方决定响应文案）。
    /// </summary>
    protected string? GetBearerToken(HandleTokenRequestContext context)
    {
        var httpContext = HttpContextAccessor.HttpContext;
        if (httpContext == null)
        {
            Reject(context, "No HTTP context available.");
            return null;
        }

        var authHeader = httpContext.Request.Headers.Authorization.ToString();
        return authHeader.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase)
            ? authHeader["Bearer ".Length..].Trim()
            : string.Empty;
    }

    protected ClaimsPrincipal? ValidateAccessToken(string token)
    {
        return TokenValidator.ValidateAccessToken(token);
    }

    /// <summary>
    /// 为指定用户构造用于签发的 principal：继承源 principal 的 scope 与客户端
    /// 标识，并补齐 ABP 的动态声明。
    /// </summary>
    protected async Task<ClaimsPrincipal> CreatePrincipalAsync(
        IdentityUser user,
        ClaimsPrincipal sourcePrincipal,
        string? clientId)
    {
        var principal = await SignInManager.CreateUserPrincipalAsync(user);

        // 继承源会话的 scope，避免模拟/返回后丢失原有授权范围与刷新令牌能力。
        var scopes = ImpersonationTokenValidator.ResolveScopes(sourcePrincipal);
        principal.SetScopes(scopes);

        var resources = new List<string>();
        await foreach (var resource in ScopeManager.ListResourcesAsync(scopes))
        {
            resources.Add(resource);
        }

        principal.SetResources(resources);

        if (!string.IsNullOrWhiteSpace(clientId))
        {
            principal.SetClaim(OpenIddictConstants.Claims.ClientId, clientId);
        }

        // ABP 的动态声明（role、email、phone_number ...）平时由 ABP 内置的
        // token 请求处理器补充；我们通过 context.HandleRequest() 跳过了它，
        // 因此必须自己调用。缺少它会导致 ICurrentUser.Roles 为空、
        // IPermissionChecker 判定无任何授权，SPA 侧边栏塌成只剩首页。
        // CreateDynamicAsync 读取 ICurrentPrincipalAccessor，需先安装该 principal。
        using (CurrentPrincipalAccessor.Change(principal))
        {
            principal = await ClaimsPrincipalFactory.CreateDynamicAsync(principal);
        }

        // 控制声明进入访问令牌还是身份令牌。
        principal.SetDestinations(static claim => claim.Type switch
        {
            OpenIddictConstants.Claims.Name or
            OpenIddictConstants.Claims.PreferredUsername or
            OpenIddictConstants.Claims.Email or
            OpenIddictConstants.Claims.Role
                => new[]
                {
                    OpenIddictConstants.Destinations.AccessToken,
                    OpenIddictConstants.Destinations.IdentityToken
                },
            _ => new[] { OpenIddictConstants.Destinations.AccessToken }
        });

        return principal;
    }

    /// <summary>
    /// 触发 OpenIddict 的签入流程生成令牌响应，并标记请求已处理。
    /// </summary>
    /// <remarks>
    /// 手动派发 <see cref="ProcessSignInContext"/> 可跳过 ABP 内置的
    /// <c>HandleTokenRequestContext</c> 处理器 —— 它会对自定义 grant 抛出
    /// "grant type not implemented"。派发后调用 <c>HandleRequest()</c>
    /// 阻止后续处理器继续处理。
    /// </remarks>
    protected async Task SignInAsync(HandleTokenRequestContext context, ClaimsPrincipal principal)
    {
        var signInContext = new ProcessSignInContext(context.Transaction)
        {
            Principal = principal,
            Response = new OpenIddictResponse()
        };

        await Dispatcher.DispatchAsync(signInContext);

        context.HandleRequest();
    }

    protected static void Reject(
        HandleTokenRequestContext context,
        string description,
        string error = "invalid_grant")
    {
        context.Reject(error: error, description: description, uri: null);
    }

    protected static void RejectInvalidRequest(HandleTokenRequestContext context, string description)
    {
        Reject(context, description, "invalid_request");
    }
}
