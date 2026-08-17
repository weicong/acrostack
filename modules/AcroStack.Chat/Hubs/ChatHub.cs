using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace AcroStack.Chat;

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
    private readonly IChatOnlineTracker _onlineTracker;
    private readonly IRepository<Conversation, Guid> _conversationRepository;
    private readonly IUnitOfWorkManager _unitOfWorkManager;

    public ChatHub(
        ICurrentUser currentUser,
        IChatOnlineTracker onlineTracker,
        IRepository<Conversation, Guid> conversationRepository,
        IUnitOfWorkManager unitOfWorkManager)
    {
        _currentUser = currentUser;
        _onlineTracker = onlineTracker;
        _conversationRepository = conversationRepository;
        _unitOfWorkManager = unitOfWorkManager;
    }

    public override async Task OnConnectedAsync()
    {
        if (_currentUser.Id.HasValue)
        {
            var userId = _currentUser.Id.Value;
            await Groups.AddToGroupAsync(Context.ConnectionId, UserGroupName(userId));
            await _onlineTracker.SetOnlineAsync(userId);

            // Notify the user's contacts that they are now online.
            var contactIds = await GetContactUserIdsAsync(userId);
            foreach (var contactId in contactIds)
            {
                await Clients.Group(UserGroupName(contactId))
                    .SendAsync(ChatClientMethods.UserOnlineStatusChanged, userId, true);
            }
        }
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        if (_currentUser.Id.HasValue)
        {
            var userId = _currentUser.Id.Value;
            await _onlineTracker.SetOfflineAsync(userId);

            // Notify the user's contacts that they are now offline.
            var contactIds = await GetContactUserIdsAsync(userId);
            foreach (var contactId in contactIds)
            {
                await Clients.Group(UserGroupName(contactId))
                    .SendAsync(ChatClientMethods.UserOnlineStatusChanged, userId, false);
            }
        }
        await base.OnDisconnectedAsync(exception);
    }

    /// <summary>
    /// Client-invoked method to notify <paramref name="targetUserId"/> that
    /// the current user is typing. Server pushes a <see cref="ChatClientMethods.TypingNotification"/>
    /// event to the target user.
    /// </summary>
    public async Task SendTypingNotification(Guid targetUserId)
    {
        if (!_currentUser.Id.HasValue)
        {
            return;
        }

        await Clients.Group(UserGroupName(targetUserId))
            .SendAsync(ChatClientMethods.TypingNotification, _currentUser.Id.Value, _currentUser.UserName);
    }

    /// <summary>
    /// Client-invoked method to notify <paramref name="targetUserId"/> that
    /// the current user has stopped typing.
    /// </summary>
    public async Task StopTypingNotification(Guid targetUserId)
    {
        if (!_currentUser.Id.HasValue)
        {
            return;
        }

        await Clients.Group(UserGroupName(targetUserId))
            .SendAsync(ChatClientMethods.StopTypingNotification, _currentUser.Id.Value, _currentUser.UserName);
    }

    /// <summary>Stable group name for a user (used by both client connection and server push).</summary>
    public static string UserGroupName(Guid userId) => $"chat:user:{userId}";

    private async Task<List<Guid>> GetContactUserIdsAsync(Guid userId)
    {
        using var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: false);
        var conversations = await _conversationRepository.GetListAsync(
            c => c.UserId == userId || c.TargetUserId == userId);
        await uow.CompleteAsync();

        return conversations
            .Select(c => c.UserId == userId ? c.TargetUserId : c.UserId)
            .Distinct()
            .ToList();
    }
}

/// <summary>Client-side method names invoked by the server to push events.</summary>
public static class ChatClientMethods
{
    /// <summary>Pushed when a new message is received. Payload: <see cref="AcroStack.Chat.ChatMessageDto"/>.</summary>
    public const string ReceiveMessage = "ReceiveMessage";

    /// <summary>Pushed when the recipient reads the sender's messages. Payload: sender user id.</summary>
    public const string MessagesRead = "MessagesRead";

    /// <summary>Pushed to update the contact list's unread count. Payload: total unread count.</summary>
    public const string UnreadCountChanged = "UnreadCountChanged";

    /// <summary>Pushed when a message is edited. Payload: updated <see cref="AcroStack.Chat.ChatMessageDto"/>.</summary>
    public const string MessageEdited = "MessageEdited";

    /// <summary>Pushed when a message is deleted. Payload: message id.</summary>
    public const string MessageDeleted = "MessageDeleted";

    /// <summary>Pushed when a reaction is toggled. Payload: messageId, reaction, userId, isAdded.</summary>
    public const string ReactionChanged = "ReactionChanged";

    /// <summary>Pushed when a user's online status changes. Payload: userId, isOnline.</summary>
    public const string UserOnlineStatusChanged = "UserOnlineStatusChanged";

    /// <summary>Pushed when a user starts typing. Payload: senderUserId, senderUserName.</summary>
    public const string TypingNotification = "TypingNotification";

    /// <summary>Pushed when a user stops typing. Payload: senderUserId, senderUserName.</summary>
    public const string StopTypingNotification = "StopTypingNotification";
}
