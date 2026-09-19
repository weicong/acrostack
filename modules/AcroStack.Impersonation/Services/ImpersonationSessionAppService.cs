using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Timing;

namespace AcroStack.Impersonation;

/// <summary>
/// 模拟登录会话管理：审计（谁在何时模拟了谁）与撤销（终止进行中的模拟）。
/// </summary>
/// <remarks>
/// <para>权限为 <see cref="ImpersonationPermissions.ManageImpersonationSessions"/>，
/// 仅管理员可见。</para>
///
/// <para>注意撤销的生效边界：已签发的模拟访问令牌在其有效期内仍可被使用
/// （JWT 自包含，资源端不再回查数据库），撤销只保证：
/// 该会话无法再用于"返回我的账户"，且审计可追溯。
/// 需要立即失效时应配合缩短访问令牌有效期或启用引用令牌 / introspection。</para>
/// </remarks>
[Authorize(ImpersonationPermissions.ManageImpersonationSessions)]
public class ImpersonationSessionAppService
    : ImpersonationAppServiceBase,
        IImpersonationSessionAppService
{
    private readonly IRepository<ImpersonationSession, Guid> _sessionRepository;
    private readonly IClock _clock;

    public ImpersonationSessionAppService(
        IRepository<ImpersonationSession, Guid> sessionRepository,
        IClock clock)
    {
        _sessionRepository = sessionRepository;
        _clock = clock;
    }

    public async Task<PagedResultDto<ImpersonationSessionDto>> GetListAsync(
        GetImpersonationSessionListInput input)
    {
        var queryable = await _sessionRepository.GetQueryableAsync();

        queryable = queryable
            .WhereIf(input.ImpersonatorUserId.HasValue,
                x => x.ImpersonatorUserId == input.ImpersonatorUserId!.Value)
            .WhereIf(input.TargetUserId.HasValue,
                x => x.TargetUserId == input.TargetUserId!.Value)
            .WhereIf(input.StartTime.HasValue,
                x => x.CreationTime >= input.StartTime!.Value)
            .WhereIf(input.EndTime.HasValue,
                x => x.CreationTime <= input.EndTime!.Value)
            .WhereIf(input.IsActive.HasValue,
                x => input.IsActive!.Value
                    ? x.EndTime == null && !x.IsRevoked
                    : x.EndTime != null || x.IsRevoked);

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace()
                ? nameof(ImpersonationSession.CreationTime) + " desc"
                : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var sessions = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<ImpersonationSessionDto>(
            totalCount,
            sessions.Select(MapToDto).ToList()
        );
    }

    public async Task RevokeAsync(Guid id)
    {
        var session = await _sessionRepository.FindAsync(id);
        if (session == null)
        {
            return;
        }

        if (!session.IsActive)
        {
            return; // 已结束或已撤销：幂等返回。
        }

        session.Revoke(CurrentUser.Id, _clock.Now);
        await _sessionRepository.UpdateAsync(session, autoSave: true);
    }

    private static ImpersonationSessionDto MapToDto(ImpersonationSession session)
    {
        return new ImpersonationSessionDto
        {
            Id = session.Id,
            CreationTime = session.CreationTime,
            CreatorId = session.CreatorId,
            ImpersonatorUserId = session.ImpersonatorUserId,
            ImpersonatorUserName = session.ImpersonatorUserName,
            TargetUserId = session.TargetUserId,
            TargetUserName = session.TargetUserName,
            ClientId = session.ClientId,
            EndTime = session.EndTime,
            IsRevoked = session.IsRevoked,
            RevokedByUserId = session.RevokedByUserId,
            RevocationTime = session.RevocationTime,
            IsActive = session.IsActive
        };
    }
}
