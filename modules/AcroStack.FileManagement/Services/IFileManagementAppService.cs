using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Volo.Abp.Application.Dtos;

namespace AcroStack.FileManagement;

/// <summary>
/// File Management application service contract. Exposes hierarchical
/// folder CRUD, file upload/download/delete, move, share links, version
/// history, thumbnails and per-tenant storage info. Mirrors ABP
/// Commercial File Management Pro's API surface (minus virus scanning).
/// </summary>
public interface IFileManagementAppService
{
    // ── Folders ─────────────────────────────────────────────────────

    /// <summary>
    /// Lists folders whose parent is <paramref name="parentId"/>. When
    /// <paramref name="parentId"/> is null, returns root-level folders.
    /// </summary>
    Task<ListResultDto<FileFolderDto>> GetFoldersAsync(Guid? parentId);

    Task<FileFolderDto> CreateFolderAsync(CreateFileFolderDto input);

    Task<FileFolderDto> RenameFolderAsync(Guid id, RenameDto input);

    Task DeleteFolderAsync(Guid id);

    /// <summary>
    /// Moves a folder (and its subtree) to a new parent. Throws if the
    /// target is the folder itself or one of its descendants.
    /// </summary>
    Task<FileFolderDto> MoveFolderAsync(Guid id, Guid? targetFolderId);

    // ── Files ───────────────────────────────────────────────────────

    /// <summary>
    /// Lists files in the given folder. When <paramref name="folderId"/>
    /// is null, returns root-level files.
    /// </summary>
    Task<ListResultDto<FileEntryDto>> GetFilesAsync(Guid? folderId);

    /// <summary>
    /// Uploads a file to the given folder (root if null). If a file with
    /// the same name already exists in the folder, a new version is
    /// created and the existing entry's bytes are archived. Returns the
    /// (possibly updated) file metadata.
    /// </summary>
    Task<FileEntryDto> UploadFileAsync(Guid? folderId, IFormFile file);

    /// <summary>
    /// Downloads a file as a stream. Returns the file content and
    /// metadata (content type, name) for the caller to write the response.
    /// </summary>
    Task<(Stream Stream, string FileName, string? ContentType)> DownloadFileAsync(Guid id);

    Task DeleteFileAsync(Guid id);

    /// <summary>
    /// Moves a file to a new parent folder (root if null).
    /// </summary>
    Task<FileEntryDto> MoveFileAsync(Guid id, Guid? targetFolderId);

    // ── Share links ─────────────────────────────────────────────────

    Task<FileShareDto> CreateShareLinkAsync(Guid fileId, CreateShareLinkDto input);

    Task<ListResultDto<FileShareDto>> GetShareLinksAsync(Guid fileId);

    Task RevokeShareLinkAsync(Guid shareId);

    /// <summary>
    /// Public, anonymous download via a share-link token. Validates the
    /// link's expiry / download cap / revoked state before streaming the
    /// underlying file's bytes.
    /// </summary>
    Task<(Stream Stream, string FileName, string? ContentType)> DownloadSharedAsync(string token);

    // ── Version history ─────────────────────────────────────────────

    Task<ListResultDto<FileVersionDto>> GetFileVersionsAsync(Guid fileId);

    /// <summary>
    /// Restores the file content to a prior version. The current state
    /// is archived as a new version row, and the FileEntry's bytes are
    /// swapped to the chosen version's blob.
    /// </summary>
    Task<FileEntryDto> RestoreVersionAsync(Guid fileId, Guid versionId);

    // ── Thumbnails ──────────────────────────────────────────────────

    /// <summary>
    /// Returns a thumbnail stream for an image file. Non-image files
    /// throw (caller should respond with 404).
    /// </summary>
    Task<(Stream Stream, string? ContentType)> GetThumbnailAsync(Guid id);

    // ── Storage info / quota ────────────────────────────────────────

    Task<StorageInfoDto> GetStorageInfoAsync();
}
