using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace AcroStack.IdentityClaims;

public interface IIdentityUserClaimAppService : IApplicationService
{
    Task<List<IdentityClaimDto>> GetListAsync(Guid userId);
    Task<IdentityClaimDto> CreateAsync(CreateIdentityUserClaimDto input);
    Task<IdentityClaimDto> UpdateAsync(Guid id, UpdateIdentityClaimDto input);
    Task DeleteAsync(Guid id);
}
