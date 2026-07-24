using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.SaaS;

public class EditionGetListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
