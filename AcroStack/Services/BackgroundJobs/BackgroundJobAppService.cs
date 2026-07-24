using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.BackgroundJobs;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.BackgroundJobs;

[Authorize(AcroStackPermissions.BackgroundJobs.Default)]
public class BackgroundJobAppService : ApplicationService, IBackgroundJobAppService
{
    private readonly IRepository<BackgroundJobRecord, Guid> _jobRepository;

    public BackgroundJobAppService(IRepository<BackgroundJobRecord, Guid> jobRepository)
    {
        _jobRepository = jobRepository;
    }

    public async Task<BackgroundJobDto> GetAsync(Guid id)
    {
        var job = await _jobRepository.GetAsync(id);
        return MapToDto(job);
    }

    public async Task<PagedResultDto<BackgroundJobDto>> GetListAsync(GetBackgroundJobListInput input)
    {
        var queryable = await _jobRepository.GetQueryableAsync();

        if (!input.JobName.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.JobName == input.JobName);
        }

        if (input.IsAbandoned.HasValue)
        {
            queryable = queryable.Where(x => x.IsAbandoned == input.IsAbandoned.Value);
        }

        if (input.StartCreationTime.HasValue)
        {
            queryable = queryable.Where(x => x.CreationTime >= input.StartCreationTime.Value);
        }

        if (input.EndCreationTime.HasValue)
        {
            queryable = queryable.Where(x => x.CreationTime <= input.EndCreationTime.Value);
        }

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x =>
                (x.JobName != null && x.JobName.Contains(input.Filter)) ||
                (x.JobArgs != null && x.JobArgs.Contains(input.Filter)));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderByDescending(x => x.CreationTime)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var jobs = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<BackgroundJobDto>(
            totalCount,
            jobs.Select(MapToDto).ToList()
        );
    }

    [Authorize(AcroStackPermissions.BackgroundJobs.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _jobRepository.DeleteAsync(id);
    }

    private static BackgroundJobDto MapToDto(BackgroundJobRecord job)
    {
        return new BackgroundJobDto
        {
            Id = job.Id,
            JobName = job.JobName,
            JobArgs = job.JobArgs,
            TryCount = job.TryCount,
            CreationTime = job.CreationTime,
            NextTryTime = job.NextTryTime,
            LastTryTime = job.LastTryTime,
            IsAbandoned = job.IsAbandoned,
        };
    }
}
