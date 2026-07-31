using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for updating an existing <see cref="BlogDto"/>.</summary>
public class UpdateBlogInput
{
    [Required]
    [StringLength(256)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [StringLength(128)]
    public string Slug { get; set; } = string.Empty;

    [StringLength(512)]
    public string? Description { get; set; }
}
