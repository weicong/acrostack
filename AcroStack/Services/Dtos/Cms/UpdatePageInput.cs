using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for updating an existing <see cref="PageDto"/>.</summary>
public class UpdatePageInput
{
    [Required]
    [StringLength(256)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [StringLength(128)]
    public string Slug { get; set; } = string.Empty;

    [Required]
    public string Content { get; set; } = string.Empty;

    [StringLength(512)]
    public string? Description { get; set; }
}
