using AcroStack.AppUsers;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;

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
    }
}
