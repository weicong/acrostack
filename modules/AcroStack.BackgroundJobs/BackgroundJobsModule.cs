using AcroStack.BackgroundJobs.Localization;
using Volo.Abp.Application;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.BackgroundJobs;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpBackgroundJobsDomainModule))]
public class BackgroundJobsModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<BackgroundJobsModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<BackgroundJobsResource>("zh-Hans")
                .AddVirtualJson("/Localization/BackgroundJobs");
        });
    }
}
