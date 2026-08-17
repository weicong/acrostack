using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.AppUsers;

public interface IAppUserAppService : IApplicationService
{
    Task<PagedResultDto<AppUserDto>> GetListAsync(GetAppUsersInput input);
    Task DeleteAsync(Guid id);
}
