using System.Collections.Generic;
using System.Linq;
using Riok.Mapperly.Abstractions;
using Volo.Abp.Identity;
using Volo.Abp.Mapperly;

namespace AcroStack.AppUsers;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AppUserToAppUserDtoMapper : MapperBase<AppUser, AppUserDto>
{
    public override partial AppUserDto Map(AppUser source);

    public override partial void Map(AppUser source, AppUserDto destination);

    public List<AppUserDto> MapToDtoList(List<AppUser> source) => source.Select(Map).ToList();
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AppIdentityUserEtoMapper : MapperBase<IdentityUser, AppIdentityUserEto>
{
    public override partial AppIdentityUserEto Map(IdentityUser source);

    public override partial void Map(IdentityUser source, AppIdentityUserEto destination);
}
