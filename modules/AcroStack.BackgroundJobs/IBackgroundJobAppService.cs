using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.BackgroundJobs;

public interface IBackgroundJobAppService : IApplicationService
{
    Task<BackgroundJobDto> GetAsync(Guid id);

    Task<PagedResultDto<BackgroundJobDto>> GetListAsync(GetBackgroundJobListInput input);

    Task DeleteAsync(Guid id);

    /// <summary>
    /// Resets a job so the worker picks it up again immediately: clears the
    /// abandoned flag, zeroes the try count and schedules the next try for
    /// now. Mirrors ABP Commercial BackgroundJobs Pro's requeue action.
    /// </summary>
    Task RequeueAsync(Guid id);

    /// <summary>
    /// Marks a job as abandoned so the worker stops retrying it. Mirrors ABP
    /// Commercial BackgroundJobs Pro's abandon action.
    /// </summary>
    Task AbandonAsync(Guid id);
}
