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

        var booksPermission = myGroup.AddPermission(AcroStackPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(AcroStackPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(AcroStackPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(AcroStackPermissions.Books.Delete, L("Permission:Books.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
