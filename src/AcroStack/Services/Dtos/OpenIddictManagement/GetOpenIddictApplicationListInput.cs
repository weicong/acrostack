using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.OpenIddictManagement;

public class GetOpenIddictApplicationListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
