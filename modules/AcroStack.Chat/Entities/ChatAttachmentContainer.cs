using Volo.Abp.BlobStoring;

namespace AcroStack.Chat;

/// <summary>
/// Marker class for the typed blob container that stores chat message
/// attachments. Use <c>IBlobContainer&lt;ChatAttachmentContainer&gt;</c>
/// to read/write attachment blobs.
/// </summary>
[BlobContainerName("acrostack-chat-attachments")]
public class ChatAttachmentContainer
{
}
