namespace AcroStack.BackgroundJobs;

public static class BackgroundJobsPermissions
{
    public const string Default = AcroStackPermissionConsts.GroupName + ".BackgroundJobs";
    public const string ViewJobs = Default + ".ViewJobs";
    public const string Delete = Default + ".Delete";
    public const string Requeue = Default + ".Requeue";
    public const string Abandon = Default + ".Abandon";
}
