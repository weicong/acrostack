using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace AcroStack.FileManagement;

public static class FileManagementEfCoreDbContextExtensions
{
    public static void ConfigureFileManagement(this ModelBuilder builder, string tablePrefix = "App", string? schema = null)
    {
        builder.Entity<FileFolder>(b =>
        {
            b.ToTable(tablePrefix + "FileFolders", schema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            b.HasIndex(x => new { x.TenantId, x.ParentId, x.Name });
        });

        builder.Entity<FileEntry>(b =>
        {
            b.ToTable(tablePrefix + "FileEntries", schema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            b.Property(x => x.BlobName).IsRequired().HasMaxLength(128);
            b.Property(x => x.ContentType).HasMaxLength(128);
            // (TenantId, FolderId, Name) 复合索引（非唯一）：支撑"同文件夹内
            // 同名文件去重/合并为新版本"的查询（UploadFileAsync 按名称探测
            // 已存在条目），FolderId 单列索引不足以覆盖该谓词。
            b.HasIndex(x => new { x.TenantId, x.FolderId, x.Name });
        });

        builder.Entity<FileShare>(b =>
        {
            b.ToTable(tablePrefix + "FileShares", schema);
            b.ConfigureByConvention();
            // Token 为 32 字节加密安全随机数的 64 位十六进制字符串，
            // 列宽需从 32 调整为 64（见 CreateShareLinkAsync 生成逻辑）。
            b.Property(x => x.Token).IsRequired().HasMaxLength(64);
            b.HasIndex(x => x.Token).IsUnique();
            b.Property(x => x.ExpirationTime);
            b.Property(x => x.MaxDownloadCount);
            b.Property(x => x.DownloadCount);
            b.Property(x => x.IsRevoked);
            b.HasIndex(x => new { x.TenantId, x.FileEntryId });
        });

        builder.Entity<FileVersion>(b =>
        {
            b.ToTable(tablePrefix + "FileVersions", schema);
            b.ConfigureByConvention();
            b.Property(x => x.BlobName).IsRequired().HasMaxLength(128);
            b.Property(x => x.ContentType).HasMaxLength(128);
            b.Property(x => x.VersionNumber);
            b.Property(x => x.ByteSize);
            b.Property(x => x.UploadedByUserId);
            b.HasIndex(x => new { x.TenantId, x.FileEntryId });
        });
    }
}
