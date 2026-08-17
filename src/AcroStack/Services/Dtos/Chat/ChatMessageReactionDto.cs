using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Chat;

/// <summary>A reaction (emoji) left by a user on a chat message.</summary>
public class ChatMessageReactionDto : EntityDto<Guid>
{
    /// <summary>IdentityUser.Id of the user who left the reaction.</summary>
    public Guid UserId { get; set; }

    /// <summary>User name of the user who left the reaction.</summary>
    public string UserName { get; set; } = string.Empty;

    /// <summary>The reaction emoji.</summary>
    public string Reaction { get; set; } = string.Empty;

    /// <summary>When the reaction was created.</summary>
    public DateTime CreationTime { get; set; }
}
