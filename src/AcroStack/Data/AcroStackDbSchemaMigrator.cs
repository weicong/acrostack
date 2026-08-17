using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace AcroStack.Data;

public class AcroStackDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public AcroStackDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the AcroStackDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AcroStackDbContext>()
            .Database
            .MigrateAsync();

    }
}
