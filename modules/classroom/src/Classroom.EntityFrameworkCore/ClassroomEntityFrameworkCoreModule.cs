using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Classroom.EntityFrameworkCore;

[DependsOn(
    typeof(ClassroomApplicationModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class ClassroomEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<ClassroomDbContext>(options =>
        {
            options.AddDefaultRepositories(includeAllEntities: true);
        });
    }
}

/// <summary>
/// 显式事务执行器实现：宿主全局禁用 ABP UoW 事务（SQLite 单文件库），
/// 多聚合写操作（开题/截止/提交答案）通过 EF Core 原生事务保证原子性。
/// </summary>
public class ClassroomTransactionExecutor : IClassroomTransactionExecutor, ITransientDependency
{
    private readonly IDbContextProvider<ClassroomDbContext> _dbContextProvider;

    public ClassroomTransactionExecutor(IDbContextProvider<ClassroomDbContext> dbContextProvider)
    {
        _dbContextProvider = dbContextProvider;
    }

    public async Task ExecuteAsync(Func<Task> action)
    {
        var dbContext = await _dbContextProvider.GetDbContextAsync();
        await using var transaction = await dbContext.Database.BeginTransactionAsync();
        await action();
        await dbContext.SaveChangesAsync();
        await transaction.CommitAsync();
    }

    public async Task HardDeleteAnswerRecordsAsync(Guid sessionId)
    {
        var dbContext = await _dbContextProvider.GetDbContextAsync();
        await dbContext.Database.ExecuteSqlRawAsync(
            "DELETE FROM ClsAnswerRevisions WHERE AnswerRecordId IN (SELECT Id FROM ClsAnswerRecords WHERE SessionId = {0})",
            sessionId);
        await dbContext.Database.ExecuteSqlRawAsync(
            "DELETE FROM ClsAnswerRecords WHERE SessionId = {0}",
            sessionId);
    }
}
