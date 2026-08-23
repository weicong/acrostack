using AcroStack.FileManagement.Localization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.FileManagement;

[DependsOn(typeof(AbpDddApplicationModule), typeof(AbpAspNetCoreMvcModule), typeof(AbpBlobStoringModule), typeof(AbpMapperlyModule))]
public class FileManagementModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<FileManagementModule>();

        Configure<FileManagementOptions>(context.Services.GetConfiguration().GetSection("FileManagement"));

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<FileManagementModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<FileManagementResource>("zh-Hans")
                .AddVirtualJson("/Localization/FileManagement");
        });

        // 结构化错误码：FileManagement:xxx 错误码通过模块资源本地化
        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("FileManagement", typeof(FileManagementResource));
        });
    }
}
