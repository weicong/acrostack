using System;
using System.Collections.Generic;

namespace Classroom.Dtos;

/// <summary>
/// 学员/投屏可见的题目视图。绝不包含 CorrectAnswer 与 Explanation
/// （教师公布答案后通过独立字段下发）。
/// </summary>
public class QuestionViewDto
{
    public Guid QuestionId { get; set; }

    public Guid SessionQuestionId { get; set; }

    public QuestionType Type { get; set; }

    public string Stem { get; set; } = default!;

    public List<QuestionOptionDto> Options { get; set; } = new();

    public int Order { get; set; }
}

/// <summary>当前题的开放信息（学员端倒计时依据）。</summary>
public class OpenQuestionInfoDto
{
    public QuestionViewDto Question { get; set; } = default!;

    public DateTimeOffset OpenedAt { get; set; }

    /// <summary>服务端绝对截止时间；客户端倒计时 = EndsAt - ServerTime（含时钟偏移校正）。</summary>
    public DateTimeOffset? EndsAt { get; set; }

    public bool IsAcceptingAnswers { get; set; }

    public SessionQuestionStatus Status { get; set; }
}

/// <summary>教师视角的当前题（含正确答案与解析）。</summary>
public class TeacherQuestionInfoDto : OpenQuestionInfoDto
{
    public string? CorrectAnswer { get; set; }

    public string? Explanation { get; set; }

    public DateTimeOffset? ClosedAt { get; set; }

    public DateTimeOffset? StatisticsPublishedAt { get; set; }

    public DateTimeOffset? AnswerPublishedAt { get; set; }
}

/// <summary>学员快照（提示词九节：当前状态/当前题/EndsAt/本人提交状态/本人最终答案/公布标记/版本号）。</summary>
public class StudentSnapshotDto
{
    public Guid SessionId { get; set; }

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public DateTimeOffset ServerTime { get; set; }

    public OpenQuestionInfoDto? CurrentQuestion { get; set; }

    /// <summary>本人的最终答案（未提交为 null）。</summary>
    public MyAnswerDto? MyAnswer { get; set; }

    public bool StatisticsPublished { get; set; }

    public bool AnswerPublished { get; set; }

    /// <summary>仅 AnswerPublished 后下发。</summary>
    public string? CorrectAnswer { get; set; }

    public string? Explanation { get; set; }

    /// <summary>已公布统计时的匿名选项分布（学员也可见教师公布的统计）。</summary>
    public Dictionary<string, int>? PublishedOptionCounts { get; set; }
}

public class MyAnswerDto
{
    public string AnswerContent { get; set; } = default!;

    public DateTimeOffset SubmittedAt { get; set; }

    public int Revision { get; set; }

    /// <summary>仅公布答案后返回（客观题）。</summary>
    public bool? IsCorrect { get; set; }
}

/// <summary>教师快照：完整课堂状态 + 当前题 + 学员列表 + 当前统计 + 版本。</summary>
public class TeacherSnapshotDto
{
    public Guid SessionId { get; set; }

    public string ClassroomCode { get; set; } = default!;

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public DateTimeOffset ServerTime { get; set; }

    public int QuestionCount { get; set; }

    public int CurrentQuestionNumber { get; set; }

    public TeacherQuestionInfoDto? CurrentQuestion { get; set; }

    public DashboardDto Dashboard { get; set; } = default!;
}

/// <summary>
/// 学员答题记录条目（本课堂逐题回顾）。正确答案与解析仅在对应题目
/// AnswerPublished 后下发，与快照安全规则一致。
/// </summary>
public class StudentAnswerHistoryItemDto
{
    public int Order { get; set; }

    public QuestionType QuestionType { get; set; }

    public string Stem { get; set; } = default!;

    public List<QuestionOptionDto> Options { get; set; } = new();

    public SessionQuestionStatus QuestionStatus { get; set; }

    /// <summary>本人的最终答案；未提交为 null。</summary>
    public string? MyAnswerContent { get; set; }

    /// <summary>客观题判分结果；仅公布答案后非 null。主观题/未答为 null。</summary>
    public bool? MyIsCorrect { get; set; }

    public int MyRevision { get; set; }

    public DateTimeOffset? MyLastSubmittedAt { get; set; }

    /// <summary>仅 AnswerPublished 后下发。</summary>
    public string? CorrectAnswer { get; set; }

    /// <summary>仅 AnswerPublished 后下发。</summary>
    public string? Explanation { get; set; }
}

/// <summary>学员答题记录（本课堂全部题目，按 Order 排序）。</summary>
public class StudentAnswerHistoryDto
{
    public Guid SessionId { get; set; }

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public DateTimeOffset ServerTime { get; set; }

    public string Nickname { get; set; } = default!;

    public int QuestionCount { get; set; }

    public int AnsweredCount { get; set; }

    /// <summary>客观题答对数（仅统计已公布答案的题）。</summary>
    public int CorrectCount { get; set; }

    public List<StudentAnswerHistoryItemDto> Items { get; set; } = new();
}

/// <summary>
/// 投屏快照：仅匿名数据。禁止包含学员姓名、学号、ParticipantId、个人答案
/// （提示词五、六节）。
/// </summary>
public class PresentationSnapshotDto
{
    public Guid SessionId { get; set; }

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public DateTimeOffset ServerTime { get; set; }

    public int QuestionCount { get; set; }

    public int CurrentQuestionNumber { get; set; }

    public OpenQuestionInfoDto? CurrentQuestion { get; set; }

    /// <summary>已提交人数 / 参与总人数。</summary>
    public int SubmittedCount { get; set; }

    public int TotalParticipants { get; set; }

    /// <summary>教师公布统计后的匿名选项分布；未公布为 null。</summary>
    public Dictionary<string, int>? PublishedOptionCounts { get; set; }

    /// <summary>教师公布答案后下发。</summary>
    public string? CorrectAnswer { get; set; }

    public string? Explanation { get; set; }
}
