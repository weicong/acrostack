using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Chat;

/// <summary>A single chat message in a conversation history.</summary>
public class ChatMessageDto : EntityDto<Guid>
{
    /// <summary>IdentityUser.Id of the sender.</summary>
    public Guid SenderUserId { get; set; }

    /// <summary>IdentityUser.Id of the receiver.</summary>
    public Guid ReceiverUserId { get; set; }

    /// <summary>Message content.</summary>
    public string Text { get; set; } = string.Empty;

    /// <summary>When the message was sent.</summary>
    public DateTime SendTime { get; set; }

    /// <summary>Side relative to the current user (Send = sent by me, Received = sent to me).</summary>
    public ChatMessageSideDto Side { get; set; }

    public bool IsRead { get; set; }

    public DateTime? ReadTime { get; set; }
}

public enum ChatMessageSideDto
{
    Send = 0,
    Received = 1
}
