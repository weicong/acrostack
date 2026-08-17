using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.AuditLogging;

public class GetAuditLogListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public Guid? UserId { get; set; }
    public string? HttpMethod { get; set; }
    public string? Url { get; set; }
    public DateTime? StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public int? HttpStatusCode { get; set; }
    public bool? HasException { get; set; }
}
