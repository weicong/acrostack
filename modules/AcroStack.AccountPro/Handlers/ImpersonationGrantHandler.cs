using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using OpenIddict.Abstractions;
using OpenIddict.Server;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Timing;
using Volo.Abp.Uow;

using IdentityUser = Volo.Abp.Identity.IdentityUser;
using static OpenIddict.Server.OpenIddictServerEvents;

namespace AcroStack.AccountPro;

/// <summary>
/// 处理 <c>/connect/token</c> 上的自定义 <c>Impersonation</c> 授权类型，
/// 对应 ABP Account Pro（商业版）的模拟登录能力。
///
/// <para>参数：</para>
/// <list type="bullet">
/// <item><c>user_id</c> — 用户模拟：目标用户 Id</item>
/// <item><c>tenant_id</c> — 租户模拟：目标租户 Id（模拟该租户的 <c>admin</c> 用户）</item>
/// </list>
///
/// <para>签发的访问令牌携带 ABP 官方的模拟者声明
/// （<c>AbpClaimTypes.ImpersonatorUserId</c> / <c>ImpersonatorTenantId</c> /
/// <c>ImpersonatorUserName</c>）供 SPA 显示"正在模拟"提示，并携带本项目的
/// <c>impersonation_session_id</c> 声明指向服务端会话记录。</para>
///
/// <para><b>安全说明</b>：令牌不再内嵌管理员的原始 access token。此前版本把管理员
/// 凭据放进 <c>impersonator_token</c> 声明，任何拿到模拟令牌的人都能提取出管理员
/// 的完整有效会话；改为会话 Id 后，"返回我的账户"由
/// <see cref="BackToImpersonatorGrantHandler"/> 重新为管理员签发令牌。</para>
/// </summary>
public class ImpersonationGrantHandler : ImpersonationGrantHandlerBase, IScopedDependency
{
    /// <summary>用户模拟与租户模拟共用该授权类型（与 ABP Pro 的 "Impersonation" 一致）。</summary>
    public const string GrantType = "Impersonation";

    /// <summary>
    /// 模拟令牌中携带的会话 Id 声明，指向服务端 <see cref="ImpersonationSession"/> 记录。
    /// 取代了此前直接内嵌管理员 access token 的 <c>impersonator_token</c> 声明。
    /// </summary>
    public const string ImpersonationSessionIdClaimType = "impersonation_session_id";

    private readonly IPermissionChecker _permissionChecker;
    private readonly IRepository<ImpersonationSession, Guid> _sessionRepository;
    private readonly IUnitOfWorkManager _unitOfWorkManager;
    private readonly IGuidGenerator _guidGenerator;
    private readonly IClock _clock;
    private readonly ILogger<ImpersonationGrantHandler> _logger;

