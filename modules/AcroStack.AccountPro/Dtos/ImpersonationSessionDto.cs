using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.AccountPro;

/// <summary>模拟登录会话的展示模型。</summary>
public class ImpersonationSessionDto : CreationAuditedEntityDto<Guid>
{
    /// <summary>记录归属租户（模拟者所在租户，host 为 <c>null</c>）。</summary>
    public Guid? TenantId { get; set; }

    public Guid ImpersonatorUserId { get; set; }

    public Guid? ImpersonatorTenantId { get; set; }

    public string? ImpersonatorUserName { get; set; }

    public Guid TargetUserId { get; set; }

    public Guid? TargetTenantId { get; set; }

    public string? TargetUserName { get; set; }

    public string? ClientId { get; set; }

    public DateTime? EndTime { get; set; }

    public bool IsRevoked { get; set; }

    public Guid? RevokedByUserId { get; set; }

    public DateTime? RevocationTime { get; set; }

    /// <summary>会话是否仍在进行中。</summary>
    public bool IsActive { get; set; }
}
