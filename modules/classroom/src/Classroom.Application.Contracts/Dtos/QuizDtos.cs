using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace Classroom.Dtos;

public class QuizDto : EntityDto<Guid>
{
    public string Name { get; set; } = default!;

    public string? Description { get; set; }

    /// <summary>按 Order 排序的题目 Id 列表。</summary>
    public List<Guid> QuestionIds { get; set; } = new();

    public int QuestionCount => QuestionIds.Count;

    public DateTime CreationTime { get; set; }
}

public class CreateUpdateQuizDto
{
    [Required]
    [StringLength(ClassroomConsts.MaxQuizNameLength)]
    public string Name { get; set; } = default!;

    [StringLength(ClassroomConsts.MaxQuizDescriptionLength)]
    public string? Description { get; set; }

    /// <summary>题目 Id 的有序列表（顺序即试卷顺序，服务端重新编号）。</summary>
    [Required]
    public List<Guid> QuestionIds { get; set; } = new();
}

public class QuizGetListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
