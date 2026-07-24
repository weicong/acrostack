using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.FileManagement;

public class FileEntryDto : FullAuditedEntityDto<Guid>
{
    public string Name { get; set; } = string.Empty;

    public string? ContentType { get; set; }

    public long ByteSize { get; set; }

    public Guid? FolderId { get; set; }
}
