using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Paged filter input for listing pages.</summary>
public class PageGetListInput : PagedAndSortedResultRequestDto
{
    /// <summary>Optional filter on title or slug.</summary>
    public string? Filter { get; set; }
}
