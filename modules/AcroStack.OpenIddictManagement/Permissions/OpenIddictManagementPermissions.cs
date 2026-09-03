namespace AcroStack.OpenIddictManagement;

public static class OpenIddictManagementPermissions
{
    public const string GroupName = "OpenIddictManagement";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.OpenIddictManagement";
    public const string Applications = Default + ".Applications";
    public const string Scopes = Default + ".Scopes";
    public const string Tokens = Default + ".Tokens";
    public const string Authorizations = Default + ".Authorizations";
}
