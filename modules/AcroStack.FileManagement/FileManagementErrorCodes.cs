namespace AcroStack.FileManagement;

/// <summary>
/// FileManagement 模块结构化错误码。本地化文本见 Localization/FileManagement/{en,zh-Hans}.json，
/// 通过 FileManagementModule 中 MapCodeNamespace("FileManagement", ...) 映射到 FileManagementResource。
/// </summary>
public static class FileManagementErrorCodes
{
    public const string FolderCannotBeMovedIntoItself = "FileManagement:FolderCannotBeMovedIntoItself";
    public const string FolderCannotBeMovedIntoDescendant = "FileManagement:FolderCannotBeMovedIntoDescendant";
    public const string EmptyFile = "FileManagement:EmptyFile";
    public const string FileExceedsMaxSize = "FileManagement:FileExceedsMaxSize";
    public const string FileExtensionNotAllowed = "FileManagement:FileExtensionNotAllowed";
    public const string StorageQuotaExceeded = "FileManagement:StorageQuotaExceeded";
    public const string ShareLinkNotFound = "FileManagement:ShareLinkNotFound";
    public const string ShareLinkRevoked = "FileManagement:ShareLinkRevoked";
    public const string ShareLinkExpired = "FileManagement:ShareLinkExpired";
    public const string ShareLinkDownloadLimitReached = "FileManagement:ShareLinkDownloadLimitReached";
    public const string FileVersionNotFound = "FileManagement:FileVersionNotFound";
    public const string ThumbnailNotAvailable = "FileManagement:ThumbnailNotAvailable";
}
