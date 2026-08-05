using System.Collections.Generic;

namespace AcroStack.Services.Dtos.OpenIddictManagement;

/// <summary>
/// DTO for updating an existing OpenIddict application. <c>ClientId</c>
/// is intentionally omitted — changing it after creation is not supported
/// (it's the identifier clients use to authenticate).
/// </summary>
public class UpdateOpenIddictApplicationDto
{
    public string? DisplayName { get; set; }

    public string? ClientType { get; set; }

    public string? ConsentType { get; set; }

    /// <summary>
    /// Plain-text secret; hashed on save. Null leaves the existing secret
    /// unchanged; empty string clears it.
    /// </summary>
    public string? ClientSecret { get; set; }

    public List<string> Permissions { get; set; } = new();

    public List<string> RedirectUris { get; set; } = new();

    public List<string> PostLogoutRedirectUris { get; set; } = new();

    public List<string> Requirements { get; set; } = new();
}
