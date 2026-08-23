using AcroStack.OpenIddictManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.OpenIddictManagement.Permissions;

public class OpenIddictManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        // Host-only: OpenIddict applications/scopes are global SSO config.
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

        var oidcPermission = group.AddPermission(
            OpenIddictManagementPermissions.Default, L("Permission:OpenIddictManagement"),
            MultiTenancySides.Host);
        oidcPermission.AddChild(
            OpenIddictManagementPermissions.Applications, L("Permission:OpenIddictManagement.Applications"));
        oidcPermission.AddChild(
            OpenIddictManagementPermissions.Scopes, L("Permission:OpenIddictManagement.Scopes"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<OpenIddictManagementResource>(name);
    }
}
