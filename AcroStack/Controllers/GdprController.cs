using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Gdpr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.Controllers;

/// <summary>
/// Custom controller for GDPR endpoints. ABP auto-routing is disabled on
/// <see cref="GdprAppService"/> because the export method returns a tuple
/// that must be written as a file response, not JSON. All endpoints are
/// explicitly routed here for predictable paths.
/// Authorization is enforced at the controller level because GdprAppService
/// has no interface (its tuple-returning method isn't RPC-friendly), so ABP's
/// interface-based authorization interceptor does not apply.
/// </summary>
[Route("api/app/gdpr")]
[Authorize(AcroStackPermissions.Gdpr.Default)]
public class GdprController : AbpController
{
    private readonly GdprAppService _appService;

    public GdprController(GdprAppService appService)
    {
        _appService = appService;
    }

    [HttpGet("export")]
    public async Task<IActionResult> Export()
    {
        var (content, fileName) = await _appService.ExportMyDataAsync();
        return File(content, "application/json", fileName);
    }

    [HttpDelete("account")]
    public Task DeleteMyAccount()
        => _appService.DeleteMyAccountAsync();
}
