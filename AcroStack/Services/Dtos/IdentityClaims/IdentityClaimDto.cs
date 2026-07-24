using System;

namespace AcroStack.Services.Dtos.IdentityClaims;

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
    public string? ClaimType { get; set; }
    public string? ClaimValue { get; set; }
}

public class UpdateIdentityClaimDto
{
    public string? ClaimType { get; set; }
    public string? ClaimValue { get; set; }
}

public class CreateIdentityUserClaimDto
{
    public Guid UserId { get; set; }
    public string? ClaimType { get; set; }
    public string? ClaimValue { get; set; }
}

public class CreateIdentityRoleClaimDto
{
    public Guid RoleId { get; set; }
    public string? ClaimType { get; set; }
    public string? ClaimValue { get; set; }
}
