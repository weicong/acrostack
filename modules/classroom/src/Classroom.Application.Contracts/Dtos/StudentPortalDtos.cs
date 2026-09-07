using System;
using System.ComponentModel.DataAnnotations;

namespace Classroom.Dtos;

/// <summary>学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。</summary>
public class StudentProfileDto
{
    public Guid Id { get; set; }

    public string Name { get; set; } = default!;

    public string Phone { get; set; } = default!;

    public string Unit { get; set; } = default!;

    public string Position { get; set; } = default!;
}

/// <summary>更新本人资料。手机号为身份锚点，不可修改。</summary>
public class UpdateStudentProfileInputDto
{
    [Required]
    [StringLength(ClassroomConsts.MaxStudentNameLength)]
    public string Name { get; set; } = default!;

    [Required]
    [StringLength(ClassroomConsts.MaxUnitLength)]
    public string Unit { get; set; } = default!;

    [Required]
    [StringLength(ClassroomConsts.MaxPositionLength)]
    public string Position { get; set; } = default!;
}

/// <summary>我的课堂列表项（按加入的课堂聚合；进行中的排前）。</summary>
public class MyClassroomItemDto
{
    public Guid SessionId { get; set; }

    /// <summary>课堂使用的试卷名（作为课堂标题展示）。</summary>
    public string QuizTitle { get; set; } = default!;

    public ClassSessionStatus Status { get; set; }

    public int GroupIndex { get; set; }

    public DateTimeOffset JoinedAt { get; set; }

    public DateTimeOffset? FinishedAt { get; set; }

    /// <summary>课堂题目总数（老师配置的题目；未开放也计入）。</summary>
    public int QuestionCount { get; set; }

    /// <summary>本人已提交答案的题目数。</summary>
    public int AnsweredCount { get; set; }
}

/// <summary>从门户进入课堂：校验会员关系后签发课堂范围短期令牌。</summary>
public class ResumeClassroomResultDto
{
    public Guid SessionId { get; set; }

    public Guid ParticipantId { get; set; }

    /// <summary>课堂范围短期 JWT（学员角色），用于快照/提交/SignalR。</summary>
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }

    public string Nickname { get; set; } = default!;

    public int GroupIndex { get; set; }

    public ClassSessionStatus SessionStatus { get; set; }
}
