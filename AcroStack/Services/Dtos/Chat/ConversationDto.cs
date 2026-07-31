using System;

namespace AcroStack.Services.Dtos.Chat;

/// <summary>A conversation preview shown in the contact/chat list.</summary>
public class ConversationDto
{
    /// <summary>IdentityUser.Id of the other party.</summary>
    public Guid TargetUserId { get; set; }

    public string TargetUserName { get; set; } = string.Empty;
    public string TargetName { get; set; } = string.Empty;
    public string TargetSurname { get; set; } = string.Empty;
    public string? TargetEmail { get; set; }

    public string LastMessage { get; set; } = string.Empty;

    public DateTime LastMessageDate { get; set; }

    public ChatMessageSideDto LastMessageSide { get; set; }

    public int UnreadMessageCount { get; set; }
}
