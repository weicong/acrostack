using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.AuditLogging;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using AcroStack.AccountPro;

namespace AcroStack.Data;

/// <summary>
/// 宿主 DbContext：承载 ABP 开源模块（Identity / OpenIddict / Permission / Setting /
/// Feature / AuditLogging / BackgroundJobs / BlobStoring）与 AcroStack.AccountPro 的实体，
/// 单库（SQLite）统一建模。
/// </summary>
public class AcroStackDbContext : AbpDbContext<AcroStackDbContext>, IAuditLoggingDbContext
{
    public DbSet<ImpersonationSession> ImpersonationSessions { get; set; }

    public DbSet<AuditLog> AuditLogs { get; set; }

    // IAuditLoggingDbContext（ABP 官方接口）强制要求该 DbSet，故必须保留；
    // 本基础版不提供审计导出功能，该表从不写入，因此在模型中 Ignore 掉
    // （见 OnModelCreating），数据库里不会创建该表。
    public DbSet<AuditLogExcelFile> AuditLogExcelFiles { get; set; }

    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public AcroStackDbContext(DbContextOptions<AcroStackDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureFeatureManagement();
        builder.ConfigurePermissionManagement();
        builder.ConfigureBlobStoring();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();

        /* Configure your own entities here */

        // AuditLogExcelFile 由 ConfigureAuditLogging 默认映射，但本基础版从不写入
        // 该表，此处显式移除以保持数据库 schema 干净。
        builder.Ignore<AuditLogExcelFile>();

        builder.ConfigureAccountPro(DbTablePrefix, DbSchema);
    }
}
