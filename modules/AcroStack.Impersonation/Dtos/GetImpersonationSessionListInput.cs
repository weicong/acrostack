using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.AccountPro;

/// <summary>模拟登录会话的查询条件。</summary>
public class GetImpersonationSessionListInput : PagedAndSortedResultRequestDto
{
    /// <summary>按模拟者（管理员）过滤。</summary>
    public Guid? ImpersonatorUserId { get; set; }

    /// <summary>按被模拟用户过滤。</summary>
    public Guid? TargetUserId { get; set; }

    /// <summary>会话创建时间的起始值。</summary>
    public DateTime? StartTime { get; set; }

    /// <summary>会话创建时间的截止值。</summary>
    public DateTime? EndTime { get; set; }

    /// <summary>
    /// 仅列出进行中（<c>true</c>）或已结束（<c>false</c>）的会话；
    /// 为 <c>null</c> 时不过滤。
    /// </summary>
    public bool? IsActive { get; set; }
}
