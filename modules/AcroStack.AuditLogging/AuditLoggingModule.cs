using AcroStack.AuditLogging.Localization;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Application;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundWorkers;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.AuditLogging;

[DependsOn(
    typeof(AbpDddApplicationModule),
    typeof(AbpAuditLoggingDomainModule),
    typeof(AbpBackgroundWorkersModule)
)]
public class AuditLoggingModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();
        Configure<AuditLogOptions>(configuration.GetSection("AuditLog"));
        Configure<AuditLogCleanupOptions>(configuration.GetSection("AuditLogCleanup"));

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AuditLoggingModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<AuditLoggingResource>("zh-Hans")
                .AddVirtualJson("/Localization/AuditLogging");
        });
    }

    public override async Task OnApplicationInitializationAsync(
        ApplicationInitializationContext context
    )
    {
        await context.AddBackgroundWorkerAsync<AuditLogCleanupWorker>();
    }
}
