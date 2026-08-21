using System;
using Microsoft.IdentityModel.Tokens;

namespace Classroom;

/// <summary>课堂令牌载荷（从 JWT 解析；服务端据此校验身份与课堂匹配）。</summary>
public class ClassroomTokenPayload
{
    public Guid SessionId { get; set; }

    /// <summary>学员 Id；投屏令牌为 null。</summary>
    public Guid? ParticipantId { get; set; }

    public ClassroomClientRole ClientRole { get; set; }

    public Guid? TenantId { get; set; }

    public DateTimeOffset ExpiresAt { get; set; }
}

/// <summary>
/// 课堂短期令牌服务（学员/投屏专用 JWT，独立认证方案 ClassroomToken）。
/// 令牌仅对签发课堂有效：所有消费方必须校验 payload.SessionId 与目标课堂一致。
/// </summary>
public interface IClassroomTokenService
{
    Task<ClassroomTokenIssuance> IssueStudentTokenAsync(Guid sessionId, Guid participantId, Guid? tenantId);

    Task<ClassroomTokenIssuance> IssuePresentationTokenAsync(Guid sessionId, Guid? tenantId);

    /// <summary>解析并验证签名/过期时间。无效令牌返回 null（不抛异常，避免信息泄露）。</summary>
    ClassroomTokenPayload? TryValidate(string accessToken);

    /// <summary>构造 JwtBearer 方案使用的验证参数（与签发逻辑共享密钥与签发者配置）。</summary>
    TokenValidationParameters CreateValidationParameters();
}

public class ClassroomTokenIssuance
{
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }
}
