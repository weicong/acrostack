using Volo.Abp.Application;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace AcroStack.BackgroundJobs;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpBackgroundJobsDomainModule))]
public class BackgroundJobsModule : AbpModule
{
}
