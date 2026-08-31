namespace Classroom;

/// <summary>
/// 课堂题目状态机：
/// Pending -> Open（开放）
/// Open -> Closed（截止）
/// Closed -> AnswerPublished（公布答案；匿名统计随答案一并可见）
/// </summary>
public enum SessionQuestionStatus
{
    Pending = 0,
    Open = 10,
    Closed = 20,
    AnswerPublished = 40
}
