using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.IdentityClaims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.Services.IdentityClaims;

[Authorize(AcroStackPermissions.IdentityClaims.Default)]
public class IdentityClaimTypeAppService : AcroStackAppService, IIdentityClaimTypeAppService
{
    private readonly IRepository<IdentityClaimType, Guid> _claimTypeRepository;

    public IdentityClaimTypeAppService(IRepository<IdentityClaimType, Guid> claimTypeRepository)
    {
        _claimTypeRepository = claimTypeRepository;
    }

    public async Task<IdentityClaimTypeDto> GetAsync(Guid id)
    {
        var claimType = await _claimTypeRepository.GetAsync(id);
        return ObjectMapper.Map<IdentityClaimType, IdentityClaimTypeDto>(claimType);
    }

    public async Task<PagedResultDto<IdentityClaimTypeDto>> GetListAsync(GetIdentityClaimTypeListInput input)
    {
        var queryable = await _claimTypeRepository.GetQueryableAsync();

        if (!input.Name.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Name.Contains(input.Name!));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var claimTypes = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<IdentityClaimTypeDto>(
            totalCount,
            ObjectMapper.Map<List<IdentityClaimType>, List<IdentityClaimTypeDto>>(claimTypes)
        );
    }

    [Authorize(AcroStackPermissions.IdentityClaims.ClaimTypes)]
    public async Task<IdentityClaimTypeDto> CreateAsync(CreateIdentityClaimTypeDto input)
    {
        var claimType = new IdentityClaimType(
            GuidGenerator.Create(),
            input.Name,
            required: input.IsRequired,
            isStatic: false,
            regex: input.Regex,
            description: input.Description,
            valueType: input.ValueType);

        await _claimTypeRepository.InsertAsync(claimType);

        return ObjectMapper.Map<IdentityClaimType, IdentityClaimTypeDto>(claimType);
    }

    [Authorize(AcroStackPermissions.IdentityClaims.ClaimTypes)]
    public async Task<IdentityClaimTypeDto> UpdateAsync(Guid id, UpdateIdentityClaimTypeDto input)
    {
        var claimType = await _claimTypeRepository.GetAsync(id);

        // Static claim types are seeded by ABP and must not have their
        // name changed (mirrors ABP Commercial Identity Pro behavior).
        if (claimType.IsStatic && claimType.Name != input.Name)
        {
            throw new BusinessException("AcroStack:StaticClaimTypeNameCannotBeChanged");
        }

        claimType.SetName(input.Name);
        claimType.Required = input.IsRequired;
        claimType.Regex = input.Regex;
        claimType.Description = input.Description;
        claimType.ValueType = input.ValueType;

        await _claimTypeRepository.UpdateAsync(claimType);

        return ObjectMapper.Map<IdentityClaimType, IdentityClaimTypeDto>(claimType);
    }

    [Authorize(AcroStackPermissions.IdentityClaims.ClaimTypes)]
    public async Task DeleteAsync(Guid id)
    {
        var claimType = await _claimTypeRepository.GetAsync(id);

        if (claimType.IsStatic)
        {
            throw new BusinessException("AcroStack:StaticClaimTypeCannotBeDeleted");
        }

        await _claimTypeRepository.DeleteAsync(id);
    }

    [HttpGet("api/app/identity-claim-type/all")]
    public async Task<List<IdentityClaimTypeDto>> GetAllClaimTypesAsync()
    {
        var queryable = await _claimTypeRepository.GetQueryableAsync();
        var claimTypes = await AsyncExecuter.ToListAsync(
            queryable.OrderBy(x => x.Name));

        return ObjectMapper.Map<List<IdentityClaimType>, List<IdentityClaimTypeDto>>(claimTypes);
    }
}
