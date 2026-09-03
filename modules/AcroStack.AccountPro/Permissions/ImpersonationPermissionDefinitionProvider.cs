using AcroStack.AccountPro.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.AccountPro.Permissions;

// The open-source ABP Identity/TenantManagement modules do NOT define
// impersonation permissions (only the commercial Pro modules do).
// Register them as children of the existing Users / Tenants permissions
// so they appear in the permission management UI and can be checked via
// [Authorize(PermissionName)] / isGranted(...).
public class ImpersonationPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        context
            .GetGroupOrNull("AbpIdentity")?
            .GetPermissionOrNull("AbpIdentity.Users")?
            .AddChild(ImpersonationPermissions.UserImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Both);

        // 模拟会话审计/撤销：仅 host 管理员可查看跨租户的全部会话记录。
        context
            .GetGroupOrNull("AbpIdentity")?
            .GetPermissionOrNull("AbpIdentity.Users")?
            .AddChild(ImpersonationPermissions.ManageImpersonationSessions, L("Permission:ManageImpersonationSessions"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Host);

        context
            .GetGroupOrNull("AbpTenantManagement")?
            .GetPermissionOrNull("AbpTenantManagement.Tenants")?
            .AddChild(ImpersonationPermissions.TenantImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Host);
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AccountProResource>(name);
    }
}
