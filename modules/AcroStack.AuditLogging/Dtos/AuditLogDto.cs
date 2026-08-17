using System;
using System.Collections.Generic;

namespace AcroStack.AuditLogging;

public class AuditLogDto
{
    public Guid Id { get; set; }
    public Guid? UserId { get; set; }
    public string? UserName { get; set; }
    public Guid? TenantId { get; set; }
    public string? TenantName { get; set; }
    public string? HttpMethod { get; set; }
    public string? Url { get; set; }
    public int? HttpStatusCode { get; set; }
    public DateTime ExecutionTime { get; set; }
    public int ExecutionDuration { get; set; }
    public string? ClientIpAddress { get; set; }
    public string? ClientName { get; set; }
    public string? BrowserInfo { get; set; }
    public string? Exceptions { get; set; }
    public string? Comments { get; set; }
    public string? CorrelationId { get; set; }
    public List<EntityChangeDto> EntityChanges { get; set; } = new();
    public List<AuditLogActionDto> Actions { get; set; } = new();
}
