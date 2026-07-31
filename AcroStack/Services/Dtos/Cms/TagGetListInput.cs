using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Paged filter input for listing tags.</summary>
public class TagGetListInput : PagedAndSortedResultRequestDto
{
    /// <summary>Optional filter on tag name.</summary>
    public string? Filter { get; set; }
}
