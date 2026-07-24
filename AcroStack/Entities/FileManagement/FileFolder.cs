using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace AcroStack.Entities.FileManagement;

/// <summary>
/// Represents a folder in the file management system. Folders are
/// hierarchical: a folder with a null <see cref="ParentId"/> is a root
/// folder. Mirrors ABP Commercial File Management Pro's folder entity but
/// is provided here because the open-source ABP ships no such module.
/// </summary>
public class FileFolder : FullAuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Display name shown to users (e.g. "Documents", "Images").
    /// </summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// Parent folder ID. Null for root-level folders.
    /// </summary>
    public Guid? ParentId { get; set; }

    public FileFolder() { }

    public FileFolder(Guid id, string name, Guid? parentId = null)
        : base(id)
    {
        Name = name;
        ParentId = parentId;
    }
}
