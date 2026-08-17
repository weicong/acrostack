using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.FileManagement;

public class FileVersionDto : EntityDto<Guid>
{
    public Guid FileEntryId { get; set; }

    public int VersionNumber { get; set; }

    public long ByteSize { get; set; }

    public string? ContentType { get; set; }

    public Guid? UploaderUserId { get; set; }

    public DateTime CreationTime { get; set; }
}
