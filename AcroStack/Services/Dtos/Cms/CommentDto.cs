using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A polymorphic comment attached to a CMS entity.</summary>
public class CommentDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Short code identifying the entity type (e.g. "BlogPost").</summary>
    public string EntityType { get; set; } = string.Empty;

    /// <summary>Id of the commented entity.</summary>
    public Guid EntityId { get; set; }

    /// <summary>Comment body.</summary>
    public string Text { get; set; } = string.Empty;

    /// <summary>Denormalized author display name.</summary>
    public string? AuthorName { get; set; }

    /// <summary>Parent comment id when this is a reply.</summary>
    public Guid? ParentId { get; set; }

    /// <summary>Id of the user who created the comment.</summary>
    public Guid? CreatorUserId { get; set; }

    /// <summary>User name of the comment author (looked up from AppUser).</summary>
    public string? CreatorUserName { get; set; }
}
