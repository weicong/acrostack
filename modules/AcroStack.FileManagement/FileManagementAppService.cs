using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Data;
using Volo.Abp.MultiTenancy;
// Disambiguate FileShare: System.IO.FileShare (from System.IO above) collides
// with our AcroStack.FileManagement.FileShare entity.
using FileShare = AcroStack.FileManagement.FileShare;

namespace AcroStack.FileManagement;

/// <summary>
/// File Management application service. Auto-routing is disabled
/// (<c>[RemoteService(false)]</c>) because a dedicated
/// <c>FileManagementController</c> exposes all endpoints with explicit,
/// predictable routes (ABP's auto-routing produces non-obvious paths for
/// non-CRUD method names like <c>GetFoldersAsync</c>).
/// Mirrors ABP Commercial File Management Pro (minus virus scanning).
/// </summary>
[RemoteService(false)]
[Authorize(FileManagementPermissions.Default)]
public class FileManagementAppService : AcroStackAppService, IFileManagementAppService
{
    private readonly IRepository<FileFolder, Guid> _folderRepository;
    private readonly IRepository<FileEntry, Guid> _fileRepository;
    private readonly IRepository<FileShare, Guid> _fileShareRepository;
    private readonly IRepository<FileVersion, Guid> _fileVersionRepository;
    private readonly IBlobContainer<FileManagementContainer> _blobContainer;
    private readonly FileManagementOptions _options;
    private readonly IDataFilter _dataFilter;

    public FileManagementAppService(
        IRepository<FileFolder, Guid> folderRepository,
        IRepository<FileEntry, Guid> fileRepository,
        IRepository<FileShare, Guid> fileShareRepository,
        IRepository<FileVersion, Guid> fileVersionRepository,
        IBlobContainer<FileManagementContainer> blobContainer,
        IOptions<FileManagementOptions> options,
        IDataFilter dataFilter)
    {
        _folderRepository = folderRepository;
        _fileRepository = fileRepository;
        _fileShareRepository = fileShareRepository;
        _fileVersionRepository = fileVersionRepository;
        _blobContainer = blobContainer;
        _options = options.Value;
        _dataFilter = dataFilter;
    }

    // ── Folders ─────────────────────────────────────────────────────

    public async Task<ListResultDto<FileFolderDto>> GetFoldersAsync(Guid? parentId)
    {
        var queryable = await _folderRepository.GetQueryableAsync();
        var query = queryable.Where(f => f.ParentId == parentId);
        var folders = await AsyncExecuter.ToListAsync(query);
        return new ListResultDto<FileFolderDto>(
            ObjectMapper.Map<List<FileFolder>, List<FileFolderDto>>(folders));
    }

    public async Task<FileFolderDto> CreateFolderAsync(CreateFileFolderDto input)
    {
        if (input.ParentId.HasValue)
        {
            // Ensure parent exists; throws if not found.
            await _folderRepository.GetAsync(input.ParentId.Value);
        }

        var folder = ObjectMapper.Map<CreateFileFolderDto, FileFolder>(input);
        await _folderRepository.InsertAsync(folder);
        return ObjectMapper.Map<FileFolder, FileFolderDto>(folder);
    }

    public async Task<FileFolderDto> RenameFolderAsync(Guid id, RenameDto input)
    {
        var folder = await _folderRepository.GetAsync(id);
        folder.Name = input.Name;
        await _folderRepository.UpdateAsync(folder);
        return ObjectMapper.Map<FileFolder, FileFolderDto>(folder);
    }

    public async Task DeleteFolderAsync(Guid id)
    {
        // Recursively delete subfolders and files within this folder.
        await DeleteFolderRecursiveAsync(id);
    }

    private async Task DeleteFolderRecursiveAsync(Guid folderId)
    {
        // Delete child folders first.
        var childFolders = await _folderRepository.GetListAsync(f => f.ParentId == folderId);
        foreach (var child in childFolders)
        {
            await DeleteFolderRecursiveAsync(child.Id);
        }

        // Delete files in this folder (and their historical versions).
        var files = await _fileRepository.GetListAsync(f => f.FolderId == folderId);
        foreach (var file in files)
        {
            await DeleteFileInternalAsync(file);
        }

        // Delete the folder itself.
        await _folderRepository.DeleteAsync(folderId);
    }

