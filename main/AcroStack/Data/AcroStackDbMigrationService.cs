using Microsoft.Extensions.Logging.Abstractions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace AcroStack.Data;

public class AcroStackDbMigrationService : ITransientDependency
{
    public ILogger<AcroStackDbMigrationService> Logger { get; set; }

    private readonly IDataSeeder _dataSeeder;
    private readonly AcroStackDbSchemaMigrator _dbSchemaMigrator;

    public AcroStackDbMigrationService(
        IDataSeeder dataSeeder,
        AcroStackDbSchemaMigrator dbSchemaMigrator)
    {
        _dataSeeder = dataSeeder;
        _dbSchemaMigrator = dbSchemaMigrator;

        Logger = NullLogger<AcroStackDbMigrationService>.Instance;
    }

    public async Task MigrateAsync()
    {
        Logger.LogInformation("Started database migrations...");

        await MigrateDatabaseSchemaAsync();
        await SeedDataAsync();

        Logger.LogInformation("Successfully completed database migrations.");
        Logger.LogInformation("You can safely end this process...");
    }

    private async Task MigrateDatabaseSchemaAsync()
    {
        Logger.LogInformation("Migrating schema for host database...");

        await _dbSchemaMigrator.MigrateAsync();
    }

    private async Task SeedDataAsync()
    {
        Logger.LogInformation("Executing host database seed...");

        await _dataSeeder.SeedAsync(new DataSeedContext()
            .WithProperty(IdentityDataSeedContributor.AdminEmailPropertyName, AcroStackConsts.AdminEmailDefaultValue)
            .WithProperty(IdentityDataSeedContributor.AdminPasswordPropertyName, AcroStackConsts.AdminPasswordDefaultValue)
        );
    }
}
