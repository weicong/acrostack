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
}