    [Authorize(FileManagementPermissions.Move)]
    public async Task<FileFolderDto> MoveFolderAsync(Guid id, Guid? targetFolderId)
    {
        var folder = await _folderRepository.GetAsync(id);

        if (targetFolderId == id)
        {
            throw new BusinessException("AcroStack:FolderCannotBeMovedIntoItself");
        }

        if (targetFolderId.HasValue)
        {
            var target = await _folderRepository.GetAsync(targetFolderId.Value);

            // Walk up the parent chain from the target to ensure we are not
            // moving the folder into one of its own descendants — that would
            // create a cycle and orphan the subtree.
            var ancestorId = target.ParentId;
            while (ancestorId.HasValue)
            {
                if (ancestorId.Value == id)
                {
                    throw new BusinessException("AcroStack:FolderCannotBeMovedIntoDescendant");
                }
                ancestorId = (await _folderRepository.GetAsync(ancestorId.Value)).ParentId;
            }
        }

        folder.ParentId = targetFolderId;
        await _folderRepository.UpdateAsync(folder);
        return ObjectMapper.Map<FileFolder, FileFolderDto>(folder);
    }

    // ── Files ───────────────────────────────────────────────────────

    public async Task<ListResultDto<FileEntryDto>> GetFilesAsync(Guid? folderId)
    {
        var queryable = await _fileRepository.GetQueryableAsync();
        var query = queryable.Where(f => f.FolderId == folderId);
        var files = await AsyncExecuter.ToListAsync(query);
        return new ListResultDto<FileEntryDto>(
            ObjectMapper.Map<List<FileEntry>, List<FileEntryDto>>(files));
    }

    [Authorize(FileManagementPermissions.Upload)]
    public async Task<FileEntryDto> UploadFileAsync(Guid? folderId, IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            throw new BusinessException("AcroStack:EmptyFile");
        }

        await ValidateUploadConstraintsAsync(file);

        if (folderId.HasValue)
        {
            await _folderRepository.GetAsync(folderId.Value);
        }

        // Check whether a file with the same name already exists in the
        // target folder. If so, treat this upload as a new version of the
        // existing entry (mirrors ABP Commercial File Management Pro).
        var existing = await _fileRepository.FirstOrDefaultAsync(
            f => f.FolderId == folderId && f.Name == file.FileName);

        if (existing != null)
        {
            return await CreateNewVersionAsync(existing, file);
        }

        var blobName = $"{Guid.NewGuid():N}{Path.GetExtension(file.FileName)}";

        await using (var stream = file.OpenReadStream())
        {
            await _blobContainer.SaveAsync(blobName, stream);
        }

        var entry = new FileEntry(
            GuidGenerator.Create(),
            file.FileName,
            blobName,
            file.Length,
            file.ContentType,
            folderId);

