using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.AccountPro;

/// <summary>
/// 模拟登录会话记录，对应 ABP Account Pro 的 <c>IdentityUserDelegation</c> 概念。
///
/// <para>此前本项目采用"无状态"方案：把管理员的原始 access token 塞进模拟令牌的
/// <c>impersonator_token</c> claim，前端凭它恢复管理员会话。那等于把管理员的完整
/// 有效凭据交给被模拟端（任何拿到模拟令牌的人都能提取出来继续使用），且无法审计
/// 与撤销进行中的模拟会话。</para>
///
/// <para>改为服务端持久化会话后：</para>
/// <list type="bullet">
/// <item>模拟令牌只携带会话 Id（无法据以冒用管理员身份）；</item>
/// <item>"返回我的账户"由 <c>BackToImpersonator</c> grant 重新为管理员签发令牌；</item>
/// <item>会话记录本身即审计凭据（谁、何时、模拟了谁、何时结束）；</item>
/// <item>管理员可主动撤销会话。</item>
/// </list>
/// </summary>
public class ImpersonationSession : CreationAuditedAggregateRoot<Guid>, IMultiTenant
{
    /// <summary>
    /// 记录归属租户：取模拟者所在租户（host 为 <c>null</c>）。
    /// 这样 host 管理员能看到自己发起的模拟，租户管理员只能看到本租户内的模拟。
    /// </summary>
    public virtual Guid? TenantId { get; protected set; }

    /// <summary>发起模拟的管理员 Id。</summary>
    public virtual Guid ImpersonatorUserId { get; protected set; }

    /// <summary>管理员所在租户（host 管理员为 <c>null</c>）。</summary>
    public virtual Guid? ImpersonatorTenantId { get; protected set; }

    /// <summary>管理员用户名快照（用户被删除后仍可追溯）。</summary>
    public virtual string? ImpersonatorUserName { get; protected set; }

    /// <summary>被模拟用户 Id。</summary>
    public virtual Guid TargetUserId { get; protected set; }

    /// <summary>被模拟用户所在租户（租户模拟时为租户 Id）。</summary>
    public virtual Guid? TargetTenantId { get; protected set; }

    /// <summary>被模拟用户名快照。</summary>
    public virtual string? TargetUserName { get; protected set; }

    /// <summary>发起模拟时使用的 OAuth2 <c>client_id</c>。</summary>
    public virtual string? ClientId { get; protected set; }

    /// <summary>
    /// 会话结束时间（管理员"返回我的账户"或会话被撤销时写入）。
    /// 为 <c>null</c> 表示模拟进行中。
    /// </summary>
    public virtual DateTime? EndTime { get; protected set; }

    /// <summary>是否被管理员主动撤销（区别于正常结束）。</summary>
    public virtual bool IsRevoked { get; protected set; }

    /// <summary>撤销者 Id。</summary>
    public virtual Guid? RevokedByUserId { get; protected set; }

    /// <summary>撤销时间。</summary>
    public virtual DateTime? RevocationTime { get; protected set; }

    /// <summary>会话是否仍处于进行中（未结束、未撤销）。</summary>
    public bool IsActive => !IsRevoked && EndTime == null;

    protected ImpersonationSession()
    {
    }

    public ImpersonationSession(
        Guid id,
        Guid impersonatorUserId,
        Guid? impersonatorTenantId,
        string? impersonatorUserName,
        Guid targetUserId,
        Guid? targetTenantId,
        string? targetUserName,
        string? clientId,
        DateTime creationTime)
        : base(id)
    {
        ImpersonatorUserId = impersonatorUserId;
        ImpersonatorTenantId = impersonatorTenantId;
        ImpersonatorUserName = impersonatorUserName;
        TargetUserId = targetUserId;
        TargetTenantId = targetTenantId;
        TargetUserName = targetUserName;
        ClientId = clientId;

        // 显式赋值而不依赖审计拦截器：/connect/token 不在 ABP 的 UoW/审计
        // 中间件管线内，审计属性填充不可依赖。
        CreatorId = impersonatorUserId;
        CreationTime = creationTime;

        // 归属租户 = 模拟者所在租户（见 TenantId 注释）。
        TenantId = impersonatorTenantId;
    }

    /// <summary>结束会话（"返回我的账户"时调用）。已结束的会话保持原状，保证幂等。</summary>
    public void End(DateTime endTime)
    {
        if (EndTime != null)
        {
            return;
        }

        EndTime = endTime;
    }

    /// <summary>撤销会话：禁止"返回我的账户"，并标记撤销人与时间。</summary>
    public void Revoke(Guid? revokedByUserId, DateTime revocationTime)
    {
        if (IsRevoked)
        {
            return;
        }

        IsRevoked = true;
        RevokedByUserId = revokedByUserId;
        RevocationTime = revocationTime;

        // 撤销即视为会话终止，未结束的会话一并关闭。
        EndTime ??= revocationTime;
    }
}
