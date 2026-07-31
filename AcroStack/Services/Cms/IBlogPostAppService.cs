using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Blog post CRUD API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>BlogPostAppService</c> surface. Tag associations are synchronized on
/// create/update through the polymorphic EntityTag table.
/// </summary>
public interface IBlogPostAppService : IApplicationService
{
    Task<PagedResultDto<BlogPostDto>> GetListAsync(BlogPostGetListInput input);

    Task<BlogPostDto> GetAsync(Guid id);

    Task<BlogPostDto> GetBySlugAsync(Guid blogId, string slug);

    Task<BlogPostDto> CreateAsync(CreateBlogPostInput input);

    Task<BlogPostDto> UpdateAsync(Guid id, UpdateBlogPostInput input);

    Task DeleteAsync(Guid id);
}
