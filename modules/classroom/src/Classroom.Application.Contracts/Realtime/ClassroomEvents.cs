using System;
using System.Collections.Generic;
using Classroom.Dtos;

namespace Classroom.Realtime;

/// <summary>
/// SignalR 实时事件契约（提示词八节）。
/// 所有课堂级事件至少携带：SessionId、Version、ServerTime、EventId。
/// 事件在数据库事务提交成功后才推送（应用服务挂接 UoW OnCompleted）。
/// </summary>
public class ClassroomEventBase
{
    public Guid SessionId { get; set; }

    /// <summary>事件产生时的课堂版本号。客户端发现 Version 不连续时重新拉取快照。</summary>
    public int Version { get; set; }

    public DateTimeOffset ServerTime { get; set; }

    /// <summary>事件唯一 Id（Guid），用于客户端去重。</summary>
    public Guid EventId { get; set; }
}

public class ClassroomStartedEvent : ClassroomEventBase
{
}

public class ClassroomEndedEvent : ClassroomEventBase
{
}

/// <summary>
/// 开放题目事件（学员端收到后渲染当前题）。
/// 注意：Question 绝不包含 CorrectAnswer/Explanation（公布答案前不下发）。
/// </summary>
public class QuestionOpenedEvent : ClassroomEventBase
{
    public Guid SessionQuestionId { get; set; }

    public QuestionViewDto Question { get; set; } = default!;

    public DateTimeOffset OpenedAt { get; set; }

    public DateTimeOffset EndsAt { get; set; }
}

public class QuestionClosedEvent : ClassroomEventBase
{
    public Guid SessionQuestionId { get; set; }
}

/// <summary>公布匿名统计（学员端与投屏端展示选项分布）。</summary>
public class StatisticsPublishedEvent : ClassroomEventBase
{
    public Guid SessionQuestionId { get; set; }

    public Dictionary<string, int> OptionCounts { get; set; } = new();

    public int SubmittedCount { get; set; }

    public int TotalParticipants { get; set; }
}

/// <summary>公布正确答案与解析（此前绝不下发）。</summary>
public class AnswerPublishedEvent : ClassroomEventBase
{
    public Guid SessionQuestionId { get; set; }

    public string CorrectAnswer { get; set; } = default!;

    public string? Explanation { get; set; }
}

/// <summary>学员状态增量变化（仅教师组）：加入/离线/上线/提交状态。</summary>
public class ParticipantChangedEvent : ClassroomEventBase
{
    public Guid ParticipantId { get; set; }

    public string Nickname { get; set; } = default!;

    public OnlineStatus OnlineStatus { get; set; }

    public ParticipantAnswerState AnswerState { get; set; }

    public DateTimeOffset? SubmittedAt { get; set; }
}

/// <summary>驾驶舱统计更新（仅教师组；合并窗口内聚合推送）。</summary>
public class DashboardUpdatedEvent : ClassroomEventBase
{
    public DashboardDto Dashboard { get; set; } = default!;
}
