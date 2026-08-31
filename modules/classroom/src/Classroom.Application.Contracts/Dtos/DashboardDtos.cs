using System;
using System.Collections.Generic;

namespace Classroom.Dtos;

/// <summary>学员个人作答状态（教师课堂面板展示）。</summary>
public enum ParticipantAnswerState
{
    /// <summary>未开始作答。</summary>
    NotStarted = 0,

    /// <summary>已加入但未提交（无法区分"正在想"与"发呆"，展示为作答中）。</summary>
    Answering = 1,

    /// <summary>已提交（含多次修订后的最终版本）。</summary>
    Submitted = 2
}

/// <summary>教师课堂面板的学员条目（含个人状态；教师专用，绝不下发给学员/投屏端）。</summary>
public class ParticipantStateDto
{
    public Guid ParticipantId { get; set; }

    public string Nickname { get; set; } = default!;

    public string? StudentNumber { get; set; }

    /// <summary>学习小组编号（1 起）。</summary>
    public int GroupIndex { get; set; }

    public OnlineStatus OnlineStatus { get; set; }

    public DateTimeOffset LastSeenAt { get; set; }

    public ParticipantAnswerState AnswerState { get; set; }

    public DateTimeOffset? SubmittedAt { get; set; }

    public int? Revision { get; set; }

    /// <summary>客观题判分（公布答案前后均对教师可见）。</summary>
    public bool? IsCorrect { get; set; }
}

/// <summary>学习小组统计（教师课堂面板；按加入顺序自动分组，每组默认 5 人）。</summary>
public class GroupStatisticsDto
{
    /// <summary>小组编号（1 起）。</summary>
    public int GroupIndex { get; set; }

    /// <summary>组内人数。</summary>
    public int MemberCount { get; set; }

    /// <summary>组内在线人数。</summary>
    public int OnlineCount { get; set; }

    /// <summary>当前题已提交人数。</summary>
    public int SubmittedCount { get; set; }

    /// <summary>当前题组内正确率（0~1，已判分口径：正确数/已判分数；无人判分为 null）。</summary>
    public double? CorrectRate { get; set; }
}

/// <summary>当前题统计（教师课堂面板 + 投屏端匿名数据）。</summary>
public class QuestionStatisticsDto
{
    public Guid SessionQuestionId { get; set; }

    /// <summary>参与总人数。</summary>
    public int TotalParticipants { get; set; }

    /// <summary>已提交人数。</summary>
    public int SubmittedCount { get; set; }

    /// <summary>未开始人数。</summary>
    public int NotStartedCount { get; set; }

    /// <summary>作答中（已加入未提交）人数。</summary>
    public int AnsweringCount { get; set; }

    /// <summary>完成率 = SubmittedCount / TotalParticipants（总人数为 0 时为 0）。</summary>
    public double CompletionRate { get; set; }

    /// <summary>各选项人数（客观题选项键 -> 人数；主观题为空）。</summary>
    public Dictionary<string, int> OptionCounts { get; set; } = new();

    /// <summary>客观题正确率（0~1；无判分数据为 null）。</summary>
    public double? CorrectRate { get; set; }

    /// <summary>平均答题用时（秒，从开题到最终提交）。</summary>
    public double AverageAnswerSeconds { get; set; }
}

/// <summary>教师课堂面板数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。</summary>
public class DashboardDto
{
    public Guid SessionId { get; set; }

    public string ClassroomCode { get; set; } = default!;

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public int CurrentQuestionNumber { get; set; }

    public Guid? CurrentSessionQuestionId { get; set; }

    public int OnlineCount { get; set; }

    public int TotalParticipants { get; set; }

    public QuestionStatisticsDto? Statistics { get; set; }

    public List<ParticipantStateDto> Participants { get; set; } = new();

    /// <summary>学习小组统计（按组聚合当前题的提交与正确率）。</summary>
    public List<GroupStatisticsDto> GroupStatistics { get; set; } = new();

    public DateTimeOffset LastStatisticsUpdatedAt { get; set; }

    public DateTimeOffset ServerTime { get; set; }
}
