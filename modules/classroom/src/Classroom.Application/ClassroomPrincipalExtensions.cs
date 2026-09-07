using System;
using System.Security.Claims;

namespace Classroom;

/// <summary>
/// 从已认证的 ClaimsPrincipal 解析课堂令牌载荷。
/// 认证中间件（ClassroomToken JwtBearer 方案）完成验签后，业务层用此扩展读取身份
/// ——服务端不信任请求体中的 SessionId/ParticipantId（提示词十二节）。
/// </summary>
public static class ClassroomPrincipalExtensions
{
    public static ClassroomTokenPayload? GetClassroomTokenPayload(this ClaimsPrincipal principal)
    {
        if (principal is null)
        {
            return null;
        }

        var sessionId = principal.FindFirst(ClassroomClaimTypes.SessionId)?.Value;
        if (!Guid.TryParse(sessionId, out var parsedSessionId))
        {
            return null;
        }

        Guid? participantId = null;
        if (Guid.TryParse(principal.FindFirst(ClassroomClaimTypes.ParticipantId)?.Value, out var parsedParticipantId))
        {
            participantId = parsedParticipantId;
        }

        var role = principal.FindFirst(ClassroomClaimTypes.ClientRole)?.Value switch
        {
            "presentation" => ClassroomClientRole.Presentation,
            _ => ClassroomClientRole.Student,
        };

        Guid? tenantId = null;
        if (Guid.TryParse(principal.FindFirst("tenantid")?.Value, out var parsedTenantId))
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

    /// <summary>
    /// 解析学员门户令牌载荷（role=studentportal，身份为 StudentProfileId）。
    /// 非门户令牌（学员/投屏课堂令牌）一律返回 null，防止课堂令牌越权访问门户。
    /// </summary>
    public static ClassroomPortalTokenPayload? GetStudentPortalTokenPayload(this ClaimsPrincipal principal)
    {
        if (principal is null)
        {
            return null;
        }

        if (!string.Equals(
                principal.FindFirst(ClassroomClaimTypes.ClientRole)?.Value,
                nameof(ClassroomClientRole.StudentPortal),
                StringComparison.OrdinalIgnoreCase))
        {
            return null;
        }

        if (!Guid.TryParse(principal.FindFirst(ClassroomClaimTypes.StudentProfileId)?.Value, out var profileId))
        {
            return null;
        }

        Guid? tenantId = null;
        if (Guid.TryParse(principal.FindFirst("tenantid")?.Value, out var parsedTenantId))
        {
            tenantId = parsedTenantId;
        }

        return new ClassroomPortalTokenPayload
        {
            StudentProfileId = profileId,
            TenantId = tenantId,
        };
    }
}
