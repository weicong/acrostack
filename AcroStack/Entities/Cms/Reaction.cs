using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A single user reaction (e.g. "like", "dislike") on any CMS entity. Each
/// (tenant, entity, reactionType, user) combination is unique — a user can
/// leave at most one reaction of each type per entity. Mirrors ABP
/// Commercial CMS Kit Pro's <c>Reaction</c> aggregate root.
/// </summary>
public class Reaction : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Short code identifying the entity type (e.g. "BlogPost").</summary>
    public string EntityType { get; set; } = string.Empty;

    /// <summary>Id of the reacted entity.</summary>
    public Guid EntityId { get; set; }

    /// <summary>Reaction type code (e.g. "like", "dislike", "love").</summary>
    public string ReactionType { get; set; } = string.Empty;

    protected Reaction() { }

    public Reaction(Guid id, string entityType, Guid entityId, string reactionType) : base(id)
    {
        EntityType = entityType;
        EntityId = entityId;
        ReactionType = reactionType;
    }
}
