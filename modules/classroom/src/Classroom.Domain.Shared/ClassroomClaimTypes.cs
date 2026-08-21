namespace Classroom;

/// <summary>
/// Classroom 模块自定义 JWT claim 名称。
/// 学员/投屏短期令牌（独立认证方案 ClassroomToken）携带这些 claim；
/// 教师令牌走 ABP OpenIddict（sub/role），不使用此处常量。
/// </summary>
public static class ClassroomClaimTypes
{
    /// <summary>课堂 Id（Guid 字符串）。</summary>
    public const string SessionId = "classroom_session_id";

    /// <summary>学员 Id（Guid 字符串）；投屏令牌为空。</summary>
    public const string ParticipantId = "classroom_participant_id";

    /// <summary>客户端角色：student / presentation（<see cref="ClassroomClientRole"/>）。</summary>
    public const string ClientRole = "classroom_client_role";
}
