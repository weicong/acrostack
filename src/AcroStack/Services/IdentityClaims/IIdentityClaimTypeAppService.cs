using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.IdentityClaims;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.IdentityClaims;

public interface IIdentityClaimTypeAppService : IApplicationService
{
    Task<IdentityClaimTypeDto> GetAsync(Guid id);
    Task<PagedResultDto<IdentityClaimTypeDto>> GetListAsync(GetIdentityClaimTypeListInput input);
    Task<IdentityClaimTypeDto> CreateAsync(CreateIdentityClaimTypeDto input);
    Task<IdentityClaimTypeDto> UpdateAsync(Guid id, UpdateIdentityClaimTypeDto input);
    Task DeleteAsync(Guid id);
    Task<List<IdentityClaimTypeDto>> GetAllClaimTypesAsync();
}
