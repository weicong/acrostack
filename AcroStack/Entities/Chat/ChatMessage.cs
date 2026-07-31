using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Chat;

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

    protected ChatMessage() { }

    public ChatMessage(Guid id, string text) : base(id)
    {
        Text = text;
    }
}
