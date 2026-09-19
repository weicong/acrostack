using AcroStack.Impersonation.Localization;
using Volo.Abp.Application;
using Volo.Abp.Identity;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.Impersonation;

[DependsOn(
    typeof(AbpDddApplicationModule),
    typeof(AbpIdentityDomainModule),
    typeof(AbpOpenIddictDomainModule))]
public class ImpersonationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ImpersonationModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<ImpersonationResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Impersonation");
        });
    }
}
