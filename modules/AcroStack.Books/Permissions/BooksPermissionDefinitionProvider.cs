using AcroStack.Books.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AcroStack.Books.Permissions;

public class BooksPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        // 权限组名与权限名（AcroStack.*）持久化在数据库，保持与集中式定义一致；
        // 多个模块 Provider 共享同一分组，用 GetGroupOrNull 兜底避免重复注册。
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

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
