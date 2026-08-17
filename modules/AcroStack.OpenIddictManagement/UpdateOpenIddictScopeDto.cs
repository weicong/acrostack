using System.Collections.Generic;

namespace AcroStack.OpenIddictManagement;

/// <summary>
/// DTO for updating an existing OpenIddict scope. <c>Name</c> is
/// intentionally omitted — changing it after creation is not supported.
/// </summary>
public class UpdateOpenIddictScopeDto
{
    public string? DisplayName { get; set; }

    public string? Description { get; set; }

    public List<string> Resources { get; set; } = new();
}
