using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Application;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundWorkers;
using Volo.Abp.Modularity;

namespace AcroStack.AuditLogging;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpAuditLoggingDomainModule), typeof(AbpBackgroundWorkersModule))]
public class AuditLoggingModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();
        Configure<AuditLogOptions>(configuration.GetSection("AuditLog"));
        Configure<AuditLogCleanupOptions>(configuration.GetSection("AuditLogCleanup"));
    }

    public override async Task OnApplicationInitializationAsync(ApplicationInitializationContext context)
    {
        await context.AddBackgroundWorkerAsync<AuditLogCleanupWorker>();
    }
}
