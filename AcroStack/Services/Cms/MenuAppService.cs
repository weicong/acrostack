using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements menu container CRUD with item loading. Mirrors ABP
/// Commercial CMS Kit Pro's <c>MenuAppService</c>.
/// </summary>
public class MenuAppService : ApplicationService, IMenuAppService
{
    private readonly IRepository<Menu, Guid> _repository;
    private readonly IRepository<MenuItem, Guid> _itemRepository;

    public MenuAppService(
        IRepository<Menu, Guid> repository,
        IRepository<MenuItem, Guid> itemRepository)
    {
        _repository = repository;
        _itemRepository = itemRepository;
    }

    [AllowAnonymous]
    public async Task<ListResultDto<MenuDto>> GetListAsync()
    {
        var queryable = await _repository.GetQueryableAsync();
        var menus = await AsyncExecuter.ToListAsync(queryable.OrderBy(m => m.Name));
        return new ListResultDto<MenuDto>(menus.Select(m => new MenuDto
        {
            Id = m.Id,
            Name = m.Name,
            CreationTime = m.CreationTime,
            CreatorId = m.CreatorId,
            LastModificationTime = m.LastModificationTime,
            LastModifierId = m.LastModifierId,
        }).ToList());
    }

    [AllowAnonymous]
    public async Task<MenuDto> GetAsync(Guid id)
    {
        var menu = await _repository.GetAsync(id);
        return await MapWithItemsAsync(menu);
    }

    [AllowAnonymous]
    public async Task<MenuDto> GetByNameAsync(string name)
    {
        var queryable = await _repository.GetQueryableAsync();
        var menu = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(m => m.Name == name))
            ?? throw new BusinessException("AcroStack:Cms:MenuNotFound");
        return await MapWithItemsAsync(menu);
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Create)]
    public async Task<MenuDto> CreateAsync(CreateMenuInput input)
    {
        await EnsureNameUniqueAsync(input.Name);

        var menu = new Menu(GuidGenerator.Create(), input.Name);
        await _repository.InsertAsync(menu);

        return new MenuDto
        {
            Id = menu.Id,
            Name = menu.Name,
            Items = new List<MenuItemDto>(),
            CreationTime = menu.CreationTime,
            CreatorId = menu.CreatorId,
        };
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Update)]
    public async Task<MenuDto> UpdateAsync(Guid id, UpdateMenuInput input)
    {
        var menu = await _repository.GetAsync(id);

        if (menu.Name != input.Name)
        {
            await EnsureNameUniqueAsync(input.Name);
        }

        menu.Name = input.Name;
        await _repository.UpdateAsync(menu);

        return await MapWithItemsAsync(menu);
    }

    [Authorize(AcroStackPermissions.Cms.Menus.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);

        // Cascade-delete the menu's items.
        var itemQueryable = await _itemRepository.GetQueryableAsync();
        var items = await AsyncExecuter.ToListAsync(itemQueryable.Where(i => i.MenuId == id));
        foreach (var item in items)
        {
            await _itemRepository.DeleteAsync(item);
        }
    }

    private async Task EnsureNameUniqueAsync(string name)
    {
        var queryable = await _repository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(queryable.Where(m => m.Name == name));
        if (exists)
        {
            throw new BusinessException("AcroStack:Cms:SlugAlreadyExists");
        }
    }

    private async Task<MenuDto> MapWithItemsAsync(Menu menu)
    {
        var itemQueryable = await _itemRepository.GetQueryableAsync();
        var items = await AsyncExecuter.ToListAsync(
            itemQueryable.Where(i => i.MenuId == menu.Id).OrderBy(i => i.Order).ThenBy(i => i.DisplayName));

        return new MenuDto
        {
            Id = menu.Id,
            Name = menu.Name,
            Items = items.Select(MapItemToDto).ToList(),
            CreationTime = menu.CreationTime,
            CreatorId = menu.CreatorId,
            LastModificationTime = menu.LastModificationTime,
            LastModifierId = menu.LastModifierId,
            IsDeleted = menu.IsDeleted,
            DeleterId = menu.DeleterId,
            DeletionTime = menu.DeletionTime,
        };
    }

    private static MenuItemDto MapItemToDto(MenuItem item) => new()
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
