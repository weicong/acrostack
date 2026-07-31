using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A single user reaction on a CMS entity.</summary>
public class ReactionDto : EntityDto<Guid>
{
    /// <summary>Short code identifying the entity type (e.g. "BlogPost").</summary>
    public string EntityType { get; set; } = string.Empty;

    /// <summary>Id of the reacted entity.</summary>
    public Guid EntityId { get; set; }

    /// <summary>Reaction type code (e.g. "like", "dislike").</summary>
    public string ReactionType { get; set; } = string.Empty;

    /// <summary>Id of the user who reacted.</summary>
    public Guid? CreatorUserId { get; set; }

    /// <summary>When the reaction was created.</summary>
    public DateTime CreationTime { get; set; }
}
