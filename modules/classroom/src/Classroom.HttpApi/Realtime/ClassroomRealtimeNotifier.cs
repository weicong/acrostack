using System;
using System.Threading.Tasks;
using Classroom.Realtime;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;

namespace Classroom;

/// <summary>
/// SignalR 推送实现（提示词七/八节）。
/// - 课堂级事件广播到教师/学员/投屏三组（组名含租户 Id）；
/// - ParticipantChanged / DashboardUpdated 仅推教师组；
/// - 投屏组只接收匿名数据（StatisticsPublishedEvent 不含个人身份，AnswerPublished 为正确答案）。
/// 推送失败仅记录日志：客户端依据快照接口自愈（SignalR 不是最终状态来源）。
/// </summary>
public class ClassroomRealtimeNotifier : IClassroomRealtimeNotifier, ITransientDependency
{
    private readonly IHubContext<ClassroomHub, IClassroomClient> _hubContext;
    private readonly ILogger<ClassroomRealtimeNotifier> _logger;

    public ClassroomRealtimeNotifier(
        IHubContext<ClassroomHub, IClassroomClient> hubContext,
        ILogger<ClassroomRealtimeNotifier> logger)
    {
        _hubContext = hubContext;
        _logger = logger;
    }

    public Task BroadcastAsync(Guid sessionId, Guid? tenantId, params ClassroomEventBase[] events)
    {
        return SendAsync(sessionId, tenantId, events, teachersOnly: false);
    }

    public Task NotifyTeachersAsync(Guid sessionId, Guid? tenantId, params ClassroomEventBase[] events)
    {
        return SendAsync(sessionId, tenantId, events, teachersOnly: true);
    }

    private async Task SendAsync(Guid sessionId, Guid? tenantId, ClassroomEventBase[] events, bool teachersOnly)
    {
        foreach (var evt in events)
        {
            try
            {
                if (teachersOnly)
                {
                    await SendToGroupAsync(
                        ClassroomHub.TeacherGroupName(tenantId, sessionId), evt);
                }
                else
                {
                    // 三组依次推送（学员/投屏与教师收到相同事件契约）
                    await SendToGroupAsync(ClassroomHub.TeacherGroupName(tenantId, sessionId), evt);
                    await SendToGroupAsync(ClassroomHub.StudentGroupName(tenantId, sessionId), evt);
                    await SendToGroupAsync(ClassroomHub.PresentationGroupName(tenantId, sessionId), evt);
                }
            }
            catch (Exception ex)
            {
                _logger.LogWarning(
                    ex, "Failed to broadcast classroom event {EventType} for session {SessionId}.",
                    evt.GetType().Name, sessionId);
            }
        }
    }

    private Task SendToGroupAsync(string groupName, ClassroomEventBase evt) => evt switch
    {
        ClassroomStartedEvent e => _hubContext.Clients.Group(groupName).ClassroomStarted(e),
        ClassroomEndedEvent e => _hubContext.Clients.Group(groupName).ClassroomEnded(e),
        QuestionOpenedEvent e => _hubContext.Clients.Group(groupName).QuestionOpened(e),
        QuestionClosedEvent e => _hubContext.Clients.Group(groupName).QuestionClosed(e),
        StatisticsPublishedEvent e => _hubContext.Clients.Group(groupName).StatisticsPublished(e),
        AnswerPublishedEvent e => _hubContext.Clients.Group(groupName).AnswerPublished(e),
        ParticipantChangedEvent e => _hubContext.Clients.Group(groupName).ParticipantChanged(e),
        DashboardUpdatedEvent e => _hubContext.Clients.Group(groupName).DashboardUpdated(e),
        ParticipantPickedEvent e => _hubContext.Clients.Group(groupName).ParticipantPicked(e),
        _ => Task.CompletedTask,
    };
}
