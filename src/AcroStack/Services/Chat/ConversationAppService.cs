using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using AcroStack.Entities.Chat;
using AcroStack.Hubs;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Chat;

/// <summary>
/// Implements sending/retrieving chat messages and managing conversations.
/// Mirrors ABP Commercial Chat module's <c>ConversationAppService</c>. On send,
/// a <see cref="ChatMessage"/> is created plus two <see cref="UserMessage"/>
/// records (sender + receiver) and both sides' <see cref="Conversation"/> are
/// upserted; the recipient is notified in real time through <see cref="ChatHub"/>.
/// Also supports message edit/delete (soft), reactions, file attachments,
/// keyword search and block-aware sending.
/// </summary>
[Authorize]
public class ConversationAppService : AcroStackAppService, IConversationAppService
{
    /// <summary>Maximum allowed attachment size (10 MB).</summary>
    public const long MaxAttachmentSize = 10 * 1024 * 1024;

    private readonly IRepository<ChatMessage, Guid> _messageRepository;
    private readonly IRepository<UserMessage, Guid> _userMessageRepository;
    private readonly IRepository<Conversation, Guid> _conversationRepository;
    private readonly IRepository<ChatMessageReaction, Guid> _reactionRepository;
    private readonly IRepository<ChatBlockedUser, Guid> _blockedUserRepository;
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IBlobContainer<ChatAttachmentContainer> _attachmentBlobContainer;
    private readonly IHubContext<ChatHub> _hubContext;

    public ConversationAppService(
        IRepository<ChatMessage, Guid> messageRepository,
        IRepository<UserMessage, Guid> userMessageRepository,
        IRepository<Conversation, Guid> conversationRepository,
        IRepository<ChatMessageReaction, Guid> reactionRepository,
        IRepository<ChatBlockedUser, Guid> blockedUserRepository,
        IRepository<AppUser, Guid> appUserRepository,
        IBlobContainer<ChatAttachmentContainer> attachmentBlobContainer,
        IHubContext<ChatHub> hubContext)
    {
        _messageRepository = messageRepository;
        _userMessageRepository = userMessageRepository;
        _conversationRepository = conversationRepository;
        _reactionRepository = reactionRepository;
        _blockedUserRepository = blockedUserRepository;
        _appUserRepository = appUserRepository;
        _attachmentBlobContainer = attachmentBlobContainer;
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

        // Filter out soft-deleted user messages AND soft-deleted chat messages.
        var query =
            from um in umQueryable
            where um.UserId == currentUserId
                && um.TargetUserId == input.TargetUserId
                && !um.IsDeleted
            join m in msgQueryable on um.ChatMessageId equals m.Id
            where !m.IsDeleted
            orderby m.CreationTime descending
            select new { um, m };

        var totalCount = await AsyncExecuter.CountAsync(query);
        var rows = await AsyncExecuter.ToListAsync(query.Skip(input.SkipCount).Take(input.MaxResultCount));

        // Reverse so the oldest of the page renders first (chat scrolls to bottom).
        var dtos = rows
            .Select(r => MapMessageToDto(r.m, r.um, currentUserId, input.TargetUserId))
            .Reverse()
            .ToList();

        return new PagedResultDto<ChatMessageDto>(totalCount, dtos);
    }

    public async Task<ChatMessageDto> SendMessageAsync(SendMessageInput input)
    {
        return await SendMessageWithAttachmentAsync(input, attachment: null);
    }

