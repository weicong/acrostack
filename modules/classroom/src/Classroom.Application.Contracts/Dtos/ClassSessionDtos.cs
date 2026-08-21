using System;
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
