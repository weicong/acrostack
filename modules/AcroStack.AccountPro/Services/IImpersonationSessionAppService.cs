using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.AccountPro;

/// <summary>
/// 模拟登录会话的查询与撤销接口（对应 ABP Account Pro 中基于
/// <c>IdentityUserDelegation</c> 的模拟管理界面）。
/// </summary>
public interface IImpersonationSessionAppService : IApplicationService
{
    /// <summary>分页查询模拟登录历史。</summary>
    Task<PagedResultDto<ImpersonationSessionDto>> GetListAsync(GetImpersonationSessionListInput input);

    /// <summary>
    /// 撤销一个进行中的模拟会话。撤销后该会话无法再用于"返回我的账户"。
    /// 已结束或已撤销的会话再次调用为空操作（幂等）。
    /// </summary>
    Task RevokeAsync(Guid id);
}
