using System.Collections.Generic;

namespace AcroStack.OpenIddictManagement;

/// <summary>
/// DTO for creating a new OpenIddict scope.
/// Mirrors <c>OpenIddictScopeDescriptor</c> fields.
/// </summary>
public class CreateOpenIddictScopeDto
{
    public string Name { get; set; } = string.Empty;

    public string? DisplayName { get; set; }

    public string? Description { get; set; }

    public List<string> Resources { get; set; } = new();
}
