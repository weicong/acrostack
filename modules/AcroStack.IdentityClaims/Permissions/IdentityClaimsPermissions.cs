namespace AcroStack.IdentityClaims;

public static class IdentityClaimsPermissions
{
    public const string Default = AcroStackPermissionConsts.GroupName + ".IdentityClaims";
    public const string UserClaims = Default + ".UserClaims";
    public const string RoleClaims = Default + ".RoleClaims";
    public const string ClaimTypes = Default + ".ClaimTypes";
}
