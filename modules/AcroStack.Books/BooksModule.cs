using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

namespace AcroStack.Books;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpMapperlyModule))]
public class BooksModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<BooksModule>();
    }
}
