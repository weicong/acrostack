using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 学员对某道课堂题目的最终答案（SessionQuestionId + ParticipantId 唯一）。
/// 截止前重复提交：Revision +1、LastSubmittedAt 更新为服务端时间、客观题重新判分。
/// RequestId 唯一索引实现幂等：相同 RequestId 重试返回首次处理结果，不产生重复记录。
/// </summary>
public class AnswerRecord : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public Guid SessionId { get; private set; }

    public Guid SessionQuestionId { get; private set; }

    public Guid ParticipantId { get; private set; }

    public string AnswerContent { get; private set; } = default!;

    /// <summary>学员第一次（本地）开始作答时间——由首次提交带入，仅用于诊断。</summary>
    public DateTimeOffset? FirstStartedAt { get; private set; }

    /// <summary>最后一次成功提交时间（服务端时间）。</summary>
    public DateTimeOffset LastSubmittedAt { get; private set; }

    /// <summary>修订次数：首次提交为 1，每次成功重新提交 +1。</summary>
    public int Revision { get; private set; }

    /// <summary>客观题判分结果；主观题为 null。</summary>
    public bool? IsCorrect { get; private set; }

    /// <summary>提交幂等键（客户端生成 UUID，唯一索引）。</summary>
    public string RequestId { get; private set; } = default!;

    private AnswerRecord()
    {
    }

    public AnswerRecord(
        Guid id,
        Guid sessionId,
        Guid sessionQuestionId,
        Guid participantId,
        string answerContent,
        DateTimeOffset? firstStartedAt,
        bool? isCorrect,
        string requestId,
        DateTimeOffset submittedAt,
        Guid? tenantId = null)
        : base(id)
    {
        SessionId = sessionId;
        SessionQuestionId = sessionQuestionId;
        ParticipantId = participantId;
        AnswerContent = answerContent;
        FirstStartedAt = firstStartedAt;
        LastSubmittedAt = submittedAt;
        Revision = 1;
        IsCorrect = isCorrect;
        RequestId = requestId;
        TenantId = tenantId;
    }

    /// <summary>截止前重新提交：更新答案内容、判分与时间戳。</summary>
    public void Resubmit(string answerContent, bool? isCorrect, DateTimeOffset serverNow)
    {
        AnswerContent = answerContent;
        IsCorrect = isCorrect;
        LastSubmittedAt = serverNow;
        Revision++;
    }

    /// <summary>平均答题用时统计用（秒）：首次提交相对开题的时长由统计服务计算。</summary>
    public double SecondsSinceFirstStart(DateTimeOffset openedAt)
    {
        return FirstStartedAt.HasValue
            ? Math.Max(0, (LastSubmittedAt - openedAt).TotalSeconds)
            : 0;
    }
}
