using AcroStack.Books;
using AcroStack.BackgroundJobs;
using AcroStack.OpenIddictManagement;
using AcroStack.IdentityClaims;
using AcroStack.AuditLogging;
using AcroStack.AccountPro;
using AcroStack.FileManagement;
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

        var booksPermission = myGroup.AddPermission(BooksPermissions.Default, L("Permission:Books"));
        booksPermission.AddChild(BooksPermissions.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(BooksPermissions.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(BooksPermissions.Delete, L("Permission:Books.Delete"));

        // The open-source ABP Identity/TenantManagement modules do NOT define
        // impersonation permissions (only the commercial Pro modules do).
        // Register them as children of the existing Users / Tenants permissions
        // so they appear in the permission management UI and can be checked via
        // [Authorize(PermissionName)] / isGranted(...).
        var identityGroup = context.GetGroupOrNull("AbpIdentity");
        identityGroup?
            .GetPermissionOrNull("AbpIdentity.Users")?
            .AddChild(ImpersonationPermissions.UserImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Both);

        var tenantGroup = context.GetGroupOrNull("AbpTenantManagement");
        tenantGroup?
            .GetPermissionOrNull("AbpTenantManagement.Tenants")?
            .AddChild(ImpersonationPermissions.TenantImpersonation, L("Permission:Impersonation"))
            .WithProperty("MultiTenancySide", MultiTenancySides.Host);

        // Audit Logging — mirrors ABP Commercial AuditLogging Pro permissions.
        // Host-only: audit logs aggregate across tenants and must not be
        // visible to tenant admins.
        var auditLogPermission = myGroup.AddPermission(
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

        // Background Jobs — mirrors ABP Commercial BackgroundJobs permissions.
        // Host-only: the background job queue is shared infrastructure.
        var bgJobPermission = myGroup.AddPermission(
            BackgroundJobsPermissions.Default, L("Permission:BackgroundJobs"),
            MultiTenancySides.Host);
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.ViewJobs, L("Permission:BackgroundJobs.ViewJobs"));
        bgJobPermission.AddChild(
            BackgroundJobsPermissions.Delete, L("Permission:BackgroundJobs.Delete"));

        // OpenIddict management — mirrors ABP Commercial OpenIddict Pro permissions.
        // Host-only: OpenIddict applications/scopes are global SSO config.
        var oidcPermission = myGroup.AddPermission(
            OpenIddictManagementPermissions.Default, L("Permission:OpenIddictManagement"),
            MultiTenancySides.Host);
        oidcPermission.AddChild(
            OpenIddictManagementPermissions.Applications, L("Permission:OpenIddictManagement.Applications"));
        oidcPermission.AddChild(
            OpenIddictManagementPermissions.Scopes, L("Permission:OpenIddictManagement.Scopes"));

        // Identity Claims — mirrors ABP Commercial Identity Pro claim management.
        var identityClaimsPermission = myGroup.AddPermission(
            IdentityClaimsPermissions.Default, L("Permission:IdentityClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.UserClaims, L("Permission:IdentityClaims.UserClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.RoleClaims, L("Permission:IdentityClaims.RoleClaims"));
        identityClaimsPermission.AddChild(
            IdentityClaimsPermissions.ClaimTypes, L("Permission:IdentityClaims.ClaimTypes"));

        // File Management — mirrors ABP Commercial File Management Pro.
        var fileMgmtPermission = myGroup.AddPermission(
            FileManagementPermissions.Default, L("Permission:FileManagement"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Upload, L("Permission:FileManagement.Upload"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Download, L("Permission:FileManagement.Download"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Delete, L("Permission:FileManagement.Delete"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Move, L("Permission:FileManagement.Move"));
        fileMgmtPermission.AddChild(
            FileManagementPermissions.Share, L("Permission:FileManagement.Share"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
