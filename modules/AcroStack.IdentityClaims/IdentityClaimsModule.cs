using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Identity;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

namespace AcroStack.IdentityClaims;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpIdentityDomainModule), typeof(AbpMapperlyModule))]
public class IdentityClaimsModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<IdentityClaimsModule>();
    }
}
