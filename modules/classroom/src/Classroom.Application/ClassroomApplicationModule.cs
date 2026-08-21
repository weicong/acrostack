using Classroom.Options;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Classroom;

[DependsOn(
    typeof(ClassroomDomainModule),
    typeof(ClassroomApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpCachingModule),
    typeof(AbpAuthorizationModule)
)]
public class ClassroomApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<ClassroomOptions>(context.Services.GetConfiguration().GetSection("Classroom"));
    }
}
