using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Chat;

/// <summary>
/// Records that <see cref="UserId"/> has blocked <see cref="BlockedUserId"/>
/// in the chat module. Mirrors ABP Commercial Chat module's blocking concept.
/// The combination of <see cref="TenantId"/>, <see cref="UserId"/> and
/// <see cref="BlockedUserId"/> is unique — a user can only block another
/// user once.
/// </summary>
public class ChatBlockedUser : CreationAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>IdentityUser.Id of the user who performed the block.</summary>
    public Guid UserId { get; set; }

    /// <summary>IdentityUser.Id of the user who was blocked.</summary>
    public Guid BlockedUserId { get; set; }

    protected ChatBlockedUser() { }

    public ChatBlockedUser(Guid id, Guid userId, Guid blockedUserId) : base(id)
    {
        UserId = userId;
        BlockedUserId = blockedUserId;
    }
}
