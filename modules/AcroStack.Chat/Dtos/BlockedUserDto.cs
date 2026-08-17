using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Chat;

/// <summary>A user blocked by the current user in the chat module.</summary>
public class BlockedUserDto : EntityDto<Guid>
{
    /// <summary>IdentityUser.Id of the blocked user.</summary>
    public Guid BlockedUserId { get; set; }

    /// <summary>User name of the blocked user.</summary>
    public string BlockedUserName { get; set; } = string.Empty;

    /// <summary>When the block was created.</summary>
    public DateTime CreationTime { get; set; }
}
