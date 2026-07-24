using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using AcroStack.Permissions;
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

namespace AcroStack.OpenIddict;

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
/// <para>The impersonated JWT embeds <c>impersonator_token</c> /
/// <c>impersonator_userid</c> claims so the original admin session can be
/// restored via <c>backToMyAccount</c>.</para>
/// </summary>
public class ImpersonationGrantHandler
    : IOpenIddictServerHandler<HandleTokenRequestContext>, IScopedDependency
{
    /// <summary>Single grant type for both user and tenant impersonation
    /// (matches ABP Pro's <c>"Impersonation"</c> grant type).</summary>
    public const string GrantType = "Impersonation";

    private readonly IdentityUserManager _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IOpenIddictScopeManager _scopeManager;
    private readonly ICurrentTenant _currentTenant;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IPermissionChecker _permissionChecker;
    private readonly ICurrentPrincipalAccessor _currentPrincipalAccessor;
    private readonly OpenIddictServerOptions _serverOptions;
    private readonly IOpenIddictServerDispatcher _dispatcher;

    public ImpersonationGrantHandler(
        IdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant,
        IHttpContextAccessor httpContextAccessor,
        IPermissionChecker permissionChecker,
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IOptions<OpenIddictServerOptions> serverOptions,
        IOpenIddictServerDispatcher dispatcher)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _scopeManager = scopeManager;
        _currentTenant = currentTenant;
        _httpContextAccessor = httpContextAccessor;
        _permissionChecker = permissionChecker;
        _currentPrincipalAccessor = currentPrincipalAccessor;
        _serverOptions = serverOptions.Value;
        _dispatcher = dispatcher;
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
            ? AcroStackPermissions.Impersonation.TenantImpersonation
            : AcroStackPermissions.Impersonation.UserImpersonation;

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
                description: "Caller does not have the impersonation permission.",
                uri: null);
            return;
        }

        // Tenant impersonation is host-only.
        if (isTenantImpersonation && _currentTenant.Id != null)
        {
            context.Reject(
                error: "invalid_grant",
                description: "Tenant impersonation is only available to host users.",
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
                targetUser = await _userManager.FindByNameAsync("admin");
            }
            if (targetUser == null)
            {
                context.Reject(
                    error: "invalid_grant",
                    description: "Target tenant has no 'admin' user.",
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
                description: "Cannot impersonate yourself.",
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

        // Embed impersonator claims so the SPA can restore the original session.
        var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (principal.Identity is ClaimsIdentity identity)
        {
            identity.AddClaim(new Claim("impersonator_token", adminToken));

            if (!string.IsNullOrWhiteSpace(adminUserId))
            {
                identity.AddClaim(new Claim("impersonator_userid", adminUserId));
            }

            var adminTenantId = adminPrincipal.FindFirst(AbpClaimTypes.TenantId)?.Value;
            if (!string.IsNullOrWhiteSpace(adminTenantId))
            {
                identity.AddClaim(new Claim("impersonator_tenantid", adminTenantId));
            }

            var adminUserName = adminPrincipal.FindFirst(AbpClaimTypes.UserName)?.Value
                ?? adminPrincipal.FindFirst(OpenIddictConstants.Claims.PreferredUsername)?.Value;
            if (!string.IsNullOrWhiteSpace(adminUserName))
            {
                identity.AddClaim(new Claim("impersonator_username", adminUserName));
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
                ValidateAudience = false,
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
