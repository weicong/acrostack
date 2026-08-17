using System.Linq;
using System.Threading.Tasks;
using AcroStack.Services.AuditLogging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundWorkers;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Threading;
using Volo.Abp.Timing;

namespace AcroStack.BackgroundWorkers;

/// <summary>
/// Periodically deletes audit logs older than
/// <see cref="AuditLogCleanupOptions.RetentionPeriod"/>. Deletes in batches
/// of <see cref="AuditLogCleanupOptions.BatchSize"/> to avoid locking the
/// <c>AbpAuditLogs</c> table for too long. Mirrors ABP Commercial
/// AuditLogging Pro's <c>AuditLogCleanupBackgroundWorker</c>.
/// The worker runs on the host side and disables the
/// <see cref="IMultiTenant"/> query filter while deleting so that expired
/// logs from all tenants are cleaned up.
/// </summary>
public class AuditLogCleanupWorker : AsyncPeriodicBackgroundWorkerBase
{
    private readonly AuditLogCleanupOptions _options;
    private readonly IClock _clock;

    public AuditLogCleanupWorker(
        AbpAsyncTimer timer,
        IServiceScopeFactory serviceScopeFactory,
        IOptions<AuditLogCleanupOptions> options,
        IClock clock)
        : base(timer, serviceScopeFactory)
    {
        _options = options.Value;
        _clock = clock;
        Timer.Period = (int)_options.WorkerPeriod.TotalMilliseconds;
    }

    protected override async Task DoWorkAsync(PeriodicBackgroundWorkerContext workerContext)
    {
        if (!_options.IsEnabled)
        {
            return;
        }

        using var scope = ServiceScopeFactory.CreateScope();
        var repository = scope.ServiceProvider
            .GetRequiredService<IRepository<AuditLog, Guid>>();
        var dataFilter = scope.ServiceProvider
            .GetRequiredService<IDataFilter>();

        var cutoff = _clock.Now - _options.RetentionPeriod;
        var totalDeleted = 0;

        using (dataFilter.Disable<IMultiTenant>())
        {
            while (true)
            {
                var queryable = await repository.GetQueryableAsync();
                var ids = await queryable
                    .Where(x => x.ExecutionTime < cutoff)
                    .OrderBy(x => x.ExecutionTime)
                    .Take(_options.BatchSize)
                    .Select(x => x.Id)
                    .ToListAsync();

                if (ids.Count == 0)
                {
                    break;
                }

                await repository.DeleteManyAsync(ids, autoSave: true);
                totalDeleted += ids.Count;
            }
        }

        if (totalDeleted > 0)
        {
            Logger.LogInformation(
                "AuditLogCleanupWorker deleted {Count} expired audit logs older than {Cutoff}.",
                totalDeleted, cutoff);
        }
        else
        {
            Logger.LogDebug(
                "AuditLogCleanupWorker: no expired audit logs to delete (cutoff {Cutoff}).",
                cutoff);
        }
    }
}
