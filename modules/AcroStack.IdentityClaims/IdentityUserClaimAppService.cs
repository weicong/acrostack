using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcroStack;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.IdentityClaims;

[Authorize(IdentityClaimsPermissions.UserClaims)]
public class IdentityUserClaimAppService : AcroStackAppService, IIdentityUserClaimAppService
{
    private readonly IRepository<IdentityUserClaim, Guid> _claimRepository;

    public IdentityUserClaimAppService(IRepository<IdentityUserClaim, Guid> claimRepository)
    {
        _claimRepository = claimRepository;
    }

    public async Task<List<IdentityClaimDto>> GetListAsync(Guid userId)
    {
        var queryable = await _claimRepository.GetQueryableAsync();
        var claims = await AsyncExecuter.ToListAsync(
            queryable.Where(x => x.UserId == userId).OrderBy(x => x.ClaimType));

        return claims.Select(MapToDto).ToList();
    }

    public async Task<IdentityClaimDto> CreateAsync(CreateIdentityUserClaimDto input)
    {
        var claim = new IdentityUserClaim(
            GuidGenerator.Create(),
            input.UserId,
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
        var replacement = new IdentityUserClaim(
            existing.Id,
            existing.UserId,
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

    private static IdentityClaimDto MapToDto(IdentityUserClaim claim)
    {
        return new IdentityClaimDto
        {
            Id = claim.Id,
            UserId = claim.UserId,
            ClaimType = claim.ClaimType,
            ClaimValue = claim.ClaimValue,
        };
    }
}
