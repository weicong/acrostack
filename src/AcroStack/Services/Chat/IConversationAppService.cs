using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Http;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Chat;

public interface IConversationAppService : IApplicationService
{
    /// <summary>Lists the current user's conversations (most recent first).</summary>
    Task<ListResultDto<ConversationDto>> GetListAsync();

    /// <summary>Loads the message history with a target user (paged, newest page first).</summary>
    Task<PagedResultDto<ChatMessageDto>> GetMessageListAsync(GetMessageListInput input);

    /// <summary>Sends a message and pushes it to the recipient in real time via SignalR.</summary>
    Task<ChatMessageDto> SendMessageAsync(SendMessageInput input);

    /// <summary>Sends a message with an optional file attachment.</summary>
    Task<ChatMessageDto> SendMessageWithAttachmentAsync(SendMessageInput input, IFormFile? attachment);

    /// <summary>Marks all unread received messages from <paramref name="targetUserId"/> as read.</summary>
    Task MarkAsReadAsync(Guid targetUserId);

    /// <summary>Edits the text of a message owned by the current user.</summary>
    Task<ChatMessageDto> EditMessageAsync(Guid messageId, EditMessageInput input);

    /// <summary>Soft-deletes a message owned by the current user.</summary>
    Task DeleteMessageAsync(Guid messageId);

    /// <summary>Toggles a reaction (emoji) on a message for the current user.</summary>
    Task<bool> ToggleReactionAsync(Guid messageId, string reaction);

    /// <summary>Lists all reactions left on a message.</summary>
    Task<ListResultDto<ChatMessageReactionDto>> GetReactionsAsync(Guid messageId);

    /// <summary>Searches the current user's messages by keyword.</summary>
    Task<PagedResultDto<ChatMessageDto>> SearchMessagesAsync(SearchMessagesInput input);

    /// <summary>Downloads the attachment of a message (if any).</summary>
    Task<(System.IO.Stream Stream, string FileName, string? ContentType)> DownloadAttachmentAsync(Guid messageId);
}
