using AcroStack.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Permissions;

public class AcroStackPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AcroStackPermissions.GroupName);



        myGroup.AddPermission(AcroStackPermissions.AdminConsoleCustomization, L("Permission:AdminConsole.Customization"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(AcroStackPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
