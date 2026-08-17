using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace AcroStack.Books;

public static class BooksEfCoreDbContextExtensions
{
    public static void ConfigureBooks(this ModelBuilder builder, string tablePrefix = "App", string? schema = null)
    {
        builder.Entity<Book>(b =>
        {
            b.ToTable(tablePrefix + "Books", schema);
            b.ConfigureByConvention();
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });
    }
}
