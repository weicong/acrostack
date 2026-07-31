using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Static page management API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>PageAppService</c> surface. Read endpoints are public; writes require
/// CMS Pages permissions.
/// </summary>
public interface IPageAppService : IApplicationService
{
    Task<PagedResultDto<PageDto>> GetListAsync(PageGetListInput input);

    Task<PageDto> GetAsync(Guid id);

    Task<PageDto> GetBySlugAsync(string slug);

    Task<PageDto> CreateAsync(CreatePageInput input);

    Task<PageDto> UpdateAsync(Guid id, UpdatePageInput input);

    Task DeleteAsync(Guid id);
}
