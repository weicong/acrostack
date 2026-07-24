using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.FileManagement;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.FileManagement;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.Services.FileManagement;

/// <summary>
/// File Management application service. Auto-routing is disabled
/// (<c>[RemoteService(false)]</c>) because a dedicated
/// <c>FileManagementController</c> exposes all endpoints with explicit,
/// predictable routes (ABP's auto-routing produces non-obvious paths for
/// non-CRUD method names like <c>GetFoldersAsync</c>).
/// </summary>
[RemoteService(false)]
[Authorize(AcroStackPermissions.FileManagement.Default)]
public class FileManagementAppService : ApplicationService, IFileManagementAppService
{
    private readonly IRepository<FileFolder, Guid> _folderRepository;
    private readonly IRepository<FileEntry, Guid> _fileRepository;
    private readonly IBlobContainer<FileManagementContainer> _blobContainer;

    public FileManagementAppService(
        IRepository<FileFolder, Guid> folderRepository,
        IRepository<FileEntry, Guid> fileRepository,
        IBlobContainer<FileManagementContainer> blobContainer)
    {
        _folderRepository = folderRepository;
        _fileRepository = fileRepository;
        _blobContainer = blobContainer;
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

        // Delete files in this folder.
        var files = await _fileRepository.GetListAsync(f => f.FolderId == folderId);
        foreach (var file in files)
        {
            await _blobContainer.DeleteAsync(file.BlobName);
            await _fileRepository.DeleteAsync(file);
        }

        // Delete the folder itself.
        await _folderRepository.DeleteAsync(folderId);
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

    [Authorize(AcroStackPermissions.FileManagement.Upload)]
    public async Task<FileEntryDto> UploadFileAsync(Guid? folderId, IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            throw new BusinessException("AcroStack:EmptyFile");
        }

        if (folderId.HasValue)
        {
            await _folderRepository.GetAsync(folderId.Value);
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

    [Authorize(AcroStackPermissions.FileManagement.Download)]
    public async Task<(Stream Stream, string FileName, string? ContentType)> DownloadFileAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);
        var stream = await _blobContainer.GetAsync(entry.BlobName);
        return (stream, entry.Name, entry.ContentType);
    }

    [Authorize(AcroStackPermissions.FileManagement.Delete)]
    public async Task DeleteFileAsync(Guid id)
    {
        var entry = await _fileRepository.GetAsync(id);
        await _blobContainer.DeleteAsync(entry.BlobName);
        await _fileRepository.DeleteAsync(entry);
    }
}
