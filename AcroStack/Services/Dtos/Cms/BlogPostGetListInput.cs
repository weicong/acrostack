using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Paged filter input for listing blog posts.</summary>
public class BlogPostGetListInput : PagedAndSortedResultRequestDto
{
    /// <summary>Optional filter on title or slug.</summary>
    public string? Filter { get; set; }

    /// <summary>Optional filter by blog.</summary>
    public Guid? BlogId { get; set; }

    /// <summary>Optional filter by tag name.</summary>
    public string? Tag { get; set; }
}
