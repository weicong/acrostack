using System.Collections.Generic;

namespace AcroStack.Services.FileManagement;

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
    /// Whitelist of allowed file extensions (lowercase, with leading dot,
    /// e.g. <c>".pdf"</c>, <c>".png"</c>). When null/empty, all extensions
    /// are allowed.
    /// </summary>
    public List<string>? AllowedFileExtensions { get; set; }
}
