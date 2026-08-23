namespace AcroStack.Chat;

/// <summary>
/// Chat 模块结构化错误码。本地化文本见 Localization/Chat/{en,zh-Hans}.json，
/// 通过 ChatModule 中 MapCodeNamespace("Chat", ...) 映射到 ChatResource。
/// </summary>
public static class ChatErrorCodes
{
    public const string YouCannotBlockYourself = "Chat:YouCannotBlockYourself";
    public const string YouCannotSendMessageToYourself = "Chat:YouCannotSendMessageToYourself";
    public const string CannotSendMessageToBlockedYou = "Chat:CannotSendMessageToBlockedYou";
    public const string AttachmentExceedsMaxSize = "Chat:AttachmentExceedsMaxSize";
    public const string MessageNotFound = "Chat:MessageNotFound";
    public const string CannotEditOthersMessage = "Chat:CannotEditOthersMessage";
    public const string CannotDeleteOthersMessage = "Chat:CannotDeleteOthersMessage";
    public const string InvalidReaction = "Chat:InvalidReaction";
    public const string MessageHasNoAttachment = "Chat:MessageHasNoAttachment";
}
