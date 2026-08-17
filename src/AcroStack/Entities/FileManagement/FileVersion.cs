using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.FileManagement;

/// <summary>
/// A historical version of a <see cref="FileEntry"/>. Created when a
/// file is overwritten with new content (same name in the same folder).
/// Each row captures the blob name, size, MIME type, and uploader of
/// the previous version so users can browse and restore prior revisions.
/// Mirrors ABP Commercial File Management Pro's file-version history.
/// </summary>
public class FileVersion : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    /// <summary>
    /// File this version belongs to.
    /// </summary>
    public Guid FileEntryId { get; set; }

    /// <summary>
    /// Sequence number of this version (1-based, ascending by creation time).
    /// </summary>
    public int VersionNumber { get; set; }

    /// <summary>
    /// Blob name in the file-management blob container that holds this
    /// version's bytes. Distinct from the <see cref="FileEntry"/>'s
    /// current <c>BlobName</c> (which always points at the latest).
    /// </summary>
    public string BlobName { get; set; } = string.Empty;

    /// <summary>
    /// Size in bytes of this version's content.
    /// </summary>
    public long ByteSize { get; set; }

    /// <summary>
    /// MIME content type, if known at upload time.
    /// </summary>
    public string? ContentType { get; set; }

    /// <summary>
    /// User who uploaded this version, if available.
    /// </summary>
    public Guid? UploadedByUserId { get; set; }

    public Guid? TenantId { get; set; }

    public FileVersion() { }

    public FileVersion(
        Guid id,
        Guid fileEntryId,
        int versionNumber,
        string blobName,
        long byteSize,
        string? contentType,
        Guid? uploadedByUserId = null,
        Guid? tenantId = null)
        : base(id)
    {
        FileEntryId = fileEntryId;
        VersionNumber = versionNumber;
        BlobName = blobName;
        ByteSize = byteSize;
        ContentType = contentType;
        UploadedByUserId = uploadedByUserId;
        TenantId = tenantId;
    }
}
