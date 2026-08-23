using AcroStack.Books.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AcroStack.Books.Permissions;

public class BooksPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(BooksPermissions.GroupName, L("Permission:Books"));

        var booksPermission = group.AddPermission(BooksPermissions.Default, L("Permission:Books"));
        booksPermission.AddChild(BooksPermissions.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(BooksPermissions.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(BooksPermissions.Delete, L("Permission:Books.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BooksResource>(name);
    }
}
