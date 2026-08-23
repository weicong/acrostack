using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.IdentityClaims;

[Authorize(IdentityClaimsPermissions.UserClaims)]
public class IdentityUserClaimAppService : AcroStackAppService, IIdentityUserClaimAppService
{
    private readonly IdentityUserManager _userManager;
    private readonly IRepository<IdentityUserClaim, Guid> _claimRepository;

    public IdentityUserClaimAppService(
        IdentityUserManager userManager,
        IRepository<IdentityUserClaim, Guid> claimRepository)
    {
        _userManager = userManager;
        _claimRepository = claimRepository;
    }

    public async Task<List<IdentityClaimDto>> GetListAsync(Guid userId)
    {
        // 通过 UserManager 加载用户（不存在时由 ABP 抛出 EntityNotFoundException），
        // 声明的读取也走 Manager，保持与领域模型一致。
        var user = await _userManager.GetByIdAsync(userId);
        var claims = await _userManager.GetClaimsAsync(user);

        // Manager 返回的 Claim 不携带数据库行主键，
        // 这里从仓储补充 (Type, Value) -> Id 映射，供前端更新/删除时定位行。
        var queryable = await _claimRepository.GetQueryableAsync();
        var rows = await AsyncExecuter.ToListAsync(
            queryable.Where(x => x.UserId == userId));

        var rowMap = rows
            .GroupBy(x => (x.ClaimType, x.ClaimValue))
            .ToDictionary(g => g.Key, g => g.First().Id);

        return claims
            .OrderBy(c => c.Type)
            .Select(c => new IdentityClaimDto
            {
                Id = rowMap.TryGetValue((c.Type, c.Value ?? string.Empty), out var rowId)
                    ? rowId
                    : Guid.Empty,
                UserId = userId,
                ClaimType = c.Type,
                ClaimValue = c.Value,
            })
            .ToList();
    }

    public async Task<IdentityClaimDto> CreateAsync(CreateIdentityUserClaimDto input)
    {
        var user = await _userManager.GetByIdAsync(input.UserId);

        // 走 UserManager 新增声明：自动刷新 SecurityStamp 并发布
        // 声明变更缓存失效事件，不直接写仓储绕过领域逻辑。
        var result = await _userManager.AddClaimAsync(
            user, new Claim(input.ClaimType, input.ClaimValue));

        if (!result.Succeeded)
        {
            throw new BusinessException(
                "IdentityClaims:IdentityUserClaimOperationFailed",
                string.Join("; ", result.Errors.Select(e => e.Description)));
        }

        // Manager 不返回新行主键，读回该行以补全 DTO 的 Id。
        var queryable = await _claimRepository.GetQueryableAsync();
        var row = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(x =>
                x.UserId == input.UserId &&
                x.ClaimType == input.ClaimType &&
                x.ClaimValue == input.ClaimValue));

        return new IdentityClaimDto
        {
            Id = row?.Id ?? Guid.Empty,
            UserId = input.UserId,
            ClaimType = input.ClaimType,
            ClaimValue = input.ClaimValue,
        };
    }

    public async Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input)
    {
        // 仓储仅用于读取旧行拿旧值，不再直接写仓储。
        var existing = await _claimRepository.GetAsync(id);

        // 通过 UserManager 替换声明（刷新 SecurityStamp + 缓存失效），
        // 替换操作保留原有行主键不变。
        var user = await _userManager.GetByIdAsync(existing.UserId);
        var result = await _userManager.ReplaceClaimAsync(
            user,
            new Claim(existing.ClaimType, existing.ClaimValue),
            new Claim(input.ClaimType, input.ClaimValue));

        if (!result.Succeeded)
        {
            throw new BusinessException(
                "IdentityClaims:IdentityUserClaimOperationFailed",
                string.Join("; ", result.Errors.Select(e => e.Description)));
        }

        return new IdentityClaimDto
        {
            Id = id,
            UserId = existing.UserId,
            ClaimType = input.ClaimType,
            ClaimValue = input.ClaimValue,
        };
    }

    public async Task DeleteAsync(Guid id)
    {
        var existing = await _claimRepository.GetAsync(id);

        // 通过 UserManager 移除声明，保证缓存失效事件被正确发布。
        var user = await _userManager.GetByIdAsync(existing.UserId);
        var result = await _userManager.RemoveClaimAsync(
            user, new Claim(existing.ClaimType, existing.ClaimValue));

        if (!result.Succeeded)
        {
            throw new BusinessException(
                "IdentityClaims:IdentityUserClaimOperationFailed",
                string.Join("; ", result.Errors.Select(e => e.Description)));
        }
    }
}
