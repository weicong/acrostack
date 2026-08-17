using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.FileManagement;

/// <summary>
/// Represents a folder in the file management system. Folders are
/// hierarchical: a folder with a null <see cref="ParentId"/> is a root
/// folder. Mirrors ABP Commercial File Management Pro's folder entity but
/// is provided here because the open-source ABP ships no such module.
/// Implements <see cref="IMultiTenant"/> so each tenant has its own
/// isolated folder tree.
/// </summary>
public class FileFolder : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    /// <summary>
    /// Display name shown to users (e.g. "Documents", "Images").
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Parent folder ID. Null for root-level folders.
    /// </summary>
    public Guid? ParentId { get; set; }

    /// <summary>
    /// Tenant that owns this folder. ABP's query filter automatically
    /// scopes folder listings to the current tenant.
    /// </summary>
    public Guid? TenantId { get; set; }

    public FileFolder() { }

    public FileFolder(Guid id, string name, Guid? parentId = null, Guid? tenantId = null)
        : base(id)
    {
        Name = name;
        ParentId = parentId;
        TenantId = tenantId;
    }
}
