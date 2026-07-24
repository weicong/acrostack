using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using AcroStack.Services.Dtos.SaaS;

namespace AcroStack.Services.SaaS;

/// <summary>
/// Edition management API. Mirrors ABP Commercial SaaS Edition app service
/// surface so that frontend code can be migrated to the Pro module later
/// with minimal changes.
/// </summary>
public interface IEditionAppService :
    ICrudAppService<
        EditionDto,
        Guid,
        EditionGetListInput,
        CreateUpdateEditionDto>
{
}
