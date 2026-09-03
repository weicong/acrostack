using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace AcroStack.AccountPro;

public static class AccountProEfCoreDbContextExtensions
{
    /// <summary>与 <c>IdentityUser.UserName</c> 的列宽保持一致。</summary>
    private const int MaxUserNameLength = 256;

    /// <summary>与 OpenIddict 应用表 <c>ClientId</c> 的列宽保持一致。</summary>
    private const int MaxClientIdLength = 200;

    public static void ConfigureAccountPro(
        this ModelBuilder builder,
        string tablePrefix = "App",
        string? schema = null)
    {
        builder.Entity<ImpersonationSession>(b =>
        {
            b.ToTable(tablePrefix + "ImpersonationSessions", schema);
            b.ConfigureByConvention();

            b.Property(x => x.ImpersonatorUserName).HasMaxLength(MaxUserNameLength);
            b.Property(x => x.TargetUserName).HasMaxLength(MaxUserNameLength);
            b.Property(x => x.ClientId).HasMaxLength(MaxClientIdLength);

            // 管理页按"谁发起的"或"谁被模拟"查询历史，两条索引各自覆盖一侧；
            // 第三条覆盖按时间倒序的全量列表。
            b.HasIndex(x => new { x.TenantId, x.ImpersonatorUserId, x.CreationTime });
            b.HasIndex(x => new { x.TenantId, x.TargetUserId, x.CreationTime });
            b.HasIndex(x => new { x.TenantId, x.CreationTime });
        });
    }
}
