using System.Threading.Tasks;

namespace AcroStack.Common.Transactions;

/// <summary>
/// 共享的显式事务执行器：把多个聚合/仓储的写操作包进同一个
/// 事务性工作单元，保证「要么全部落库、要么全部回滚」。
/// 适用于所有模块的多步写操作；classroom 模块自带的
/// <c>IClassroomTransactionExecutor</c> 走 EF 原生事务（同一 DbContext
/// 实例），两者并存，互不替代。
/// </summary>
public interface IAcroStackTransactionExecutor
{
    /// <summary>在独立的新事务性工作单元中执行写操作，成功则提交，异常则整体回滚。</summary>
    Task ExecuteAsync(Func<Task> action);

    /// <summary>同 <see cref="ExecuteAsync(Func{Task})"/>，并带回返回值。</summary>
    Task<TResult> ExecuteAsync<TResult>(Func<Task<TResult>> action);
}