        await _fileRepository.InsertAsync(entry);
        return ObjectMapper.Map<FileEntry, FileEntryDto>(entry);
    }

    private async Task ValidateUploadConstraintsAsync(IFormFile file)
    {
        if (file.Length > _options.MaxFileSize)
        {
            throw new BusinessException("AcroStack:FileExceedsMaxSize")
                .WithData("MaxSize", _options.MaxFileSize);
        }

        if (_options.AllowedFileExtensions is { Count: > 0 })
        {
            var extension = Path.GetExtension(file.FileName)?.ToLowerInvariant();
            if (string.IsNullOrEmpty(extension) ||
                !_options.AllowedFileExtensions.Contains(extension, StringComparer.OrdinalIgnoreCase))
            {
                throw new BusinessException("AcroStack:FileExtensionNotAllowed")
                    .WithData("Extension", extension ?? string.Empty);
            }
        }

        // Enforce per-tenant storage quota: sum of all current file sizes
        // plus the new upload must not exceed MaxStoragePerTenant.
        var queryable = await _fileRepository.GetQueryableAsync();
        var usedBytes = await AsyncExecuter.SumAsync(queryable, f => f.ByteSize);
        if (usedBytes + file.Length > _options.MaxStoragePerTenant)
        {
            throw new BusinessException("AcroStack:StorageQuotaExceeded")
                .WithData("MaxStorage", _options.MaxStoragePerTenant);
        }
    }

    private async Task<FileEntryDto> CreateNewVersionAsync(FileEntry existing, IFormFile file)
    {
        // Snapshot the current state as a historical version row before
        // overwriting the FileEntry with the new bytes.
        var versionSnapshot = new FileVersion(
            GuidGenerator.Create(),
            existing.Id,
            existing.CurrentVersion,
            existing.BlobName,
            existing.ByteSize,
            existing.ContentType,
            CurrentUser.Id,
            CurrentTenant.Id);
        await _fileVersionRepository.InsertAsync(versionSnapshot);

        // Save the new bytes under a fresh blob name.
        var newBlobName = $"{Guid.NewGuid():N}{Path.GetExtension(file.FileName)}";
        await using (var stream = file.OpenReadStream())
        {
            await _blobContainer.SaveAsync(newBlobName, stream);
        }

        existing.BlobName = newBlobName;
        existing.ByteSize = file.Length;
        existing.ContentType = file.ContentType;
        existing.CurrentVersion = existing.CurrentVersion + 1;
        await _fileRepository.UpdateAsync(existing);

        return ObjectMapper.Map<FileEntry, FileEntryDto>(existing);
    }

    [Authorize(FileManagementPermissions.Download)]
    public async Task<(Stream Stream, string FileName, string? ContentType)> DownloadFileAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);
        var stream = await _blobContainer.GetAsync(entry.BlobName);
        return (stream, entry.Name, entry.ContentType);
    }

    [Authorize(FileManagementPermissions.Delete)]
    public async Task DeleteFileAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);
        await DeleteFileInternalAsync(entry);
    }

    private async Task DeleteFileInternalAsync(FileEntry entry)
    {
        // Delete every historical version's blob, then the current blob,
        // then the metadata rows.
        var versions = await _fileVersionRepository.GetListAsync(v => v.FileEntryId == entry.Id);
        foreach (var version in versions)
        {
            await _blobContainer.DeleteAsync(version.BlobName);
            await _fileVersionRepository.DeleteAsync(version);
        }

        await _blobContainer.DeleteAsync(entry.BlobName);
        await _fileRepository.DeleteAsync(entry);
    }

    [Authorize(FileManagementPermissions.Move)]
    public async Task<FileEntryDto> MoveFileAsync(Guid id, Guid? targetFolderId)
    {
        var entry = await _fileRepository.GetAsync(id);

        if (targetFolderId.HasValue)
        {
            // Ensure target folder exists; throws if not found.
            await _folderRepository.GetAsync(targetFolderId.Value);
        }

        entry.FolderId = targetFolderId;
        await _fileRepository.UpdateAsync(entry);
        return ObjectMapper.Map<FileEntry, FileEntryDto>(entry);
    }

    // ── Share links ─────────────────────────────────────────────────

    [Authorize(FileManagementPermissions.Share)]
    public async Task<FileShareDto> CreateShareLinkAsync(Guid fileId, CreateShareLinkDto input)
    {
        // Verify the file exists (scoped to current tenant by the repo filter).
        await _fileRepository.GetAsync(fileId);

        var share = new FileShare(
            GuidGenerator.Create(),
            fileId,
            Guid.NewGuid().ToString("N"),
            input.ExpirationTime,
            input.MaxDownloadCount,
            CurrentTenant.Id);

        await _fileShareRepository.InsertAsync(share);
        return ObjectMapper.Map<FileShare, FileShareDto>(share);
    }

    [Authorize(FileManagementPermissions.Share)]
    public async Task<ListResultDto<FileShareDto>> GetShareLinksAsync(Guid fileId)
    {
        var queryable = await _fileShareRepository.GetQueryableAsync();
        var query = queryable.Where(s => s.FileEntryId == fileId);
        var shares = await AsyncExecuter.ToListAsync(query);
        return new ListResultDto<FileShareDto>(
            ObjectMapper.Map<List<FileShare>, List<FileShareDto>>(shares));
    }

    [Authorize(FileManagementPermissions.Share)]
    public async Task RevokeShareLinkAsync(Guid shareId)
    {
        var share = await _fileShareRepository.GetAsync(shareId);
        share.IsRevoked = true;
        await _fileShareRepository.UpdateAsync(share);
    }

    /// <summary>
    /// Public, anonymous download via a share-link token. Looks up the
    /// <see cref="FileShare"/> across tenants (the token is the only
    /// identifier on the URL), validates expiry / download cap / revoked
    /// state, then streams the underlying file's bytes.
    /// </summary>
    public async Task<(Stream Stream, string FileName, string? ContentType)> DownloadSharedAsync(string token)
    {
        // The endpoint is anonymous, so the ABP IMultiTenant query filter
        // would scope the lookup to the host tenant only. Disable the filter
        // temporarily to find the share regardless of which tenant owns it.
        using (_dataFilter.Disable<IMultiTenant>())
        {
            var queryable = await _fileShareRepository.GetQueryableAsync();
            var share = await AsyncExecuter.FirstOrDefaultAsync(
                queryable.Where(s => s.Token == token));

            if (share == null)
            {
                throw new BusinessException("AcroStack:ShareLinkNotFound");
            }

            if (share.IsRevoked)
            {
                throw new BusinessException("AcroStack:ShareLinkRevoked");
            }

            if (share.ExpirationTime.HasValue && share.ExpirationTime.Value < Clock.Now)
            {
                throw new BusinessException("AcroStack:ShareLinkExpired");
            }

            if (share.MaxDownloadCount.HasValue && share.DownloadCount >= share.MaxDownloadCount.Value)
            {
                throw new BusinessException("AcroStack:ShareLinkDownloadLimitReached");
            }

            // Increment the download counter (within the cross-tenant scope
            // so we can update the row we just looked up).
            share.DownloadCount = share.DownloadCount + 1;
            await _fileShareRepository.UpdateAsync(share);

            // Switch into the owning tenant's context so the file entry and
            // blob lookup resolve correctly.
            using (CurrentTenant.Change(share.TenantId))
            {
                var entry = await _fileRepository.GetAsync(share.FileEntryId);
                var stream = await _blobContainer.GetAsync(entry.BlobName);
                return (stream, entry.Name, entry.ContentType);
            }
        }
    }

    // ── Version history ─────────────────────────────────────────────

    public async Task<ListResultDto<FileVersionDto>> GetFileVersionsAsync(Guid fileId)
    {
        var queryable = await _fileVersionRepository.GetQueryableAsync();
        var query = queryable
            .Where(v => v.FileEntryId == fileId)
            .OrderByDescending(v => v.VersionNumber);
        var versions = await AsyncExecuter.ToListAsync(query);
        return new ListResultDto<FileVersionDto>(
            ObjectMapper.Map<List<FileVersion>, List<FileVersionDto>>(versions));
    }

    [Authorize(FileManagementPermissions.Upload)]
    public async Task<FileEntryDto> RestoreVersionAsync(Guid fileId, Guid versionId)
    {
        var entry = await _fileRepository.GetAsync(fileId);

        var version = await _fileVersionRepository.FirstOrDefaultAsync(
            v => v.Id == versionId && v.FileEntryId == fileId);
        if (version == null)
        {
            throw new BusinessException("AcroStack:FileVersionNotFound");
        }

        // Snapshot the *current* state as a new historical version row so
        // the user can roll back to it later if they change their mind.
        var snapshot = new FileVersion(
            GuidGenerator.Create(),
            fileId,
            entry.CurrentVersion,
            entry.BlobName,
            entry.ByteSize,
            entry.ContentType,
            CurrentUser.Id,
            CurrentTenant.Id);
        await _fileVersionRepository.InsertAsync(snapshot);

        // Promote the chosen historical version's blob to be the current
        // content of the file entry.
        entry.BlobName = version.BlobName;
        entry.ByteSize = version.ByteSize;
        entry.ContentType = version.ContentType;
        entry.CurrentVersion = entry.CurrentVersion + 1;
        await _fileRepository.UpdateAsync(entry);

        return ObjectMapper.Map<FileEntry, FileEntryDto>(entry);
    }

    // ── Thumbnails ──────────────────────────────────────────────────

    public async Task<(Stream Stream, string? ContentType)> GetThumbnailAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);

        if (string.IsNullOrEmpty(entry.ContentType) ||
            !entry.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase))
        {
            // Only image/* files have thumbnails; everything else 404s.
            throw new BusinessException("AcroStack:ThumbnailNotAvailable");
        }

        // NOTE: A real implementation would downscale the image to a max of
        // 200x200 (preserving aspect ratio) using an imaging library such as
        // SkiaSharp or System.Drawing.Common. SkiaSharp is not referenced by
        // this project and System.Drawing.Common is unsupported on non-Windows
        // .NET 10 hosts, so for cross-platform compatibility we simply stream
        // the original image bytes. Replace this with a real downscaler if a
        // supported imaging package is added.
        var stream = await _blobContainer.GetAsync(entry.BlobName);
        return (stream, entry.ContentType);
    }

    // ── Storage info / quota ────────────────────────────────────────

    public async Task<StorageInfoDto> GetStorageInfoAsync()
    {
        var queryable = await _fileRepository.GetQueryableAsync();
        var usedBytes = await AsyncExecuter.SumAsync(queryable, f => f.ByteSize);
        var fileCount = await AsyncExecuter.LongCountAsync(queryable);

        return new StorageInfoDto
        {
            UsedBytes = usedBytes,
            MaxBytes = _options.MaxStoragePerTenant,
            FileCount = fileCount
        };
    }
}
