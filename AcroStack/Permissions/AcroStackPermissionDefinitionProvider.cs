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
        var auditLogPermission = myGroup.AddPermission(
            AcroStackPermissions.AuditLogging.Default, L("Permission:AuditLogging"));
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.ViewLogs, L("Permission:AuditLogging.ViewLogs"));
        auditLogPermission.AddChild(
            AcroStackPermissions.AuditLogging.ViewEntityChanges, L("Permission:AuditLogging.ViewEntityChanges"));

        // Background Jobs — mirrors ABP Commercial BackgroundJobs permissions.
        var bgJobPermission = myGroup.AddPermission(
            AcroStackPermissions.BackgroundJobs.Default, L("Permission:BackgroundJobs"));
        bgJobPermission.AddChild(
            AcroStackPermissions.BackgroundJobs.ViewJobs, L("Permission:BackgroundJobs.ViewJobs"));
        bgJobPermission.AddChild(
            AcroStackPermissions.BackgroundJobs.Delete, L("Permission:BackgroundJobs.Delete"));

        // OpenIddict management — mirrors ABP Commercial OpenIddict Pro permissions.
        var oidcPermission = myGroup.AddPermission(
            AcroStackPermissions.OpenIddictManagement.Default, L("Permission:OpenIddictManagement"));
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

        // SaaS Editions — mirrors ABP Commercial SaaS Pro Edition management.
        var editionsPermission = myGroup.AddPermission(
            AcroStackPermissions.SaaS.Editions, L("Permission:SaaS.Editions"));
        editionsPermission.AddChild(
            AcroStackPermissions.SaaS.EditionsCreate, L("Permission:SaaS.Editions.Create"));
        editionsPermission.AddChild(
            AcroStackPermissions.SaaS.EditionsUpdate, L("Permission:SaaS.Editions.Update"));
        editionsPermission.AddChild(
            AcroStackPermissions.SaaS.EditionsDelete, L("Permission:SaaS.Editions.Delete"));

        // File Management — mirrors ABP Commercial File Management Pro.
        var fileMgmtPermission = myGroup.AddPermission(
            AcroStackPermissions.FileManagement.Default, L("Permission:FileManagement"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Upload, L("Permission:FileManagement.Upload"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Download, L("Permission:FileManagement.Download"));
        fileMgmtPermission.AddChild(
            AcroStackPermissions.FileManagement.Delete, L("Permission:FileManagement.Delete"));

        // GDPR — mirrors ABP Commercial GDPR Pro (personal data export/delete).
        myGroup.AddPermission(
            AcroStackPermissions.Gdpr.Default, L("Permission:Gdpr"));

        // CMS Kit — mirrors ABP Commercial CMS Kit Pro.
        var cmsPagesPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.Pages.Default, L("Permission:Cms.Pages"));
        cmsPagesPermission.AddChild(
            AcroStackPermissions.Cms.Pages.Create, L("Permission:Cms.Pages.Create"));
        cmsPagesPermission.AddChild(
            AcroStackPermissions.Cms.Pages.Update, L("Permission:Cms.Pages.Update"));
        cmsPagesPermission.AddChild(
            AcroStackPermissions.Cms.Pages.Delete, L("Permission:Cms.Pages.Delete"));

        var cmsBlogsPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.Blogs.Default, L("Permission:Cms.Blogs"));
        cmsBlogsPermission.AddChild(
            AcroStackPermissions.Cms.Blogs.Create, L("Permission:Cms.Blogs.Create"));
        cmsBlogsPermission.AddChild(
            AcroStackPermissions.Cms.Blogs.Update, L("Permission:Cms.Blogs.Update"));
        cmsBlogsPermission.AddChild(
            AcroStackPermissions.Cms.Blogs.Delete, L("Permission:Cms.Blogs.Delete"));

        var cmsBlogPostsPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.BlogPosts.Default, L("Permission:Cms.BlogPosts"));
        cmsBlogPostsPermission.AddChild(
            AcroStackPermissions.Cms.BlogPosts.Create, L("Permission:Cms.BlogPosts.Create"));
        cmsBlogPostsPermission.AddChild(
            AcroStackPermissions.Cms.BlogPosts.Update, L("Permission:Cms.BlogPosts.Update"));
        cmsBlogPostsPermission.AddChild(
            AcroStackPermissions.Cms.BlogPosts.Delete, L("Permission:Cms.BlogPosts.Delete"));

        var cmsTagsPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.Tags.Default, L("Permission:Cms.Tags"));
        cmsTagsPermission.AddChild(
            AcroStackPermissions.Cms.Tags.Create, L("Permission:Cms.Tags.Create"));
        cmsTagsPermission.AddChild(
            AcroStackPermissions.Cms.Tags.Update, L("Permission:Cms.Tags.Update"));
        cmsTagsPermission.AddChild(
            AcroStackPermissions.Cms.Tags.Delete, L("Permission:Cms.Tags.Delete"));

        var cmsCommentsPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.Comments.Default, L("Permission:Cms.Comments"));
        cmsCommentsPermission.AddChild(
            AcroStackPermissions.Cms.Comments.Create, L("Permission:Cms.Comments.Create"));
        cmsCommentsPermission.AddChild(
            AcroStackPermissions.Cms.Comments.Update, L("Permission:Cms.Comments.Update"));
        cmsCommentsPermission.AddChild(
            AcroStackPermissions.Cms.Comments.Delete, L("Permission:Cms.Comments.Delete"));

        var cmsMenusPermission = myGroup.AddPermission(
            AcroStackPermissions.Cms.Menus.Default, L("Permission:Cms.Menus"));
        cmsMenusPermission.AddChild(
            AcroStackPermissions.Cms.Menus.Create, L("Permission:Cms.Menus.Create"));
        cmsMenusPermission.AddChild(
            AcroStackPermissions.Cms.Menus.Update, L("Permission:Cms.Menus.Update"));
        cmsMenusPermission.AddChild(
            AcroStackPermissions.Cms.Menus.Delete, L("Permission:Cms.Menus.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
