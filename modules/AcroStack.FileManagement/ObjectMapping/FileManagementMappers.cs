using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
// Disambiguate FileShare: System.IO.FileShare (from implicit usings)
// collides with our AcroStack.FileManagement.FileShare entity.
using FileShare = AcroStack.FileManagement.FileShare;

namespace AcroStack.FileManagement;

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
    [MapProperty(nameof(FileVersion.UploadedByUserId), nameof(FileVersionDto.UploaderUserId))]
    public override partial FileVersionDto Map(FileVersion source);

    [MapProperty(nameof(FileVersion.UploadedByUserId), nameof(FileVersionDto.UploaderUserId))]
    public override partial void Map(FileVersion source, FileVersionDto destination);
}
