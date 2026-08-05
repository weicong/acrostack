using System;
using System.Threading.Tasks;
using AcroStack.Services.Chat;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.Controllers;

/// <summary>
/// Custom controller for Chat endpoints that need explicit handling not
/// provided by ABP auto-routing: multipart/form-data uploads and file
/// download streaming. All other ConversationAppService methods remain
/// auto-routed under <c>/api/app/conversation</c>.
/// Mirrors the FileManagementController pattern.
/// </summary>
[Authorize]
[Route("api/app/chat")]
public class ChatController : AbpController
{
    private readonly IConversationAppService _conversationAppService;

    public ChatController(IConversationAppService conversationAppService)
    {
        _conversationAppService = conversationAppService;
    }

    /// <summary>
    /// Sends a chat message with an optional file attachment. The request
    /// must be <c>multipart/form-data</c>: form fields bind to
    /// <see cref="SendMessageInput"/> and the file part binds to
    /// <paramref name="attachment"/>.
    /// </summary>
    [HttpPost("messages/send-with-attachment")]
    public Task<ChatMessageDto> SendMessageWithAttachment(
        [FromForm] SendMessageInput input,
        IFormFile? attachment)
        => _conversationAppService.SendMessageWithAttachmentAsync(input, attachment);

    /// <summary>
    /// Downloads the attachment of a chat message. Only conversation
    /// participants may download.
    /// </summary>
    [HttpGet("messages/{messageId}/attachment")]
    public async Task<IActionResult> DownloadAttachment(Guid messageId)
    {
        var (stream, fileName, contentType) = await _conversationAppService.DownloadAttachmentAsync(messageId);
        return File(stream, contentType ?? "application/octet-stream", fileName);
    }
}
