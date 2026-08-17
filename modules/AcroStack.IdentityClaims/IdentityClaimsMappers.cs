using Riok.Mapperly.Abstractions;
using Volo.Abp.Identity;
using Volo.Abp.Mapperly;

namespace AcroStack.IdentityClaims;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class IdentityClaimTypeToDtoMapper : MapperBase<IdentityClaimType, IdentityClaimTypeDto>
{
    // The ABP entity exposes Required while the DTO renames it to
    // IsRequired; tell Mapperly to bridge the two names explicitly.
    [MapProperty(nameof(IdentityClaimType.Required), nameof(IdentityClaimTypeDto.IsRequired))]
    public override partial IdentityClaimTypeDto Map(IdentityClaimType source);

    [MapProperty(nameof(IdentityClaimType.Required), nameof(IdentityClaimTypeDto.IsRequired))]
    public override partial void Map(IdentityClaimType source, IdentityClaimTypeDto destination);
}
