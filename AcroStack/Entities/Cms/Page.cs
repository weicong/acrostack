using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A static CMS page (e.g. "About", "Privacy") identified by a unique slug.
/// Mirrors ABP Commercial CMS Kit Pro's <c>Page</c> aggregate root but is
/// provided here because the commercial module requires a paid license.
/// </summary>
public class Page : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Page title shown to users.</summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>URL-friendly unique identifier (e.g. "about-us").</summary>
    public string Slug { get; set; } = string.Empty;

    /// <summary>Page body (Markdown source).</summary>
    public string Content { get; set; } = string.Empty;

    /// <summary>Short summary used in listings / SEO meta tags.</summary>
    public string? Description { get; set; }

    protected Page() { }

    public Page(Guid id, string title, string slug, string content) : base(id)
    {
        Title = title;
        Slug = slug;
        Content = content;
    }
}
