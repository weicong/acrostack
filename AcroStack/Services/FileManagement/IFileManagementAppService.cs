using System;
using System.IO;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.FileManagement;
using Microsoft.AspNetCore.Http;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.FileManagement;

/// <summary>
/// File Management application service contract. Exposes hierarchical
/// folder CRUD and file upload/download/delete. Mirrors ABP Commercial
/// File Management Pro's API surface.
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

    // ── Files ───────────────────────────────────────────────────────

    /// <summary>
    /// Lists files in the given folder. When <paramref name="folderId"/>
    /// is null, returns root-level files.
    /// </summary>
    Task<ListResultDto<FileEntryDto>> GetFilesAsync(Guid? folderId);

    /// <summary>
    /// Uploads a file to the given folder (root if null). Returns the
    /// created file metadata.
    /// </summary>
    Task<FileEntryDto> UploadFileAsync(Guid? folderId, IFormFile file);

    /// <summary>
    /// Downloads a file as a stream. Returns the file content and
    /// metadata (content type, name) for the caller to write the response.
    /// </summary>
    Task<(Stream Stream, string FileName, string? ContentType)> DownloadFileAsync(Guid id);

    Task DeleteFileAsync(Guid id);
}
