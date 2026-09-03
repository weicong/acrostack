using System;

namespace AcroStack.OpenIddictManagement.Dtos;

/// <summary>
/// Authorization view for admin listing. Deliberately excludes the
/// Properties column (consent/principal JSON) to keep the surface minimal.
/// </summary>
public class OpenIddictAuthorizationDto
{
    public Guid Id { get; set; }

    public Guid? ApplicationId { get; set; }

    public string Subject { get; set; } = default!;

    public string Type { get; set; } = default!;

    public string Status { get; set; } = default!;

    public DateTime? CreationDate { get; set; }
}
