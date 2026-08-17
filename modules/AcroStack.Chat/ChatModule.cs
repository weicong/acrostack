using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

namespace AcroStack.Chat;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpAspNetCoreMvcModule), typeof(AbpBlobStoringModule), typeof(AbpMapperlyModule))]
public class ChatModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<ChatModule>();
    }
}
