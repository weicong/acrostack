using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.OpenIddictManagement;

/// <summary>
/// DTO for creating a new OpenIddict application.
/// Mirrors <c>OpenIddictApplicationDescriptor</c> fields. The
/// <c>ClientSecret</c> is hashed by <c>IAbpApplicationManager</c> on save.
/// </summary>
public class CreateOpenIddictApplicationDto
{
    [Required]
    [StringLength(64)]
    public string ClientId { get; set; } = string.Empty;

    [StringLength(200)]
    public string? DisplayName { get; set; }

    /// <summary>One of <c>OpenIddictConstants.ClientTypes</c> (public/confidential).</summary>
    public string? ClientType { get; set; }

    /// <summary>One of <c>OpenIddictConstants.ConsentTypes</c>.</summary>
    public string? ConsentType { get; set; }

    /// <summary>Plain-text secret; hashed on save. Null for public clients.</summary>
    public string? ClientSecret { get; set; }

    public List<string> Permissions { get; set; } = new();

    [MaxLength(20)]
    public List<string> RedirectUris { get; set; } = new();

    [MaxLength(20)]
    public List<string> PostLogoutRedirectUris { get; set; } = new();

    public List<string> Requirements { get; set; } = new();
}
