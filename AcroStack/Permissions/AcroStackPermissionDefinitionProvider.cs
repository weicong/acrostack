using AcroStack.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Permissions;

public class AcroStackPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AcroStackPermissions.GroupName);

        var booksPermission = myGroup.AddPermission(AcroStackPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(AcroStackPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(AcroStackPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(AcroStackPermissions.Books.Delete, L("Permission:Books.Delete"));

        // The open-source ABP Identity/TenantManagement modules do NOT define
        // impersonation permissions (only the commercial Pro modules do).
        // Register them as children of the existing Users / Tenants permissions
        // so they appear in the permission management UI and can be checked via
        // [Authorize(PermissionName)] / isGranted(...).
        var identityGroup = context.GetGroupOrNull("AbpIdentity");
        identityGroup?
            .GetPermissionOrNull("AbpIdentity.Users")?
            .AddChild(AcroStackPermissions.Impersonation.UserImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Both);

        var tenantGroup = context.GetGroupOrNull("AbpTenantManagement");
        tenantGroup?
            .GetPermissionOrNull("AbpTenantManagement.Tenants")?
            .AddChild(AcroStackPermissions.Impersonation.TenantImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Host);

        // Audit Logging — mirrors ABP Commercial AuditLogging Pro permissions.
        // Host-only: audit logs aggregate across tenants and must not be
        // visible to tenant admins.
        var auditLogPermission = myGroup.AddPermission(
            AcroStackPermissions.AuditLogging.Default, L("Permission:AuditLogging"),
            MultiTenancySides.Host);
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.ViewLogs, L("Permission:AuditLogging.ViewLogs"));
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.ViewEntityChanges, L("Permission:AuditLogging.ViewEntityChanges"));
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.ViewStatistics, L("Permission:AuditLogging.ViewStatistics"));
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.Delete, L("Permission:AuditLogging.Delete"));

        // Background Jobs — mirrors ABP Commercial BackgroundJobs permissions.
        // Host-only: the background job queue is shared infrastructure.
        var bgJobPermission = myGroup.AddPermission(
            AcroStackPermissions.BackgroundJobs.Default, L("Permission:BackgroundJobs"),
            MultiTenancySides.Host);
        bgJobPermission.AddChild(
            AcroStackPermissions.BackgroundJobs.ViewJobs, L("Permission:BackgroundJobs.ViewJobs"));
        bgJobPermission.AddChild(
            AcroStackPermissions.BackgroundJobs.Delete, L("Permission:BackgroundJobs.Delete"));

        // OpenIddict management — mirrors ABP Commercial OpenIddict Pro permissions.
        // Host-only: OpenIddict applications/scopes are global SSO config.
        var oidcPermission = myGroup.AddPermission(
            AcroStackPermissions.OpenIddictManagement.Default, L("Permission:OpenIddictManagement"),
            MultiTenancySides.Host);
        oidcPermission.AddChild(
            AcroStackPermissions.OpenIddictManagement.Applications, L("Permission:OpenIddictManagement.Applications"));
        oidcPermission.AddChild(
            AcroStackPermissions.OpenIddictManagement.Scopes, L("Permission:OpenIddictManagement.Scopes"));

        // Identity Claims — mirrors ABP Commercial Identity Pro claim management.
        var identityClaimsPermission = myGroup.AddPermission(
            AcroStackPermissions.IdentityClaims.Default, L("Permission:IdentityClaims"));
        identityClaimsPermission.AddChild(
            AcroStackPermissions.IdentityClaims.UserClaims, L("Permission:IdentityClaims.UserClaims"));
        identityClaimsPermission.AddChild(
            AcroStackPermissions.IdentityClaims.RoleClaims, L("Permission:IdentityClaims.RoleClaims"));
        identityClaimsPermission.AddChild(
            AcroStackPermissions.IdentityClaims.ClaimTypes, L("Permission:IdentityClaims.ClaimTypes"));

        // File Management — mirrors ABP Commercial File Management Pro.
        var fileMgmtPermission = myGroup.AddPermission(
            AcroStackPermissions.FileManagement.Default, L("Permission:FileManagement"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Upload, L("Permission:FileManagement.Upload"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Download, L("Permission:FileManagement.Download"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Delete, L("Permission:FileManagement.Delete"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Move, L("Permission:FileManagement.Move"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Share, L("Permission:FileManagement.Share"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
