using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using AcroStack.Entities.Chat;
using AcroStack.Hubs;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Chat;

/// <summary>
/// Implements sending/retrieving chat messages and managing conversations.
/// Mirrors ABP Commercial Chat module's <c>ConversationAppService</c>. On send,
/// a <see cref="ChatMessage"/> is created plus two <see cref="UserMessage"/>
/// records (sender + receiver) and both sides' <see cref="Conversation"/> are
/// upserted; the recipient is notified in real time through <see cref="ChatHub"/>.
/// </summary>
[Authorize]
public class ConversationAppService : ApplicationService, IConversationAppService
{
    private readonly IRepository<ChatMessage, Guid> _messageRepository;
    private readonly IRepository<UserMessage, Guid> _userMessageRepository;
    private readonly IRepository<Conversation, Guid> _conversationRepository;
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IHubContext<ChatHub> _hubContext;

    public ConversationAppService(
        IRepository<ChatMessage, Guid> messageRepository,
        IRepository<UserMessage, Guid> userMessageRepository,
        IRepository<Conversation, Guid> conversationRepository,
        IRepository<AppUser, Guid> appUserRepository,
        IHubContext<ChatHub> hubContext)
    {
        _messageRepository = messageRepository;
        _userMessageRepository = userMessageRepository;
        _conversationRepository = conversationRepository;
        _appUserRepository = appUserRepository;
        _hubContext = hubContext;
    }

    public async Task<ListResultDto<ConversationDto>> GetListAsync()
    {
        var currentUserId = CurrentUser.GetId();
        var convQueryable = await _conversationRepository.GetQueryableAsync();
        var userQueryable = await _appUserRepository.GetQueryableAsync();

        var rows = await AsyncExecuter.ToListAsync(
            from c in convQueryable
            where c.UserId == currentUserId
            join u in userQueryable on c.TargetUserId equals u.Id
            orderby c.LastMessageDate descending
            select new { c, u }
        );

        var dtos = rows.Select(r => new ConversationDto
        {
            TargetUserId = r.c.TargetUserId,
            TargetUserName = r.u.UserName,
            TargetName = r.u.Name ?? string.Empty,
            TargetSurname = r.u.Surname ?? string.Empty,
            TargetEmail = r.u.Email,
            LastMessage = r.c.LastMessage,
            LastMessageDate = r.c.LastMessageDate,
            LastMessageSide = (ChatMessageSideDto)r.c.LastMessageSide,
            UnreadMessageCount = r.c.UnreadMessageCount,
        }).ToList();

        return new ListResultDto<ConversationDto>(dtos);
    }

    public async Task<PagedResultDto<ChatMessageDto>> GetMessageListAsync(GetMessageListInput input)
    {
        var currentUserId = CurrentUser.GetId();
        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var msgQueryable = await _messageRepository.GetQueryableAsync();

        var query =
            from um in umQueryable
            where um.UserId == currentUserId && um.TargetUserId == input.TargetUserId
            join m in msgQueryable on um.ChatMessageId equals m.Id
            orderby m.CreationTime descending
            select new { um, m };

        var totalCount = await AsyncExecuter.CountAsync(query);
        var rows = await AsyncExecuter.ToListAsync(query.Skip(input.SkipCount).Take(input.MaxResultCount));

        // Reverse so the oldest of the page renders first (chat scrolls to bottom).
        var dtos = rows
            .Select(r => new ChatMessageDto
            {
                Id = r.m.Id,
                SenderUserId = r.um.Side == ChatMessageSide.Send ? currentUserId : input.TargetUserId,
                ReceiverUserId = r.um.Side == ChatMessageSide.Send ? input.TargetUserId : currentUserId,
                Text = r.m.Text,
                SendTime = r.m.CreationTime,
                Side = (ChatMessageSideDto)r.um.Side,
                IsRead = r.um.IsRead,
                ReadTime = r.um.ReadTime,
            })
            .Reverse()
            .ToList();

        return new PagedResultDto<ChatMessageDto>(totalCount, dtos);
    }

