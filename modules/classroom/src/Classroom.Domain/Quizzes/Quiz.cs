using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>试卷聚合根。题目顺序由 QuizQuestion.Order 决定。</summary>
public class Quiz : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public string Name { get; private set; } = default!;

    public string? Description { get; private set; }

    public List<QuizQuestion> Questions { get; private set; } = new();

    private Quiz()
    {
    }

    public Quiz(Guid id, string name, string? description, Guid? tenantId = null) : base(id)
    {
        TenantId = tenantId;
        Name = name;
        Description = description;
    }

    /// <summary>整体替换题目列表与顺序（Order 从 1 开始连续编号）。</summary>
    public void SetQuestions(List<QuizQuestion> questions)
    {
        Questions = questions;
        for (var i = 0; i < Questions.Count; i++)
        {
            Questions[i].SetOrder(i + 1);
        }
    }
}

/// <summary>试卷-题目关联（Quiz 聚合子实体）。</summary>
public class QuizQuestion : Entity<Guid>
{
    public Guid QuestionId { get; private set; }

    /// <summary>题目在试卷中的顺序（1 起）。</summary>
    public int Order { get; private set; }

    private QuizQuestion()
    {
    }

    public QuizQuestion(Guid id, Guid questionId, int order)
    {
        Id = id;
        QuestionId = questionId;
        Order = order;
    }

    internal void SetOrder(int order)
    {
        Order = order;
    }
}
