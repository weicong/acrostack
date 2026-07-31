using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A globally unique tag name.</summary>
public class TagDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Unique tag name.</summary>
    public string Name { get; set; } = string.Empty;
}
