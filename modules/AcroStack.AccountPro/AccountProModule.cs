using AcroStack.AccountPro.Localization;
using Volo.Abp.Identity;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.AccountPro;

[DependsOn(typeof(AbpIdentityDomainModule), typeof(AbpOpenIddictDomainModule))]
public class AccountProModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AccountProModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<AccountProResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/AccountPro");
        });
    }
}
