namespace AcroStack.Chat;

/// <summary>
/// Indicates which side of a conversation a <see cref="UserMessage"/> belongs to.
/// Each <see cref="ChatMessage"/> produces two <see cref="UserMessage"/> records:
/// one for the sender (Send) and one for the receiver (Received).
/// </summary>
public enum ChatMessageSide
{
    Send = 0,
    Received = 1
}
