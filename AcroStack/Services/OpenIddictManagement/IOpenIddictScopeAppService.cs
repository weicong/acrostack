using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.OpenIddictManagement;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.OpenIddictManagement;

public interface IOpenIddictScopeAppService : IApplicationService
{
    Task<OpenIddictScopeDto> GetAsync(Guid id);
    Task<PagedResultDto<OpenIddictScopeDto>> GetListAsync(GetOpenIddictScopeListInput input);
    Task DeleteAsync(Guid id);
}
