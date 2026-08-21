using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 题目聚合根。教师题库中的题，可被多份试卷引用。
/// CorrectAnswer 编码约定：单选 "A"；多选 "A,C"（逗号分隔，顺序无关）；判断 "true"/"false"；简答 null（不判分）。
/// </summary>
public class Question : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public QuestionType Type { get; private set; }

    public string Stem { get; private set; } = default!;

    public List<QuestionOption> Options { get; private set; } = new();

    /// <summary>客观题正确答案；主观题为 null。</summary>
    public string? CorrectAnswer { get; private set; }

    public string? Explanation { get; private set; }

    private Question()
    {
    }

    public Question(
        Guid id,
        QuestionType type,
        string stem,
        List<QuestionOption> options,
        string? correctAnswer,
        string? explanation,
        Guid? tenantId = null)
        : base(id)
    {
        TenantId = tenantId;
        SetContent(type, stem, options, correctAnswer, explanation);
    }

    public void SetContent(
        QuestionType type,
        string stem,
        List<QuestionOption> options,
        string? correctAnswer,
        string? explanation)
    {
        if (type == QuestionType.SingleChoice && options.Count < 2)
        {
            throw new ArgumentException("Single choice questions require at least 2 options.", nameof(options));
        }

        Type = type;
        Stem = stem;
        Options = options;
        CorrectAnswer = type == QuestionType.ShortAnswer ? null : correctAnswer;
        Explanation = explanation;
    }
}
