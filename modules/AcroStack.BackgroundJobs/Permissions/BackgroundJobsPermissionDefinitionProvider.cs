using AcroStack.BackgroundJobs.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.BackgroundJobs.Permissions;

public class BackgroundJobsPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        // Host-only: the background job queue is shared infrastructure.
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

        var bgJobPermission = group.AddPermission(
            BackgroundJobsPermissions.Default, L("Permission:BackgroundJobs"),
            MultiTenancySides.Host);
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.ViewJobs, L("Permission:BackgroundJobs.ViewJobs"));
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.Delete, L("Permission:BackgroundJobs.Delete"));
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.Requeue, L("Permission:BackgroundJobs.Requeue"));
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.Abandon, L("Permission:BackgroundJobs.Abandon"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BackgroundJobsResource>(name);
    }
}
