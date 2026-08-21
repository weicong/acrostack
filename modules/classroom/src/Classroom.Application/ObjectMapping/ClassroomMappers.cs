using System.Linq;
using Classroom.Dtos;

namespace Classroom;

/// <summary>
/// 实体到 DTO 的静态映射（手写而非 Mapperly：本模块映射大多带安全条件
/// ——学员/投屏视图必须剔除 CorrectAnswer/Explanation——显式映射更可控）。
/// </summary>
public static class ClassroomMappers
{
    /// <summary>题目到学员/投屏视图（绝不包含正确答案与解析）。</summary>
    public static QuestionViewDto ToQuestionView(this Question question, SessionQuestion sessionQuestion)
    {
        return new QuestionViewDto
        {
            QuestionId = question.Id,
            SessionQuestionId = sessionQuestion.Id,
            Type = question.Type,
            Stem = question.Stem,
            Options = question.Options
                .Select(o => new QuestionOptionDto { Key = o.Key, Text = o.Text })
                .ToList(),
            Order = sessionQuestion.Order,
        };
    }
}
