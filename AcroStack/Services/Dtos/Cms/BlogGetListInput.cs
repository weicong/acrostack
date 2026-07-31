using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Paged filter input for listing blogs.</summary>
public class BlogGetListInput : PagedAndSortedResultRequestDto
{
    /// <summary>Optional filter on name or slug.</summary>
    public string? Filter { get; set; }
}
