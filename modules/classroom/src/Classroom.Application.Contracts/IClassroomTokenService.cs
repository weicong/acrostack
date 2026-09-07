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
/// 学员门户令牌载荷（不绑定单一课堂；身份为学员档案）。
/// </summary>
public class ClassroomPortalTokenPayload
{
    public Guid StudentProfileId { get; set; }

    public Guid? TenantId { get; set; }

    public DateTimeOffset ExpiresAt { get; set; }
}

/// <summary>
/// 课堂短期令牌服务（学员/投屏专用 JWT，独立认证方案 ClassroomToken）。
/// 令牌仅对签发课堂有效：所有消费方必须校验 payload.SessionId 与目标课堂一致。
/// 学员门户令牌（StudentPortal 角色）不绑定课堂，凭 StudentProfileId 访问 /api/student-portal/*。
/// </summary>
public interface IClassroomTokenService
{
    Task<ClassroomTokenIssuance> IssueStudentTokenAsync(Guid sessionId, Guid participantId, Guid? tenantId);

    Task<ClassroomTokenIssuance> IssuePresentationTokenAsync(Guid sessionId, Guid? tenantId);

    /// <summary>签发学员门户长期令牌（设备绑定；sub = StudentProfileId）。</summary>
    Task<ClassroomTokenIssuance> IssueStudentPortalTokenAsync(Guid studentProfileId, Guid? tenantId);

    /// <summary>解析并验证签名/过期时间。无效令牌返回 null（不抛异常，避免信息泄露）。
    /// 注意：学员门户令牌无 SessionId claim，由此方法解析会返回 null。</summary>
    ClassroomTokenPayload? TryValidate(string accessToken);

    /// <summary>构造 JwtBearer 方案使用的验证参数（与签发逻辑共享密钥与签发者配置）。</summary>
    TokenValidationParameters CreateValidationParameters();
}

public class ClassroomTokenIssuance
{
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }
}
