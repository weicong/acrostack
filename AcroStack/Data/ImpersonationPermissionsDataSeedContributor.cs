using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;

namespace AcroStack.Data;

/// <summary>
/// Grants the built-in ABP impersonation permissions (and other custom
/// AcroStack permissions that mirror ABP Commercial Pro modules) to the
/// <c>admin</c> role so that host administrators can use the corresponding
/// APIs. Mirrors the aspnetzero "Login as this user" / "Impersonate tenant"
/// feature plus Identity Pro claim management.
/// Idempotent: re-running the seeder is a no-op once the grants already exist.
/// </summary>
public class ImpersonationPermissionsDataSeedContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IPermissionManager _permissionManager;

    public ImpersonationPermissionsDataSeedContributor(
        IPermissionManager permissionManager)
    {
        _permissionManager = permissionManager;
    }

    [UnitOfWork]
    public virtual async Task SeedAsync(DataSeedContext context)
    {
        // Admin role is host-scoped when seeding with tenantId == null.
        // Tenant impersonation is only available to host users, so we grant
        // both permissions at the host level.
        if (context.TenantId == null)
        {
            await _permissionManager.SetForRoleAsync(
                "admin", "AbpIdentity.Users.Impersonation", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AbpTenantManagement.Tenants.Impersonation", true);

            // Identity Claims management (mirrors ABP Commercial Identity Pro).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.IdentityClaims.UserClaims", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.IdentityClaims.RoleClaims", true);

            // Audit Logging (mirrors ABP Commercial AuditLogging Pro).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.AuditLogging.ViewLogs", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.AuditLogging.ViewEntityChanges", true);

            // Background Jobs (mirrors ABP Commercial BackgroundJobs module).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.BackgroundJobs.ViewJobs", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.BackgroundJobs.Delete", true);

            // OpenIddict management (mirrors ABP Commercial OpenIddict Pro).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.OpenIddictManagement.Applications", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.OpenIddictManagement.Scopes", true);

            // SaaS Editions (mirrors ABP Commercial SaaS Pro Edition management).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.SaaS.Editions", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.SaaS.Editions.Create", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.SaaS.Editions.Update", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.SaaS.Editions.Delete", true);

            // File Management (mirrors ABP Commercial File Management Pro).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.FileManagement", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.FileManagement.Upload", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.FileManagement.Download", true);

            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.FileManagement.Delete", true);

            // GDPR (mirrors ABP Commercial GDPR Pro).
            await _permissionManager.SetForRoleAsync(
                "admin", "AcroStack.Gdpr", true);
        }
    }
}
