namespace Classroom;

/// <summary>
/// 课堂题目状态机（提示词第五节）：
/// Pending -> Open（开放）
/// Open -> Closed（截止）
/// Closed -> StatisticsPublished（公布匿名统计）
/// Closed -> AnswerPublished（公布答案）
/// StatisticsPublished -> AnswerPublished（先公布统计后公布答案）
/// </summary>
public enum SessionQuestionStatus
{
    Pending = 0,
    Open = 10,
    Closed = 20,
    StatisticsPublished = 30,
    AnswerPublished = 40
}
