namespace AcroStack.Chat;

/// <summary>Input for searching chat messages by keyword across all conversations.</summary>
public class SearchMessagesInput
{
    /// <summary>Keyword to search for in message text.</summary>
    public string Keyword { get; set; } = string.Empty;

    public int SkipCount { get; set; }

    public int MaxResultCount { get; set; } = 50;
}
