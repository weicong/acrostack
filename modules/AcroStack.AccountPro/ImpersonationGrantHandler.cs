using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using OpenIddict.Abstractions;
using OpenIddict.Server;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;

using IdentityUser = Volo.Abp.Identity.IdentityUser;
using static OpenIddict.Server.OpenIddictServerEvents;

namespace AcroStack.AccountPro;

/// <summary>
/// Handles the custom <c>Impersonation</c> OAuth2 grant type at the
/// <c>/connect/token</c> endpoint, mirroring the ABP Account Pro
/// <c>AbpAccountPublicWebImpersonationModule</c> API.
///
/// <para>The open-source ABP Account OpenIddict module does not ship
/// impersonation endpoints (commercial Pro only). This handler implements
/// the same <c>Impersonation</c> grant type so the SPA can use the same
/// flow as ABP Pro.</para>
///
/// <para>Parameters:</para>
/// <list type="bullet">
/// <item><c>user_id</c> — target user ID for user impersonation</item>
/// <item><c>tenant_id</c> — target tenant ID for tenant impersonation
/// (impersonates the tenant's <c>admin</c> user)</item>
/// </list>
///
/// <para>The impersonated JWT embeds ABP's official impersonator claims
/// (<c>AbpClaimTypes.ImpersonatorUserId</c>, <c>ImpersonatorTenantId</c>,
/// <c>ImpersonatorUserName</c>) plus a project-specific <c>impersonator_token</c>
/// claim so the SPA can restore the original admin session via
/// <c>backToMyAccount</c>.</para>
/// </summary>
public class ImpersonationGrantHandler
    : IOpenIddictServerHandler<HandleTokenRequestContext>, IScopedDependency
{
    /// <summary>Single grant type for both user and tenant impersonation
    /// (matches ABP Pro's <c>"Impersonation"</c> grant type).</summary>
    public const string GrantType = "Impersonation";

    /// <summary>
    /// Custom claim used to embed the original admin's access token in the
    /// impersonated JWT, so the SPA can restore the admin session via
    /// <c>backToMyAccount</c> without a server-side session.
    ///
    /// <para><b>Architecture decision — why not server-side tracking?</b></para>
    /// <para>ABP Account Pro uses a server-side <c>ImpersonationSession</c> table
    /// to track the original admin session and restore it via a dedicated API.
    /// That approach is more secure (no token embedded in JWT) but requires:
    /// a new entity/table, a session cleanup background job, a REST endpoint
    /// for "back to my account", and audit logging infrastructure.</para>
    ///
    /// <para>This project embeds the admin access token directly in the JWT
    /// as a trade-off for simplicity. Security considerations:</para>
    /// <list type="bullet">
    /// <item>The embedded token has the same short lifetime as a normal access
    /// token (typically 1 hour). If it expires during impersonation,
    /// <c>backToMyAccount</c> will fail and the user must re-login.</item>
    /// <item>The JWT is signed, so the embedded token cannot be tampered with.</item>
    /// <item>Only callers with the impersonation permission can trigger this
    /// flow, limiting exposure to privileged users.</item>
    /// <item>The JWT may be larger than usual; avoid logging full tokens.</item>
    /// </list>
    /// <para>To migrate to server-side tracking later, replace this claim with
    /// a session ID and add a <c>POST /api/impersonation/back</c> endpoint.</para>
    /// </summary>
    public const string ImpersonatorTokenClaimType = "impersonator_token";

    private readonly IdentityUserManager _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IOpenIddictScopeManager _scopeManager;
    private readonly ICurrentTenant _currentTenant;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IPermissionChecker _permissionChecker;
    private readonly ICurrentPrincipalAccessor _currentPrincipalAccessor;
    private readonly IAbpClaimsPrincipalFactory _claimsPrincipalFactory;
    private readonly OpenIddictServerOptions _serverOptions;
    private readonly IOpenIddictServerDispatcher _dispatcher;
    private readonly ImpersonationOptions _impersonationOptions;

    public ImpersonationGrantHandler(
        IdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant,
        IHttpContextAccessor httpContextAccessor,
        IPermissionChecker permissionChecker,
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IAbpClaimsPrincipalFactory claimsPrincipalFactory,
        IOptions<OpenIddictServerOptions> serverOptions,
        IOpenIddictServerDispatcher dispatcher,
        IOptions<ImpersonationOptions> impersonationOptions)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _scopeManager = scopeManager;
        _currentTenant = currentTenant;
        _httpContextAccessor = httpContextAccessor;
        _permissionChecker = permissionChecker;
        _currentPrincipalAccessor = currentPrincipalAccessor;
        _claimsPrincipalFactory = claimsPrincipalFactory;
        _serverOptions = serverOptions.Value;
        _dispatcher = dispatcher;
        _impersonationOptions = impersonationOptions.Value;
    }

    public async ValueTask HandleAsync(HandleTokenRequestContext context)
    {
        if (context.Request.GrantType != GrantType)
        {
            return; // Not an impersonation grant — let other handlers run.
        }

        // --- Determine impersonation type by parameters ---
        var userIdParam = context.Request.GetParameter("user_id")?.ToString();
        var tenantIdParam = context.Request.GetParameter("tenant_id")?.ToString();
        var isTenantImpersonation = !string.IsNullOrWhiteSpace(tenantIdParam);

        var permission = isTenantImpersonation
            ? ImpersonationPermissions.TenantImpersonation
            : ImpersonationPermissions.UserImpersonation;

        // --- Authenticate the caller (admin) ---
        // The OpenIddict validation middleware does NOT run on /connect/token
        // (a server endpoint), so HttpContext.User is never populated. We must
        // manually validate the admin's bearer access token using the OpenIddict
        // server's own signing credentials.
        var httpContext = _httpContextAccessor.HttpContext;
        if (httpContext == null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "No HTTP context available.",
                uri: null);
            return;
        }

        var authHeader = httpContext.Request.Headers.Authorization.ToString();
        var adminToken = authHeader.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase)
            ? authHeader["Bearer ".Length..].Trim()
            : string.Empty;

        if (string.IsNullOrEmpty(adminToken))
        {
            context.Reject(
                error: "invalid_grant",
                description: "Authentication required for impersonation.",
                uri: null);
            return;
        }

        var adminPrincipal = ValidateAccessToken(adminToken);
        if (adminPrincipal == null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "Invalid or expired admin token.",
                uri: null);
            return;
        }

        // --- Reject nested impersonation ---
        // ABP Account Pro disallows impersonating while already impersonating
        // (see AbpAccountResources "NestedImpersonationIsNotAllowed").
        if (adminPrincipal.FindFirst(AbpClaimTypes.ImpersonatorUserId) != null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "Volo.Account:NestedImpersonationIsNotAllowed",
                uri: null);
            return;
        }

        // --- Authorize the caller ---
        // Ensure ICurrentUser/IPermissionChecker see the admin's principal.
        bool isGranted;
        using (_currentPrincipalAccessor.Change(adminPrincipal))
        {
            isGranted = await _permissionChecker.IsGrantedAsync(permission);
        }
        if (!isGranted)
        {
            context.Reject(
                error: "invalid_grant",
                description: isTenantImpersonation
                    ? "Volo.Account:RequirePermissionToImpersonateTenant"
                    : "Volo.Account:RequirePermissionToImpersonateUser",
                uri: null);
            return;
        }

        // Tenant impersonation is host-only.
        if (isTenantImpersonation && _currentTenant.Id != null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "Volo.Account:ImpersonateTenantOnlyAvailableForHost",
                uri: null);
            return;
        }

        // --- Resolve the target user ---
        IdentityUser? targetUser;
        Guid? targetTenantId = null;

        if (isTenantImpersonation)
        {
            if (!Guid.TryParse(tenantIdParam, out var tenantId))
            {
                context.Reject(
                    error: "invalid_request",
                    description: "Missing or invalid tenant_id.",
                    uri: null);
                return;
            }
            targetTenantId = tenantId;
            using (_currentTenant.Change(tenantId))
            {
                targetUser = await _userManager.FindByNameAsync(_impersonationOptions.TenantAdminUserName);
            }
            if (targetUser == null)
            {
                context.Reject(
                    error: "invalid_grant",
                    description: $"Target tenant has no '{_impersonationOptions.TenantAdminUserName}' user.",
                    uri: null);
                return;
            }
        }
        else
        {
            if (!Guid.TryParse(userIdParam, out var userId))
            {
                context.Reject(
                    error: "invalid_request",
                    description: "Missing or invalid user_id.",
                    uri: null);
                return;
            }
            targetUser = await _userManager.FindByIdAsync(userId.ToString());
        }

        if (targetUser == null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "Target user not found.",
                uri: null);
            return;
        }

        // Prevent self-impersonation.
        var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (adminUserId != null &&
            targetUser.Id.ToString().Equals(adminUserId, StringComparison.OrdinalIgnoreCase))
        {
            context.Reject(
                error: "invalid_grant",
                description: "Volo.Account:YouCanNotImpersonateYourself",
                uri: null);
            return;
        }

        // --- Build the impersonated principal ---
        ClaimsPrincipal principal;
        if (targetTenantId.HasValue)
        {
            using (_currentTenant.Change(targetTenantId.Value))
            {
                principal = await BuildImpersonatedPrincipalAsync(
                    targetUser, adminPrincipal, adminToken, context.Request.ClientId);
                principal.SetClaim(AbpClaimTypes.TenantId, targetTenantId.Value.ToString());
            }
        }
        else
        {
            principal = await BuildImpersonatedPrincipalAsync(
                targetUser, adminPrincipal, adminToken, context.Request.ClientId);
        }

        // --- Issue tokens for the impersonated user ---
        // We manually dispatch ProcessSignInContext to generate the token
        // response, then mark the request as handled. This skips ABP's
        // built-in HandleTokenRequest handler (which would throw
        // "grant type not implemented" for custom grant types).
        var signInContext = new ProcessSignInContext(context.Transaction)
        {
            Principal = principal,
            Response = new OpenIddictResponse()
        };

        await _dispatcher.DispatchAsync(signInContext);

        // Mark as handled so the dispatcher skips remaining
        // HandleTokenRequestContext handlers (esp. ABP's built-in one).
        context.HandleRequest();
    }

    private async Task<ClaimsPrincipal> BuildImpersonatedPrincipalAsync(
        IdentityUser targetUser,
        ClaimsPrincipal adminPrincipal,
        string adminToken,
        string? clientId)
    {
        var principal = await _signInManager.CreateUserPrincipalAsync(targetUser);

        // Preserve the admin's scopes (or fall back to defaults).
        var scopes = adminPrincipal.GetScopes().ToImmutableArray();
        if (scopes.Length == 0)
        {
            scopes = new[] { "AcroStack", "offline_access" }.ToImmutableArray();
        }
        principal.SetScopes(scopes);

        // Resolve API resources for the granted scopes.
        var resources = new List<string>();
        await foreach (var resource in _scopeManager.ListResourcesAsync(scopes))
        {
            resources.Add(resource);
        }
        principal.SetResources(resources);

        if (!string.IsNullOrWhiteSpace(clientId))
        {
            principal.SetClaim(OpenIddictConstants.Claims.ClientId, clientId);
        }

        // Add ABP dynamic claims (role, email, phone_number, etc.).
        // This is normally done by ABP's built-in OpenIddict token request handler,
        // but since we bypass it (via context.HandleRequest()), we must call it
        // ourselves. Without this, the JWT lacks "role" claims, so
        // ICurrentUser.Roles is empty and IPermissionChecker returns no grants —
        // the SPA sidebar collapses to just the homepage.
        // CreateDynamicAsync reads ICurrentPrincipalAccessor, so we temporarily
        // install the impersonated principal before calling.
        using (_currentPrincipalAccessor.Change(principal))
        {
            principal = await _claimsPrincipalFactory.CreateDynamicAsync(principal);
        }

        // Embed impersonator claims so the SPA can restore the original session.
        // Uses ABP's official AbpClaimTypes so ICurrentUser.FindImpersonator* and
        // the application-configuration currentUser DTO populate correctly.
        // The non-standard "impersonator_token" claim is our SPA-specific extension
        // to support client-side session restoration (see backToMyAccount).
        // Added AFTER AddDynamicClaimsAsync so they are not stripped by it.
        var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (principal.Identity is ClaimsIdentity identity)
        {
            identity.AddClaim(new Claim(ImpersonatorTokenClaimType, adminToken));

            if (!string.IsNullOrWhiteSpace(adminUserId))
            {
                identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorUserId, adminUserId));
            }

            var adminTenantId = adminPrincipal.FindFirst(AbpClaimTypes.TenantId)?.Value;
            if (!string.IsNullOrWhiteSpace(adminTenantId))
            {
                identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorTenantId, adminTenantId));
            }

            var adminUserName = adminPrincipal.FindFirst(AbpClaimTypes.UserName)?.Value
                ?? adminPrincipal.FindFirst(OpenIddictConstants.Claims.PreferredUsername)?.Value;
            if (!string.IsNullOrWhiteSpace(adminUserName))
            {
                identity.AddClaim(new Claim(AbpClaimTypes.ImpersonatorUserName, adminUserName));
            }
        }

        // Control which claims end up in the access token vs identity token.
        principal.SetDestinations(static claim => claim.Type switch
        {
            OpenIddictConstants.Claims.Name or
            OpenIddictConstants.Claims.PreferredUsername or
            OpenIddictConstants.Claims.Email or
            OpenIddictConstants.Claims.Role
                => new[] { OpenIddictConstants.Destinations.AccessToken, OpenIddictConstants.Destinations.IdentityToken },
            _ => new[] { OpenIddictConstants.Destinations.AccessToken }
        });

        return principal;
    }

    /// <summary>
    /// Validates an admin's access token using the OpenIddict server's signing
    /// credentials. Returns the validated principal, or <c>null</c> if the
    /// token is invalid or expired.
    /// </summary>
    /// <remarks>
    /// The inbound JWT claim type map is cleared so that original claim names
    /// (e.g. <c>sub</c>, <c>role</c>, <c>preferred_username</c>) are preserved
    /// — matching what ABP's <see cref="AbpClaimTypes"/> expects.
    /// Audience is validated against <see cref="ImpersonationOptions.TokenAudience"/>
    /// to reject tokens issued for a different resource. Issuer validation is
    /// skipped because OpenIddict in development may use the request URL as the
    /// issuer, which is not known at configuration time.
    /// </remarks>
    private ClaimsPrincipal? ValidateAccessToken(string token)
    {
        try
        {
            var handler = new JwtSecurityTokenHandler
            {
                // Preserve original JWT claim names (sub, role, etc.) instead of
                // mapping them to long SOAP-style URIs.
                InboundClaimTypeMap = new Dictionary<string, string>()
            };

            if (!handler.CanReadToken(token))
            {
                return null;
            }

            var signingKeys = _serverOptions.SigningCredentials
                .Select(c => c.Key)
                .ToList();

            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = true,
                ValidAudience = _impersonationOptions.TokenAudience,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKeys = signingKeys,
                ClockSkew = TimeSpan.FromMinutes(1)
            };

            return handler.ValidateToken(token, validationParameters, out _);
        }
        catch
        {
            return null;
        }
    }
}
