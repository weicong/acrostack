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

namespace AcroStack.Data;

public class AcroStackDbContext : AbpDbContext<AcroStackDbContext>
{
    public DbSet<AppUser> AppUsers { get; set; }
    public DbSet<Book> Books { get; set; }
    public DbSet<Edition> Editions { get; set; }
    public DbSet<FileFolder> FileFolders { get; set; }
    public DbSet<FileEntry> FileEntries { get; set; }

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
    }
}

