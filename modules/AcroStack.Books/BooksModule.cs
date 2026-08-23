using AcroStack.Books.Localization;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Localization;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.Books;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpMapperlyModule))]
public class BooksModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<BooksModule>();

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<BooksModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<BooksResource>("zh-Hans")
                .AddVirtualJson("/Localization/Books");
        });
    }
}
