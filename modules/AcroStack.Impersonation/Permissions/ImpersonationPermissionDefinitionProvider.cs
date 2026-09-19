using AcroStack.Impersonation.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AcroStack.Impersonation.Permissions;

// The open-source ABP Identity module does NOT define impersonation permissions
// (only the commercial Pro module does).
// Register them as children of the existing AbpIdentity.Users permission
// so they appear in the permission management UI and can be checked via
// [Authorize(PermissionName)] / isGranted(...).
public class ImpersonationPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var usersPermission = context
            .GetGroupOrNull("AbpIdentity")?
            .GetPermissionOrNull("AbpIdentity.Users");

        usersPermission?.AddChild(
            ImpersonationPermissions.UserImpersonation,
            L("Permission:Impersonation"));

        usersPermission?.AddChild(
            ImpersonationPermissions.ManageImpersonationSessions,
            L("Permission:ManageImpersonationSessions"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ImpersonationResource>(name);
    }
}
