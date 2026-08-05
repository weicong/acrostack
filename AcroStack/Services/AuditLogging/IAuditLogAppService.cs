using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.AuditLogging;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;

namespace AcroStack.Services.AuditLogging;

public interface IAuditLogAppService : IApplicationService
{
    Task<AuditLogDto> GetAsync(Guid id);

    Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListInput input);

    Task DeleteAsync(Guid id);

    Task DeleteManyAsync(List<Guid> ids);

    /// <summary>
    /// Exports the audit logs matching <paramref name="input"/> (ignoring
    /// paging) as an .xlsx file download. Mirrors ABP Commercial
    /// AuditLogging Pro's Excel export.
    /// </summary>
    Task<IRemoteStreamContent> GetListToExcelAsync(GetAuditLogListInput input);

    /// <summary>
    /// Returns the entity changes recorded against a single audit log,
    /// including their property-level changes. Mirrors ABP Commercial
    /// AuditLogging Pro's entity-change detail endpoint.
    /// </summary>
    Task<ListResultDto<EntityChangeDetailDto>> GetEntityChangesAsync(Guid auditLogId);

    /// <summary>
    /// Returns a single entity change (with property changes) by its id.
    /// </summary>
    Task<EntityChangeDetailDto> GetEntityChangeAsync(Guid entityChangeId);

    /// <summary>
    /// Returns aggregated statistics (totals, durations, top URLs, HTTP
    /// method distribution) over the audit logs matching
    /// <paramref name="input"/>. Mirrors ABP Commercial AuditLogging Pro's
    /// statistics endpoint.
    /// </summary>
    Task<AuditLogStatisticsDto> GetStatisticsAsync(GetAuditLogStatisticsInput input);
}
