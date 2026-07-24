using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using AcroStack.Permissions;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Identity;
using Volo.Abp.Users;

namespace AcroStack.Services.Gdpr;

/// <summary>
/// GDPR personal-data management AppService. Mirrors ABP Commercial GDPR
/// Pro's core capability: export the current user's personal data as a
/// JSON document, and delete the current user's account. Auto-routing is
/// disabled because a dedicated <c>GdprController</c> exposes the endpoints
/// with explicit routes (export returns a file response, not JSON).
/// </summary>
[RemoteService(false)]
[Authorize(AcroStackPermissions.Gdpr.Default)]
public class GdprAppService : ApplicationService
{
    private readonly IdentityUserManager _userManager;
    private readonly IIdentityUserAppService _userAppService;

    public GdprAppService(
        IdentityUserManager userManager,
        IIdentityUserAppService userAppService)
    {
        _userManager = userManager;
        _userAppService = userAppService;
    }

    /// <summary>
    /// Exports the current user's personal data (profile, roles, claims)
    /// as a JSON document. Returns the JSON bytes and a suggested file name.
    /// </summary>
    public async Task<(byte[] Content, string FileName)> ExportMyDataAsync()
    {
        var userId = CurrentUser.GetId();
        var user = await _userManager.GetByIdAsync(userId);

        var roles = await _userManager.GetRolesAsync(user);
        var claims = await _userManager.GetClaimsAsync(user);

        var payload = new
        {
            exportedAt = DateTimeOffset.Now,
            user = new
            {
                id = user.Id,
                userName = user.UserName,
                email = user.Email,
                emailConfirmed = user.EmailConfirmed,
                phoneNumber = user.PhoneNumber,
                phoneNumberConfirmed = user.PhoneNumberConfirmed,
                name = user.Name,
                surname = user.Surname,
                creationTime = user.CreationTime,
                lastModificationTime = user.LastModificationTime,
            },
            roles = roles.ToArray(),
            claims = claims.Select(c => new { type = c.Type, value = c.Value }).ToArray(),
        };

        var json = JsonSerializer.Serialize(
            payload,
            new JsonSerializerOptions { WriteIndented = true });

        var bytes = Encoding.UTF8.GetBytes(json);
        var fileName = $"personal-data-{user.UserName}-{DateTimeOffset.Now:yyyyMMdd-HHmmss}.json";
        return (bytes, fileName);
    }

    /// <summary>
    /// Permanently deletes the current user's account. Requires the user
    /// to be authenticated; the caller should sign out afterwards.
    /// </summary>
    public async Task DeleteMyAccountAsync()
    {
        var userId = CurrentUser.GetId();
        await _userAppService.DeleteAsync(userId);
    }
}
