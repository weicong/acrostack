using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Chat;

/// <summary>
/// Created for each side of a conversation between two users. Mirrors ABP
/// Commercial Chat module's <c>Conversation</c> aggregate root. Maintains
/// the last-message preview and unread count so the contact list renders
/// without scanning the full message history.
/// </summary>
public class Conversation : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Id of the <see cref="ChatUser"/> this conversation belongs to.</summary>
    public Guid UserId { get; set; }

    /// <summary>Id of the other <see cref="ChatUser"/> in the conversation.</summary>
    public Guid TargetUserId { get; set; }

    /// <summary>Side of the latest message (Send or Received).</summary>
    public ChatMessageSide LastMessageSide { get; set; }

    /// <summary>Preview text of the last message.</summary>
    public string LastMessage { get; set; } = string.Empty;

    /// <summary>Timestamp of the last message.</summary>
    public DateTime LastMessageDate { get; set; }

    /// <summary>Count of unread messages addressed to this user.</summary>
    public int UnreadMessageCount { get; set; }

    protected Conversation() { }

    public Conversation(Guid id, Guid userId, Guid targetUserId) : base(id)
    {
        UserId = userId;
        TargetUserId = targetUserId;
    }

    public void UpdateLastMessage(ChatMessageSide side, string text, DateTime date)
    {
        LastMessageSide = side;
        LastMessage = text;
        LastMessageDate = date;
    }

    public void IncrementUnread()
    {
        UnreadMessageCount++;
    }

    public void ResetUnread()
    {
        UnreadMessageCount = 0;
    }
}
