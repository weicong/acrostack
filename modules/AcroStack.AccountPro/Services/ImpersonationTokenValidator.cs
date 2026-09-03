using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using OpenIddict.Server;
using Volo.Abp.DependencyInjection;

namespace AcroStack.AccountPro;

/// <summary>
/// 在 <c>/connect/token</c> 端点上手工校验调用方携带的 Bearer 访问令牌。
/// </summary>
/// <remarks>
/// <para>OpenIddict 的验证中间件不会作用于 <c>/connect/token</c>（它是服务器端点，
/// 而不是受保护的资源），因此 <c>HttpContext.User</c> 永远为空。两个自定义 grant
/// （模拟登录、返回我的账户）都必须自行校验调用方身份，否则权限判定无从谈起。</para>
///
/// <para>校验使用 OpenIddict 服务器自身的签名密钥，保证只认可本服务签发的令牌，
/// 并校验 audience 以拒绝面向其他资源签发的令牌。</para>
/// </remarks>
public class ImpersonationTokenValidator : ITransientDependency
{
    private readonly OpenIddictServerOptions _serverOptions;
    private readonly ImpersonationOptions _impersonationOptions;

    public ImpersonationTokenValidator(
        IOptions<OpenIddictServerOptions> serverOptions,
        IOptions<ImpersonationOptions> impersonationOptions)
    {
        _serverOptions = serverOptions.Value;
        _impersonationOptions = impersonationOptions.Value;
    }

    /// <summary>
    /// 校验访问令牌，返回其 principal；令牌不可读、签名/受众/有效期任一不通过时返回 <c>null</c>。
    /// </summary>
    public ClaimsPrincipal? ValidateAccessToken(string token)
    {
        try
        {
            var handler = new JwtSecurityTokenHandler
            {
                // 保留原始 JWT 声明名（sub、role、preferred_username ...），
                // 避免被映射到 SOAP 风格的 URI，与 AbpClaimTypes 的预期一致。
                InboundClaimTypeMap = new Dictionary<string, string>()
            };

            if (!handler.CanReadToken(token))
            {
                return null;
            }

            var signingKeys = _serverOptions.SigningCredentials
                .Select(c => c.Key)
                .ToList();

            // Issuer 校验：OpenIddict 在未显式配置 Issuer 时会用请求 URL 作为
            // 签发者，配置期无从得知，因此此时只能放宽；一旦显式配置了 Issuer
            // （生产环境应从 AuthServer:Authority 配置），就严格执行校验。
            var issuer = _serverOptions.Issuer;
            var validateIssuer = issuer != null;

            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = validateIssuer,
                ValidIssuer = validateIssuer ? issuer!.ToString() : null,
                ValidateAudience = true,
                ValidAudience = _impersonationOptions.TokenAudience,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKeys = signingKeys,
                ClockSkew = TimeSpan.FromMinutes(1)
            };

            return handler.ValidateToken(token, validationParameters, out _);
        }
        catch
        {
            // 令牌格式非法、签名不匹配、过期等一律视为无效。
            return null;
        }
    }

    /// <summary>
    /// 解析 principal 上的 scope 集合，用于在签发新令牌时继承原会话的授权范围。
    /// </summary>
    /// <remarks>
    /// 由服务端 <see cref="ClaimsPrincipal"/> 直接构造时，scope 存放在 OpenIddict
    /// 私有的 <c>oi_scp</c> 声明中；而由已签发 JWT 还原出的 principal 只有标准的
    /// <c>scope</c> 声明（空格分隔的字符串）。两种形态都要支持，否则从请求头解析出
    /// 的令牌会丢失 scope。
    /// </remarks>
    public static ImmutableArray<string> ResolveScopes(ClaimsPrincipal principal)
    {
        var scopes = principal.GetScopes();
        if (scopes.Length > 0)
        {
            return scopes.ToImmutableArray();
        }

        var scopeClaim = principal.FindFirst(OpenIddictConstants.Claims.Scope)?.Value;
        if (!string.IsNullOrWhiteSpace(scopeClaim))
        {
            return scopeClaim
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToImmutableArray();
        }

        // 兜底：与常规登录一致的默认资源范围 + 刷新令牌。
        return new[] { "AcroStack", "offline_access" }.ToImmutableArray();
    }
}
