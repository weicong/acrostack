using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 学员（匿名身份）。重复昵称允许，教师端通过 Id 区分；
/// 同一身份断线重连通过课堂短期令牌（ParticipantId claim）实现，无需重新 Join。
/// </summary>
public class Participant : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public Guid SessionId { get; private set; }

    public string Nickname { get; private set; } = default!;

    public string? StudentNumber { get; private set; }

    public DateTimeOffset JoinedAt { get; private set; }

    public DateTimeOffset LastSeenAt { get; private set; }

    public OnlineStatus OnlineStatus { get; private set; }

    private Participant()
    {
    }

    public Participant(Guid id, Guid sessionId, string nickname, string? studentNumber, DateTimeOffset joinedAt, Guid? tenantId = null)
        : base(id)
    {
        SessionId = sessionId;
        Nickname = nickname;
        StudentNumber = studentNumber;
        JoinedAt = joinedAt;
        LastSeenAt = joinedAt;
        OnlineStatus = OnlineStatus.Online;
        TenantId = tenantId;
    }

    public void MarkSeen(DateTimeOffset now, OnlineStatus status)
    {
        LastSeenAt = now;
        OnlineStatus = status;
    }
}
