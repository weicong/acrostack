using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
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
    /// <summary>
    /// 缩略图预览允许的光栅图 Content-Type 白名单。
    /// 刻意排除 image/svg+xml：SVG 可内联执行脚本，流式返回会被浏览器
    /// 当作活动文档渲染从而导致 XSS，因此只放行无脚本执行能力的光栅图格式。
    /// </summary>
    private static readonly string[] ThumbnailContentTypeWhitelist =
    {
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/bmp",
    };

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
        // 广度优先收集目标文件夹及其所有后代文件夹的 Id。
        var allFolderIds = new List<Guid>();
        var pending = new Queue<Guid>();
        pending.Enqueue(folderId);
        while (pending.Count > 0)
        {
            var currentId = pending.Dequeue();
            allFolderIds.Add(currentId);

            var childFolders = await _folderRepository.GetListAsync(f => f.ParentId == currentId);
            foreach (var child in childFolders)
            {
                pending.Enqueue(child.Id);
            }
        }

        // 先收集范围内所有文件及其历史版本对应的 Blob 名称。
        var files = await _fileRepository.GetListAsync(
            f => f.FolderId != null && allFolderIds.Contains(f.FolderId.Value));
        var fileIds = files.Select(f => f.Id).ToList();
        var versions = fileIds.Count > 0
            ? await _fileVersionRepository.GetListAsync(v => fileIds.Contains(v.FileEntryId))
            : new List<FileVersion>();
        var blobNames = files.Select(f => f.BlobName)
            .Concat(versions.Select(v => v.BlobName))
            .Distinct()
            .ToList();

        // 顺序要点：先完成全部元数据删除并立即 SaveChanges（autoSave: true），
        // 数据库状态落定后再物理删除 Blob 字节。若颠倒顺序，一旦 SaveChanges
        // 失败（如乐观并发冲突、连接中断），字节已删而元数据仍在，造成不可恢复
        // 的数据损坏；反过来失败只是遗留孤儿 Blob，后续可由清理任务回收。
        if (versions.Count > 0)
        {
            await _fileVersionRepository.DeleteManyAsync(versions, autoSave: true);
        }
        if (files.Count > 0)
        {
            await _fileRepository.DeleteManyAsync(files, autoSave: true);
        }
        await _folderRepository.DeleteManyAsync(allFolderIds, autoSave: true);

        // 元数据删除成功后再删除物理 Blob。
        foreach (var blobName in blobNames)
        {
            await _blobContainer.DeleteAsync(blobName);
        }
    }

    [Authorize(FileManagementPermissions.Move)]
    public async Task<FileFolderDto> MoveFolderAsync(Guid id, Guid? targetFolderId)
    {
        var folder = await _folderRepository.GetAsync(id);

        if (targetFolderId == id)
        {
            throw new BusinessException("FileManagement:FolderCannotBeMovedIntoItself");
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
                    throw new BusinessException("FileManagement:FolderCannotBeMovedIntoDescendant");
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
            throw new BusinessException("FileManagement:EmptyFile");
        }

        // 净化上传文件名：拒绝携带路径分隔符/路径穿越片段或超长的文件名
        var fileName = SanitizeFileName(file.FileName);

        await ValidateUploadConstraintsAsync(file);

        if (folderId.HasValue)
        {
            await _folderRepository.GetAsync(folderId.Value);
        }

        // Check whether a file with the same name already exists in the
        // target folder. If so, treat this upload as a new version of the
        // existing entry (mirrors ABP Commercial File Management Pro).
        var existing = await _fileRepository.FirstOrDefaultAsync(
            f => f.FolderId == folderId && f.Name == fileName);

        if (existing != null)
        {
            return await CreateNewVersionAsync(existing, file);
        }

        var blobName = $"{Guid.NewGuid():N}{Path.GetExtension(fileName)}";

        await using (var stream = file.OpenReadStream())
        {
            await _blobContainer.SaveAsync(blobName, stream);
        }

        var entry = new FileEntry(
            GuidGenerator.Create(),
            fileName,
            blobName,
            file.Length,
            file.ContentType,
            folderId);

        try
        {
            // autoSave: true 立即写库，使 DB 失败在此处即可捕获以触发补偿
            await _fileRepository.InsertAsync(entry, autoSave: true);
        }
        catch
        {
            // 补偿：DB 写入失败时删除已保存的 Blob，避免遗留孤儿对象
            await _blobContainer.DeleteAsync(blobName);
            throw;
        }

        return ObjectMapper.Map<FileEntry, FileEntryDto>(entry);
    }

    /// <summary>
    /// 净化上传文件名：先用 <see cref="Path.GetFileName"/> 剥离路径部分，
    /// 若结果与原值不同（说明原文件名包含路径分隔符或 ".." 路径穿越片段）
    /// 则直接拒绝；同时限制文件名长度不超过 256 字符（与 FileEntry.Name 列宽一致）。
    /// </summary>
    private static string SanitizeFileName(string fileName)
    {
        if (string.IsNullOrWhiteSpace(fileName))
        {
            throw new UserFriendlyException("文件名不能为空");
        }

        // 显式拒绝两种目录分隔符（兼顾 Linux 部署下对反斜杠的兼容处理）
        if (fileName.Contains('/') || fileName.Contains('\\'))
        {
            throw new UserFriendlyException("文件名不能包含路径分隔符");
        }

        // Path.GetFileName 会把结尾的 ".."/"." 视为目录而剥离；结果与原值
        // 不同即说明原文件名含路径穿越片段，按恶意输入处理直接拒绝
        var stripped = Path.GetFileName(fileName);
        if (!string.Equals(stripped, fileName, StringComparison.Ordinal))
        {
            throw new UserFriendlyException("文件名不能包含路径分隔符或路径穿越片段");
        }

        if (stripped.Length > 256)
        {
            throw new UserFriendlyException("文件名长度不能超过 256 个字符");
        }

        return stripped;
    }

    private async Task ValidateUploadConstraintsAsync(IFormFile file)
    {
        if (file.Length > _options.MaxFileSize)
        {
            throw new BusinessException("FileManagement:FileExceedsMaxSize")
                .WithData("MaxSize", _options.MaxFileSize);
        }

        if (_options.AllowedFileExtensions is { Count: > 0 })
        {
            var extension = Path.GetExtension(file.FileName)?.ToLowerInvariant();
            if (string.IsNullOrEmpty(extension) ||
                !_options.AllowedFileExtensions.Contains(extension, StringComparer.OrdinalIgnoreCase))
            {
                throw new BusinessException("FileManagement:FileExtensionNotAllowed")
                    .WithData("Extension", extension ?? string.Empty);
            }
        }

        // Enforce per-tenant storage quota: sum of all current file sizes
        // plus the new upload must not exceed MaxStoragePerTenant.
        var queryable = await _fileRepository.GetQueryableAsync();
        var usedBytes = await AsyncExecuter.SumAsync(queryable, f => f.ByteSize);
        if (usedBytes + file.Length > _options.MaxStoragePerTenant)
        {
            throw new BusinessException("FileManagement:StorageQuotaExceeded")
                .WithData("MaxStorage", _options.MaxStoragePerTenant);
        }
    }

    private async Task<FileEntryDto> CreateNewVersionAsync(FileEntry existing, IFormFile file)
    {
        // 净化上传文件名：拒绝携带路径分隔符/路径穿越片段或超长的文件名
        // （UploadFileAsync 入口已净化一次，此处做防御性重复净化，
        // 防止未来新增的调用点绕过入口校验）
        var fileName = SanitizeFileName(file.FileName);

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
        var newBlobName = $"{Guid.NewGuid():N}{Path.GetExtension(fileName)}";
        await using (var stream = file.OpenReadStream())
        {
            await _blobContainer.SaveAsync(newBlobName, stream);
        }

        try
        {
            existing.BlobName = newBlobName;
            existing.ByteSize = file.Length;
            existing.ContentType = file.ContentType;
            existing.CurrentVersion = existing.CurrentVersion + 1;
            // autoSave: true 立即写库，使 DB 失败在此处即可捕获以触发补偿
            await _fileRepository.UpdateAsync(existing, autoSave: true);
        }
        catch
        {
            // 补偿：DB 写入失败时删除已保存的新 Blob，避免遗留孤儿对象
            await _blobContainer.DeleteAsync(newBlobName);
            throw;
        }

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
        // 先收集要删除的 Blob 名称（当前 Blob + 所有历史版本 Blob，去重
        // 以兼容历史上多版本行可能共享同一 Blob 的旧数据）。
        var versions = await _fileVersionRepository.GetListAsync(v => v.FileEntryId == entry.Id);
        var blobNames = versions.Select(v => v.BlobName)
            .Append(entry.BlobName)
            .Distinct()
            .ToList();

        // 顺序要点：先完成元数据删除并立即 SaveChanges（autoSave: true），
        // 数据库状态落定后再物理删除 Blob 字节。若颠倒顺序，一旦 SaveChanges
        // 失败，字节已删而元数据仍在，将造成不可恢复的数据损坏。
        if (versions.Count > 0)
        {
            await _fileVersionRepository.DeleteManyAsync(versions, autoSave: true);
        }
        await _fileRepository.DeleteAsync(entry, autoSave: true);

        // 元数据删除成功后再删除物理 Blob。
        foreach (var blobName in blobNames)
        {
            await _blobContainer.DeleteAsync(blobName);
        }
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

        // 校验过期时间（若指定）：必须晚于当前时间，且距现在不超过 30 天
        if (input.ExpirationTime.HasValue)
        {
            var now = Clock.Now;
            if (input.ExpirationTime.Value <= now)
            {
                throw new UserFriendlyException("分享链接的过期时间必须晚于当前时间");
            }

            if (input.ExpirationTime.Value > now.AddDays(30))
            {
                throw new UserFriendlyException("分享链接的过期时间不能超过 30 天");
            }
        }

        // 使用加密安全的随机数生成器产生 32 字节（256 位）熵值的 token，
        // 并转为 64 位小写十六进制字符串。Guid.NewGuid() 的随机性不足以
        // 作为公开分享链接的唯一凭证（版本位固定、熵值有限、模式可预测）。
        var tokenBytes = RandomNumberGenerator.GetBytes(32);
        var token = Convert.ToHexString(tokenBytes).ToLowerInvariant();

        var share = new FileShare(
            GuidGenerator.Create(),
            fileId,
            token,
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
                throw new BusinessException("FileManagement:ShareLinkNotFound");
            }

            if (share.IsRevoked)
            {
                throw new BusinessException("FileManagement:ShareLinkRevoked");
            }

            if (share.ExpirationTime.HasValue && share.ExpirationTime.Value < Clock.Now)
            {
                throw new BusinessException("FileManagement:ShareLinkExpired");
            }

            if (share.MaxDownloadCount.HasValue && share.DownloadCount >= share.MaxDownloadCount.Value)
            {
                throw new BusinessException("FileManagement:ShareLinkDownloadLimitReached");
            }

            // Increment the download counter (within the cross-tenant scope
            // so we can update the row we just looked up).
            //
            // TOCTOU（检查-使用竞态）防护说明：share 是由 EF 查询物化并被
            // DbContext 跟踪的实体（tracked entity），此处"先检查再更新"操作
            // 的是同一跟踪实例。并发场景下（多个匿名请求同时通过校验），
            // UpdateAsync 落库时 ABP 会校验 ConcurrencyStamp 乐观并发戳，
            // 后提交的请求会因并发戳不匹配抛出 AbpDbConcurrencyException，
            // 从而保证 MaxDownloadCount 上限不会被并发请求击穿。
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
            throw new BusinessException("FileManagement:FileVersionNotFound");
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

        // 将目标版本的 Blob 复制为一份独立的新副本，再把新 Blob 名赋给
        // FileEntry。若直接共享 version.BlobName，恢复后的当前文件与该历史
        // 版本行会指向同一 Blob，任一方删除（如再删历史版本）都会破坏另一方
        // 的数据（数据损坏问题）。
        var restoredBlobName = $"{Guid.NewGuid():N}{Path.GetExtension(version.BlobName)}";
        await using (var versionStream = await _blobContainer.GetAsync(version.BlobName))
        {
            await _blobContainer.SaveAsync(restoredBlobName, versionStream);
        }

        // Promote the chosen historical version's content to be the current
        // content of the file entry (pointing at the independent copy above).
        entry.BlobName = restoredBlobName;
        entry.ByteSize = version.ByteSize;
        entry.ContentType = version.ContentType;
        entry.CurrentVersion = entry.CurrentVersion + 1;

        try
        {
            // autoSave: true 立即写库，使 DB 失败在此处即可捕获以触发补偿
            await _fileRepository.UpdateAsync(entry, autoSave: true);
        }
        catch
        {
            // 补偿：DB 写入失败时删除已复制的 Blob 副本，避免遗留孤儿对象
            await _blobContainer.DeleteAsync(restoredBlobName);
            throw;
        }

        return ObjectMapper.Map<FileEntry, FileEntryDto>(entry);
    }

    // ── Thumbnails ──────────────────────────────────────────────────

    public async Task<(Stream Stream, string? ContentType)> GetThumbnailAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);

        // 【XSS 防护】仅允许光栅图 Content-Type 白名单通过缩略图端点流式返回。
        // 不能用 image/* 前缀放行：image/svg+xml 可内联执行 <script>，
        // 浏览器内联渲染即触发存储型 XSS。
        if (string.IsNullOrEmpty(entry.ContentType) ||
            !ThumbnailContentTypeWhitelist.Contains(entry.ContentType, StringComparer.OrdinalIgnoreCase))
        {
            // 白名单之外的类型（含 SVG 及所有非图片类型）一律拒绝预览。
            throw new UserFriendlyException("该文件类型不支持缩略图预览");
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
