using System;
using System.Collections.Generic;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Per-type counts plus the current user's reaction for one entity.</summary>
public class ReactionSummaryDto
{
    /// <summary>Short code identifying the entity type.</summary>
    public string EntityType { get; set; } = string.Empty;

    /// <summary>Id of the entity.</summary>
    public Guid EntityId { get; set; }

    /// <summary>Total reactions across all types.</summary>
    public int TotalCount { get; set; }

    /// <summary>Count per reaction type.</summary>
    public Dictionary<string, int> CountsByType { get; set; } = new();

    /// <summary>The current user's reaction types on this entity (empty if none).</summary>
    public IReadOnlyList<string> currentUserReactions { get; set; } = Array.Empty<string>();
}
