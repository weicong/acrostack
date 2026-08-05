using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Chat;

/// <summary>
/// A reaction (emoji) left by a user on a <see cref="ChatMessage"/>.
/// Mirrors ABP Commercial Chat module's reaction concept. The combination
/// of <see cref="ChatMessageId"/>, <see cref="UserId"/> and
/// <see cref="Reaction"/> is unique — one user can only leave a given
/// emoji once per message.
/// </summary>
public class ChatMessageReaction : CreationAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Id of the <see cref="ChatMessage"/> the reaction is attached to.</summary>
    public Guid ChatMessageId { get; set; }

    /// <summary>IdentityUser.Id of the user who left the reaction.</summary>
    public Guid UserId { get; set; }

    /// <summary>The reaction emoji (e.g. 👍, ❤️, 😂, 😍, 🎉, 🔥).</summary>
    public string Reaction { get; set; } = string.Empty;

    protected ChatMessageReaction() { }

    public ChatMessageReaction(Guid id, Guid chatMessageId, Guid userId, string reaction) : base(id)
    {
        ChatMessageId = chatMessageId;
        UserId = userId;
        Reaction = reaction;
    }
}
