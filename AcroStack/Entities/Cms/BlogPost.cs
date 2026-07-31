using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A single blog post inside a <see cref="Blog"/>. Tags are associated
/// polymorphically via <see cref="EntityTag"/> rows (EntityType = "BlogPost").
/// Mirrors ABP Commercial CMS Kit Pro's <c>BlogPost</c> aggregate root.
/// </summary>
public class BlogPost : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

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

    /// <summary>Estimated reading time in minutes (cached at write time).</summary>
    public int ReadingTime { get; set; }

    protected BlogPost() { }

    public BlogPost(Guid id, Guid blogId, string title, string slug, string content) : base(id)
    {
        BlogId = blogId;
        Title = title;
        Slug = slug;
        Content = content;
    }
}
