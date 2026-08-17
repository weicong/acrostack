using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Chat;

/// <summary>
/// Created for each side (sender and receiver) of a <see cref="ChatMessage"/>.
/// Mirrors ABP Commercial Chat module's <c>UserMessage</c> aggregate root.
/// </summary>
public class UserMessage : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Id of the related <see cref="ChatMessage"/>.</summary>
    public Guid ChatMessageId { get; set; }

    /// <summary>Id of the <see cref="ChatUser"/> this copy belongs to.</summary>
    public Guid UserId { get; set; }

    /// <summary>Id of the other <see cref="ChatUser"/> in the conversation.</summary>
    public Guid TargetUserId { get; set; }

    /// <summary>Whether this is the sent or received copy.</summary>
    public ChatMessageSide Side { get; set; }

    public bool IsRead { get; set; }

    public DateTime? ReadTime { get; set; }

    // IsDeleted is inherited from FullAuditedAggregateRoot (ISoftDelete).
    // ABP's soft-delete query filter automatically excludes records where
    // IsDeleted == true, keeping both sides of a deleted message in sync.

    protected UserMessage() { }

    public UserMessage(
        Guid id,
        Guid chatMessageId,
        Guid userId,
        Guid targetUserId,
        ChatMessageSide side) : base(id)
    {
        ChatMessageId = chatMessageId;
        UserId = userId;
        TargetUserId = targetUserId;
        Side = side;
    }
}
