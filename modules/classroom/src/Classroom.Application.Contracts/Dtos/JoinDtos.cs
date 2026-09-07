using System.ComponentModel.DataAnnotations;

namespace Classroom.Dtos;

public class PreJoinClassroomInputDto
{
    // 上限取 MaxLength（6）而非生成长度（4）：兼容历史 6 位字母数字课堂码的加入
    [Required]
    [StringLength(ClassroomConsts.ClassroomCodeMaxLength)]
    public string ClassroomCode { get; set; } = default!;

    [Required]
    [StringLength(ClassroomConsts.MaxPhoneLength)]
    public string Phone { get; set; } = default!;
}

/// <summary>探测结果：NeedProfile=true 表示该手机号在目标租户无学员档案，加入时须补齐姓名/单位/职务。</summary>
public class PreJoinResultDto
{
    public bool NeedProfile { get; set; }
}

public class JoinClassroomInputDto
{
    // 上限取 MaxLength（6）而非生成长度（4）：兼容历史 6 位字母数字课堂码的加入
    [Required]
    [StringLength(ClassroomConsts.ClassroomCodeMaxLength)]
    public string ClassroomCode { get; set; } = default!;

    /// <summary>手机号：学员档案唯一键。已注册时须与档案匹配。</summary>
    [Required]
    [StringLength(ClassroomConsts.MaxPhoneLength)]
    public string Phone { get; set; } = default!;

    /// <summary>姓名。档案已存在时必须与注册姓名一致（防误用他人手机号）；不存在时作为档案姓名与展示名。</summary>
    [Required]
    [StringLength(ClassroomConsts.MaxStudentNameLength)]
    public string Name { get; set; } = default!;

    /// <summary>首次加入（无档案）时必填。</summary>
    [StringLength(ClassroomConsts.MaxUnitLength)]
    public string? Unit { get; set; }

    /// <summary>首次加入（无档案）时必填。</summary>
    [StringLength(ClassroomConsts.MaxPositionLength)]
    public string? Position { get; set; }
}

public class JoinResultDto
{
    public Guid SessionId { get; set; }

    public Guid ParticipantId { get; set; }

    /// <summary>课堂范围短期 JWT（学员角色）。客户端持久化后用于快照/提交/SignalR。</summary>
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }

    /// <summary>展示名（= 学员姓名）。</summary>
    public string Nickname { get; set; } = default!;

    /// <summary>分配到的学习小组编号（1 起，每组默认 5 人顺序分配）。重复进入同一课堂时返回首次分配结果。</summary>
    public int GroupIndex { get; set; }

    public ClassSessionStatus SessionStatus { get; set; }

    /// <summary>学员档案 Id；历史匿名学员为 null。</summary>
    public Guid? StudentProfileId { get; set; }

    /// <summary>学员门户长期令牌（设备绑定，用于免填加入与课后浏览）。</summary>
    public string? StudentToken { get; set; }

    public int StudentTokenExpiresInSeconds { get; set; }

    public string? Unit { get; set; }

    public string? Position { get; set; }
}
