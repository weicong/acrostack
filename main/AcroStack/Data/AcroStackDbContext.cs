using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;
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
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using Volo.CmsKit.EntityFrameworkCore;
using AcroStack.AppUsers;
using AcroStack.Books;
using AcroStack.AccountPro;
using AcroStack.FileManagement;
using AcroStack.Chat;
using Classroom;
using Classroom.EntityFrameworkCore;
// Disambiguate FileShare: System.IO.FileShare (from implicit usings)
// collides with our AcroStack.FileManagement.FileShare entity.
using FileShare = AcroStack.FileManagement.FileShare;

namespace AcroStack.Data;

/// <summary>
/// 宿主 DbContext 挂载 Classroom 模块实体（IIdentityDbContext 替换模式）。
/// <see cref="ReplaceDbContextAttribute"/> 使 Classroom 模块注册的
/// IDbContextProvider&lt;ClassroomDbContext&gt; 与默认仓储解析到本 DbContext，
/// 保证 ClassroomTransactionExecutor 的显式事务与仓储写入同一 DbContext 实例。
/// </summary>
[ReplaceDbContext(typeof(IClassroomDbContext))]
public class AcroStackDbContext : AbpDbContext<AcroStackDbContext>, IAuditLoggingDbContext, IClassroomDbContext
{
    public DbSet<AppUser> AppUsers { get; set; }
    public DbSet<Book> Books { get; set; }
    public DbSet<FileFolder> FileFolders { get; set; }
    public DbSet<FileEntry> FileEntries { get; set; }
    public DbSet<FileShare> FileShares { get; set; }
    public DbSet<FileVersion> FileVersions { get; set; }
    public DbSet<ChatMessage> ChatMessages { get; set; }
    public DbSet<UserMessage> ChatUserMessages { get; set; }
    public DbSet<Conversation> ChatConversations { get; set; }
    public DbSet<ChatMessageReaction> ChatMessageReactions { get; set; }
    public DbSet<ChatBlockedUser> ChatBlockedUsers { get; set; }
    public DbSet<ImpersonationSession> ImpersonationSessions { get; set; }

    public DbSet<Question> Questions { get; set; }
    public DbSet<Quiz> Quizzes { get; set; }
    public DbSet<ClassSession> ClassSessions { get; set; }
    public DbSet<SessionQuestion> SessionQuestions { get; set; }
    public DbSet<Participant> Participants { get; set; }
    public DbSet<AnswerRecord> AnswerRecords { get; set; }
    public DbSet<AnswerRevision> AnswerRevisions { get; set; }

    public DbSet<AuditLog> AuditLogs { get; set; }

    // IAuditLoggingDbContext（ABP 官方接口）强制要求该 DbSet，故必须保留；
    // 但本项目的审计导出走流式 IRemoteStreamContent，从不写入此表，
    // 表在模型中被 Ignore 移除（见 OnModelCreating），数据库里不再创建。
    public DbSet<AuditLogExcelFile> AuditLogExcelFiles { get; set; }

    // EntityChange 是 AuditLog 聚合的子实体，ABP 审计日志模块不为其注册仓储。
    // 此处声明 DbSet 使 AddDefaultRepositories(includeAllEntities: true)
    // 注册 IRepository<EntityChange, Guid>（AuditLogAppService 需要）。
    public DbSet<EntityChange> EntityChanges { get; set; }

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
        builder.ConfigureTenantManagement();
        builder.ConfigureCmsKit();

        /* Configure your own entities here */

        builder.ConfigureBooks(DbTablePrefix, DbSchema);

        builder.ConfigureAppUsers(DbTablePrefix, DbSchema);

        builder.ConfigureFileManagement(DbTablePrefix, DbSchema);

        builder.ConfigureChat(DbTablePrefix, DbSchema);

        // AuditLogExcelFile 由 ConfigureAuditLogging 默认映射，但本项目从不写入
        // 该表（导出走流式响应），此处显式移除以保持数据库 schema 干净。
        builder.Ignore<AuditLogExcelFile>();

        builder.ConfigureAccountPro(DbTablePrefix, DbSchema);

        // Classroom 模块（表前缀 Cls，实体配置与 ClassroomDbContext 共享）
        builder.ConfigureClassroom();
    }
}

