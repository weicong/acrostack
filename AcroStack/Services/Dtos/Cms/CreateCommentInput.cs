using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for creating a new <see cref="CommentDto"/>.</summary>
public class CreateCommentInput
{
    [Required]
    [StringLength(64)]
    public string EntityType { get; set; } = string.Empty;

    [Required]
    public Guid EntityId { get; set; }

    [Required]
    [StringLength(1024)]
    public string Text { get; set; } = string.Empty;

    /// <summary>Parent comment id when this is a reply. Null for top-level comments.</summary>
    public Guid? ParentId { get; set; }
}
