using AcroStack.IdentityClaims.Localization;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Identity;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.IdentityClaims;

[DependsOn(
    typeof(AbpDddApplicationModule),
    typeof(AbpIdentityDomainModule),
    typeof(AbpIdentityDomainSharedModule),
    typeof(AbpMapperlyModule)
)]
public class IdentityClaimsModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<IdentityClaimsModule>();

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<IdentityClaimsModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options
                .Resources.Add<IdentityClaimsResource>("zh-Hans")
                .AddVirtualJson("/Localization/IdentityClaims");
        });

        // 结构化错误码：IdentityClaims:xxx 错误码通过模块资源本地化
        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("IdentityClaims", typeof(IdentityClaimsResource));
        });
    }
}
