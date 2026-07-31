using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A blog container that owns blog posts.</summary>
public class BlogDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Display name (e.g. "Company Blog").</summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>URL-friendly unique identifier.</summary>
    public string Slug { get; set; } = string.Empty;

    /// <summary>Optional short description.</summary>
    public string? Description { get; set; }
}
