using System.Collections.Generic;

namespace AcroStack.FileManagement;

/// <summary>
/// Configuration for the File Management module. Bound from the
/// <c>FileManagement</c> configuration section in <c>appsettings.json</c>.
/// Mirrors ABP Commercial File Management Pro's quota / size-limit options
/// (without the virus-scan piece).
/// </summary>
public class FileManagementOptions
{
    /// <summary>
    /// Maximum size, in bytes, of a single uploaded file. Default 50 MB.
    /// </summary>
    public long MaxFileSize { get; set; } = 52_428_800; // 50 MB

    /// <summary>
    /// Maximum total storage, in bytes, allowed per tenant. Default 1 GB.
    /// </summary>
    public long MaxStoragePerTenant { get; set; } = 1_073_741_824; // 1 GB

    /// <summary>
    /// 允许上传的文件扩展名白名单（小写、带前导点，如 <c>".pdf"</c>、<c>".png"</c>）。
    /// 默认白名单（可被配置整体覆盖）：
    /// 图片：.png .jpg .jpeg .gif .webp .bmp（刻意不含 .svg，SVG 可内联执行脚本，存在 XSS 风险）；
    /// 文档：.pdf .doc .docx .xls .xlsx .ppt .pptx .txt .csv .md；
    /// 压缩包：.zip .7z .rar .tar .gz；
    /// 音视频：.mp3 .mp4 .avi .mkv .mov .wav。
    /// </summary>
    public List<string>? AllowedFileExtensions { get; set; } = new List<string>
    {
        // 图片（不含 .svg：SVG 可内联执行脚本，存在 XSS 风险）
        ".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp",
        // 文档
        ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".txt", ".csv", ".md",
        // 压缩包
        ".zip", ".7z", ".rar", ".tar", ".gz",
        // 音视频
        ".mp3", ".mp4", ".avi", ".mkv", ".mov", ".wav",
    };
}
