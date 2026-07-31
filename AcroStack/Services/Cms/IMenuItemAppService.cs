using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Menu item CRUD API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>MenuItemAppService</c> surface.
/// </summary>
public interface IMenuItemAppService : IApplicationService
{
    Task<MenuItemDto> CreateAsync(CreateMenuItemInput input);

    Task<MenuItemDto> UpdateAsync(Guid id, UpdateMenuItemInput input);

    Task DeleteAsync(Guid id);
}
