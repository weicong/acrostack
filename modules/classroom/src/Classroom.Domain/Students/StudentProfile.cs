using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 学员档案（跨课堂持久身份），以手机号为租户内唯一键。
/// 首次加入课堂时建立（姓名/电话/单位/职务）；之后凭 手机号+姓名 直接加入其他课堂。
/// 答题数据仍挂在课堂内的 Participant 上（Participant.StudentProfileId 引用本聚合），
/// 档案本身不承载课堂行为。手机号为身份锚点，创建后不可修改。
/// </summary>
public class StudentProfile : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; private set; }

    /// <summary>姓名：加入课堂时作为展示名（Participant.Nickname），重新加入时用于身份核对。</summary>
    public string Name { get; private set; } = default!;

    /// <summary>手机号（租户内唯一，规范化后存储：去除空格与连字符）。</summary>
    public string Phone { get; private set; } = default!;

    public string Unit { get; private set; } = default!;

    public string Position { get; private set; } = default!;

    private StudentProfile()
    {
    }

    public StudentProfile(Guid id, string name, string phone, string unit, string position, Guid? tenantId = null)
        : base(id)
    {
        Name = name;
        Phone = phone;
        Unit = unit;
        Position = position;
        TenantId = tenantId;
    }

    /// <summary>更新资料。手机号不可修改（身份锚点）。</summary>
    public void Update(string name, string unit, string position)
    {
        Name = name;
        Unit = unit;
        Position = position;
    }
}
