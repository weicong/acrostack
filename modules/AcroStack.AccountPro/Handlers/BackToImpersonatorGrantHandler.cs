using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using OpenIddict.Abstractions;
using OpenIddict.Server;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Timing;
using Volo.Abp.Uow;

using IdentityUser = Volo.Abp.Identity.IdentityUser;
using static OpenIddict.Server.OpenIddictServerEvents;

namespace AcroStack.AccountPro;

/// <summary>
/// 处理 <c>/connect/token</c> 上的自定义 <c>BackToImpersonator</c> 授权类型：
/// 用当前的模拟令牌换取管理员自己的新令牌，即"返回我的账户"。
/// </summary>
/// <remarks>
/// <para>这是服务端会话方案（<see cref="ImpersonationSession"/>）的另一半：
/// 模拟令牌不再内嵌管理员凭据，退出模拟时由本处理器依据会话记录为管理员
/// 重新签发令牌。</para>
///
/// <para>调用方必须在 <c>Authorization</c> 头中携带当前（被模拟的）访问令牌，
/// 并提供 <c>client_id</c>。</para>
///
/// <para>校验链：令牌有效 → 令牌确为模拟会话（含模拟者声明与会话 Id）→
/// 会话存在且进行中 → 会话的被模拟方就是调用方 → 会话的模拟者仍存在。
/// 全部通过后关闭会话并签发管理员令牌。</para>
/// </remarks>
public class BackToImpersonatorGrantHandler : ImpersonationGrantHandlerBase, IScopedDependency
{
    public const string GrantType = "BackToImpersonator";

    private readonly IRepository<ImpersonationSession, Guid> _sessionRepository;
    private readonly IUnitOfWorkManager _unitOfWorkManager;
    private readonly IDataFilter<IMultiTenant> _multiTenantFilter;
    private readonly IClock _clock;

    public BackToImpersonatorGrantHandler(
        IdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant,
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IAbpClaimsPrincipalFactory claimsPrincipalFactory,
        IOpenIddictServerDispatcher dispatcher,
        IHttpContextAccessor httpContextAccessor,
        ImpersonationTokenValidator tokenValidator,
        IOptions<ImpersonationOptions> impersonationOptions,
        IRepository<ImpersonationSession, Guid> sessionRepository,
        IUnitOfWorkManager unitOfWorkManager,
        IDataFilter<IMultiTenant> multiTenantFilter,
        IClock clock)
        : base(
            userManager,
            signInManager,
            scopeManager,
            currentTenant,
            currentPrincipalAccessor,
            claimsPrincipalFactory,
            dispatcher,
            httpContextAccessor,
            tokenValidator,
            impersonationOptions)
    {
        _sessionRepository = sessionRepository;
        _unitOfWorkManager = unitOfWorkManager;
        _multiTenantFilter = multiTenantFilter;
        _clock = clock;
    }

    public override async ValueTask HandleAsync(HandleTokenRequestContext context)
    {
        if (context.Request.GrantType != GrantType)
        {
            return;
        }

        // --- 认证当前（被模拟的）调用方 ---
        var currentToken = GetBearerToken(context);
        if (currentToken == null)
        {
            return; // HTTP 上下文不可用，基类已拒绝。
        }

        if (currentToken.Length == 0)
        {
            Reject(context, "Authentication required.");
            return;
        }

        var principal = ValidateAccessToken(currentToken);
        if (principal == null)
        {
            Reject(context, "Invalid or expired token.");
            return;
        }

        // --- 确认当前令牌确实处于模拟会话中 ---
        var impersonatorUserIdClaim = principal.FindFirst(AbpClaimTypes.ImpersonatorUserId)?.Value;
        var sessionIdClaim = principal
            .FindFirst(ImpersonationGrantHandler.ImpersonationSessionIdClaimType)?.Value;

        if (string.IsNullOrWhiteSpace(impersonatorUserIdClaim) || string.IsNullOrWhiteSpace(sessionIdClaim))
        {
            Reject(context, "Volo.Account:NotImpersonating");
            return;
        }

        if (!Guid.TryParse(sessionIdClaim, out var sessionId) ||
            !Guid.TryParse(impersonatorUserIdClaim, out var impersonatorUserId))
        {
            RejectInvalidRequest(context, "Malformed impersonation session claims.");
            return;
        }

        var currentUserId = principal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (!Guid.TryParse(currentUserId, out var targetUserId))
        {
            Reject(context, "Invalid token: missing user id claim.");
            return;
        }

        // --- 加载会话记录 ---
        // 会话记录的归属租户是"模拟者"所在租户，可能与当前被模拟方的租户不同
        // （租户模拟场景：host 管理员 → 租户），因此按 Id 精确定位时禁用租户过滤。
        ImpersonationSession? session;
        using (_multiTenantFilter.Disable())
        using (var uow = _unitOfWorkManager.Begin())
        {
            session = await _sessionRepository.FindAsync(sessionId);
            await uow.CompleteAsync();
        }

        if (session == null)
        {
            Reject(context, "Volo.Account:ImpersonationSessionNotFound");
            return;
        }

        if (!session.IsActive)
        {
            // 会话已结束或被管理员撤销：不能再据此返回管理员账户。
            Reject(context, "Volo.Account:ImpersonationSessionNotActive");
            return;
        }

        // --- 会话与令牌必须互相指认 ---
        if (session.TargetUserId != targetUserId || session.ImpersonatorUserId != impersonatorUserId)
        {
            Reject(context, "Volo.Account:ImpersonationSessionMismatch");
            return;
        }

        // --- 解析管理员（在其所属租户下）---
        IdentityUser? impersonatorUser;
        using (CurrentTenant.Change(session.ImpersonatorTenantId))
        {
            impersonatorUser = await UserManager.FindByIdAsync(session.ImpersonatorUserId.ToString());
        }

        if (impersonatorUser == null)
        {
            Reject(context, "Volo.Account:ImpersonatorUserNotFound");
            return;
        }

        // --- 关闭会话后再签发 ---
        // 顺序很重要：先落库关闭，再签发令牌。反之若数据库写入失败，会留下一条
        // "进行中"的会话，任何人都能靠旧会话重复换回管理员令牌。
        using (_multiTenantFilter.Disable())
        using (var uow = _unitOfWorkManager.Begin())
        {
            var tracked = await _sessionRepository.GetAsync(session.Id);
            tracked.End(_clock.Now);
            await _sessionRepository.UpdateAsync(tracked, autoSave: true);
            await uow.CompleteAsync();
        }

        // --- 为管理员签发新令牌 ---
        ClaimsPrincipal adminPrincipal;
        using (CurrentTenant.Change(session.ImpersonatorTenantId))
        {
            adminPrincipal = await CreatePrincipalAsync(
                impersonatorUser,
                principal,
                context.Request.ClientId ?? session.ClientId);
        }

        if (session.ImpersonatorTenantId.HasValue)
        {
            adminPrincipal.SetClaim(AbpClaimTypes.TenantId, session.ImpersonatorTenantId.Value.ToString());
        }

        await SignInAsync(context, adminPrincipal);
    }
}
