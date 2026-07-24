using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.FileManagement;
using AcroStack.Services.FileManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.Controllers;

/// <summary>
/// Custom controller for File Management endpoints. ABP auto-routing
/// produces non-obvious paths for non-CRUD method names (e.g. GetFolders,
/// RenameFolder), so all endpoints are explicitly routed here for a
/// predictable REST surface.
/// </summary>
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

    [HttpDelete("files/{id}")]
    public Task DeleteFile(Guid id)
        => _appService.DeleteFileAsync(id);
}
