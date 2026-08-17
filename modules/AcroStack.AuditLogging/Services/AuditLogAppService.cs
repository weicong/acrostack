using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MiniExcelLibs;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.AuditLogging;
using Volo.Abp.Content;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace AcroStack.AuditLogging;

[Authorize(AuditLoggingPermissions.Default)]
public class AuditLogAppService : AcroStackAppService, IAuditLogAppService
{
    private readonly IRepository<AuditLog, Guid> _auditLogRepository;
    private readonly IRepository<EntityChange, Guid> _entityChangeRepository;
    private readonly AuditLogOptions _auditLogOptions;

    public AuditLogAppService(
        IRepository<AuditLog, Guid> auditLogRepository,
        IRepository<EntityChange, Guid> entityChangeRepository,
        IOptions<AuditLogOptions> auditLogOptions)
    {
        _auditLogRepository = auditLogRepository;
        _entityChangeRepository = entityChangeRepository;
        _auditLogOptions = auditLogOptions.Value;
    }

    public async Task<AuditLogDto> GetAsync(Guid id)
    {
        var auditLog = await _auditLogRepository.GetAsync(id);
        return MapToDto(auditLog);
    }

    public async Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListInput input)
    {
        var queryable = ApplyFilters(await _auditLogRepository.GetQueryableAsync(), input);

        // When IsHostOnly=false and a tenant user is calling, restrict the
        // query to that tenant's logs. ABP's IMultiTenant query filter would
        // already scope the queryable for tenant users, but make the
        // intent explicit so the behavior is readable at the call site.
        if (!_auditLogOptions.IsHostOnly && CurrentTenant.Id.HasValue)
        {
            var tenantId = CurrentTenant.Id.Value;
            queryable = queryable.Where(x => x.TenantId == tenantId);
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        // Honor the caller's Sorting (e.g. "executionTime desc", "userName",
        // "httpStatusCode"). Default to newest-first when not specified.
        var sorting = input.Sorting.IsNullOrWhiteSpace()
            ? nameof(AuditLog.ExecutionTime) + " desc"
            : input.Sorting;

        var query = queryable
            .OrderBy(sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var auditLogs = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<AuditLogDto>(
            totalCount,
            auditLogs.Select(MapToDto).ToList()
        );
    }

    [Authorize(AuditLoggingPermissions.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _auditLogRepository.DeleteAsync(id);
    }

    [Authorize(AuditLoggingPermissions.Delete)]
    public async Task DeleteManyAsync(List<Guid> ids)
    {
        await _auditLogRepository.DeleteManyAsync(ids);
    }

    public async Task<IRemoteStreamContent> GetListToExcelAsync(GetAuditLogListInput input)
    {
        var queryable = ApplyFilters(await _auditLogRepository.GetQueryableAsync(), input)
            .OrderBy(nameof(AuditLog.ExecutionTime) + " desc");

        var auditLogs = await AsyncExecuter.ToListAsync(queryable);

        // Project to a flat, Excel-friendly shape. Field names become column
        // headers, matching the ABP Commercial AuditLogging export layout.
        var rows = auditLogs.Select(a => new
        {
            ExecutionTime = a.ExecutionTime,
            UserName = a.UserName,
            TenantName = a.TenantName,
            HttpMethod = a.HttpMethod,
            Url = a.Url,
            HttpStatusCode = a.HttpStatusCode,
            ExecutionDuration = a.ExecutionDuration,
            ClientIpAddress = a.ClientIpAddress,
            ClientName = a.ClientName,
            BrowserInfo = a.BrowserInfo,
            CorrelationId = a.CorrelationId,
            Comments = a.Comments,
            Exceptions = a.Exceptions
        }).ToList();

        var stream = new MemoryStream();
        await MiniExcel.SaveAsAsync(stream, rows);
        stream.Position = 0;

        var fileName = $"audit-logs-{DateTime.Now:yyyyMMddHHmmss}.xlsx";
        return new RemoteStreamContent(stream, fileName,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }

    [Authorize(AuditLoggingPermissions.ViewEntityChanges)]
    public async Task<ListResultDto<EntityChangeDetailDto>> GetEntityChangesAsync(Guid auditLogId)
    {
        var queryable = await _auditLogRepository.GetQueryableAsync();

        // Eager-load EntityChanges together with their PropertyChanges so the
        // detail view shows the full property-level diff in a single round
        // trip (AuditLog navigation properties are not lazy-loaded).
        var auditLog = await AsyncExecuter.FirstOrDefaultAsync(
            queryable
                .Include(x => x.EntityChanges)
                    .ThenInclude(ec => ec.PropertyChanges)
                .Where(x => x.Id == auditLogId));

        if (auditLog == null)
        {
            throw new EntityNotFoundException(typeof(AuditLog), auditLogId);
        }

        return new ListResultDto<EntityChangeDetailDto>(
            auditLog.EntityChanges
                .OrderBy(ec => ec.ChangeTime)
                .Select(MapToEntityChangeDetailDto)
                .ToList());
    }

    [Authorize(AuditLoggingPermissions.ViewEntityChanges)]
    public async Task<EntityChangeDetailDto> GetEntityChangeAsync(Guid entityChangeId)
    {
        var queryable = await _entityChangeRepository.GetQueryableAsync();

        var entityChange = await AsyncExecuter.FirstOrDefaultAsync(
            queryable
                .Include(ec => ec.PropertyChanges)
                .Where(ec => ec.Id == entityChangeId));

        if (entityChange == null)
        {
            throw new EntityNotFoundException(typeof(EntityChange), entityChangeId);
        }

        return MapToEntityChangeDetailDto(entityChange);
    }

    [Authorize(AuditLoggingPermissions.ViewStatistics)]
    public async Task<AuditLogStatisticsDto> GetStatisticsAsync(GetAuditLogStatisticsInput input)
    {
        var queryable = await _auditLogRepository.GetQueryableAsync();

        if (input.StartTime.HasValue)
        {
            queryable = queryable.Where(x => x.ExecutionTime >= input.StartTime.Value);
        }

        if (input.EndTime.HasValue)
        {
            queryable = queryable.Where(x => x.ExecutionTime <= input.EndTime.Value);
        }

        // Apply the same tenant scoping rule as GetListAsync so a tenant
        // admin (when IsHostOnly=false) only sees statistics for their own
        // tenant's traffic.
        if (!_auditLogOptions.IsHostOnly && CurrentTenant.Id.HasValue)
        {
            var tenantId = CurrentTenant.Id.Value;
            queryable = queryable.Where(x => x.TenantId == tenantId);
        }

        var topCount = input.TopCount > 0 ? input.TopCount : 10;

        var totalRequestCount = await AsyncExecuter.CountAsync(queryable);

        var errorCount = await AsyncExecuter.CountAsync(
            queryable.Where(x => x.Exceptions != null && x.Exceptions != ""));

        // GroupBy on a constant key lets EF Core translate the entire
        // aggregate (Avg/Max/Min) into a single SQL query. Returns null when
        // there are no rows in the filtered set.
        var durationStats = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.GroupBy(x => 1)
                .Select(g => new
                {
                    Average = g.Average(x => x.ExecutionDuration),
                    Max = g.Max(x => x.ExecutionDuration),
                    Min = g.Min(x => x.ExecutionDuration)
                }));

        var topSlowUrls = await AsyncExecuter.ToListAsync(
            queryable
                .Where(x => x.Url != null)
                .GroupBy(x => x.Url)
                .Select(g => new UrlStatisticDto
                {
                    Url = g.Key,
                    Count = g.Count(),
                    AverageExecutionDuration = g.Average(x => x.ExecutionDuration),
                    MaxExecutionDuration = g.Max(x => x.ExecutionDuration)
                })
                .OrderByDescending(x => x.AverageExecutionDuration)
                .Take(topCount));

        var topFrequentUrls = await AsyncExecuter.ToListAsync(
            queryable
                .Where(x => x.Url != null)
                .GroupBy(x => x.Url)
                .Select(g => new UrlStatisticDto
                {
                    Url = g.Key,
                    Count = g.Count(),
                    AverageExecutionDuration = g.Average(x => x.ExecutionDuration),
                    MaxExecutionDuration = g.Max(x => x.ExecutionDuration)
                })
                .OrderByDescending(x => x.Count)
                .Take(topCount));

        var methodCounts = await AsyncExecuter.ToListAsync(
            queryable
                .Where(x => x.HttpMethod != null)
                .GroupBy(x => x.HttpMethod)
                .Select(g => new { Method = g.Key, Count = g.Count() }));

        return new AuditLogStatisticsDto
        {
            TotalRequestCount = totalRequestCount,
            AverageExecutionDuration = durationStats?.Average ?? 0,
            MaxExecutionDuration = durationStats?.Max ?? 0,
            MinExecutionDuration = durationStats?.Min ?? 0,
            ErrorCount = errorCount,
            TopSlowUrls = topSlowUrls,
            TopFrequentUrls = topFrequentUrls,
            HttpRequestMethodCounts = methodCounts
                .Where(x => x.Method != null)
                .ToDictionary(x => x.Method!, x => x.Count)
        };
    }

    private static IQueryable<AuditLog> ApplyFilters(IQueryable<AuditLog> queryable, GetAuditLogListInput input)
    {
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

        return queryable;
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

    private static EntityChangeDetailDto MapToEntityChangeDetailDto(EntityChange entityChange)
    {
        return new EntityChangeDetailDto
        {
            Id = entityChange.Id,
            AuditLogId = entityChange.AuditLogId,
            EntityTypeFullName = entityChange.EntityTypeFullName,
            EntityId = entityChange.EntityId,
            ChangeType = (int)entityChange.ChangeType,
            ChangeTime = entityChange.ChangeTime,
            TenantId = entityChange.TenantId,
            PropertyChanges = entityChange.PropertyChanges
                .OrderBy(fc => fc.PropertyName)
                .Select(fc => new EntityChangeFieldDto
                {
                    Id = fc.Id,
                    EntityChangeId = fc.EntityChangeId,
                    PropertyName = fc.PropertyName,
                    OriginalValue = fc.OriginalValue,
                    NewValue = fc.NewValue,
                    PropertyTypeFullName = fc.PropertyTypeFullName,
                }).ToList(),
        };
    }
}
