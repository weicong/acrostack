using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;

namespace AcroStack.AccountPro;

[DependsOn(typeof(AbpIdentityDomainModule), typeof(AbpOpenIddictDomainModule))]
public class AccountProModule : AbpModule
{
}
