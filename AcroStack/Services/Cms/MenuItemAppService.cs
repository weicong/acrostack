using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements menu item CRUD. Mirrors ABP Commercial CMS Kit Pro's
/// <c>MenuItemAppService</c>. <see cref="ParentId"/> is validated against
/// the same menu to prevent cross-menu trees.
/// </summary>
public class MenuItemAppService : ApplicationService, IMenuItemAppService
{
    private readonly IRepository<MenuItem, Guid> _repository;
    private readonly IRepository<Menu, Guid> _menuRepository;

    public MenuItemAppService(
        IRepository<MenuItem, Guid> repository,
        IRepository<Menu, Guid> menuRepository)
    {
        _repository = repository;
        _menuRepository = menuRepository;
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Create)]
    public async Task<MenuItemDto> CreateAsync(CreateMenuItemInput input)
    {
        await EnsureMenuExistsAsync(input.MenuId);
        if (input.ParentId.HasValue)
        {
            await EnsureParentValidAsync(input.ParentId.Value, input.MenuId);
        }

        var item = new MenuItem(GuidGenerator.Create(), input.MenuId, input.DisplayName)
        {
            ParentId = input.ParentId,
            Url = input.Url,
            Order = input.Order,
            Icon = input.Icon,
            Target = string.IsNullOrWhiteSpace(input.Target) ? "_self" : input.Target,
        };
        await _repository.InsertAsync(item);

        return MapToDto(item);
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Update)]
    public async Task<MenuItemDto> UpdateAsync(Guid id, UpdateMenuItemInput input)
    {
        var item = await _repository.GetAsync(id);

        if (input.ParentId.HasValue)
        {
            if (input.ParentId.Value == id)
            {
                throw new BusinessException("AcroStack:Cms:ParentMenuItem");
            }
            await EnsureParentValidAsync(input.ParentId.Value, item.MenuId);
        }

        item.ParentId = input.ParentId;
        item.DisplayName = input.DisplayName;
        item.Url = input.Url;
        item.Order = input.Order;
        item.Icon = input.Icon;
        item.Target = string.IsNullOrWhiteSpace(input.Target) ? "_self" : input.Target;
        await _repository.UpdateAsync(item);

        return MapToDto(item);
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);

        // Cascade-delete descendant items (one level deep; deep trees would
        // require a recursive walk but UI keeps the depth shallow).
        var queryable = await _repository.GetQueryableAsync();
        var children = await AsyncExecuter.ToListAsync(queryable.Where(i => i.ParentId == id));
        foreach (var child in children)
        {
            await _repository.DeleteAsync(child);
        }
    }

    private async Task EnsureMenuExistsAsync(Guid menuId)
    {
        var queryable = await _menuRepository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(queryable.Where(m => m.Id == menuId));
        if (!exists)
        {
            throw new BusinessException("AcroStack:Cms:MenuNotFound");
        }
    }

    private async Task EnsureParentValidAsync(Guid parentId, Guid menuId)
    {
        var queryable = await _repository.GetQueryableAsync();
        var parent = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(i => i.Id == parentId))
            ?? throw new BusinessException("AcroStack:Cms:MenuNotFound");
        if (parent.MenuId != menuId)
        {
            throw new BusinessException("AcroStack:Cms:ParentMenuItem");
        }
    }

    private static MenuItemDto MapToDto(MenuItem item) => new()
    {
        Id = item.Id,
        MenuId = item.MenuId,
        ParentId = item.ParentId,
        DisplayName = item.DisplayName,
        Url = item.Url,
        Order = item.Order,
        Icon = item.Icon,
        Target = item.Target,
        CreationTime = item.CreationTime,
        CreatorId = item.CreatorId,
        LastModificationTime = item.LastModificationTime,
        LastModifierId = item.LastModifierId,
    };
}
