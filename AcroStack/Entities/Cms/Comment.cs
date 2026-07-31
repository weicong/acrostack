using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A polymorphic comment attached to any CMS entity (a blog post, a page,
/// ...). Supports threaded replies via <see cref="ParentId"/>. Mirrors ABP
/// Commercial CMS Kit Pro's <c>Comment</c> aggregate root.
/// </summary>
public class Comment : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Short code identifying the entity type (e.g. "BlogPost").</summary>
    public string EntityType { get; set; } = string.Empty;

    /// <summary>Id of the commented entity.</summary>
    public Guid EntityId { get; set; }

    /// <summary>Comment body (plain text or Markdown, up to 1024 chars).</summary>
    public string Text { get; set; } = string.Empty;

    /// <summary>
    /// Denormalized author display name for fast rendering without a user
    /// lookup. Falls back to <c>Creator.UserName</c> when null.
    /// </summary>
    public string? AuthorName { get; set; }

    /// <summary>
    /// Parent comment id when this is a reply. Null for top-level comments.
    /// </summary>
    public Guid? ParentId { get; set; }

    protected Comment() { }

    public Comment(Guid id, string entityType, Guid entityId, string text) : base(id)
    {
        EntityType = entityType;
        EntityId = entityId;
        Text = text;
    }
}
