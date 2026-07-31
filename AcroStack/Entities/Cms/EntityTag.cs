using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// Polymorphic many-to-many association between a tag name and any CMS
/// entity (e.g. a <see cref="BlogPost"/>). Mirrors ABP Commercial CMS Kit
/// Pro's <c>EntityTag</c> aggregate root. <see cref="Tag"/> rows are
/// referenced by name here to keep the join cheap and tenant-scoped.
/// </summary>
public class EntityTag : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>The tag name (denormalized from <see cref="Tag.Name"/>).</summary>
    public string TagName { get; set; } = string.Empty;

    /// <summary>Id of the tagged entity (e.g. <see cref="BlogPost.Id"/>).</summary>
    public Guid EntityId { get; set; }

    /// <summary>
    /// Short code identifying the entity type (e.g. "BlogPost", "Page").
    /// </summary>
    public string EntityType { get; set; } = string.Empty;

    protected EntityTag() { }

    public EntityTag(Guid id, string tagName, Guid entityId, string entityType) : base(id)
    {
        TagName = tagName;
        EntityId = entityId;
        EntityType = entityType;
    }
}
