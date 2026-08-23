namespace AcroStack.BackgroundJobs;

public static class BackgroundJobsPermissions
{
    public const string GroupName = "BackgroundJobs";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.BackgroundJobs";
    public const string ViewJobs = Default + ".ViewJobs";
    public const string Delete = Default + ".Delete";
    public const string Requeue = Default + ".Requeue";
    public const string Abandon = Default + ".Abandon";
}
