using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Chat;
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

    /// <summary>Marks all unread received messages from <paramref name="targetUserId"/> as read.</summary>
    Task MarkAsReadAsync(Guid targetUserId);
}
