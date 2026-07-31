using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Polymorphic comment API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>CommentAppService</c> surface. Reads are public; creating a comment
/// requires only an authenticated user; deleting requires either being the
/// author or having the CMS Comments.Delete permission.
/// </summary>
public interface ICommentAppService : IApplicationService
{
    Task<PagedResultDto<CommentDto>> GetListForEntityAsync(CommentGetListInput input);

    Task<CommentDto> CreateAsync(CreateCommentInput input);

    Task DeleteAsync(Guid id);
}
