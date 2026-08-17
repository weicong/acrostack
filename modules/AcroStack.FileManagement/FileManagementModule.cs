using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

namespace AcroStack.FileManagement;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpAspNetCoreMvcModule), typeof(AbpBlobStoringModule), typeof(AbpMapperlyModule))]
public class FileManagementModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<FileManagementModule>();

        Configure<FileManagementOptions>(context.Services.GetConfiguration().GetSection("FileManagement"));
    }
}
