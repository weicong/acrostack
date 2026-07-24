using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.BackgroundJobs;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.BackgroundJobs;

public interface IBackgroundJobAppService : IApplicationService
{
    Task<BackgroundJobDto> GetAsync(Guid id);
    Task<PagedResultDto<BackgroundJobDto>> GetListAsync(GetBackgroundJobListInput input);
    Task DeleteAsync(Guid id);
}
