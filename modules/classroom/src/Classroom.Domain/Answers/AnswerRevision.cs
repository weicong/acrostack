using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 答案修订历史（AnswerRecord 聚合子实体）。最终答案始终由 AnswerRecord 表示，
/// 此表仅用于审计"学员改了几次、每次改成什么"。
/// </summary>
public class AnswerRevision : Entity<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    public Guid AnswerRecordId { get; private set; }

    public string AnswerContent { get; private set; } = default!;

    public int Revision { get; private set; }

    public DateTimeOffset SubmittedAt { get; private set; }

    private AnswerRevision()
    {
    }

    public AnswerRevision(Guid id, Guid answerRecordId, string answerContent, int revision, DateTimeOffset submittedAt, Guid? tenantId = null)
        : base(id)
    {
        AnswerRecordId = answerRecordId;
        AnswerContent = answerContent;
        Revision = revision;
        SubmittedAt = submittedAt;
        TenantId = tenantId;
    }
}
