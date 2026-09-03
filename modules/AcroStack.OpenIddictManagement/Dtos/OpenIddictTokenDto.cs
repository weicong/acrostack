using System;

namespace AcroStack.OpenIddictManagement.Dtos;

/// <summary>
/// Token view for admin listing. Deliberately excludes the Payload column
/// (raw JWT/reference token material) so sensitive credentials never leave
/// the server.
/// </summary>
public class OpenIddictTokenDto
{
    public Guid Id { get; set; }

    public Guid? ApplicationId { get; set; }

    public Guid? AuthorizationId { get; set; }

    public string Subject { get; set; } = default!;

    public string Type { get; set; } = default!;

    public string Status { get; set; } = default!;

    public string? ReferenceId { get; set; }

    public DateTime? ExpirationDate { get; set; }
}
