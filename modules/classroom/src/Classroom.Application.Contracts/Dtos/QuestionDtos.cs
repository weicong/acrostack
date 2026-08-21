using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace Classroom.Dtos;

/// <summary>题目 DTO。CorrectAnswer/Explanation 仅返回给具有题库管理权限的教师。</summary>
public class QuestionDto : EntityDto<Guid>
{
    public QuestionType Type { get; set; }

    public string Stem { get; set; } = default!;

    public List<QuestionOptionDto> Options { get; set; } = new();

    public string? CorrectAnswer { get; set; }

    public string? Explanation { get; set; }

    public DateTime CreationTime { get; set; }
}

public class QuestionOptionDto
{
    public string Key { get; set; } = default!;

    public string Text { get; set; } = default!;
}

public class CreateUpdateQuestionDto
{
    [Required]
    public QuestionType Type { get; set; }

    [Required]
    [StringLength(ClassroomConsts.MaxStemLength)]
    public string Stem { get; set; } = default!;

    [Required]
    public List<QuestionOptionDto> Options { get; set; } = new();

    /// <summary>客观题必填；简答题忽略。</summary>
    [StringLength(128)]
    public string? CorrectAnswer { get; set; }

    [StringLength(ClassroomConsts.MaxExplanationLength)]
    public string? Explanation { get; set; }
}

public class QuestionGetListInput : PagedAndSortedResultRequestDto
{
    public QuestionType? Type { get; set; }

    public string? Filter { get; set; }
}
