using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Options;
using Classroom.Realtime;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 课堂面板统计合并推送（提示词十一节）。
/// 每份答案提交后调用 ScheduleUpdate 标记"统计脏"；合并窗口
/// （ClassroomOptions.DashboardMergeWindowMs，默认 300ms）内的多次提交只触发一次
/// DashboardUpdated 推送，推送前从数据库重新计算完整课堂面板数据。
/// 单实例内存实现；多实例部署时替换为 Redis 合并窗口（接口已隔离）。
/// </summary>
public class ClassroomDashboardThrottler : IClassroomDashboardThrottler, ISingletonDependency
{
    private readonly ConcurrentDictionary<Guid, PendingFlush> _pending = new();
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly ClassroomOptions _options;
    private readonly ILogger<ClassroomDashboardThrottler> _logger;

    public ClassroomDashboardThrottler(
        IServiceScopeFactory scopeFactory,
        IOptions<ClassroomOptions> options,
        ILogger<ClassroomDashboardThrottler> logger)
    {
        _scopeFactory = scopeFactory;
        _options = options.Value;
        _logger = logger;
    }

    public void ScheduleUpdate(Guid sessionId, Guid? tenantId)
    {
        // 已有等待中的刷新则合并（窗口内多次提交 -> 一次推送）
        if (_pending.TryAdd(sessionId, new PendingFlush(tenantId)))
        {
            var delay = Math.Max(50, _options.DashboardMergeWindowMs);
            _ = FlushAfterDelayAsync(sessionId, TimeSpan.FromMilliseconds(delay));
        }
    }

    private async Task FlushAfterDelayAsync(Guid sessionId, TimeSpan delay)
    {
        try
        {
            await Task.Delay(delay);
            await FlushAsync(sessionId);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Dashboard flush loop failed for session {SessionId}.", sessionId);
            _pending.TryRemove(sessionId, out _);
        }
    }

    private async Task FlushAsync(Guid sessionId)
    {
        if (!_pending.TryRemove(sessionId, out var pending))
        {
            return;
        }

        try
        {
            using var scope = _scopeFactory.CreateScope();
            var statistics = scope.ServiceProvider.GetRequiredService<IClassroomStatisticsService>();
            var notifier = scope.ServiceProvider.GetRequiredService<IClassroomRealtimeNotifier>();

            // 每次推送都从数据库重新校准（正确性优先；SQLite 单机全量统计代价可忽略）
            DashboardDto dashboard;
            using (scope.ServiceProvider.GetRequiredService<ICurrentTenant>().Change(pending.TenantId))
            {
                dashboard = await statistics.GetDashboardAsync(sessionId, pending.TenantId);
            }

            var evt = new DashboardUpdatedEvent
            {
                SessionId = sessionId,
                Version = dashboard.Version,
                ServerTime = DateTimeOffset.UtcNow,
                EventId = Guid.NewGuid(),
                Dashboard = dashboard,
            };

            await notifier.NotifyTeachersAsync(sessionId, pending.TenantId, evt);
        }
        catch (Exception ex)
        {
            // 合并推送失败不重试：教师端可通过快照接口手动/重连校准
            _logger.LogWarning(ex, "Failed to push DashboardUpdated for session {SessionId}.", sessionId);
        }
    }

    private sealed record PendingFlush(Guid? TenantId);
}
