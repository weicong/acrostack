using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace AcroStack.BackgroundJobs;

[Authorize(BackgroundJobsPermissions.Default)]
public class BackgroundJobAppService : AcroStackAppService, IBackgroundJobAppService
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
        var queryable = ApplyFilters(await _jobRepository.GetQueryableAsync(), input);

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        // Honor the caller's Sorting (e.g. "creationTime desc", "nextTryTime",
        // "tryCount"). Default to newest-first when not specified.
        var sorting = input.Sorting.IsNullOrWhiteSpace()
            ? nameof(BackgroundJobRecord.CreationTime) + " desc"
            : input.Sorting;

        var query = queryable
            .OrderBy(sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var jobs = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<BackgroundJobDto>(
            totalCount,
            jobs.Select(MapToDto).ToList()
        );
    }

    [Authorize(BackgroundJobsPermissions.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _jobRepository.DeleteAsync(id);
    }

    public async Task RequeueAsync(Guid id)
    {
        var job = await _jobRepository.GetAsync(id);
        job.IsAbandoned = false;
        job.TryCount = 0;
        job.NextTryTime = Clock.Now;
        await _jobRepository.UpdateAsync(job);
    }

    public async Task AbandonAsync(Guid id)
    {
        var job = await _jobRepository.GetAsync(id);
        job.IsAbandoned = true;
        await _jobRepository.UpdateAsync(job);
    }

    private static IQueryable<BackgroundJobRecord> ApplyFilters(IQueryable<BackgroundJobRecord> queryable, GetBackgroundJobListInput input)
    {
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

        return queryable;
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