    public ImpersonationGrantHandler(
        IdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant,
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IAbpClaimsPrincipalFactory claimsPrincipalFactory,
        IOpenIddictServerDispatcher dispatcher,
        IHttpContextAccessor httpContextAccessor,
        ImpersonationTokenValidator tokenValidator,
        Microsoft.Extensions.Options.IOptions<ImpersonationOptions> impersonationOptions,
        IPermissionChecker permissionChecker,
        IRepository<ImpersonationSession, Guid> sessionRepository,
        IUnitOfWorkManager unitOfWorkManager,
        IGuidGenerator guidGenerator,
        IClock clock,
        ILogger<ImpersonationGrantHandler> logger)
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
        _permissionChecker = permissionChecker;
        _sessionRepository = sessionRepository;
        _unitOfWorkManager = unitOfWorkManager;
        _guidGenerator = guidGenerator;
        _clock = clock;
        _logger = logger;
    }

    public override async ValueTask HandleAsync(HandleTokenRequestContext context)
    {
        if (context.Request.GrantType != GrantType)
        {
            return; // 非模拟登录请求，交由其他处理器处理。
        }

        // --- 判定模拟类型与所需权限 ---
        var userIdParam = context.Request.GetParameter("user_id")?.ToString();
        var tenantIdParam = context.Request.GetParameter("tenant_id")?.ToString();
        var isTenantImpersonation = !string.IsNullOrWhiteSpace(tenantIdParam);

        var permission = isTenantImpersonation
            ? ImpersonationPermissions.TenantImpersonation
            : ImpersonationPermissions.UserImpersonation;

        // --- 认证调用方（管理员）---
        // /connect/token 上 HttpContext.User 不会被填充，需手工校验其 Bearer 令牌。
        var adminToken = GetBearerToken(context);
        if (adminToken == null)
        {
            return; // HTTP 上下文不可用，基类已拒绝。
        }

        if (adminToken.Length == 0)
        {
            Reject(context, "Authentication required for impersonation.");
            return;
        }

        var adminPrincipal = ValidateAccessToken(adminToken);
        if (adminPrincipal == null)
        {
            Reject(context, "Invalid or expired admin token.");
            return;
        }

        // --- 禁止嵌套模拟 ---
        // 与 ABP Account Pro 一致（见 AbpAccountResources "NestedImpersonationIsNotAllowed"）。
        if (adminPrincipal.FindFirst(AbpClaimTypes.ImpersonatorUserId) != null)
        {
            Reject(context, "Volo.Account:NestedImpersonationIsNotAllowed");
            return;
        }

        // --- 授权校验 ---
        // 让 ICurrentUser / IPermissionChecker 看到管理员身份。
        bool isGranted;
        using (CurrentPrincipalAccessor.Change(adminPrincipal))
        {
            isGranted = await _permissionChecker.IsGrantedAsync(permission);
        }

        if (!isGranted)
        {
            Reject(context, isTenantImpersonation
                ? "Volo.Account:RequirePermissionToImpersonateTenant"
                : "Volo.Account:RequirePermissionToImpersonateUser");
            return;
        }

        // 租户模拟仅限 host 用户发起。
        if (isTenantImpersonation && CurrentTenant.Id != null)
        {
            Reject(context, "Volo.Account:ImpersonateTenantOnlyAvailableForHost");
            return;
        }

        // --- 解析目标用户 ---
        IdentityUser? targetUser;
        Guid? targetTenantId = null;

        if (isTenantImpersonation)
        {
            if (!Guid.TryParse(tenantIdParam, out var tenantId))
            {
                RejectInvalidRequest(context, "Missing or invalid tenant_id.");
                return;
            }

            targetTenantId = tenantId;
            using (CurrentTenant.Change(tenantId))
            {
                targetUser = await UserManager.FindByNameAsync(Options.TenantAdminUserName);
            }

            if (targetUser == null)
            {
                Reject(context, $"Target tenant has no '{Options.TenantAdminUserName}' user.");
                return;
            }
        }
        else
        {
            if (!Guid.TryParse(userIdParam, out var userId))
            {
                RejectInvalidRequest(context, "Missing or invalid user_id.");
                return;
            }

            targetUser = await UserManager.FindByIdAsync(userId.ToString());
        }

        if (targetUser == null)
        {
            Reject(context, "Target user not found.");
            return;
        }

        // --- 禁止自我模拟 ---
        var adminUserIdValue = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (adminUserIdValue != null &&
            targetUser.Id.ToString().Equals(adminUserIdValue, StringComparison.OrdinalIgnoreCase))
        {
            Reject(context, "Volo.Account:YouCanNotImpersonateYourself");
            return;
        }

        if (!Guid.TryParse(adminUserIdValue, out var impersonatorUserId))
        {
            Reject(context, "Invalid admin token: missing user id claim.");
            return;
        }

        // --- 落库模拟会话（审计 + 支持返回/撤销）---
        var adminTenantId = ParseGuidOrNull(adminPrincipal.FindFirst(AbpClaimTypes.TenantId)?.Value)
                            ?? CurrentTenant.Id;

        var session = await CreateSessionAsync(
            impersonatorUserId,
            adminTenantId,
            GetImpersonatorUserName(adminPrincipal),
            targetUser,
            context.Request.ClientId);

        // --- 签发被模拟用户的令牌 ---
        ClaimsPrincipal principal;
        if (targetTenantId.HasValue)
        {
            using (CurrentTenant.Change(targetTenantId.Value))
            {
                principal = await CreatePrincipalAsync(targetUser, adminPrincipal, context.Request.ClientId);
                principal.SetClaim(AbpClaimTypes.TenantId, targetTenantId.Value.ToString());
            }
        }
        else
        {
            principal = await CreatePrincipalAsync(targetUser, adminPrincipal, context.Request.ClientId);
        }

        AddImpersonatorClaims(principal, adminPrincipal, session.Id);

        try
        {
            await SignInAsync(context, principal);
        }
        catch (Exception)
        {
            // 签发失败时关闭刚落库的会话，避免留下一条"进行中"却从未生效的记录。
            await TryEndSessionAsync(session.Id);
            throw;
        }
    }

    /// <summary>
    /// 为被模拟令牌附加模拟者声明与会话 Id。
    /// 必须在 <see cref="ImpersonationGrantHandlerBase.CreatePrincipalAsync"/> 之后调用：
    /// 该方法内部的 AddDynamicClaims 会剥离非 ABP 声明。
    /// </summary>
    private static void AddImpersonatorClaims(
        ClaimsPrincipal principal,
        ClaimsPrincipal adminPrincipal,
        Guid sessionId)
    {
        if (principal.Identity is not ClaimsIdentity identity)
        {
            return;
        }

        // 会话 Id 而非管理员凭据：令牌被盗也无法据此冒用管理员身份。
        identity.AddClaim(new Claim(ImpersonationSessionIdClaimType, sessionId.ToString()));

        var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (!string.IsNullOrWhiteSpace(adminUserId))
        {
            identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorUserId, adminUserId));
        }

        var adminTenantId = adminPrincipal.FindFirst(AbpClaimTypes.TenantId)?.Value;
        if (!string.IsNullOrWhiteSpace(adminTenantId))
        {
            identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorTenantId, adminTenantId));
        }

        var adminUserName = GetImpersonatorUserName(adminPrincipal);
        if (!string.IsNullOrWhiteSpace(adminUserName))
        {
            identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorUserName, adminUserName));
        }
    }

    private static string? GetImpersonatorUserName(ClaimsPrincipal adminPrincipal)
    {
        return adminPrincipal.FindFirst(AbpClaimTypes.UserName)?.Value
               ?? adminPrincipal.FindFirst(OpenIddictConstants.Claims.PreferredUsername)?.Value;
    }

    private async Task<ImpersonationSession> CreateSessionAsync(
        Guid impersonatorUserId,
        Guid? impersonatorTenantId,
        string? impersonatorUserName,
        IdentityUser targetUser,
        string? clientId)
    {
        var session = new ImpersonationSession(
            _guidGenerator.Create(),
            impersonatorUserId,
            impersonatorTenantId,
            impersonatorUserName,
            targetUser.Id,
            targetUser.TenantId,
            targetUser.UserName,
            clientId,
            _clock.Now);

        // /connect/token 位于 ABP 的 UseUnitOfWork 中间件之内，通常已有 ambient UoW。
        // 复用它可让会话记录与 OpenIddict 的令牌记录落在同一个 DbContext/连接上，
        // 避免为同一 SQLite 文件再开一条连接（SQLite 单写者，多余连接会引入锁竞争）。
        using var uow = _unitOfWorkManager.Begin();
        await _sessionRepository.InsertAsync(session, autoSave: true);
        await uow.CompleteAsync();

        return session;
    }

    private async Task TryEndSessionAsync(Guid sessionId)
    {
        try
        {
            using var uow = _unitOfWorkManager.Begin(requiresNew: true);
            var session = await _sessionRepository.FindAsync(sessionId);
            if (session != null)
            {
                session.End(_clock.Now);
                await _sessionRepository.UpdateAsync(session, autoSave: true);
            }

            await uow.CompleteAsync();
        }
        catch (Exception ex)
        {
            // 补偿失败不应掩盖导致失败的根因。
            _logger.LogWarning(ex, "Failed to close impersonation session {SessionId}.", sessionId);
        }
    }

    private static Guid? ParseGuidOrNull(string? value)
    {
        return Guid.TryParse(value, out var id) ? id : null;
    }
}
