using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.AuditLogging;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.AuditLogging;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.AuditLogging;

[Authorize(AcroStackPermissions.AuditLogging.Default)]
public class AuditLogAppService : ApplicationService, IAuditLogAppService
{
    private readonly IRepository<AuditLog, Guid> _auditLogRepository;

    public AuditLogAppService(IRepository<AuditLog, Guid> auditLogRepository)
    {
        _auditLogRepository = auditLogRepository;
    }

    public async Task<AuditLogDto> GetAsync(Guid id)
    {
        var auditLog = await _auditLogRepository.GetAsync(id);
        return MapToDto(auditLog);
    }

    public async Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListInput input)
    {
        var queryable = await _auditLogRepository.GetQueryableAsync();

        if (input.UserId.HasValue)
        {
            queryable = queryable.Where(x => x.UserId == input.UserId.Value);
        }

        if (!input.HttpMethod.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.HttpMethod == input.HttpMethod);
        }

        if (!input.Url.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Url != null && x.Url.Contains(input.Url));
        }

        if (input.StartTime.HasValue)
        {
            queryable = queryable.Where(x => x.ExecutionTime >= input.StartTime.Value);
        }

        if (input.EndTime.HasValue)
        {
            queryable = queryable.Where(x => x.ExecutionTime <= input.EndTime.Value);
        }

        if (input.HasException == true)
        {
            queryable = queryable.Where(x => x.Exceptions != null && x.Exceptions != "");
        }

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x =>
                (x.Url != null && x.Url.Contains(input.Filter)) ||
                (x.UserName != null && x.UserName.Contains(input.Filter)) ||
                (x.ClientIpAddress != null && x.ClientIpAddress.Contains(input.Filter)) ||
                (x.Exceptions != null && x.Exceptions.Contains(input.Filter)));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderByDescending(x => x.ExecutionTime)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var auditLogs = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<AuditLogDto>(
            totalCount,
            auditLogs.Select(MapToDto).ToList()
        );
    }

    private AuditLogDto MapToDto(AuditLog auditLog)
    {
        return new AuditLogDto
        {
            Id = auditLog.Id,
            UserId = auditLog.UserId,
            UserName = auditLog.UserName,
            TenantId = auditLog.TenantId,
            TenantName = auditLog.TenantName,
            HttpMethod = auditLog.HttpMethod,
            Url = auditLog.Url,
            HttpStatusCode = auditLog.HttpStatusCode,
            ExecutionTime = auditLog.ExecutionTime,
            ExecutionDuration = auditLog.ExecutionDuration,
            ClientIpAddress = auditLog.ClientIpAddress,
            ClientName = auditLog.ClientName,
            BrowserInfo = auditLog.BrowserInfo,
            Exceptions = auditLog.Exceptions,
            Comments = auditLog.Comments,
            CorrelationId = auditLog.CorrelationId,
            EntityChanges = auditLog.EntityChanges.Select(ec => new EntityChangeDto
            {
                Id = ec.Id,
                AuditLogId = ec.AuditLogId,
                EntityTypeFullName = ec.EntityTypeFullName,
                EntityId = ec.EntityId,
                ChangeType = (int)ec.ChangeType,
                ChangeTime = ec.ChangeTime,
                TenantId = ec.TenantId,
                PropertyChanges = ec.PropertyChanges.Select(fc => new EntityChangeFieldDto
                {
                    Id = fc.Id,
                    EntityChangeId = fc.EntityChangeId,
                    PropertyName = fc.PropertyName,
                    OriginalValue = fc.OriginalValue,
                    NewValue = fc.NewValue,
                    PropertyTypeFullName = fc.PropertyTypeFullName,
                }).ToList(),
            }).ToList(),
            Actions = auditLog.Actions.Select(a => new AuditLogActionDto
            {
                Id = a.Id,
                AuditLogId = a.AuditLogId,
                ServiceName = a.ServiceName,
                MethodName = a.MethodName,
                Parameters = a.Parameters,
                ExecutionTime = a.ExecutionTime,
                ExecutionDuration = a.ExecutionDuration,
                TenantId = a.TenantId,
            }).ToList(),
        };
    }
}
