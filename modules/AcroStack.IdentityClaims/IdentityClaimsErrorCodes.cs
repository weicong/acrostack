namespace AcroStack.IdentityClaims;

/// <summary>
/// IdentityClaims 模块结构化错误码。本地化文本见 Localization/IdentityClaims/{en,zh-Hans}.json，
/// 通过 IdentityClaimsModule 中 MapCodeNamespace("IdentityClaims", ...) 映射到 IdentityClaimsResource。
/// </summary>
public static class IdentityClaimsErrorCodes
{
    public const string StaticClaimTypeNameCannotBeChanged = "IdentityClaims:StaticClaimTypeNameCannotBeChanged";
    public const string StaticClaimTypeCannotBeDeleted = "IdentityClaims:StaticClaimTypeCannotBeDeleted";
    public const string ClaimTypeInUse = "IdentityClaims:ClaimTypeInUse";
    public const string IdentityUserClaimOperationFailed = "IdentityClaims:IdentityUserClaimOperationFailed";
    public const string IdentityRoleClaimOperationFailed = "IdentityClaims:IdentityRoleClaimOperationFailed";
}
