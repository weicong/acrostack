using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace Classroom.Dtos;

public class ClassSessionDto : EntityDto<Guid>
{
    public Guid QuizId { get; set; }

    public string QuizName { get; set; } = default!;

    public Guid TeacherId { get; set; }

    public string ClassroomCode { get; set; } = default!;

    /// <summary>可分享的加入地址（前端路由 /student/join?code=xxx）。</summary>
    public string JoinUrl { get; set; } = default!;

    public ClassSessionStatus Status { get; set; }

    public int Version { get; set; }

    public int QuestionCount { get; set; }

    public int CurrentQuestionNumber { get; set; }

    public DateTimeOffset? StartedAt { get; set; }

    public DateTimeOffset? FinishedAt { get; set; }

    public DateTime CreationTime { get; set; }
}

public class CreateClassSessionDto
{
    [Required]
    public Guid QuizId { get; set; }
}

public class OpenQuestionDto
{
    /// <summary>作答时长（秒）。</summary>
    [Range(10, 3600)]
    public int DurationSeconds { get; set; } = 60;
}

/// <summary>随机点名入参（服务端无状态：不重复点名由教师端传入本轮已点名单实现）。</summary>
public class PickRandomParticipantDto
{
    /// <summary>仅从在线学员中抽取（默认 true；现场点名应针对在场学员）。</summary>
    public bool OnlineOnly { get; set; } = true;

    /// <summary>本轮已点过的学员 Id（教师端维护；全员点完后前端自动清空开启新一轮）。</summary>
    public List<Guid> ExcludeParticipantIds { get; set; } = new();
}

/// <summary>随机点名结果（教师端展示；含学号，仅返回给教师）。</summary>
public class PickedParticipantDto
{
    public Guid ParticipantId { get; set; }

    public string Nickname { get; set; } = default!;

    public string? StudentNumber { get; set; }

    /// <summary>学习小组编号（1 起）。</summary>
    public int GroupIndex { get; set; }
}
