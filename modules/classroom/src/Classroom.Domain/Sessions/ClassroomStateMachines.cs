using System.Collections.Generic;
using Volo.Abp;

namespace Classroom;

/// <summary>
/// 课堂状态机（提示词第五节）。所有转换在领域层统一校验，非法转换抛 BusinessException。
/// 合法转换：
///   Preparing  -> Waiting       （开始课堂）
///   Waiting    -> Answering     （开放题目）
///   Answering  -> Explaining    （截止题目）
///   Explaining -> Answering     （开放下一题）
///   任意非 Finished -> Finished （结束课堂）
///   Finished   -> Preparing     （重新开始课堂）
/// </summary>
public static class ClassSessionStateMachine
{
    private static readonly Dictionary<ClassSessionStatus, HashSet<ClassSessionStatus>> Transitions = new()
    {
        [ClassSessionStatus.Preparing] = new() { ClassSessionStatus.Waiting, ClassSessionStatus.Finished },
        [ClassSessionStatus.Waiting] = new() { ClassSessionStatus.Answering, ClassSessionStatus.Finished },
        [ClassSessionStatus.Answering] = new() { ClassSessionStatus.Explaining, ClassSessionStatus.Finished },
        [ClassSessionStatus.Explaining] = new() { ClassSessionStatus.Answering, ClassSessionStatus.Finished },
        [ClassSessionStatus.Finished] = new() { ClassSessionStatus.Preparing },
    };

    public static bool CanTransition(ClassSessionStatus from, ClassSessionStatus to)
    {
        return Transitions.TryGetValue(from, out var targets) && targets.Contains(to);
    }

    /// <summary>校验并抛出结构化错误（错误码 + 当前/目标状态参数）。</summary>
    public static void EnsureTransition(ClassSession session, ClassSessionStatus to)
    {
        if (!CanTransition(session.Status, to))
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidStatusTransition)
                .WithData("From", session.Status.ToString())
                .WithData("To", to.ToString());
        }
    }
}

/// <summary>
/// 题目状态机。合法转换：
///   Pending -> Open
///   Open -> Closed
///   Closed -> AnswerPublished（公布答案时匿名统计一并可见）
/// </summary>
public static class SessionQuestionStateMachine
{
    private static readonly Dictionary<SessionQuestionStatus, HashSet<SessionQuestionStatus>> Transitions = new()
    {
        [SessionQuestionStatus.Pending] = new() { SessionQuestionStatus.Open },
        [SessionQuestionStatus.Open] = new() { SessionQuestionStatus.Closed },
        [SessionQuestionStatus.Closed] = new() { SessionQuestionStatus.AnswerPublished },
        [SessionQuestionStatus.AnswerPublished] = new(),
    };

    public static bool CanTransition(SessionQuestionStatus from, SessionQuestionStatus to)
    {
        return Transitions.TryGetValue(from, out var targets) && targets.Contains(to);
    }

    public static void EnsureTransition(SessionQuestion question, SessionQuestionStatus to)
    {
        if (!CanTransition(question.Status, to))
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidStatusTransition)
                .WithData("From", question.Status.ToString())
                .WithData("To", to.ToString());
        }
    }
}
