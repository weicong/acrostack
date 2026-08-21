namespace Classroom;

/// <summary>
/// 学员在线状态（基于 SignalR 连接 + LastSeenAt 心跳推断，允许短暂误差）。
/// 在线状态只影响教师端展示，不影响答案提交的准确性。
/// </summary>
public enum OnlineStatus
{
    Offline = 0,
    Online = 1
}

/// <summary>
/// 课堂短期令牌的客户端角色（写入 JWT claim "client_role"）：
/// Student 可提交答案；Presentation 只读匿名数据。
/// </summary>
public enum ClassroomClientRole
{
    Student = 1,
    Presentation = 2
}
