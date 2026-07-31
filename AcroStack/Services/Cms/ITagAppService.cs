using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Tag lookup API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>TagAppService</c> read surface (writes happen through BlogPost tags).
/// </summary>
public interface ITagAppService : IApplicationService
{
    Task<PagedResultDto<TagDto>> GetListAsync(TagGetListInput input);
}