    public async Task<ChatMessageDto> SendMessageAsync(SendMessageInput input)
    {
        var currentUserId = CurrentUser.GetId();
        if (input.TargetUserId == currentUserId)
        {
            throw new BusinessException("AcroStack:YouCannotSendMessageToYourself");
        }

        var now = Clock.Now;

        // 1. Message content
        var message = new ChatMessage(GuidGenerator.Create(), input.Text);
        await _messageRepository.InsertAsync(message);

        // 2. Sender's copy + 3. Receiver's copy
        await _userMessageRepository.InsertAsync(new UserMessage(
            GuidGenerator.Create(), message.Id, currentUserId, input.TargetUserId, ChatMessageSide.Send));
        await _userMessageRepository.InsertAsync(new UserMessage(
            GuidGenerator.Create(), message.Id, input.TargetUserId, currentUserId, ChatMessageSide.Received));

        // 4-5. Upsert both sides' conversation previews
        await UpsertConversationAsync(currentUserId, input.TargetUserId, ChatMessageSide.Send, input.Text, now, incrementUnread: false);
        await UpsertConversationAsync(input.TargetUserId, currentUserId, ChatMessageSide.Received, input.Text, now, incrementUnread: true);

        var dto = new ChatMessageDto
        {
            Id = message.Id,
            SenderUserId = currentUserId,
            ReceiverUserId = input.TargetUserId,
            Text = message.Text,
            SendTime = now,
            Side = ChatMessageSideDto.Send,
            IsRead = false,
        };

        // 6. Real-time push to the recipient
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(input.TargetUserId))
            .SendAsync(ChatClientMethods.ReceiveMessage, dto);

        var receiverUnread = await GetUnreadCountAsync(input.TargetUserId);
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(input.TargetUserId))
            .SendAsync(ChatClientMethods.UnreadCountChanged, receiverUnread);

        return dto;
    }

    public async Task MarkAsReadAsync(Guid targetUserId)
    {
        var currentUserId = CurrentUser.GetId();
        var now = Clock.Now;

        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var unreadMessages = await AsyncExecuter.ToListAsync(
            umQueryable.Where(um => um.UserId == currentUserId
                && um.TargetUserId == targetUserId
                && um.Side == ChatMessageSide.Received
                && !um.IsRead)
        );

        if (unreadMessages.Count == 0)
        {
            return;
        }

        foreach (var um in unreadMessages)
        {
            um.IsRead = true;
            um.ReadTime = now;
            await _userMessageRepository.UpdateAsync(um);
        }

        // Reset the conversation's unread counter
        var convQueryable = await _conversationRepository.GetQueryableAsync();
        var conversation = await AsyncExecuter.FirstOrDefaultAsync(
            convQueryable.Where(c => c.UserId == currentUserId && c.TargetUserId == targetUserId)
        );
        if (conversation != null)
        {
            conversation.ResetUnread();
            await _conversationRepository.UpdateAsync(conversation);
        }

        // Mark source messages as fully read
        var msgIds = unreadMessages.Select(um => um.ChatMessageId).ToList();
        var msgQueryable = await _messageRepository.GetQueryableAsync();
        var messages = await AsyncExecuter.ToListAsync(msgQueryable.Where(m => msgIds.Contains(m.Id)));
        foreach (var m in messages)
        {
            m.IsAllRead = true;
            m.ReadTime = now;
            await _messageRepository.UpdateAsync(m);
        }

        // Notify the sender that their messages were read
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(targetUserId))
            .SendAsync(ChatClientMethods.MessagesRead, currentUserId);
    }

    private async Task UpsertConversationAsync(Guid userId, Guid targetUserId, ChatMessageSide side, string text, DateTime date, bool incrementUnread)
    {
        var queryable = await _conversationRepository.GetQueryableAsync();
        var existing = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(c => c.UserId == userId && c.TargetUserId == targetUserId)
        );

        if (existing == null)
        {
            existing = new Conversation(GuidGenerator.Create(), userId, targetUserId);
            existing.UpdateLastMessage(side, text, date);
            if (incrementUnread)
            {
                existing.IncrementUnread();
            }
            await _conversationRepository.InsertAsync(existing);
        }
        else
        {
            existing.UpdateLastMessage(side, text, date);
            if (incrementUnread)
            {
                existing.IncrementUnread();
            }
            await _conversationRepository.UpdateAsync(existing);
        }
    }

    private async Task<int> GetUnreadCountAsync(Guid userId)
    {
        var queryable = await _conversationRepository.GetQueryableAsync();
        var conversations = await AsyncExecuter.ToListAsync(queryable.Where(c => c.UserId == userId));
        return conversations.Sum(c => c.UnreadMessageCount);
    }
}
