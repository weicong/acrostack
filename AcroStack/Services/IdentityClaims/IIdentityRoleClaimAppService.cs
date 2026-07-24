using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.IdentityClaims;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.IdentityClaims;

public interface IIdentityRoleClaimAppService : IApplicationService
{
    Task<List<IdentityClaimDto>> GetListAsync(Guid roleId);
    Task<IdentityClaimDto> CreateAsync(CreateIdentityRoleClaimDto input);
    Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input);
    Task DeleteAsync(Guid id);
}
