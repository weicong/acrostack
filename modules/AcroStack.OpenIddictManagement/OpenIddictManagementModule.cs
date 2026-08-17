using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;

namespace AcroStack.OpenIddictManagement;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpOpenIddictDomainModule))]
public class OpenIddictManagementModule : AbpModule
{
}
