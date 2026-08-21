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

    public ClassSessionStatus SessionStatus { get; set; }
}
