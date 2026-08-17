using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.FileManagement;

public class FileShareDto : EntityDto<Guid>
{
    public Guid FileEntryId { get; set; }

    public string Token { get; set; } = string.Empty;

    public DateTime? ExpirationTime { get; set; }

    public int? MaxDownloadCount { get; set; }

    public int DownloadCount { get; set; }

    public bool IsRevoked { get; set; }

    public DateTime CreationTime { get; set; }
}
