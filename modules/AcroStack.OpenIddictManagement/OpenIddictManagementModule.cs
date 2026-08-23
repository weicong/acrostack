using AcroStack.OpenIddictManagement.Localization;
using Volo.Abp.Application;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.OpenIddictManagement;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpOpenIddictDomainModule))]
public class OpenIddictManagementModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<OpenIddictManagementModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<OpenIddictManagementResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/OpenIddictManagement");
        });

        // 结构化错误码：OpenIddictManagement:xxx 错误码通过模块资源本地化
        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("OpenIddictManagement", typeof(OpenIddictManagementResource));
        });
    }
}
