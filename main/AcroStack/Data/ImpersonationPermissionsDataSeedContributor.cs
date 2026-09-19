using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;

namespace AcroStack.Data;

/// <summary>
/// Grants the impersonation permissions to the <c>admin</c> role so that
/// administrators can use the self-built Account Pro impersonation feature
/// (see <c>modules/AcroStack.AccountPro</c>).
/// The permission names are the ones ABP itself uses
/// (<c>IdentityPermissions.Users.Impersonation</c>), plus the extra permission
/// guarding the impersonation session audit/revoke API.
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
        // 用户模拟（对应 ABP IdentityPermissions.Users.Impersonation）。
        await _permissionManager.SetForRoleAsync(
            "admin", "AbpIdentity.Users.Impersonation", true);

        // 模拟会话审计/撤销（对应 ImpersonationSessionAppService）。
        await _permissionManager.SetForRoleAsync(
            "admin", "AbpIdentity.Users.ManageImpersonationSessions", true);
    }
}
