using AcroStack.IdentityClaims.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AcroStack.IdentityClaims.Permissions;

public class IdentityClaimsPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

        var identityClaimsPermission = group.AddPermission(
            IdentityClaimsPermissions.Default, L("Permission:IdentityClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.UserClaims, L("Permission:IdentityClaims.UserClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.RoleClaims, L("Permission:IdentityClaims.RoleClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.ClaimTypes, L("Permission:IdentityClaims.ClaimTypes"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<IdentityClaimsResource>(name);
    }
}
