using System;
using System.Collections.Generic;

namespace AcroStack.Services.Dtos.AuditLogging;

public class EntityChangeDto
{
    public Guid Id { get; set; }
    public Guid AuditLogId { get; set; }
    public string? EntityTypeFullName { get; set; }
    public string? EntityId { get; set; }
    public int ChangeType { get; set; }
    public DateTime ChangeTime { get; set; }
    public Guid? TenantId { get; set; }
    public List<EntityChangeFieldDto> PropertyChanges { get; set; } = new();
}

public class EntityChangeFieldDto
{
    public Guid Id { get; set; }
    public Guid EntityChangeId { get; set; }
    public string? PropertyName { get; set; }
    public string? OriginalValue { get; set; }
    public string? NewValue { get; set; }
    public string? PropertyTypeFullName { get; set; }
}
