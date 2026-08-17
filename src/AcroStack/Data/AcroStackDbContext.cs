using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
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
using AcroStack.Entities.Books;
using AcroStack.Entities.FileManagement;
using AcroStack.Entities.Chat;
// Disambiguate FileShare: System.IO.FileShare (from implicit usings)
// collides with our AcroStack.Entities.FileManagement.FileShare entity.
using FileShare = AcroStack.Entities.FileManagement.FileShare;

namespace AcroStack.Data;

public class AcroStackDbContext : AbpDbContext<AcroStackDbContext>
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

        builder.Entity<AppUser>(b =>
        {
            b.ToTable("AppUsers", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.UserName).IsRequired().HasMaxLength(AppUserConsts.MaxUserNameLength);
            b.Property(x => x.Email).HasMaxLength(AppUserConsts.MaxEmailLength);
            b.Property(x => x.Name).HasMaxLength(AppUserConsts.MaxNameLength);
            b.Property(x => x.Surname).HasMaxLength(AppUserConsts.MaxSurnameLength);
            b.Property(x => x.PhoneNumber).HasMaxLength(AppUserConsts.MaxPhoneNumberLength);
            b.HasIndex(x => x.UserName);
        });

        builder.Entity<Book>(b =>
        {
            b.ToTable(DbTablePrefix + "Books", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });

        builder.Entity<FileFolder>(b =>
        {
            b.ToTable(DbTablePrefix + "FileFolders", DbSchema);
            // ConfigureByConvention auto-configures the IMultiTenant query
            // filter (TenantId == CurrentTenantId) for this entity.
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            // Uniqueness is scoped per tenant + parent + name so different
            // tenants (and different parent folders) can reuse the same name.
            b.HasIndex(x => new { x.TenantId, x.ParentId, x.Name });
        });

        builder.Entity<FileEntry>(b =>
        {
            b.ToTable(DbTablePrefix + "FileEntries", DbSchema);
            // ConfigureByConvention auto-configures the IMultiTenant query
            // filter (TenantId == CurrentTenantId) for this entity.
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            b.Property(x => x.BlobName).IsRequired().HasMaxLength(128);
            b.Property(x => x.ContentType).HasMaxLength(128);
            b.HasIndex(x => new { x.TenantId, x.FolderId });
        });

        builder.Entity<FileShare>(b =>
        {
            b.ToTable(DbTablePrefix + "FileShares", DbSchema);
            // ConfigureByConvention auto-configures the IMultiTenant query
            // filter (TenantId == CurrentTenantId) for this entity.
            b.ConfigureByConvention();
            b.Property(x => x.Token).IsRequired().HasMaxLength(32);
            // Token is globally unique — it is the public lookup key used
            // by the [AllowAnonymous] shared-download endpoint, so it must
            // be unique across tenants.
            b.HasIndex(x => x.Token).IsUnique();
            b.Property(x => x.ExpirationTime);
            b.Property(x => x.MaxDownloadCount);
            b.Property(x => x.DownloadCount);
            b.Property(x => x.IsRevoked);
            b.HasIndex(x => new { x.TenantId, x.FileEntryId });
        });

        builder.Entity<FileVersion>(b =>
        {
            b.ToTable(DbTablePrefix + "FileVersions", DbSchema);
            // ConfigureByConvention auto-configures the IMultiTenant query
            // filter (TenantId == CurrentTenantId) for this entity.
            b.ConfigureByConvention();
            b.Property(x => x.BlobName).IsRequired().HasMaxLength(128);
            b.Property(x => x.ContentType).HasMaxLength(128);
            b.Property(x => x.VersionNumber);
            b.Property(x => x.ByteSize);
            b.Property(x => x.UploadedByUserId);
            b.HasIndex(x => new { x.TenantId, x.FileEntryId });
        });

        builder.Entity<ChatMessage>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatMessages", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Text).IsRequired().HasMaxLength(MaxMessageTextLength);
            b.Property(x => x.AttachmentName).HasMaxLength(256);
            b.Property(x => x.AttachmentBlobName).HasMaxLength(128);
            b.Property(x => x.AttachmentContentType).HasMaxLength(128);
            b.Property(x => x.AttachmentSize);
            b.Property(x => x.IsEdited);
            // IsDeleted is inherited from FullAuditedAggregateRoot (ISoftDelete)
            // and auto-configured by ConfigureByConvention.
        });

        builder.Entity<UserMessage>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatUserMessages", DbSchema);
            b.ConfigureByConvention();
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
            b.HasIndex(x => new { x.TenantId, x.UserId, x.IsRead });
            // IsDeleted is inherited from FullAuditedAggregateRoot (ISoftDelete)
            // and auto-configured by ConfigureByConvention.
        });

        builder.Entity<Conversation>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatConversations", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.LastMessage).HasMaxLength(MaxMessageTextLength);
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
        });

        builder.Entity<ChatMessageReaction>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatMessageReactions", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Reaction).IsRequired().HasMaxLength(32);
            // A user can only leave a given reaction once per message.
            b.HasIndex(x => new { x.TenantId, x.ChatMessageId, x.UserId, x.Reaction }).IsUnique();
        });

        builder.Entity<ChatBlockedUser>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatBlockedUsers", DbSchema);
            b.ConfigureByConvention();
            // A user can only block another user once.
            b.HasIndex(x => new { x.TenantId, x.UserId, x.BlockedUserId }).IsUnique();
        });
    }

    private const int MaxMessageTextLength = 4000;
}

