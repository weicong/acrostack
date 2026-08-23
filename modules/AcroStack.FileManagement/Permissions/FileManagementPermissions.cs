namespace AcroStack.FileManagement;

public static class FileManagementPermissions
{
    public const string GroupName = "FileManagement";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.FileManagement";
    public const string Upload = Default + ".Upload";
    public const string Download = Default + ".Download";
    public const string Delete = Default + ".Delete";
    public const string Move = Default + ".Move";
    public const string Share = Default + ".Share";
}
