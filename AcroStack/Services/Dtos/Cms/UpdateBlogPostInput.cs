using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for updating an existing <see cref="BlogPostDto"/>.</summary>
public class UpdateBlogPostInput
{
    [Required]
    [StringLength(256)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [StringLength(256)]
    public string Slug { get; set; } = string.Empty;

    [Required]
    public string Content { get; set; } = string.Empty;

    [StringLength(512)]
    public string? Excerpt { get; set; }

    [StringLength(512)]
    public string? CoverImage { get; set; }

    /// <summary>Tag names to associate with the post (replaces existing tags).</summary>
    public List<string> Tags { get; set; } = new();
}
