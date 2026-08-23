namespace AcroStack.IdentityClaims;

public static class IdentityClaimsPermissions
{
    public const string GroupName = "IdentityClaims";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.IdentityClaims";
    public const string UserClaims = Default + ".UserClaims";
    public const string RoleClaims = Default + ".RoleClaims";
    public const string ClaimTypes = Default + ".ClaimTypes";
}
