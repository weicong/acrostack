using Volo.Abp.Application;
using Volo.Abp.Modularity;

namespace AcroStack.BackgroundJobs;

[DependsOn(typeof(AbpDddApplicationModule))]
public class BackgroundJobsModule : AbpModule
{
}
