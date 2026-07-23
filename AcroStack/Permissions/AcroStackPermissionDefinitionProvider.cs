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
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AcroStackResource>(name);
    }
}
