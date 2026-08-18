using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.FileManagement;

/// <summary>
/// Represents a public share link for a <see cref="FileEntry"/>.
/// Anyone with the <see cref="Token"/> can download the file (via the
/// <c>DownloadShared</c> endpoint) until the link expires, the download
/// cap is reached, or an admin revokes it. Mirrors ABP Commercial File
/// Management Pro's share-link feature.
/// </summary>
public class FileShare : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    /// <summary>
    /// File this share link exposes.
    /// </summary>
    public Guid FileEntryId { get; set; }

    /// <summary>
    /// 随机 64 位十六进制 token（32 字节加密安全随机数），用于公开下载 URL。
    /// 通过 <c>RandomNumberGenerator.GetBytes(32)</c> 生成（见
    /// <c>FileManagementAppService.CreateShareLinkAsync</c>）。
    /// </summary>
    public string Token { get; set; } = string.Empty;

    /// <summary>
    /// Optional expiry timestamp. Null means the link never expires.
    /// </summary>
    public DateTime? ExpirationTime { get; set; }

    /// <summary>
    /// Optional cap on the number of downloads allowed via this link.
    /// Null means unlimited downloads.
    /// </summary>
    public int? MaxDownloadCount { get; set; }

    /// <summary>
    /// Number of times this link has been used to download the file.
    /// </summary>
    public int DownloadCount { get; set; }

    /// <summary>
    /// When true, the link is revoked and any download attempt is rejected.
    /// </summary>
    public bool IsRevoked { get; set; }

    public Guid? TenantId { get; set; }

    public FileShare() { }

    public FileShare(
        Guid id,
        Guid fileEntryId,
        string token,
        DateTime? expirationTime = null,
        int? maxDownloadCount = null,
        Guid? tenantId = null)
        : base(id)
    {
        FileEntryId = fileEntryId;
        Token = token;
        ExpirationTime = expirationTime;
        MaxDownloadCount = maxDownloadCount;
        TenantId = tenantId;
    }
}
