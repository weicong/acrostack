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

    /// <summary>True if the message text was edited after sending.</summary>
    public bool IsEdited { get; set; }

    /// <summary>True if the message was soft-deleted by the sender.</summary>
    public bool IsDeleted { get; set; }

    /// <summary>When the message was last modified (edit time).</summary>
    public DateTime? LastModificationTime { get; set; }

    /// <summary>Original file name of the attachment (null when no attachment).</summary>
    public string? AttachmentName { get; set; }

    /// <summary>MIME content type of the attachment.</summary>
    public string? AttachmentContentType { get; set; }

    /// <summary>Attachment size in bytes (0 when no attachment).</summary>
    public long AttachmentSize { get; set; }

    /// <summary>True if the message has an attachment.</summary>
    public bool HasAttachment => !string.IsNullOrEmpty(AttachmentBlobName);

    /// <summary>Blob name of the attachment (omitted from API responses via JsonIgnore if needed).</summary>
    public string? AttachmentBlobName { get; set; }
}

public enum ChatMessageSideDto
{
    Send = 0,
    Received = 1
}
