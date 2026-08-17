using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Identity;

namespace AcroStack.IdentityClaims;

public class IdentityClaimTypeDto
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public IdentityClaimValueType ValueType { get; set; }
    public bool IsRequired { get; set; }
    public string? Regex { get; set; }
    public bool IsStatic { get; set; }
    public DateTime CreationTime { get; set; }
}

public class CreateIdentityClaimTypeDto
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public IdentityClaimValueType ValueType { get; set; }
    public bool IsRequired { get; set; }
    public string? Regex { get; set; }
}

public class UpdateIdentityClaimTypeDto
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public IdentityClaimValueType ValueType { get; set; }
    public bool IsRequired { get; set; }
    public string? Regex { get; set; }
}

public class GetIdentityClaimTypeListInput : PagedAndSortedResultRequestDto
{
    public string? Name { get; set; }
}
