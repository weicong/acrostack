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
    /// Random 32-character token used in the public download URL.
    /// Generated via <c>Guid.NewGuid().ToString("N")</c>.
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
