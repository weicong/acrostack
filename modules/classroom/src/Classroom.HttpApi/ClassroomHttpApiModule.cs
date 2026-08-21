using System;
using System.Threading.Tasks;
using Classroom.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace Classroom;

/// <summary>
/// Classroom HTTP API 层：手写控制器（教师控制流 / 学员 / 投屏，路径与提示词十四节一致）
/// + SignalR Hub + 课堂令牌认证方案。
/// </summary>
[DependsOn(
    typeof(ClassroomApplicationModule),
    typeof(AbpAspNetCoreMvcModule)
)]
public class ClassroomHttpApiModule : AbpModule
{
    /// <summary>学员/投屏课堂令牌认证方案名（独立于教师 OpenIddict 方案）。</summary>
    public const string ClassroomTokenScheme = "ClassroomToken";

    /// <summary>SignalR Hub 路径。</summary>
    public const string HubPath = "/signalr-hubs/classroom";

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        // 配置阶段直接绑定 Classroom 节（含 appsettings.secrets.json 的生产密钥）：
        // IConfigureNamedOptions 延迟注入在 ABP options 体系下未生效（IDX10500 无签名密钥），
        // 故在 AddJwtBearer 内联 lambda 中直接构建验证参数（与 IClassroomTokenService 共享静态工厂）。
        var configuration = context.Services.GetConfiguration();
        var classroomOptions = configuration.GetSection("Classroom").Get<ClassroomOptions>()
            ?? new ClassroomOptions();

        // 课堂短期令牌（学员/投屏）认证方案。
        // 注意使用无参 AddAuthentication()：带默认方案名的重载会覆盖宿主
        // （OpenIddict）的全局默认认证方案，导致所有 API 走本方案验证。
        context.Services
            .AddAuthentication()
            .AddJwtBearer(ClassroomTokenScheme, options =>
            {
                // 保持自定义 claim 原始名称（sessionid/participantid/clientrole），
                // 避免 JwtBearer 默认的 inbound claim 类型映射破坏解析
                options.MapInboundClaims = false;

                options.TokenValidationParameters =
                    ClassroomTokenService.CreateValidationParameters(classroomOptions);

                // WebSocket/SSE 传输无法设置 Authorization 头，令牌通过 query string 传递
                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = ctx =>
                    {
                        var accessToken = ctx.Request.Query["access_token"];
                        if (!string.IsNullOrEmpty(accessToken) &&
                            ctx.HttpContext.Request.Path.StartsWithSegments(HubPath))
                        {
                            ctx.Token = accessToken;
                        }

                        return Task.CompletedTask;
                    }
                };
            });

        // 保留 SignalR 多实例 Redis Backplane 配置入口（单实例 MVP 不启用，提示词八节）：
        // 宿主中执行 context.Services.AddSignalR().AddStackExchangeRedis("redis-connection-string")
    }
}
