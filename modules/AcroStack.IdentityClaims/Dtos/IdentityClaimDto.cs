using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.IdentityClaims;

public class IdentityClaimDto
{
    public Guid Id { get; set; }
    public Guid? UserId { get; set; }
    public Guid? RoleId { get; set; }
    public string? ClaimType { get; set; }
    public string? ClaimValue { get; set; }
}

public class CreateIdentityClaimDto
{
    // 长度上限匹配 ABP Identity 声明列宽（ClaimType 256 / ClaimValue 1024）。
    [Required]
    [StringLength(256)]
    public string ClaimType { get; set; } = string.Empty;

    [Required]
    [StringLength(1024)]
    public string ClaimValue { get; set; } = string.Empty;
}

public class UpdateIdentityClaimDto
{
    [Required]
    [StringLength(256)]
    public string ClaimType { get; set; } = string.Empty;

    [Required]
    [StringLength(1024)]
    public string ClaimValue { get; set; } = string.Empty;
}

public class CreateIdentityUserClaimDto
{
    public Guid UserId { get; set; }

    [Required]
    [StringLength(256)]
    public string ClaimType { get; set; } = string.Empty;

    [Required]
    [StringLength(1024)]
    public string ClaimValue { get; set; } = string.Empty;
}

public class CreateIdentityRoleClaimDto
{
    public Guid RoleId { get; set; }

    [Required]
    [StringLength(256)]
    public string ClaimType { get; set; } = string.Empty;

    [Required]
    [StringLength(1024)]
    public string ClaimValue { get; set; } = string.Empty;
}
