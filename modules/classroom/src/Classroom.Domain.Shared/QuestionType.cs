namespace Classroom;

/// <summary>题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。</summary>
public enum QuestionType
{
    SingleChoice = 1,
    MultipleChoice = 2,
    TrueOrFalse = 3,
    ShortAnswer = 4
}
