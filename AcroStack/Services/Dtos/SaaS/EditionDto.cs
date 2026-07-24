using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.SaaS;

public class EditionDto : FullAuditedEntityDto<Guid>
{
    public string DisplayName { get; set; } = string.Empty;
}
