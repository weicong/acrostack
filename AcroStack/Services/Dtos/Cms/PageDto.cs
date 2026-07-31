using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A static CMS page.</summary>
public class PageDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Page title shown to users.</summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>URL-friendly unique identifier.</summary>
    public string Slug { get; set; } = string.Empty;

    /// <summary>Page body (Markdown source).</summary>
    public string Content { get; set; } = string.Empty;

    /// <summary>Short summary used in listings / SEO meta tags.</summary>
    public string? Description { get; set; }
}
