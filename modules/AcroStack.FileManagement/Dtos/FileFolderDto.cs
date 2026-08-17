using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.FileManagement;

public class FileFolderDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;

    public Guid? ParentId { get; set; }
}
