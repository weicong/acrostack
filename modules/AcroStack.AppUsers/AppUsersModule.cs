using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

namespace AcroStack.AppUsers;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpMapperlyModule))]
public class AppUsersModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<AppUsersModule>();
    }
}
