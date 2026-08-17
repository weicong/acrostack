using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.OpenIddictManagement;

public class GetOpenIddictScopeListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
