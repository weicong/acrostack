using System;

namespace AcroStack.Chat;

/// <summary>Input for sending a chat message.</summary>
public class SendMessageInput
{
    /// <summary>IdentityUser.Id of the message recipient.</summary>
    public Guid TargetUserId { get; set; }

    public string Text { get; set; } = string.Empty;
}
