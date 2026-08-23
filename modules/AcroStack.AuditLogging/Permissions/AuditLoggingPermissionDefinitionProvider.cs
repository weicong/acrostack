using AcroStack.AuditLogging.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.AuditLogging.Permissions;

public class AuditLoggingPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        // Host-only: audit logs aggregate across tenants and must not be
        // visible to tenant admins.
        var group = context.GetGroupOrNull(AcroStackPermissionConsts.GroupName)
            ?? context.AddGroup(AcroStackPermissionConsts.GroupName);

        var auditLogPermission = group.AddPermission(
            AuditLoggingPermissions.Default, L("Permission:AuditLogging"),
            MultiTenancySides.Host);
        auditLogPermission.AddChild(
            AuditLoggingPermissions.ViewLogs, L("Permission:AuditLogging.ViewLogs"));
        auditLogPermission.AddChild(
            AuditLoggingPermissions.ViewEntityChanges, L("Permission:AuditLogging.ViewEntityChanges"));
        auditLogPermission.AddChild(
            AuditLoggingPermissions.ViewStatistics, L("Permission:AuditLogging.ViewStatistics"));
        auditLogPermission.AddChild(
            AuditLoggingPermissions.Delete, L("Permission:AuditLogging.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AuditLoggingResource>(name);
    }
}
