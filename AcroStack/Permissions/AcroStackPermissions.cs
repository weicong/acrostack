namespace AcroStack.Permissions;

public static class AcroStackPermissions
{
    public const string GroupName = "AcroStack";

    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    /// <summary>
    /// Mirrors the aspnetzero "Login as this user" / "Impersonate tenant"
    /// feature. These permission keys are not defined by the ABP open-source
    /// Identity/TenantManagement modules (only by the commercial Pro modules),
    /// so they must be declared here and granted via
    /// <see cref="Data.ImpersonationPermissionsDataSeedContributor"/>.
    /// </summary>
    public static class Impersonation
    {
        public const string UserImpersonation = "AbpIdentity.Users.Impersonation";
        public const string TenantImpersonation = "AbpTenantManagement.Tenants.Impersonation";
    }

    /// <summary>
    /// Audit Logging permissions — mirrors ABP Commercial AuditLogging module.
    /// The open-source AuditLogging EF Core package stores data but provides
    /// no HTTP API or management UI; these permissions guard our custom
    /// AppService that exposes the stored audit data.
    /// </summary>
    public static class AuditLogging
    {
        public const string Default = GroupName + ".AuditLogging";
        public const string ViewLogs = Default + ".ViewLogs";
        public const string ViewEntityChanges = Default + ".ViewEntityChanges";
    }

    /// <summary>
    /// Background Jobs permissions — mirrors ABP Commercial BackgroundJobs module.
    /// </summary>
    public static class BackgroundJobs
    {
        public const string Default = GroupName + ".BackgroundJobs";
        public const string ViewJobs = Default + ".ViewJobs";
        public const string Delete = Default + ".Delete";
    }

    /// <summary>
    /// OpenIddict management permissions — mirrors ABP Commercial OpenIddict
    /// module (manage applications, scopes).
    /// </summary>
    public static class OpenIddictManagement
    {
        public const string Default = GroupName + ".OpenIddictManagement";
        public const string Applications = Default + ".Applications";
        public const string Scopes = Default + ".Scopes";
    }

    /// <summary>
    /// Identity Claims management permissions — mirrors ABP Commercial
    /// Identity Pro module (manage user claims, role claims). The open-source
    /// ABP Identity module stores the claim entities but exposes no HTTP API
    /// for managing them; these permissions guard our custom AppService.
    /// </summary>
    public static class IdentityClaims
    {
        public const string Default = GroupName + ".IdentityClaims";
        public const string UserClaims = Default + ".UserClaims";
        public const string RoleClaims = Default + ".RoleClaims";
    }

    /// <summary>
    /// SaaS Edition management permissions — mirrors ABP Commercial SaaS Pro
    /// module. The open-source <c>Volo.Abp.TenantManagement</c> module ships
    /// no Edition entity or HTTP API; these permissions guard our custom
    /// AppService that exposes edition CRUD.
    /// </summary>
    public static class SaaS
    {
        public const string Editions = GroupName + ".SaaS.Editions";
        public const string EditionsCreate = Editions + ".Create";
        public const string EditionsUpdate = Editions + ".Update";
        public const string EditionsDelete = Editions + ".Delete";
    }

    /// <summary>
    /// File Management permissions — mirrors ABP Commercial File Management
    /// Pro module. The open-source ABP ships <c>Volo.Abp.BlobStoring</c>
    /// for raw blob storage but no folder hierarchy, metadata, or HTTP API;
    /// these permissions guard our custom AppService.
    /// </summary>
    public static class FileManagement
    {
        public const string Default = GroupName + ".FileManagement";
        public const string Upload = Default + ".Upload";
        public const string Download = Default + ".Download";
        public const string Delete = Default + ".Delete";
    }

    /// <summary>
    /// GDPR permissions — mirrors ABP Commercial GDPR Pro module. The
    /// open-source ABP ships no personal-data export/delete feature;
    /// these permissions guard our custom AppService.
    /// </summary>
    public static class Gdpr
    {
        public const string Default = GroupName + ".Gdpr";
    }
}