    public async Task<ChatMessageDto> SendMessageWithAttachmentAsync(SendMessageInput input, IFormFile? attachment)
    {
        var currentUserId = CurrentUser.GetId();
        if (input.TargetUserId == currentUserId)
        {
            throw new BusinessException("AcroStack:YouCannotSendMessageToYourself");
        }

        // Block check: if the recipient has blocked the current user, refuse.
        var recipientBlockedSender = await _blockedUserRepository.FirstOrDefaultAsync(
            b => b.UserId == input.TargetUserId && b.BlockedUserId == currentUserId);
        if (recipientBlockedSender != null)
        {
            throw new BusinessException("AcroStack:CannotSendMessageToBlockedYou");
        }

        if (attachment != null && attachment.Length > MaxAttachmentSize)
        {
            throw new BusinessException("AcroStack:AttachmentExceedsMaxSize")
                .WithData("MaxSize", MaxAttachmentSize);
        }

        var now = Clock.Now;

        // 1. Message content
        var message = new ChatMessage(GuidGenerator.Create(), input.Text);

        if (attachment != null && attachment.Length > 0)
        {
            var blobName = $"{Guid.NewGuid():N}{Path.GetExtension(attachment.FileName)}";
            await using (var stream = attachment.OpenReadStream())
            {
                await _attachmentBlobContainer.SaveAsync(blobName, stream);
            }
            message.SetAttachment(attachment.FileName, blobName, attachment.ContentType, attachment.Length);
        }

        await _messageRepository.InsertAsync(message);

        // 2. Sender's copy + 3. Receiver's copy
        await _userMessageRepository.InsertAsync(new UserMessage(
            GuidGenerator.Create(), message.Id, currentUserId, input.TargetUserId, ChatMessageSide.Send));
        await _userMessageRepository.InsertAsync(new UserMessage(
            GuidGenerator.Create(), message.Id, input.TargetUserId, currentUserId, ChatMessageSide.Received));

        // 4-5. Upsert both sides' conversation previews
        var previewText = string.IsNullOrEmpty(input.Text) && message.AttachmentName != null
            ? $"[{message.AttachmentName}]"
            : input.Text;
        await UpsertConversationAsync(currentUserId, input.TargetUserId, ChatMessageSide.Send, previewText, now, incrementUnread: false);
        await UpsertConversationAsync(input.TargetUserId, currentUserId, ChatMessageSide.Received, previewText, now, incrementUnread: true);

        var dto = MapMessageToDto(message, side: ChatMessageSide.Send, senderUserId: currentUserId, receiverUserId: input.TargetUserId);

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
                && !um.IsRead
                && !um.IsDeleted)
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

