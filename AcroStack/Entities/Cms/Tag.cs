using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A globally unique tag name used to label CMS entities. Associations to
/// specific entities are stored in <see cref="EntityTag"/>. Mirrors ABP
/// Commercial CMS Kit Pro's <c>Tag</c> aggregate root.
/// </summary>
public class Tag : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Unique tag name (case-insensitive lookup expected).</summary>
    public string Name { get; set; } = string.Empty;

    protected Tag() { }

    public Tag(Guid id, string name) : base(id)
    {
        Name = name;
    }
}
