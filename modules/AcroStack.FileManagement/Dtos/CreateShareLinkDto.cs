using System;

namespace AcroStack.FileManagement;

/// <summary>
/// Input for creating a share link for a file. Both fields are
/// optional: when omitted, the link never expires / has no download cap.
/// </summary>
public class CreateShareLinkDto
{
    /// <summary>
    /// 可选的分享链接过期时间。校验规则（由服务层 CreateShareLinkAsync 执行）：
    /// 必须晚于当前时间（Clock.Now），且距当前时间不超过 30 天；
    /// 不满足时抛出 UserFriendlyException。为 null 表示链接永不过期。
    /// </summary>
    public DateTime? ExpirationTime { get; set; }

    public int? MaxDownloadCount { get; set; }
}
