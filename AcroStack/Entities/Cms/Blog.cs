using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A blog container that owns a collection of <see cref="BlogPost"/> entries.
/// Mirrors ABP Commercial CMS Kit Pro's <c>Blog</c> aggregate root.
/// </summary>
public class Blog : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Display name (e.g. "Company Blog").</summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>URL-friendly unique identifier.</summary>
    public string Slug { get; set; } = string.Empty;

    /// <summary>Optional short description.</summary>
    public string? Description { get; set; }

    protected Blog() { }

    public Blog(Guid id, string name, string slug) : base(id)
    {
        Name = name;
        Slug = slug;
    }
}
