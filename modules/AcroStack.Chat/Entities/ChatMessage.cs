using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Chat;

/// <summary>
/// Represents a chat message (the actual content). Mirrors ABP Commercial
/// Chat module's <c>Message</c> aggregate root. Two <see cref="UserMessage"/>
/// records (sender + receiver) reference this message.
/// </summary>
public class ChatMessage : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Message content.</summary>
    public string Text { get; set; } = string.Empty;

    /// <summary>True once every recipient has read the message.</summary>
    public bool IsAllRead { get; set; }

    /// <summary>When the message was read by the recipient (null until read).</summary>
    public DateTime? ReadTime { get; set; }

    /// <summary>True if the message text was edited after sending.</summary>
    public bool IsEdited { get; set; }

    // IsDeleted is inherited from FullAuditedAggregateRoot (ISoftDelete).
    // ABP's soft-delete query filter automatically excludes records where
    // IsDeleted == true, so manual filtering is not required (but kept as
    // a safety net in queries).

    /// <summary>Original file name of the attachment (null when no attachment).</summary>
    public string? AttachmentName { get; set; }

    /// <summary>Blob name used to retrieve the attachment bytes from the blob container.</summary>
    public string? AttachmentBlobName { get; set; }

    /// <summary>MIME content type of the attachment.</summary>
    public string? AttachmentContentType { get; set; }

    /// <summary>Attachment size in bytes (0 when no attachment).</summary>
    public long AttachmentSize { get; set; }

    protected ChatMessage() { }

    public ChatMessage(Guid id, string text) : base(id)
    {
        Text = text;
    }

    /// <summary>Updates the text and marks the message as edited.</summary>
    public void EditText(string newText)
    {
        Text = newText;
        IsEdited = true;
    }

    /// <summary>Attaches file metadata to the message.</summary>
    public void SetAttachment(string name, string blobName, string? contentType, long size)
    {
        AttachmentName = name;
        AttachmentBlobName = blobName;
        AttachmentContentType = contentType;
        AttachmentSize = size;
    }
}