    public async Task<ChatMessageDto> EditMessageAsync(Guid messageId, EditMessageInput input)
    {
        var currentUserId = CurrentUser.GetId();

        // FindAsync returns null for soft-deleted messages (ABP's ISoftDelete
        // filter excludes them), so a null result means deleted or not found.
        var message = await _messageRepository.FindAsync(messageId);
        if (message == null)
        {
            throw new BusinessException("AcroStack:MessageNotFound");
        }

        // Only the sender may edit the message. The sender's UserMessage copy
        // has Side == Send; verify ownership through that record.
        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var senderCopy = await AsyncExecuter.FirstOrDefaultAsync(
            umQueryable.Where(um => um.ChatMessageId == messageId
                && um.UserId == currentUserId
                && um.Side == ChatMessageSide.Send));
        if (senderCopy == null)
        {
            throw new BusinessException("AcroStack:CannotEditOthersMessage");
        }

        message.EditText(input.Text);
        await _messageRepository.UpdateAsync(message);

        var targetUserId = senderCopy.TargetUserId;
        var dto = MapMessageToDto(message, side: ChatMessageSide.Send, senderUserId: currentUserId, receiverUserId: targetUserId);

        // Push the edited message to both sender and recipient.
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(currentUserId))
            .SendAsync(ChatClientMethods.MessageEdited, dto);
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(targetUserId))
            .SendAsync(ChatClientMethods.MessageEdited, dto);

        return dto;
    }

    public async Task DeleteMessageAsync(Guid messageId)
    {
        var currentUserId = CurrentUser.GetId();

        // FindAsync respects the ISoftDelete filter: a null result means the
        // message is already deleted or doesn't exist — idempotent return.
        var message = await _messageRepository.FindAsync(messageId);
        if (message == null)
        {
            return;
        }

        // Only the sender may delete the message.
        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var senderCopy = await AsyncExecuter.FirstOrDefaultAsync(
            umQueryable.Where(um => um.ChatMessageId == messageId
                && um.UserId == currentUserId
                && um.Side == ChatMessageSide.Send));
        if (senderCopy == null)
        {
            throw new BusinessException("AcroStack:CannotDeleteOthersMessage");
        }

        var targetUserId = senderCopy.TargetUserId;

        // Soft-delete the chat message and both UserMessage copies via ABP's
        // ISoftDelete mechanism (DeleteAsync sets IsDeleted = true).
        await _messageRepository.DeleteAsync(message);

        var copies = await AsyncExecuter.ToListAsync(
            umQueryable.Where(um => um.ChatMessageId == messageId
                && (um.UserId == currentUserId || um.UserId == targetUserId)));
        foreach (var um in copies)
        {
            await _userMessageRepository.DeleteAsync(um);
        }

        // Notify both sender and recipient.
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(currentUserId))
            .SendAsync(ChatClientMethods.MessageDeleted, messageId);
        await _hubContext.Clients
            .Group(ChatHub.UserGroupName(targetUserId))
            .SendAsync(ChatClientMethods.MessageDeleted, messageId);
    }

    public async Task<bool> ToggleReactionAsync(Guid messageId, string reaction)
    {
        var currentUserId = CurrentUser.GetId();
        if (string.IsNullOrWhiteSpace(reaction))
        {
            throw new BusinessException("AcroStack:InvalidReaction");
        }

        // FindAsync returns null for soft-deleted messages.
        var message = await _messageRepository.FindAsync(messageId);
        if (message == null)
        {
            throw new BusinessException("AcroStack:MessageNotFound");
        }

        var existing = await _reactionRepository.FirstOrDefaultAsync(
            r => r.ChatMessageId == messageId
                && r.UserId == currentUserId
                && r.Reaction == reaction);

        bool isAdded;
        if (existing != null)
        {
            await _reactionRepository.DeleteAsync(existing);
            isAdded = false;
        }
        else
        {
            await _reactionRepository.InsertAsync(new ChatMessageReaction(
                GuidGenerator.Create(), messageId, currentUserId, reaction));
            isAdded = true;
        }

        // Determine who to notify: both conversation participants. Look up
        // the UserMessage records to find sender + receiver user ids.
        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var participantIds = await AsyncExecuter.ToListAsync(
            umQueryable.Where(um => um.ChatMessageId == messageId && !um.IsDeleted)
                .Select(um => um.UserId));

        foreach (var participantId in participantIds.Distinct())
        {
            await _hubContext.Clients
                .Group(ChatHub.UserGroupName(participantId))
                .SendAsync(ChatClientMethods.ReactionChanged, messageId, reaction, currentUserId, isAdded);
        }

        return isAdded;
    }

    public async Task<ListResultDto<ChatMessageReactionDto>> GetReactionsAsync(Guid messageId)
    {
        var reactionQueryable = await _reactionRepository.GetQueryableAsync();
        var userQueryable = await _appUserRepository.GetQueryableAsync();

        var rows = await AsyncExecuter.ToListAsync(
            from r in reactionQueryable
            where r.ChatMessageId == messageId
            join u in userQueryable on r.UserId equals u.Id
            orderby r.CreationTime
            select new { r, u }
        );

        var dtos = rows.Select(r => new ChatMessageReactionDto
        {
            Id = r.r.Id,
            UserId = r.r.UserId,
            UserName = r.u.UserName,
            Reaction = r.r.Reaction,
            CreationTime = r.r.CreationTime,
        }).ToList();

        return new ListResultDto<ChatMessageReactionDto>(dtos);
    }

    public async Task<PagedResultDto<ChatMessageDto>> SearchMessagesAsync(SearchMessagesInput input)
    {
        var currentUserId = CurrentUser.GetId();
        if (string.IsNullOrWhiteSpace(input.Keyword))
        {
            return new PagedResultDto<ChatMessageDto>(0, new System.Collections.Generic.List<ChatMessageDto>());
        }

        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var msgQueryable = await _messageRepository.GetQueryableAsync();

        // Search the current user's visible messages (not deleted) whose text
        // contains the keyword (case-insensitive Contains on SQLite).
        var keyword = input.Keyword;
        var query =
            from um in umQueryable
            where um.UserId == currentUserId && !um.IsDeleted
            join m in msgQueryable on um.ChatMessageId equals m.Id
            where !m.IsDeleted && m.Text.Contains(keyword)
            orderby m.CreationTime descending
            select new { um, m };

        var totalCount = await AsyncExecuter.CountAsync(query);
        var rows = await AsyncExecuter.ToListAsync(query.Skip(input.SkipCount).Take(input.MaxResultCount));

        var dtos = rows
            .Select(r => MapMessageToDto(r.m, r.um, currentUserId, r.um.TargetUserId))
            .ToList();

        return new PagedResultDto<ChatMessageDto>(totalCount, dtos);
    }

    public async Task<(Stream Stream, string FileName, string? ContentType)> DownloadAttachmentAsync(Guid messageId)
    {
        // FindAsync respects the ISoftDelete filter: deleted messages are not
        // returned, which is the desired behavior (no downloading attachments
        // from deleted messages).
        var message = await _messageRepository.FindAsync(messageId);
        if (message == null)
        {
            throw new BusinessException("AcroStack:MessageNotFound");
        }

        if (string.IsNullOrEmpty(message.AttachmentBlobName))
        {
            throw new BusinessException("AcroStack:MessageHasNoAttachment");
        }

        // Only allow participants of the conversation to download.
        var currentUserId = CurrentUser.GetId();
        var umQueryable = await _userMessageRepository.GetQueryableAsync();
        var isParticipant = await AsyncExecuter.FirstOrDefaultAsync(
            umQueryable.Where(um => um.ChatMessageId == messageId
                && um.UserId == currentUserId));
        if (isParticipant == null)
        {
            throw new BusinessException("AcroStack:MessageNotFound");
        }

        var stream = await _attachmentBlobContainer.GetAsync(message.AttachmentBlobName);
        return (stream, message.AttachmentName ?? message.AttachmentBlobName, message.AttachmentContentType);
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

    private ChatMessageDto MapMessageToDto(ChatMessage message, UserMessage um, Guid currentUserId, Guid targetUserId)
    {
        return new ChatMessageDto
        {
            Id = message.Id,
            SenderUserId = um.Side == ChatMessageSide.Send ? currentUserId : targetUserId,
            ReceiverUserId = um.Side == ChatMessageSide.Send ? targetUserId : currentUserId,
            Text = message.Text,
            SendTime = message.CreationTime,
            Side = (ChatMessageSideDto)um.Side,
            IsRead = um.IsRead,
            ReadTime = um.ReadTime,
            IsEdited = message.IsEdited,
            IsDeleted = message.IsDeleted,
            LastModificationTime = message.LastModificationTime,
            AttachmentName = message.AttachmentName,
            AttachmentBlobName = message.AttachmentBlobName,
            AttachmentContentType = message.AttachmentContentType,
            AttachmentSize = message.AttachmentSize,
        };
    }

    private ChatMessageDto MapMessageToDto(ChatMessage message, ChatMessageSide side, Guid senderUserId, Guid receiverUserId)
    {
        return new ChatMessageDto
        {
            Id = message.Id,
            SenderUserId = senderUserId,
            ReceiverUserId = receiverUserId,
            Text = message.Text,
            SendTime = message.CreationTime,
            Side = (ChatMessageSideDto)side,
            IsRead = false,
            IsEdited = message.IsEdited,
            IsDeleted = message.IsDeleted,
            LastModificationTime = message.LastModificationTime,
            AttachmentName = message.AttachmentName,
            AttachmentBlobName = message.AttachmentBlobName,
            AttachmentContentType = message.AttachmentContentType,
            AttachmentSize = message.AttachmentSize,
        };
    }
}
