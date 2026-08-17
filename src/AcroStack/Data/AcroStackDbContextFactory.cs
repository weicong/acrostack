using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AcroStack.Data;

public class AcroStackDbContextFactory : IDesignTimeDbContextFactory<AcroStackDbContext>
{
    public AcroStackDbContext CreateDbContext(string[] args)
    {
        AcroStackGlobalFeatureConfigurator.Configure();
        AcroStackModuleExtensionConfigurator.Configure();

        AcroStackEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<AcroStackDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));

        return new AcroStackDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}