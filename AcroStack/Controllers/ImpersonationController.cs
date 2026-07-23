using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OpenIddict.Abstractions;
using OpenIddict.Server.AspNetCore;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using AcroStack.Permissions;

using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace AcroStack.Controllers;

/// <summary>
/// Provides user and tenant impersonation endpoints that mirror the
/// aspnetzero "Login as this user" / "Impersonate tenant" feature.
///
/// The open-source ABP Account OpenIddict module does NOT include the
/// /connect/impersonateuser or /connect/impersonatetenant endpoints (those
/// are commercial Pro features). This controller fills that gap by issuing
/// a new access token for the target user/tenant via OpenIddict's SignIn
/// result, embedding <c>impersonator_token</c> / <c>impersonator_userid</c>
/// claims so the original admin session can be restored client-side.
/// </summary>
[ApiController]
[Route("api/impersonation")]
[Authorize]
public class ImpersonationController : AbpController
{
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IdentityUserManager _userManager;
    private readonly IOpenIddictScopeManager _scopeManager;
    private readonly ICurrentTenant _currentTenant;

    public ImpersonationController(
        SignInManager<IdentityUser> signInManager,
        IdentityUserManager userManager,
        IOpenIddictScopeManager scopeManager,
        ICurrentTenant currentTenant)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _scopeManager = scopeManager;
        _currentTenant = currentTenant;
    }

    /// <summary>
    /// Issues a new access token for the specified user within the current
    /// tenant context. The caller must hold the
    /// <see cref="AcroStackPermissions.Impersonation.UserImpersonation"/> permission.
    /// </summary>
    [HttpPost("user")]
    [Authorize(AcroStackPermissions.Impersonation.UserImpersonation)]
    public async Task<IActionResult> ImpersonateUserAsync([FromBody] ImpersonateUserInput input)
    {
        var adminPrincipal = HttpContext.User;
        var adminToken = ExtractBearerToken();

        var targetUser = await _userManager.FindByIdAsync(input.UserId.ToString());
        if (targetUser == null)
        {
            return NotFound();
        }

        // Prevent self-impersonation (no-op / confusing UX).
        var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
        if (adminUserId != null &&
            targetUser.Id.ToString().Equals(adminUserId, StringComparison.OrdinalIgnoreCase))
        {
            return BadRequest("Cannot impersonate yourself.");
        }

        var principal = await BuildImpersonatedPrincipalAsync(
            targetUser, adminPrincipal, adminToken);

        return SignIn(principal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
    }

    /// <summary>
    /// Issues a new access token for the admin user of the specified tenant.
    /// Only host-level administrators can impersonate tenants.
    /// </summary>
    [HttpPost("tenant")]
    [Authorize(AcroStackPermissions.Impersonation.TenantImpersonation)]
    public async Task<IActionResult> ImpersonateTenantAsync([FromBody] ImpersonateTenantInput input)
    {
        // Tenant impersonation is host-only.
        if (_currentTenant.Id != null)
        {
            return Forbid();
        }

        var adminPrincipal = HttpContext.User;
        var adminToken = ExtractBearerToken();

        // Find the admin user within the target tenant.
        IdentityUser? targetUser;
        using (_currentTenant.Change(input.TenantId))
        {
            targetUser = await _userManager.FindByNameAsync("admin");
        }

        if (targetUser == null)
        {
            return NotFound("Target tenant has no 'admin' user.");
        }

        // Build the principal inside the target tenant context so that
        // SignInManager populates the correct tenant/role claims.
        using (_currentTenant.Change(input.TenantId))
        {
            var principal = await BuildImpersonatedPrincipalAsync(
                targetUser, adminPrincipal, adminToken);

            // Explicitly set the target tenant claim (host admin has no tenant).
            principal.SetClaim(AbpClaimTypes.TenantId, input.TenantId.ToString());

            return SignIn(principal, OpenIddictServerAspNetCoreDefaults.AuthenticationScheme);
        }
    }

    // ---- Helpers -----------------------------------------------------------

    private async Task<ClaimsPrincipal> BuildImpersonatedPrincipalAsync(
        IdentityUser targetUser,
        ClaimsPrincipal adminPrincipal,
        string adminToken)
    {
        // CreateUserPrincipalAsync populates sub, name, email, role, tenantid, etc.
        var principal = await _signInManager.CreateUserPrincipalAsync(targetUser);

        // Carry over scopes from the admin's token (or fall back to defaults).
        var scopes = adminPrincipal.GetScopes().ToImmutableArray();
        if (scopes.Length == 0)
        {
            scopes = new[] { "AcroStack", "offline_access" }.ToImmutableArray();
        }
        principal.SetScopes(scopes);

        // Resolve scope → resources mapping so the audience claim is correct.
        var resources = new List<string>();
        await foreach (var resource in _scopeManager.ListResourcesAsync(scopes))
        {
            resources.Add(resource);
        }
        principal.SetResources(resources);

        // Preserve client_id so OpenIddict knows which application issued the token.
        var clientId = adminPrincipal.GetClaim(OpenIddictConstants.Claims.ClientId);
        if (!string.IsNullOrWhiteSpace(clientId))
        {
            principal.SetClaim(OpenIddictConstants.Claims.ClientId, clientId);
        }

        // Impersonator claims — allow the SPA to detect impersonation and
        // restore the original session via backToMyAccount().
        var identity = principal.Identity as ClaimsIdentity;
        if (identity != null)
        {
            identity.AddClaim(new Claim("impersonator_token", adminToken));

            var adminUserId = adminPrincipal.FindFirst(AbpClaimTypes.UserId)?.Value;
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

        // Route all claims to the access token; standard profile claims also
        // go to the identity token so the SPA can read them.
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

    private string ExtractBearerToken()
    {
        var header = Request.Headers.Authorization.ToString();
        return header.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase)
            ? header["Bearer ".Length..].Trim()
            : string.Empty;
    }
}

public class ImpersonateUserInput
{
    public Guid UserId { get; set; }
}

public class ImpersonateTenantInput
{
    public Guid TenantId { get; set; }
}
