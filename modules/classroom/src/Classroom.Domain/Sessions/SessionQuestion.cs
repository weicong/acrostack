using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 课堂题目（每场次从 Quiz 展开生成一份）。状态转换经 <see cref="SessionQuestionStateMachine"/> 校验。
/// EndsAt 是服务端绝对时间：客户端倒计时据此计算，最终超时判定以服务端时间为准。
/// </summary>
public class SessionQuestion : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public Guid SessionId { get; private set; }

    public Guid QuestionId { get; private set; }

    /// <summary>在课堂中的顺序（1 起）。</summary>
    public int Order { get; private set; }

    public SessionQuestionStatus Status { get; private set; }

    /// <summary>计划作答时长（秒），开题时由教师指定。</summary>
    public int DurationSeconds { get; private set; }

    public DateTimeOffset? OpenedAt { get; private set; }

    public DateTimeOffset? EndsAt { get; private set; }

    public DateTimeOffset? ClosedAt { get; private set; }

    public DateTimeOffset? StatisticsPublishedAt { get; private set; }

    public DateTimeOffset? AnswerPublishedAt { get; private set; }

    private SessionQuestion()
    {
    }

    public SessionQuestion(Guid id, Guid sessionId, Guid questionId, int order, Guid? tenantId = null)
        : base(id)
    {
        SessionId = sessionId;
        QuestionId = questionId;
        Order = order;
        Status = SessionQuestionStatus.Pending;
        TenantId = tenantId;
    }

    /// <summary>开放题目：Pending -> Open。EndsAt 由服务端时间计算（晚于 EndsAt 的提交被拒绝）。</summary>
    public void Open(DateTimeOffset now, int durationSeconds)
    {
        SessionQuestionStateMachine.EnsureTransition(this, SessionQuestionStatus.Open);
        Status = SessionQuestionStatus.Open;
        DurationSeconds = durationSeconds;
        OpenedAt = now;
        EndsAt = now.AddSeconds(durationSeconds);
    }

    /// <summary>截止题目：Open -> Closed。Closed 后不再接收答案。</summary>
    public void Close(DateTimeOffset now)
    {
        SessionQuestionStateMachine.EnsureTransition(this, SessionQuestionStatus.Closed);
        Status = SessionQuestionStatus.Closed;
        ClosedAt = now;
    }

    /// <summary>公布匿名统计：Closed/StatisticsPublished -> StatisticsPublished（幂等但版本号由课堂聚合负责）。</summary>
    public void PublishStatistics(DateTimeOffset now)
    {
        SessionQuestionStateMachine.EnsureTransition(this, SessionQuestionStatus.StatisticsPublished);
        Status = SessionQuestionStatus.StatisticsPublished;
        StatisticsPublishedAt = now;
    }

    /// <summary>公布正确答案与解析：Closed/StatisticsPublished -> AnswerPublished。</summary>
    public void PublishAnswer(DateTimeOffset now)
    {
        SessionQuestionStateMachine.EnsureTransition(this, SessionQuestionStatus.AnswerPublished);
        Status = SessionQuestionStatus.AnswerPublished;
        AnswerPublishedAt = now;
    }

    /// <summary>题目当前是否可接收提交（Open 且未到 EndsAt）。</summary>
    public bool IsAcceptingAnswers(DateTimeOffset serverNow)
    {
        return Status == SessionQuestionStatus.Open
               && EndsAt.HasValue
               && serverNow < EndsAt.Value;
    }
}
