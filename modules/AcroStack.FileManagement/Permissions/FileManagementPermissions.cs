namespace AcroStack.FileManagement;

public static class FileManagementPermissions
{
    public const string Default = AcroStackPermissionConsts.GroupName + ".FileManagement";
    public const string Upload = Default + ".Upload";
    public const string Download = Default + ".Download";
    public const string Delete = Default + ".Delete";
    public const string Move = Default + ".Move";
    public const string Share = Default + ".Share";
}
