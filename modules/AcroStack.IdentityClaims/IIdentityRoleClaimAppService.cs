using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace AcroStack.IdentityClaims;

public interface IIdentityRoleClaimAppService : IApplicationService
{
    Task<List<IdentityClaimDto>> GetListAsync(Guid roleId);
    Task<IdentityClaimDto> CreateAsync(CreateIdentityRoleClaimDto input);
    Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input);
    Task DeleteAsync(Guid id);
}
