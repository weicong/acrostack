using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Chat;

/// <summary>Input for sending a chat message.</summary>
public class SendMessageInput
{
    /// <summary>IdentityUser.Id of the message recipient.</summary>
    public Guid TargetUserId { get; set; }

    /// <summary>
    /// 消息文本。限制最长 4000 字符，与 ChatMessage.Text 的数据库列宽
    /// （见 ChatEfCoreDbContextExtensions.MaxMessageTextLength）一致，
    /// 避免超长文本穿透到数据库层才抛异常。
    /// </summary>
    [StringLength(4000)]
    public string Text { get; set; } = string.Empty;
}
