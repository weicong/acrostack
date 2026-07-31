using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Blog container CRUD API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>BlogAppService</c> surface.
/// </summary>
public interface IBlogAppService : IApplicationService
{
    Task<PagedResultDto<BlogDto>> GetListAsync(BlogGetListInput input);

    Task<BlogDto> GetAsync(Guid id);

    Task<BlogDto> GetBySlugAsync(string slug);

    Task<BlogDto> CreateAsync(CreateBlogInput input);

    Task<BlogDto> UpdateAsync(Guid id, UpdateBlogInput input);

    Task DeleteAsync(Guid id);
}
