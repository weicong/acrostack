using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.FileManagement;

/// <summary>
/// Metadata for an uploaded file. The actual bytes are stored in an ABP
/// blob container (<see cref="FileManagementContainer"/>); this entity
/// holds the user-visible name, MIME type, size, and the owning folder.
/// Mirrors ABP Commercial File Management Pro's file entity.
/// Implements <see cref="IMultiTenant"/> so each tenant has its own
/// isolated file set.
/// </summary>
public class FileEntry : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    /// <summary>
    /// User-visible file name (e.g. "report.pdf"). Not unique — the
    /// combination of folder + name is the user-facing key.
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// MIME content type (e.g. "application/pdf"). May be null if unknown.
    /// </summary>
    public string? ContentType { get; set; }

    /// <summary>
    /// File size in bytes.
    /// </summary>
    public long ByteSize { get; set; }

    /// <summary>
    /// Folder that owns this file. Null for root-level files.
    /// </summary>
    public Guid? FolderId { get; set; }

    /// <summary>
    /// Unique blob name used as the key in the blob container. Distinct
    /// from <see cref="Name"/> to avoid collisions when overwriting.
    /// </summary>
    public string BlobName { get; set; } = string.Empty;

    /// <summary>
    /// Current version number of this file. Starts at 1 and is
    /// incremented each time an overwrite-as-new-version upload occurs.
    /// Older versions are kept in the <see cref="FileVersion"/> table.
    /// </summary>
    public int CurrentVersion { get; set; } = 1;

    /// <summary>
    /// Tenant that owns this file. ABP's query filter automatically
    /// scopes file listings to the current tenant.
    /// </summary>
    public Guid? TenantId { get; set; }

    public FileEntry() { }

    public FileEntry(
        Guid id,
        string name,
        string blobName,
        long byteSize,
        string? contentType,
        Guid? folderId,
        Guid? tenantId = null)
        : base(id)
    {
        Name = name;
        BlobName = blobName;
        ByteSize = byteSize;
        ContentType = contentType;
        FolderId = folderId;
        TenantId = tenantId;
    }
}
