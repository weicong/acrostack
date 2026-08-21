using System;
using System.ComponentModel.DataAnnotations;

namespace Classroom.Dtos;

/// <summary>
/// 提交/修改答案 DTO。
/// ParticipantId 从令牌获取（禁止信任请求体）；ClientSubmittedAt 仅用于诊断，不用于截止判定。
/// </summary>
public class SubmitAnswerInputDto
{
    [Required]
    public Guid SessionQuestionId { get; set; }

    /// <summary>幂等键：客户端为每次提交生成 UUID。相同 RequestId 重试返回首次结果。</summary>
    [Required]
    [StringLength(64)]
    public string RequestId { get; set; } = default!;

    /// <summary>客户端提交时的课堂版本（服务端仅做合理性检查，不作为硬性拒绝条件）。</summary>
    public int ClassroomVersion { get; set; }

    [Required]
    [StringLength(ClassroomConsts.MaxAnswerContentLength)]
    public string AnswerContent { get; set; } = default!;

    /// <summary>学员（本地）开始作答时间，仅诊断用途。</summary>
    public DateTimeOffset? ClientStartedAt { get; set; }

    public DateTimeOffset ClientSubmittedAt { get; set; }
}

public class SubmitAnswerResultDto
{
    public Guid SessionQuestionId { get; set; }

    public Guid AnswerRecordId { get; set; }

    /// <summary>是否为幂等命中的重放（未新建/未修订）。</summary>
    public bool IsDuplicateRequest { get; set; }

    public int Revision { get; set; }

    public DateTimeOffset ServerSubmittedAt { get; set; }

    /// <summary>当前课堂版本（供客户端校准）。</summary>
    public int ClassroomVersion { get; set; }

    public DateTimeOffset ServerTime { get; set; }
}
