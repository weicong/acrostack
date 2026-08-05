namespace AcroStack.Services.Dtos.Chat;

/// <summary>Input for editing an existing chat message's text.</summary>
public class EditMessageInput
{
    /// <summary>New text content for the message.</summary>
    public string Text { get; set; } = string.Empty;
}
