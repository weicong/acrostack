using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.Users;

namespace AcroStack.Hubs;

/// <summary>
/// SignalR hub for real-time chat. Each connected user is added to a group
/// named after their IdentityUser.Id so the server can push new messages and
/// read receipts to a specific user regardless of how many devices they are
/// connected from. Mirrors ABP Commercial Chat module's <c>ChatHub</c>.
/// </summary>
[Authorize]
public class ChatHub : Hub
{
    private readonly ICurrentUser _currentUser;

    public ChatHub(ICurrentUser currentUser)
    {
        _currentUser = currentUser;
    }

    public override async Task OnConnectedAsync()
    {
        if (_currentUser.Id.HasValue)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, UserGroupName(_currentUser.Id.Value));
        }
        await base.OnConnectedAsync();
    }

    /// <summary>Stable group name for a user (used by both client connection and server push).</summary>
    public static string UserGroupName(Guid userId) => $"chat:user:{userId}";
}

/// <summary>Client-side method names invoked by the server to push events.</summary>
public static class ChatClientMethods
{
    /// <summary>Pushed when a new message is received. Payload: <see cref="AcroStack.Services.Dtos.Chat.ChatMessageDto"/>.</summary>
    public const string ReceiveMessage = "ReceiveMessage";

    /// <summary>Pushed when the recipient reads the sender's messages. Payload: sender user id.</summary>
    public const string MessagesRead = "MessagesRead";

    /// <summary>Pushed to update the contact list's unread count. Payload: total unread count.</summary>
    public const string UnreadCountChanged = "UnreadCountChanged";
}
