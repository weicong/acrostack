using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using System.Collections.Generic;
using System.Linq;
using AcroStack.AppUsers;
using AcroStack.Entities.Books;
using AcroStack.Services.Dtos.Books;
using AcroStack.Entities.Chat;
using AcroStack.Services.Dtos.Chat;
using AcroStack.Entities.FileManagement;
using AcroStack.Services.Dtos.FileManagement;
using AcroStack.Services.Dtos.IdentityClaims;
using Volo.Abp.Identity;
// Disambiguate FileShare: System.IO.FileShare (from implicit usings)
// collides with our AcroStack.Entities.FileManagement.FileShare entity.
using FileShare = AcroStack.Entities.FileManagement.FileShare;

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

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackFileFolderToFileFolderDtoMapper : MapperBase<FileFolder, FileFolderDto>
{
    public override partial FileFolderDto Map(FileFolder source);

    public override partial void Map(FileFolder source, FileFolderDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackCreateFileFolderDtoToFileFolderMapper : MapperBase<CreateFileFolderDto, FileFolder>
{
    public override partial FileFolder Map(CreateFileFolderDto source);

    public override partial void Map(CreateFileFolderDto source, FileFolder destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackFileEntryToFileEntryDtoMapper : MapperBase<FileEntry, FileEntryDto>
{
    public override partial FileEntryDto Map(FileEntry source);

    public override partial void Map(FileEntry source, FileEntryDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackFileShareToFileShareDtoMapper : MapperBase<FileShare, FileShareDto>
{
    public override partial FileShareDto Map(FileShare source);

    public override partial void Map(FileShare source, FileShareDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackFileVersionToFileVersionDtoMapper : MapperBase<FileVersion, FileVersionDto>
{
    // The entity exposes UploadedByUserId while the DTO renames it to
    // UploaderUserId; tell Mapperly to bridge the two names explicitly.
    [MapProperty(nameof(FileVersion.UploadedByUserId), nameof(FileVersionDto.UploaderUserId))]
    public override partial FileVersionDto Map(FileVersion source);

    [MapProperty(nameof(FileVersion.UploadedByUserId), nameof(FileVersionDto.UploaderUserId))]
    public override partial void Map(FileVersion source, FileVersionDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class AcroStackIdentityClaimTypeToIdentityClaimTypeDtoMapper : MapperBase<IdentityClaimType, IdentityClaimTypeDto>
{
    // The ABP entity exposes Required while the DTO renames it to
    // IsRequired; tell Mapperly to bridge the two names explicitly.
    [MapProperty(nameof(IdentityClaimType.Required), nameof(IdentityClaimTypeDto.IsRequired))]
    public override partial IdentityClaimTypeDto Map(IdentityClaimType source);

    [MapProperty(nameof(IdentityClaimType.Required), nameof(IdentityClaimTypeDto.IsRequired))]
    public override partial void Map(IdentityClaimType source, IdentityClaimTypeDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ChatMessageReactionToDtoMapper : MapperBase<ChatMessageReaction, ChatMessageReactionDto>
{
    // UserName comes from a separate AppUser join, not from the reaction
    // entity — ignore it here so Mapperly doesn't require a source member.
    [MapperIgnoreTarget(nameof(ChatMessageReactionDto.UserName))]
    public override partial ChatMessageReactionDto Map(ChatMessageReaction source);

    [MapperIgnoreTarget(nameof(ChatMessageReactionDto.UserName))]
    public override partial void Map(ChatMessageReaction source, ChatMessageReactionDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ChatBlockedUserToBlockedUserDtoMapper : MapperBase<ChatBlockedUser, BlockedUserDto>
{
    // BlockedUserName comes from a separate AppUser join, not from the
    // blocked-user entity — ignore it here so Mapperly doesn't require
    // a source member.
    [MapperIgnoreTarget(nameof(BlockedUserDto.BlockedUserName))]
    public override partial BlockedUserDto Map(ChatBlockedUser source);

    [MapperIgnoreTarget(nameof(BlockedUserDto.BlockedUserName))]
    public override partial void Map(ChatBlockedUser source, BlockedUserDto destination);
}
