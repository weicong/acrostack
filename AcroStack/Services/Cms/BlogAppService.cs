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
/// Implements blog container CRUD. Mirrors ABP Commercial CMS Kit Pro's
/// <c>BlogAppService</c>.
/// </summary>
public class BlogAppService : ApplicationService, IBlogAppService
{
    private readonly IRepository<Blog, Guid> _repository;

    public BlogAppService(IRepository<Blog, Guid> repository)
    {
        _repository = repository;
    }

    [AllowAnonymous]
    public async Task<PagedResultDto<BlogDto>> GetListAsync(BlogGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Name.Contains(input.Filter!) || x.Slug.Contains(input.Filter!));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var blogs = await AsyncExecuter.ToListAsync(query);
        return new PagedResultDto<BlogDto>(totalCount, blogs.Select(MapToDto).ToList());
    }

    [AllowAnonymous]
    public async Task<BlogDto> GetAsync(Guid id)
    {
        var blog = await _repository.GetAsync(id);
        return MapToDto(blog);
    }

    [AllowAnonymous]
    public async Task<BlogDto> GetBySlugAsync(string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var blog = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(b => b.Slug == slug))
            ?? throw new BusinessException("AcroStack:Cms:BlogNotFound");
        return MapToDto(blog);
    }

    [Authorize(AcroStackPermissions.Cms.Blogs.Create)]
    public async Task<BlogDto> CreateAsync(CreateBlogInput input)
    {
        await EnsureSlugUniqueAsync(input.Slug);

        var blog = new Blog(GuidGenerator.Create(), input.Name, input.Slug)
        {
            Description = input.Description,
        };
        await _repository.InsertAsync(blog);
        return MapToDto(blog);
    }

    [Authorize(AcroStackPermissions.Cms.Blogs.Update)]
    public async Task<BlogDto> UpdateAsync(Guid id, UpdateBlogInput input)
    {
        var blog = await _repository.GetAsync(id);

        if (blog.Slug != input.Slug)
        {
            await EnsureSlugUniqueAsync(input.Slug);
        }

        blog.Name = input.Name;
        blog.Slug = input.Slug;
        blog.Description = input.Description;
        await _repository.UpdateAsync(blog);
        return MapToDto(blog);
    }

    [Authorize(AcroStackPermissions.Cms.Blogs.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }

    private async Task EnsureSlugUniqueAsync(string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(queryable.Where(b => b.Slug == slug));
        if (exists)
        {
            throw new BusinessException("AcroStack:Cms:SlugAlreadyExists");
        }
    }

    private BlogDto MapToDto(Blog blog) => new()
    {
        Id = blog.Id,
        Name = blog.Name,
        Slug = blog.Slug,
        Description = blog.Description,
        CreationTime = blog.CreationTime,
        CreatorId = blog.CreatorId,
        LastModificationTime = blog.LastModificationTime,
        LastModifierId = blog.LastModifierId,
        IsDeleted = blog.IsDeleted,
        DeleterId = blog.DeleterId,
        DeletionTime = blog.DeletionTime,
    };
}
