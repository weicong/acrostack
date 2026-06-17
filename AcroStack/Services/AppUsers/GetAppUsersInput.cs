using Volo.Abp.Application.Dtos;

namespace AcroStack.AppUsers;

public class GetAppUsersInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
