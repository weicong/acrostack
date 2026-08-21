namespace Classroom;

/// <summary>题目选项值对象（键 + 文本）。通过 EF Core Owned JSON 列存储在 Question 行内。</summary>
public class QuestionOption
{
    /// <summary>选项键：A / B / C / D ...（判断题也复用 A=对 B=错 或 true/false，由前端约定）。</summary>
    public string Key { get; set; } = default!;

    public string Text { get; set; } = default!;

    public QuestionOption()
    {
    }

    public QuestionOption(string key, string text)
    {
        Key = key;
        Text = text;
    }
}
