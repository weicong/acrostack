using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.IdentityClaims;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.Services.IdentityClaims;

[Authorize(AcroStackPermissions.IdentityClaims.RoleClaims)]
public class IdentityRoleClaimAppService : AcroStackAppService, IIdentityRoleClaimAppService
{
    private readonly IRepository<IdentityRoleClaim, Guid> _claimRepository;

    public IdentityRoleClaimAppService(IRepository<IdentityRoleClaim, Guid> claimRepository)
    {
        _claimRepository = claimRepository;
    }

    public async Task<List<IdentityClaimDto>> GetListAsync(Guid roleId)
    {
        var queryable = await _claimRepository.GetQueryableAsync();
        var claims = await AsyncExecuter.ToListAsync(
            queryable.Where(x => x.RoleId == roleId).OrderBy(x => x.ClaimType));

        return claims.Select(MapToDto).ToList();
    }

    public async Task<IdentityClaimDto> CreateAsync(CreateIdentityRoleClaimDto input)
    {
        var claim = new IdentityRoleClaim(
            GuidGenerator.Create(),
            input.RoleId,
            input.ClaimType ?? string.Empty,
            input.ClaimValue ?? string.Empty,
            CurrentTenant.Id);

        await _claimRepository.InsertAsync(claim);

        return MapToDto(claim);
    }

    public async Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input)
    {
        var existing = await _claimRepository.GetAsync(id);

        // IdentityClaim has protected setters in ABP 10.5 and exposes no
        // SetClaim method, so we replace the record to apply changes.
        var replacement = new IdentityRoleClaim(
            existing.Id,
            existing.RoleId,
            input.ClaimType ?? string.Empty,
            input.ClaimValue ?? string.Empty,
            existing.TenantId);

        await _claimRepository.UpdateAsync(replacement);

        return MapToDto(replacement);
    }

    public async Task DeleteAsync(Guid id)
    {
        await _claimRepository.DeleteAsync(id);
    }

    private static IdentityClaimDto MapToDto(IdentityRoleClaim claim)
    {
        return new IdentityClaimDto
        {
            Id = claim.Id,
            RoleId = claim.RoleId,
            ClaimType = claim.ClaimType,
            ClaimValue = claim.ClaimValue,
        };
    }
}
