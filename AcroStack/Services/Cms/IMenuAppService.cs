using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Menu container CRUD API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>MenuAppService</c> surface.
/// </summary>
public interface IMenuAppService : IApplicationService
{
    Task<ListResultDto<MenuDto>> GetListAsync();

    Task<MenuDto> GetAsync(Guid id);

    Task<MenuDto> GetByNameAsync(string name);

    Task<MenuDto> CreateAsync(CreateMenuInput input);

    Task<MenuDto> UpdateAsync(Guid id, UpdateMenuInput input);

    Task DeleteAsync(Guid id);
}
