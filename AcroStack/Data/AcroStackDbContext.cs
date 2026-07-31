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
using AcroStack.AppUsers;
using AcroStack.Entities.Books;
using AcroStack.Entities.SaaS;
using AcroStack.Entities.FileManagement;
using AcroStack.Entities.Chat;
using AcroStack.Entities.Cms;

namespace AcroStack.Data;

public class AcroStackDbContext : AbpDbContext<AcroStackDbContext>
{
    public DbSet<AppUser> AppUsers { get; set; }
    public DbSet<Book> Books { get; set; }
    public DbSet<Edition> Editions { get; set; }
    public DbSet<FileFolder> FileFolders { get; set; }
    public DbSet<FileEntry> FileEntries { get; set; }
    public DbSet<ChatMessage> ChatMessages { get; set; }
    public DbSet<UserMessage> ChatUserMessages { get; set; }
    public DbSet<Conversation> ChatConversations { get; set; }
    public DbSet<Page> CmsPages { get; set; }
    public DbSet<Blog> CmsBlogs { get; set; }
    public DbSet<BlogPost> CmsBlogPosts { get; set; }
    public DbSet<Tag> CmsTags { get; set; }
    public DbSet<EntityTag> CmsEntityTags { get; set; }
    public DbSet<Comment> CmsComments { get; set; }
    public DbSet<Reaction> CmsReactions { get; set; }
    public DbSet<Menu> CmsMenus { get; set; }
    public DbSet<MenuItem> CmsMenuItems { get; set; }

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

        builder.Entity<Edition>(b =>
        {
            b.ToTable(DbTablePrefix + "Editions", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.DisplayName).IsRequired().HasMaxLength(256);
            b.HasIndex(x => x.DisplayName);
        });

        builder.Entity<FileFolder>(b =>
        {
            b.ToTable(DbTablePrefix + "FileFolders", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            b.HasIndex(x => new { x.ParentId, x.Name });
        });

        builder.Entity<FileEntry>(b =>
        {
            b.ToTable(DbTablePrefix + "FileEntries", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(256);
            b.Property(x => x.BlobName).IsRequired().HasMaxLength(128);
            b.Property(x => x.ContentType).HasMaxLength(128);
            b.HasIndex(x => x.FolderId);
        });

        builder.Entity<ChatMessage>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatMessages", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Text).IsRequired().HasMaxLength(MaxMessageTextLength);
        });

        builder.Entity<UserMessage>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatUserMessages", DbSchema);
            b.ConfigureByConvention();
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
            b.HasIndex(x => new { x.TenantId, x.UserId, x.IsRead });
        });

        builder.Entity<Conversation>(b =>
        {
            b.ToTable(DbTablePrefix + "ChatConversations", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.LastMessage).HasMaxLength(MaxMessageTextLength);
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
        });

        builder.Entity<Page>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsPages", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Title).IsRequired().HasMaxLength(MaxPageTitleLength);
            b.Property(x => x.Slug).IsRequired().HasMaxLength(MaxPageSlugLength);
            b.Property(x => x.Content).IsRequired();
            b.Property(x => x.Description).HasMaxLength(MaxPageDescriptionLength);
            b.HasIndex(x => new { x.TenantId, x.Slug }).IsUnique();
        });

        builder.Entity<Blog>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsBlogs", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(MaxBlogNameLength);
            b.Property(x => x.Slug).IsRequired().HasMaxLength(MaxBlogSlugLength);
            b.Property(x => x.Description).HasMaxLength(MaxBlogDescriptionLength);
            b.HasIndex(x => new { x.TenantId, x.Slug }).IsUnique();
        });

        builder.Entity<BlogPost>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsBlogPosts", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Title).IsRequired().HasMaxLength(MaxBlogPostTitleLength);
            b.Property(x => x.Slug).IsRequired().HasMaxLength(MaxBlogPostSlugLength);
            b.Property(x => x.Content).IsRequired();
            b.Property(x => x.Excerpt).HasMaxLength(MaxBlogPostExcerptLength);
            b.Property(x => x.CoverImage).HasMaxLength(MaxUrlLength);
            b.HasIndex(x => new { x.TenantId, x.BlogId });
            b.HasIndex(x => new { x.TenantId, x.BlogId, x.Slug }).IsUnique();
        });

        builder.Entity<Tag>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsTags", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(MaxTagNameLength);
            b.HasIndex(x => new { x.TenantId, x.Name }).IsUnique();
        });

        builder.Entity<EntityTag>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsEntityTags", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.TagName).IsRequired().HasMaxLength(MaxTagNameLength);
            b.Property(x => x.EntityType).IsRequired().HasMaxLength(MaxEntityTypeLength);
            b.HasIndex(x => new { x.TenantId, x.EntityType, x.EntityId });
            b.HasIndex(x => new { x.TenantId, x.TagName });
        });

        builder.Entity<Comment>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsComments", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.EntityType).IsRequired().HasMaxLength(MaxEntityTypeLength);
            b.Property(x => x.Text).IsRequired().HasMaxLength(MaxCommentTextLength);
            b.Property(x => x.AuthorName).HasMaxLength(MaxAuthorNameLength);
            b.HasIndex(x => new { x.TenantId, x.EntityType, x.EntityId, x.CreationTime });
        });

        builder.Entity<Reaction>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsReactions", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.EntityType).IsRequired().HasMaxLength(MaxEntityTypeLength);
            b.Property(x => x.ReactionType).IsRequired().HasMaxLength(MaxReactionTypeLength);
            b.HasIndex(x => new { x.TenantId, x.EntityType, x.EntityId, x.ReactionType, x.CreatorId }).IsUnique();
        });

        builder.Entity<Menu>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsMenus", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(MaxMenuNameLength);
            b.HasIndex(x => new { x.TenantId, x.Name }).IsUnique();
        });

        builder.Entity<MenuItem>(b =>
        {
            b.ToTable(DbTablePrefix + "CmsMenuItems", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.DisplayName).IsRequired().HasMaxLength(MaxMenuItemDisplayNameLength);
            b.Property(x => x.Url).HasMaxLength(MaxUrlLength);
            b.Property(x => x.Icon).HasMaxLength(MaxMenuItemIconLength);
            b.Property(x => x.Target).IsRequired().HasMaxLength(MaxMenuItemTargetLength);
            b.HasIndex(x => new { x.TenantId, x.MenuId, x.Order });
        });
    }

    private const int MaxMessageTextLength = 4000;

    private const int MaxPageTitleLength = 256;
    private const int MaxPageSlugLength = 128;
    private const int MaxPageDescriptionLength = 512;

    private const int MaxBlogNameLength = 256;
    private const int MaxBlogSlugLength = 128;
    private const int MaxBlogDescriptionLength = 512;

    private const int MaxBlogPostTitleLength = 256;
    private const int MaxBlogPostSlugLength = 256;
    private const int MaxBlogPostExcerptLength = 512;

    private const int MaxTagNameLength = 64;
    private const int MaxEntityTypeLength = 64;

    private const int MaxCommentTextLength = 1024;
    private const int MaxAuthorNameLength = 64;

    private const int MaxReactionTypeLength = 64;

    private const int MaxMenuNameLength = 64;
    private const int MaxMenuItemDisplayNameLength = 256;
    private const int MaxMenuItemIconLength = 64;
    private const int MaxMenuItemTargetLength = 16;

    private const int MaxUrlLength = 512;
}

