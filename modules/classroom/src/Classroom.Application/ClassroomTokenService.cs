using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Classroom.Options;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using Volo.Abp.DependencyInjection;

namespace Classroom;

/// <summary>
/// 课堂短期令牌服务：学员/投屏专用 JWT（HMAC-SHA256），独立于教师的 OpenIddict 认证。
/// 使用 JsonWebTokenHandler（无 legacy claim 映射），保留自定义 claim 原始名称。
/// 令牌范围：仅对 SessionId 对应课堂有效，消费方必须校验 SessionId 匹配。
/// </summary>
public class ClassroomTokenService : IClassroomTokenService, ITransientDependency
{
    private readonly ClassroomOptions _options;
    private readonly ILogger<ClassroomTokenService> _logger;
    private readonly JsonWebTokenHandler _handler = new();

    public ClassroomTokenService(IOptions<ClassroomOptions> options, ILogger<ClassroomTokenService> logger)
    {
        _options = options.Value;
        _logger = logger;
    }

    public Task<ClassroomTokenIssuance> IssueStudentTokenAsync(Guid sessionId, Guid participantId, Guid? tenantId)
    {
        var validHours = ClassroomConsts.StudentTokenValidHours;
        return Task.FromResult(Issue(sessionId, participantId, ClassroomClientRole.Student, tenantId, validHours));
    }

    public Task<ClassroomTokenIssuance> IssuePresentationTokenAsync(Guid sessionId, Guid? tenantId)
    {
        var validHours = ClassroomConsts.PresentationTokenValidHours;
        return Task.FromResult(Issue(sessionId, null, ClassroomClientRole.Presentation, tenantId, validHours));
    }

    public ClassroomTokenPayload? TryValidate(string accessToken)
    {
        try
        {
            var result = _handler.ValidateToken(accessToken, CreateValidationParameters());
            if (!result.IsValid)
            {
                // 记录失败原因：密钥配置错误（如过短）会在这里持续失败，
                // 静默吞掉会让"配置坏了"伪装成"令牌无效"而无法排查。
                _logger.LogWarning("Classroom token validation failed: {Exception}",
                    result.Exception?.Message);
                return null;
            }

            var payload = ReadPayload(result.ClaimsIdentity);
            return payload;
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Classroom token validation threw; treating as invalid");
            return null;
        }
    }

    public TokenValidationParameters CreateValidationParameters()
        => CreateValidationParameters(_options);

    /// <summary>
    /// 静态工厂：模块配置阶段（AddJwtBearer 内联 lambda）无 DI scope，
    /// 由 HttpApi 模块从 IConfiguration 绑定 options 后直接调用，与实例方法共享同一逻辑。
    /// </summary>
    public static TokenValidationParameters CreateValidationParameters(ClassroomOptions options)
    {
        return new TokenValidationParameters
        {
            ValidIssuer = options.TokenIssuer,
            ValidAudience = options.TokenAudience,
            IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(options.TokenSigningKey)),
            ValidateIssuerSigningKey = true,
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromSeconds(30),
            NameClaimType = ClassroomClaimTypes.ParticipantId,
            RoleClaimType = ClassroomClaimTypes.ClientRole,
        };
    }

    private ClassroomTokenIssuance Issue(Guid sessionId, Guid? participantId, ClassroomClientRole role, Guid? tenantId, int validHours)
    {
        var now = DateTimeOffset.UtcNow;
        var expires = now.AddHours(validHours);

        var claims = new List<Claim>
        {
            // sub 令 ABP ICurrentUser.Id 生效（学员 = ParticipantId）
            new(JwtRegisteredClaimNames.Sub, (participantId ?? sessionId).ToString()),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new(ClassroomClaimTypes.SessionId, sessionId.ToString()),
            new(ClassroomClaimTypes.ClientRole, role.ToString().ToLowerInvariant()),
        };

        if (participantId.HasValue)
        {
            claims.Add(new Claim(ClassroomClaimTypes.ParticipantId, participantId.Value.ToString()));
        }

        if (tenantId.HasValue)
        {
            claims.Add(new Claim("tenantid", tenantId.Value.ToString()));
        }

        var descriptor = new SecurityTokenDescriptor
        {
            Issuer = _options.TokenIssuer,
            Audience = _options.TokenAudience,
            NotBefore = now.UtcDateTime,
            Expires = expires.UtcDateTime,
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_options.TokenSigningKey)),
                SecurityAlgorithms.HmacSha256),
            Subject = new ClaimsIdentity(claims),
        };

        var token = _handler.CreateToken(descriptor);
        return new ClassroomTokenIssuance
        {
            AccessToken = token,
            ExpiresInSeconds = validHours * 3600,
        };
    }

    private static ClassroomTokenPayload? ReadPayload(ClaimsIdentity identity)
    {
        var sessionId = identity.FindFirst(ClassroomClaimTypes.SessionId)?.Value;
        if (!Guid.TryParse(sessionId, out var parsedSessionId))
        {
            return null;
        }

        Guid? participantId = null;
        if (Guid.TryParse(identity.FindFirst(ClassroomClaimTypes.ParticipantId)?.Value, out var parsedParticipantId))
        {
            participantId = parsedParticipantId;
        }

        var role = identity.FindFirst(ClassroomClaimTypes.ClientRole)?.Value switch
        {
            "presentation" => ClassroomClientRole.Presentation,
            _ => ClassroomClientRole.Student,
        };

        Guid? tenantId = null;
        if (Guid.TryParse(identity.FindFirst("tenantid")?.Value, out var parsedTenantId))
        {
            tenantId = parsedTenantId;
        }

        return new ClassroomTokenPayload
        {
            SessionId = parsedSessionId,
            ParticipantId = participantId,
            ClientRole = role,
            TenantId = tenantId,
        };
    }
}
