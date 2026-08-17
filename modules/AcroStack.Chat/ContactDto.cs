using System;

namespace AcroStack.Chat;

/// <summary>A user that the current user can start a conversation with.</summary>
public class ContactDto
{
    /// <summary>IdentityUser.Id.</summary>
    public Guid UserId { get; set; }

    public string UserName { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Surname { get; set; } = string.Empty;
    public string? Email { get; set; }

    public int UnreadMessageCount { get; set; }

    public DateTime? LastMessageDate { get; set; }

    /// <summary>Whether the contact is currently online (based on the chat online tracker).</summary>
    public bool IsOnline { get; set; }

    /// <summary>Whether the current user has blocked this contact.</summary>
    public bool IsBlocked { get; set; }
}
