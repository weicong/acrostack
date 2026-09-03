using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;

namespace AcroStack.Common.Transactions;

/// <summary>
/// 基于 ABP 工作单元的事务执行器。
/// 宿主已禁用 ABP 全局 UoW 事务（SQLite 单文件库，见
/// <c>AcroStackModule</c> 的 <c>AbpUnitOfWorkDefaultOptions.TransactionBehavior</c>），
/// 因此跨聚合的写操作默认没有事务保护；本执行器通过
/// <c>Begin(requiresNew: true, isTransactional: true)</c> 显式开启
/// 一个独立的事务性工作单元。
/// SQLite/WAL 注意事项：
/// - WAL 允许「多读单写」：事务提交前会持有写锁，事务内不要做长耗时
///   的外部调用（HTTP、大文件 IO 等），避免其他写操作排队超时；
/// - 事务内的所有写操作应走同一个请求作用域的 DbContext 连接
///   （ABP 默认如此），不要在事务中另开数据库连接，否则触发
///   SQLite 锁竞争（database is locked）。
/// </summary>
public class AcroStackTransactionExecutor : IAcroStackTransactionExecutor, ITransientDependency
{
    private readonly IUnitOfWorkManager _unitOfWorkManager;

    public AcroStackTransactionExecutor(IUnitOfWorkManager unitOfWorkManager)
    {
        _unitOfWorkManager = unitOfWorkManager;
    }

    public async Task ExecuteAsync(Func<Task> action)
    {
        using var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: true);
        await action();
        await uow.CompleteAsync();
    }

    public async Task<TResult> ExecuteAsync<TResult>(Func<Task<TResult>> action)
    {
        using var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: true);
        var result = await action();
        await uow.CompleteAsync();
        return result;
    }
}
