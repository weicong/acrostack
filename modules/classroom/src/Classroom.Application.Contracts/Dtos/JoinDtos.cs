using System.ComponentModel.DataAnnotations;

namespace Classroom.Dtos;

public class JoinClassroomInputDto
{
    [Required]
    [StringLength(ClassroomConsts.ClassroomCodeLength)]
    public string ClassroomCode { get; set; } = default!;

    [Required]
    [StringLength(ClassroomConsts.MaxNicknameLength)]
    public string Nickname { get; set; } = default!;

    [StringLength(ClassroomConsts.MaxStudentNumberLength)]
    public string? StudentNumber { get; set; }
}

public class JoinResultDto
{
    public Guid SessionId { get; set; }

    public Guid ParticipantId { get; set; }

    /// <summary>课堂范围短期 JWT（学员角色）。客户端持久化后用于快照/提交/SignalR。</summary>
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }

    public string Nickname { get; set; } = default!;

    /// <summary>分配到的学习小组编号（1 起，每组默认 5 人顺序分配）。</summary>
    public int GroupIndex { get; set; }

    public ClassSessionStatus SessionStatus { get; set; }
}
