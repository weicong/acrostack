using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using System.Collections.Generic;
using System.Linq;
using AcroStack.AppUsers;
using AcroStack.Entities.Books;
using AcroStack.Services.Dtos.Books;
using Volo.Abp.Identity;

namespace AcroStack.ObjectMapping;

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

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackBookDtoToCreateUpdateBookDtoMapper : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}
