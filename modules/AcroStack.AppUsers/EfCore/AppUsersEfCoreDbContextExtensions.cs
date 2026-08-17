using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace AcroStack.AppUsers;

public static class AppUsersEfCoreDbContextExtensions
{
    public static void ConfigureAppUsers(this ModelBuilder builder, string tablePrefix = "App", string? schema = null)
    {
        builder.Entity<AppUser>(b =>
        {
            b.ToTable("AppUsers", schema);
            b.ConfigureByConvention();
            b.Property(x => x.UserName).IsRequired().HasMaxLength(AppUserConsts.MaxUserNameLength);
            b.Property(x => x.Email).HasMaxLength(AppUserConsts.MaxEmailLength);
            b.Property(x => x.Name).HasMaxLength(AppUserConsts.MaxNameLength);
            b.Property(x => x.Surname).HasMaxLength(AppUserConsts.MaxSurnameLength);
            b.Property(x => x.PhoneNumber).HasMaxLength(AppUserConsts.MaxPhoneNumberLength);
            b.HasIndex(x => x.UserName);
        });
    }
}
