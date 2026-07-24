using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.BackgroundJobs;

public class GetBackgroundJobListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public string? JobName { get; set; }
    public bool? IsAbandoned { get; set; }
    public DateTime? StartCreationTime { get; set; }
    public DateTime? EndCreationTime { get; set; }
}
