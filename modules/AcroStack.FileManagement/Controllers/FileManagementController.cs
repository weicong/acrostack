using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.FileManagement;

/// <summary>
/// Custom controller for File Management endpoints. ABP auto-routing
/// produces non-obvious paths for non-CRUD method names (e.g. GetFolders,
/// RenameFolder), so all endpoints are explicitly routed here for a
/// predictable REST surface.
/// Class-level <c>[Authorize]</c> is applied as defense in depth, even
/// though the backing <see cref="IFileManagementAppService"/> is also
/// authorized (matches the pattern used by <c>GdprController</c>).
/// The <c>DownloadShared</c> endpoint overrides this with
/// <c>[AllowAnonymous]</c> so anonymous users can fetch a shared file by
/// its token.
/// </summary>
[Authorize(FileManagementPermissions.Default)]
[Route("api/app/file-management")]
public class FileManagementController : AbpController
{
    private readonly IFileManagementAppService _appService;

    public FileManagementController(IFileManagementAppService appService)
    {
        _appService = appService;
    }

    // ── Folders ─────────────────────────────────────────────────────

    [HttpGet("folders")]
    public Task<ListResultDto<FileFolderDto>> GetFolders([FromQuery] Guid? parentId)
        => _appService.GetFoldersAsync(parentId);

    [HttpPost("folders")]
    public Task<FileFolderDto> CreateFolder([FromBody] CreateFileFolderDto input)
        => _appService.CreateFolderAsync(input);

    [HttpPut("folders/{id}/rename")]
    public Task<FileFolderDto> RenameFolder(Guid id, [FromBody] RenameDto input)
        => _appService.RenameFolderAsync(id, input);

    [HttpPost("folders/{id}/move")]
    public Task<FileFolderDto> MoveFolder(Guid id, [FromBody] MoveFolderDto input)
        => _appService.MoveFolderAsync(id, input.TargetFolderId);

    [HttpDelete("folders/{id}")]
    public Task DeleteFolder(Guid id)
        => _appService.DeleteFolderAsync(id);

    // ── Files ───────────────────────────────────────────────────────

    [HttpGet("files")]
    public Task<ListResultDto<FileEntryDto>> GetFiles([FromQuery] Guid? folderId)
        => _appService.GetFilesAsync(folderId);

    [HttpPost("files/upload")]
    public async Task<FileEntryDto> UploadFile([FromQuery] Guid? folderId, IFormFile file)
        => await _appService.UploadFileAsync(folderId, file);

    [HttpGet("files/{id}/download")]
    public async Task<IActionResult> DownloadFile(Guid id)
    {
        var (stream, fileName, contentType) = await _appService.DownloadFileAsync(id);
        return File(stream, contentType ?? "application/octet-stream", fileName);
    }

    [HttpPost("files/{id}/move")]
    public Task<FileEntryDto> MoveFile(Guid id, [FromBody] MoveFileDto input)
        => _appService.MoveFileAsync(id, input.TargetFolderId);

    [HttpDelete("files/{id}")]
    public Task DeleteFile(Guid id)
        => _appService.DeleteFileAsync(id);

    // ── Share links ─────────────────────────────────────────────────

    [HttpPost("files/{id}/share-links")]
    public Task<FileShareDto> CreateShareLink(Guid id, [FromBody] CreateShareLinkDto input)
        => _appService.CreateShareLinkAsync(id, input);

    [HttpGet("files/{id}/share-links")]
    public Task<ListResultDto<FileShareDto>> GetShareLinks(Guid id)
        => _appService.GetShareLinksAsync(id);

    [HttpDelete("share-links/{id}")]
    public Task RevokeShareLink(Guid id)
        => _appService.RevokeShareLinkAsync(id);

    [HttpGet("shared/{token}")]
    [AllowAnonymous]
    public async Task<IActionResult> DownloadShared(string token)
    {
        var (stream, fileName, contentType) = await _appService.DownloadSharedAsync(token);
        return File(stream, contentType ?? "application/octet-stream", fileName);
    }

    // ── Version history ─────────────────────────────────────────────

    [HttpGet("files/{id}/versions")]
    public Task<ListResultDto<FileVersionDto>> GetFileVersions(Guid id)
        => _appService.GetFileVersionsAsync(id);

    [HttpPost("files/{id}/versions/{versionId}/restore")]
    public Task<FileEntryDto> RestoreVersion(Guid id, Guid versionId)
        => _appService.RestoreVersionAsync(id, versionId);

    // ── Thumbnails ──────────────────────────────────────────────────

    [HttpGet("files/{id}/thumbnail")]
    public async Task<IActionResult> GetThumbnail(Guid id)
    {
        var (stream, contentType) = await _appService.GetThumbnailAsync(id);
        return File(stream, contentType ?? "application/octet-stream");
    }

    // ── Storage info / quota ────────────────────────────────────────

    [HttpGet("storage-info")]
    public Task<StorageInfoDto> GetStorageInfo()
        => _appService.GetStorageInfoAsync();
}
