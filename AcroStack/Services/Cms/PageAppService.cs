using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using System.Linq.Dynamic.Core;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements static page CRUD. Mirrors ABP Commercial CMS Kit Pro's
/// <c>PageAppService</c>. Get/GetList/GetBySlug are anonymous-readable;
/// writes are guarded by <see cref="AcroStackPermissions.Cms.Pages"/>.
/// </summary>
public class PageAppService : ApplicationService, IPageAppService
{
    private readonly IRepository<Page, Guid> _repository;

    public PageAppService(IRepository<Page, Guid> repository)
    {
        _repository = repository;
    }

    [AllowAnonymous]
    public async Task<PagedResultDto<PageDto>> GetListAsync(PageGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Title.Contains(input.Filter!) || x.Slug.Contains(input.Filter!));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var pages = await AsyncExecuter.ToListAsync(query);
        return new PagedResultDto<PageDto>(totalCount, pages.Select(MapToDto).ToList());
    }

    [AllowAnonymous]
    public async Task<PageDto> GetAsync(Guid id)
    {
        var page = await _repository.GetAsync(id);
        return MapToDto(page);
    }

    [AllowAnonymous]
    public async Task<PageDto> GetBySlugAsync(string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var page = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(p => p.Slug == slug))
            ?? throw new BusinessException("AcroStack:Cms:PageNotFound");
        return MapToDto(page);
    }

    [Authorize(AcroStackPermissions.Cms.Pages.Create)]
    public async Task<PageDto> CreateAsync(CreatePageInput input)
    {
        await EnsureSlugUniqueAsync(input.Slug);

        var page = new Page(GuidGenerator.Create(), input.Title, input.Slug, input.Content)
        {
            Description = input.Description,
        };
        await _repository.InsertAsync(page);
        return MapToDto(page);
    }

    [Authorize(AcroStackPermissions.Cms.Pages.Update)]
    public async Task<PageDto> UpdateAsync(Guid id, UpdatePageInput input)
    {
        var page = await _repository.GetAsync(id);

        if (page.Slug != input.Slug)
        {
            await EnsureSlugUniqueAsync(input.Slug);
        }

        page.Title = input.Title;
        page.Slug = input.Slug;
        page.Content = input.Content;
        page.Description = input.Description;
        await _repository.UpdateAsync(page);
        return MapToDto(page);
    }

    [Authorize(AcroStackPermissions.Cms.Pages.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }

    private async Task EnsureSlugUniqueAsync(string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(queryable.Where(p => p.Slug == slug));
        if (exists)
        {
            throw new BusinessException("AcroStack:Cms:SlugAlreadyExists");
        }
    }

    private PageDto MapToDto(Page page) => new()
    {
        Id = page.Id,
        Title = page.Title,
        Slug = page.Slug,
        Content = page.Content,
        Description = page.Description,
        CreationTime = page.CreationTime,
        CreatorId = page.CreatorId,
        LastModificationTime = page.LastModificationTime,
        LastModifierId = page.LastModifierId,
        IsDeleted = page.IsDeleted,
        DeleterId = page.DeleterId,
        DeletionTime = page.DeletionTime,
    };
}
