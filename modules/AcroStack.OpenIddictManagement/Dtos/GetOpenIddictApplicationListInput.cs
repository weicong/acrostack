using Volo.Abp.Application.Dtos;

namespace AcroStack.OpenIddictManagement;

public class GetOpenIddictApplicationListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
