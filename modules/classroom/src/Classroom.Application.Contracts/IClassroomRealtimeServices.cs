using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Realtime;

namespace Classroom;

/// <summary>
/// SignalR 推送端口。应用层在 UoW 提交成功后调用（数据库事务提交成功前不得广播）。
/// 实现位于 HttpApi 层（依赖 IHubContext）。tenantId 用于组名隔离（多租户）。
/// </summary>
public interface IClassroomRealtimeNotifier
{
    /// <summary>向教师 + 学员 + 投屏三组广播课堂级事件（开题/截止/公布/开始/结束）。</summary>
    Task BroadcastAsync(Guid sessionId, Guid? tenantId, params ClassroomEventBase[] events);

    /// <summary>仅向教师组推送（ParticipantChanged / DashboardUpdated）。</summary>
    Task NotifyTeachersAsync(Guid sessionId, Guid? tenantId, params ClassroomEventBase[] events);
}

/// <summary>
/// 驾驶舱统计合并推送：提交答案后仅标记课堂"统计脏"，
/// 合并窗口（约 ClassroomConsts.DashboardMergeWindowMs）内聚合一次 DashboardUpdated。
/// </summary>
public interface IClassroomDashboardThrottler
{
    /// <summary>调度一次课堂统计刷新（合并窗口内多次调用只推送一次）。</summary>
    void ScheduleUpdate(Guid sessionId, Guid? tenantId);
}

/// <summary>学员在线状态追踪（允许短暂误差；答案提交状态以数据库为准）。</summary>
public interface IClassroomOnlineTracker
{
    Task SetOnlineAsync(Guid sessionId, Guid participantId, Guid? tenantId);

    Task SetOfflineAsync(Guid sessionId, Guid participantId, Guid? tenantId);

    Task MarkSeenAsync(Guid sessionId, Guid participantId, Guid? tenantId);

    /// <summary>当前课堂在线人数。</summary>
    Task<int> GetOnlineCountAsync(Guid sessionId, Guid? tenantId);

    Task<bool> IsOnlineAsync(Guid sessionId, Guid participantId, Guid? tenantId);
}

/// <summary>
/// 课堂统计服务：Redis/缓存轻量计数优先，关键节点从数据库重新校准
/// （提示词十一节：每份答案立即写库 + 更新缓存计数 + 合并推送）。
/// </summary>
public interface IClassroomStatisticsService
{
    /// <summary>当前题统计（缓存优先；无当前题返回 null）。</summary>
    Task<QuestionStatisticsDto?> GetStatisticsAsync(Guid sessionId, Guid? tenantId);

    /// <summary>教师驾驶舱完整数据（含学员列表）。</summary>
    Task<DashboardDto> GetDashboardAsync(Guid sessionId, Guid? tenantId);

    /// <summary>答案提交后递增轻量计数（缓存）。</summary>
    Task OnAnswerSubmittedAsync(Guid sessionId, Guid sessionQuestionId, Guid participantId, Guid? tenantId);

    /// <summary>从数据库重建统计缓存（公布统计等关键节点调用）。</summary>
    Task<QuestionStatisticsDto> RecalibrateAsync(Guid sessionId, Guid sessionQuestionId, Guid? tenantId);
}
