using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.AuditLogging;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.AuditLogging;

public interface IAuditLogAppService : IApplicationService
{
    Task<AuditLogDto> GetAsync(Guid id);
    Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListInput input);
}
