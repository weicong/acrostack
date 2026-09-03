using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.OpenIddictManagement.Dtos;

public class GetOpenIddictAuthorizationListInput : PagedAndSortedResultRequestDto
{
    public Guid? ApplicationId { get; set; }

    public string? Subject { get; set; }

    public string? Status { get; set; }

    public string? Type { get; set; }
}
