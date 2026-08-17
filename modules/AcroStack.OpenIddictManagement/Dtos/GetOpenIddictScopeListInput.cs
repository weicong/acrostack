using Volo.Abp.Application.Dtos;

namespace AcroStack.OpenIddictManagement;

public class GetOpenIddictScopeListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
