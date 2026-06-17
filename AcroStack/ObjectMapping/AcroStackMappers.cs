using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using System.Collections.Generic;
using System.Linq;
using AcroStack.AppUsers;
using Volo.Abp.Identity;

namespace AcroStack.ObjectMapping;

/*
 * You can add your own mappings here.
 * [Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
 * public partial class AcroStackMappers : MapperBase<BookDto, CreateUpdateBookDto>
 * {
 *    public override partial CreateUpdateBookDto Map(BookDto source);
 * 
 *    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
 * }
 */
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
