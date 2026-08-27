using System.Threading.Tasks;

namespace Classroom;

/// <summary>
/// 课堂事务执行器：多聚合写操作（开题/截止等）的显式事务边界抽象。
/// 宿主全局禁用了 ABP UoW 事务（SQLite），实现位于 EntityFrameworkCore 层，
/// 通过 EF Core Database.BeginTransaction 保证多表写原子性（提示词十七节：
/// 所有写操作必须有明确事务边界）。
/// </summary>
public interface IClassroomTransactionExecutor
{
    /// <summary>在显式事务中执行 action（内部统一 SaveChanges + Commit）。</summary>
    Task ExecuteAsync(System.Func<Task> action);

    /// <summary>
    /// 硬删除指定课堂的所有答案记录与修订历史（绕过软删除拦截器）。
    /// 必须在 <see cref="ExecuteAsync"/> 内调用以共享事务。
    /// </summary>
    Task HardDeleteAnswerRecordsAsync(System.Guid sessionId);
}
