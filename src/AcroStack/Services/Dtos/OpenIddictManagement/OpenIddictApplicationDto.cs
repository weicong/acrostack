using System;
using System.Collections.Generic;

namespace AcroStack.Services.Dtos.OpenIddictManagement;

public class OpenIddictApplicationDto
{
    public Guid Id { get; set; }
    public string? ClientId { get; set; }
    public string? DisplayName { get; set; }
    public string? ClientType { get; set; }
    public string? ConsentType { get; set; }
    public string? ClientSecret { get; set; }
    public List<string> Permissions { get; set; } = new();
    public List<string> RedirectUris { get; set; } = new();
    public List<string> PostLogoutRedirectUris { get; set; } = new();
    public List<string> Requirements { get; set; } = new();
    public DateTime CreationTime { get; set; }
}
