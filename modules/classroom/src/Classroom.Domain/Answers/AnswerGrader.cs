using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;

namespace Classroom;

/// <summary>
/// 客观题判分与答案格式校验（纯函数，领域层无副作用）。
/// 答案编码约定与 <see cref="Question.CorrectAnswer"/> 一致：
///   单选 "A"；多选 "A,C"（无序集合比较）；判断 "true"/"false"；简答任意文本（不判分）。
/// </summary>
public static class AnswerGrader
{
    /// <summary>
    /// 校验答案格式是否符合题型。不符合抛 InvalidAnswerFormat。
    /// </summary>
    public static void ValidateAnswer(Question question, string answerContent)
    {
        switch (question.Type)
        {
            case QuestionType.SingleChoice:
            case QuestionType.MultipleChoice:
                var keys = ParseKeys(answerContent);
                if (keys.Count == 0)
                {
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
                }

                if (question.Type == QuestionType.SingleChoice && keys.Count > 1)
                {
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
                }

                var validKeys = question.Options.Select(o => o.Key).ToHashSet(StringComparer.OrdinalIgnoreCase);
                if (keys.Any(k => !validKeys.Contains(k)))
                {
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
                }

                break;

            case QuestionType.TrueOrFalse:
                if (answerContent is not ("true" or "false"))
                {
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
                }

                break;

            case QuestionType.ShortAnswer:
                if (string.IsNullOrWhiteSpace(answerContent))
                {
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
                }

                break;

            default:
                throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat);
        }
    }

    /// <summary>
    /// 判分：客观题返回对/错，主观题返回 null。多选答案顺序不影响判定。
    /// </summary>
    public static bool? Grade(QuestionType type, string? correctAnswer, string submittedAnswer)
    {
        switch (type)
        {
            case QuestionType.SingleChoice:
                return string.Equals(correctAnswer?.Trim(), submittedAnswer.Trim(), StringComparison.OrdinalIgnoreCase);

            case QuestionType.MultipleChoice:
                // 集合无序比较：拆分、去重、排序后逐项比对
                var expected = ParseKeys(correctAnswer ?? string.Empty).OrderBy(k => k, StringComparer.OrdinalIgnoreCase).ToList();
                var actual = ParseKeys(submittedAnswer).OrderBy(k => k, StringComparer.OrdinalIgnoreCase).ToList();
                return expected.Count == actual.Count && !expected.Except(actual, StringComparer.OrdinalIgnoreCase).Any();

            case QuestionType.TrueOrFalse:
                return string.Equals(correctAnswer?.Trim(), submittedAnswer.Trim(), StringComparison.OrdinalIgnoreCase);

            case QuestionType.ShortAnswer:
                return null; // 主观题不自动判分

            default:
                return null;
        }
    }

    /// <summary>解析 "A,C" 形式的选项键集合（去空格、去空项、去重）。</summary>
    private static List<string> ParseKeys(string content)
    {
        return content
            .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
    }
}
