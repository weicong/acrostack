namespace AcroStack.AuditLogging;

public static class AuditLoggingPermissions
{
    public const string Default = AcroStackPermissionConsts.GroupName + ".AuditLogging";
    public const string ViewLogs = Default + ".ViewLogs";
    public const string ViewEntityChanges = Default + ".ViewEntityChanges";
    public const string ViewStatistics = Default + ".ViewStatistics";
    public const string Delete = Default + ".Delete";
}
