using AcroStack.FileManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AcroStack.FileManagement.Permissions;

public class FileManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

        var fileMgmtPermission = group.AddPermission(
            FileManagementPermissions.Default, L("Permission:FileManagement"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Upload, L("Permission:FileManagement.Upload"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Download, L("Permission:FileManagement.Download"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Delete, L("Permission:FileManagement.Delete"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Move, L("Permission:FileManagement.Move"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Share, L("Permission:FileManagement.Share"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<FileManagementResource>(name);
    }
}
