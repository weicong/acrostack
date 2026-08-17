using Volo.Abp.BlobStoring;

namespace AcroStack.FileManagement;

/// <summary>
/// Marker class for the typed blob container that stores uploaded file
/// bytes for the File Management module. Use
/// <c>IBlobContainer&lt;FileManagementContainer&gt;</c> to read/write blobs.
/// </summary>
[BlobContainerName("acrostack-file-management")]
public class FileManagementContainer
{
}
