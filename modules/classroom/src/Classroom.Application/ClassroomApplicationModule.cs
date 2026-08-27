using System;
using System.Linq;
using Classroom.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Classroom;

[DependsOn(
    typeof(ClassroomDomainModule),
    typeof(ClassroomApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpCachingModule),
    typeof(AbpAuthorizationModule)
)]
public class ClassroomApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();

        // TokenSigningKey 属敏感配置：生产环境若仍为示例值/长度不足，
        // 通过 ValidateOnStart 在应用启动阶段直接失败（fail-fast）。
        context.Services
            .AddOptions<ClassroomOptions>()
            .Bind(configuration.GetSection("Classroom"))
            .ValidateOnStart();

        context.Services
            .AddSingleton<IValidateOptions<ClassroomOptions>, ProductionSigningKeyValidator>();
    }
}

/// <summary>
/// 生产环境签名密钥校验：与 OpenIddict 证书一样属于敏感凭据，若仍为仓库内置的
/// 示例值或长度不足（HMAC-SHA256 建议 >= 32 字节），拒绝启动，避免带着弱密钥对外签发课堂令牌。
/// </summary>
internal sealed class ProductionSigningKeyValidator(IHostEnvironment environment)
    : IValidateOptions<ClassroomOptions>
{
    /// <summary>开发期默认密钥（appsettings.json / 代码兜底值），生产环境命中即失败。</summary>
    private static readonly string[] KnownDefaultSigningKeys =
    {
        "dev-only-classroom-signing-key-change-in-production!!",
        "change-me-in-production-classroom-signing-key!",
    };

    public ValidateOptionsResult Validate(string? name, ClassroomOptions options)
    {
        if (Environments.Development.Equals(
                environment.EnvironmentName,
                StringComparison.OrdinalIgnoreCase))
        {
            return ValidateOptionsResult.Success;
        }

        var key = options.TokenSigningKey;
        if (string.IsNullOrWhiteSpace(key)
            || key.Length < 32
            || KnownDefaultSigningKeys.Contains(key, StringComparer.Ordinal))
        {
            return ValidateOptionsResult.Fail(
                "Classroom:TokenSigningKey is missing, too short (<32 chars), or still set to a known default. "
                + "Provide a strong random key via appsettings.secrets.json or environment variable "
                + "(Classroom__TokenSigningKey) before running outside Development.");
        }

        return ValidateOptionsResult.Success;
    }
}
