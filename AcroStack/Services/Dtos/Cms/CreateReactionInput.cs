using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for toggling or creating a <see cref="ReactionDto"/>.</summary>
public class CreateReactionInput
{
    [Required]
    [StringLength(64)]
    public string EntityType { get; set; } = string.Empty;

    [Required]
    public Guid EntityId { get; set; }

    [Required]
    [StringLength(64)]
    public string ReactionType { get; set; } = string.Empty;
}
