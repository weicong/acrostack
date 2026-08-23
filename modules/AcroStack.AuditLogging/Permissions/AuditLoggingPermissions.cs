namespace AcroStack.AuditLogging;

public static class AuditLoggingPermissions
{
    public const string GroupName = "AuditLogging";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.AuditLogging";
    public const string ViewLogs = Default + ".ViewLogs";
    public const string ViewEntityChanges = Default + ".ViewEntityChanges";
    public const string ViewStatistics = Default + ".ViewStatistics";
    public const string Delete = Default + ".Delete";
}
