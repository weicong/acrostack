using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A single blog post inside a blog.</summary>
public class BlogPostDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Owning blog.</summary>
    public Guid BlogId { get; set; }

    /// <summary>Post title.</summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>URL-friendly identifier (unique within the blog).</summary>
    public string Slug { get; set; } = string.Empty;

    /// <summary>Post body (Markdown source).</summary>
    public string Content { get; set; } = string.Empty;

    /// <summary>Short summary used in listings.</summary>
    public string? Excerpt { get; set; }

    /// <summary>Cover image URL (optional).</summary>
    public string? CoverImage { get; set; }

    /// <summary>Estimated reading time in minutes.</summary>
    public int ReadingTime { get; set; }

    /// <summary>Tag names associated with the post.</summary>
    public IReadOnlyList<string> Tags { get; set; } = Array.Empty<string>();
}
