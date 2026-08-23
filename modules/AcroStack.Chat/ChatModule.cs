using AcroStack.AppUsers;
using AcroStack.Chat.Localization;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace AcroStack.Chat;

// DependsOn 必须声明对 AppUsersModule 的依赖：Chat 模块的服务
// （ContactAppService/ConversationAppService）直接注入
// IRepository<AppUser, Guid>，该实体及其仓储映射由 AppUsers 模块注册。
[DependsOn(
    typeof(AppUsersModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpBlobStoringModule),
    typeof(AbpMapperlyModule))]
public class ChatModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<ChatModule>();

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ChatModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<ChatResource>("zh-Hans")
                .AddVirtualJson("/Localization/Chat");
        });

        // 结构化错误码：Chat:xxx 错误码通过模块资源本地化
        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Chat", typeof(ChatResource));
        });
    }
}
