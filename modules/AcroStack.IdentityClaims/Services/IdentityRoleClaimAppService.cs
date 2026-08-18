using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.IdentityClaims;

[Authorize(IdentityClaimsPermissions.RoleClaims)]
public class IdentityRoleClaimAppService : AcroStackAppService, IIdentityRoleClaimAppService
{
    private readonly IdentityRoleManager _roleManager;
    private readonly IIdentityRoleRepository _roleRepository;
    private readonly IRepository<IdentityRoleClaim, Guid> _claimRepository;

    public IdentityRoleClaimAppService(
        IdentityRoleManager roleManager,
        IIdentityRoleRepository roleRepository,
        IRepository<IdentityRoleClaim, Guid> claimRepository)
    {
        _roleManager = roleManager;
        _roleRepository = roleRepository;
        _claimRepository = claimRepository;
    }

    public async Task<List<IdentityClaimDto>> GetListAsync(Guid roleId)
    {
        // 通过 IIdentityRoleRepository 加载角色（不存在时抛 EntityNotFoundException），
        // 声明的读取走 RoleManager，保持与领域模型一致。
        var role = await FindRoleAsync(roleId);
        var claims = await _roleManager.GetClaimsAsync(role);

        // Manager 返回的 Claim 不携带数据库行主键，
        // 这里从仓储补充 (Type, Value) -> Id 映射，供前端更新/删除时定位行。
        var queryable = await _claimRepository.GetQueryableAsync();
        var rows = await AsyncExecuter.ToListAsync(
            queryable.Where(x => x.RoleId == roleId));

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
                RoleId = roleId,
                ClaimType = c.Type,
                ClaimValue = c.Value,
            })
            .ToList();
    }

    public async Task<IdentityClaimDto> CreateAsync(CreateIdentityRoleClaimDto input)
    {
        var role = await FindRoleAsync(input.RoleId);

        // 走 RoleManager 新增声明，发布声明变更缓存失效事件，
        // 不直接写仓储绕过领域逻辑。
        var result = await _roleManager.AddClaimAsync(
            role, new Claim(input.ClaimType, input.ClaimValue));

        if (!result.Succeeded)
        {
            throw new BusinessException(
                "AcroStack:IdentityRoleClaimOperationFailed",
                string.Join("; ", result.Errors.Select(e => e.Description)));
        }

        // Manager 不返回新行主键，读回该行以补全 DTO 的 Id。
        var queryable = await _claimRepository.GetQueryableAsync();
        var row = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(x =>
                x.RoleId == input.RoleId &&
                x.ClaimType == input.ClaimType &&
                x.ClaimValue == input.ClaimValue));

        return new IdentityClaimDto
        {
            Id = row?.Id ?? Guid.Empty,
            RoleId = input.RoleId,
            ClaimType = input.ClaimType,
            ClaimValue = input.ClaimValue,
        };
    }

    public async Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input)
    {
        // 仓储仅用于读取旧行拿旧值，不再直接写仓储。
        var existing = await _claimRepository.GetAsync(id);

        // RoleManager 没有 ReplaceClaimAsync（那是 UserManager 的 API），
        // 用 Remove + Add 组合，同样走 Manager 以发布缓存失效事件。
        // 注意：这会删除旧行再插入新行，主键会变化。
        var role = await FindRoleAsync(existing.RoleId);
        var oldClaim = new Claim(existing.ClaimType, existing.ClaimValue);
        var newClaim = new Claim(input.ClaimType, input.ClaimValue);

        if (oldClaim.Type != newClaim.Type || oldClaim.Value != newClaim.Value)
        {
            var removeResult = await _roleManager.RemoveClaimAsync(role, oldClaim);
            if (!removeResult.Succeeded)
            {
                throw new BusinessException(
                    "AcroStack:IdentityRoleClaimOperationFailed",
                    string.Join("; ", removeResult.Errors.Select(e => e.Description)));
            }

            var addResult = await _roleManager.AddClaimAsync(role, newClaim);
            if (!addResult.Succeeded)
            {
                throw new BusinessException(
                    "AcroStack:IdentityRoleClaimOperationFailed",
                    string.Join("; ", addResult.Errors.Select(e => e.Description)));
            }

            // 读回新行以补全 DTO 的新主键。
            var queryable = await _claimRepository.GetQueryableAsync();
            var row = await AsyncExecuter.FirstOrDefaultAsync(
                queryable.Where(x =>
                    x.RoleId == existing.RoleId &&
                    x.ClaimType == input.ClaimType &&
                    x.ClaimValue == input.ClaimValue));

            return new IdentityClaimDto
            {
                Id = row?.Id ?? id,
                RoleId = existing.RoleId,
                ClaimType = input.ClaimType,
                ClaimValue = input.ClaimValue,
            };
        }

        return new IdentityClaimDto
        {
            Id = id,
            RoleId = existing.RoleId,
            ClaimType = input.ClaimType,
            ClaimValue = input.ClaimValue,
        };
    }

    public async Task DeleteAsync(Guid id)
    {
        var existing = await _claimRepository.GetAsync(id);

        // 通过 RoleManager 移除声明，保证缓存失效事件被正确发布。
        var role = await FindRoleAsync(existing.RoleId);
        var result = await _roleManager.RemoveClaimAsync(
            role, new Claim(existing.ClaimType, existing.ClaimValue));

        if (!result.Succeeded)
        {
            throw new BusinessException(
                "AcroStack:IdentityRoleClaimOperationFailed",
                string.Join("; ", result.Errors.Select(e => e.Description)));
        }
    }

    private async Task<IdentityRole> FindRoleAsync(Guid roleId)
    {
        // IdentityRoleManager 没有 GetByIdAsync 扩展，
        // 用 IIdentityRoleRepository.FindAsync 加载角色并做存在性校验。
        var role = await _roleRepository.FindAsync(roleId);
        return role ?? throw new EntityNotFoundException(typeof(IdentityRole), roleId);
    }
}
