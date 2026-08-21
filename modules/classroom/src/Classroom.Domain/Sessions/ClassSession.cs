using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 课堂场次聚合根。状态转换全部经过 <see cref="ClassSessionStateMachine"/> 校验；
/// 每次关键状态变化 Version 递增（客户端据此检测事件丢失并重新拉取快照）。
/// </summary>
public class ClassSession : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public Guid QuizId { get; private set; }

    /// <summary>课堂创建者（教师 IdentityUser Id）。</summary>
    public Guid TeacherId { get; private set; }

    /// <summary>课堂码（唯一索引）。课堂 Finished 后失效；未开始课堂超过 ClassroomCodeValidHours 失效。</summary>
    public string ClassroomCode { get; private set; } = default!;

    public ClassSessionStatus Status { get; private set; }

    /// <summary>当前题（SessionQuestion Id）；null 表示尚未开放任何题。</summary>
    public Guid? CurrentSessionQuestionId { get; private set; }

    /// <summary>课堂版本号：开始/开题/截止/公布统计/公布答案/下一题/结束均 +1。</summary>
    public int Version { get; private set; }

    public DateTimeOffset? StartedAt { get; private set; }

    public DateTimeOffset? FinishedAt { get; private set; }

    /// <summary>当前已开放/已讲评的题目数量（冗余计数，用于"下一题"定位）。</summary>
    public int CurrentQuestionNumber { get; private set; }

    private ClassSession()
    {
    }

    public ClassSession(
        Guid id,
        Guid quizId,
        Guid teacherId,
        string classroomCode,
        Guid? tenantId = null)
        : base(id)
    {
        QuizId = quizId;
        TeacherId = teacherId;
        ClassroomCode = classroomCode;
        Status = ClassSessionStatus.Preparing;
        Version = 0;
        TenantId = tenantId;
    }

    /// <summary>开始课堂：Preparing -> Waiting。</summary>
    public void Start(DateTimeOffset now)
    {
        ClassSessionStateMachine.EnsureTransition(this, ClassSessionStatus.Waiting);
        Status = ClassSessionStatus.Waiting;
        StartedAt = now;
        BumpVersion();
    }

    /// <summary>
    /// 开放题目：Waiting/Explaining -> Answering，并指向当前题。
    /// 前置条件（仅一题开放）由应用服务校验当前题已非 Open。
    /// </summary>
    public void OpenQuestion(SessionQuestion question, DateTimeOffset now)
    {
        ClassSessionStateMachine.EnsureTransition(this, ClassSessionStatus.Answering);
        Status = ClassSessionStatus.Answering;
        CurrentSessionQuestionId = question.Id;
        CurrentQuestionNumber = question.Order;
        BumpVersion();
    }

    /// <summary>截止当前题：Answering -> Explaining。</summary>
    public void CloseCurrentQuestion(DateTimeOffset now)
    {
        ClassSessionStateMachine.EnsureTransition(this, ClassSessionStatus.Explaining);
        Status = ClassSessionStatus.Explaining;
        BumpVersion();
    }

    /// <summary>结束课堂：任意非 Finished -> Finished。</summary>
    public void Finish(DateTimeOffset now)
    {
        ClassSessionStateMachine.EnsureTransition(this, ClassSessionStatus.Finished);
        Status = ClassSessionStatus.Finished;
        FinishedAt = now;
        BumpVersion();
    }

    /// <summary>重置回讲评状态（公布统计/答案不改课堂状态，但版本号递增以驱动客户端刷新）。</summary>
    public void BumpVersionOnPublish()
    {
        BumpVersion();
    }

    private void BumpVersion()
    {
        Version++;
    }
}
