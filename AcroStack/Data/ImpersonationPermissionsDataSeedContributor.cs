using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;

namespace AcroStack.Data;

/// <summary>
/// Grants the built-in ABP impersonation permissions to the <c>admin</c> role
/// so that host administrators can use the <c>/connect/impersonateuser</c> and
/// <c>/connect/impersonatetenant</c> endpoints exposed by the Account OpenIddict
/// module. Mirrors the aspnetzero "Login as this user" / "Impersonate tenant" feature.
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
        }
    }
}
