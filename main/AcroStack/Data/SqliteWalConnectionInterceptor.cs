using System.Data.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace AcroStack.Data;

/// <summary>
/// SQLite 连接级 PRAGMA 配置拦截器。
///
/// 背景：此前 WAL 只因开发库文件被手工执行过一次 <c>PRAGMA journal_mode=WAL</c> 而生效。
/// journal_mode 是数据库文件的持久属性，代码从未设定——删库重建、新环境、CI、
/// Docker 首次建库都会退回默认 rollback journal 模式，读写锁互斥，
/// classroom 目标 100 人并发场景下极易出现 "database is locked"。
/// 在连接打开时显式设定，保证任何环境建出的库都处于同一模式。
/// </summary>
public class SqliteWalConnectionInterceptor : DbConnectionInterceptor
{
    /// <summary>无状态，全局共享单实例（DbConnectionInterceptor 要求实现可重入）。</summary>
    public static readonly SqliteWalConnectionInterceptor Instance = new();

    private SqliteWalConnectionInterceptor()
    {
    }

    // 注意：必须挂在 Opened（打开完成之后）而非 Opening 钩子——
    // EF Core 在调用 dbConnection.Open() 之前触发 ConnectionOpening，
    // 此时执行 PRAGMA 会抛 "ExecuteNonQuery can only be called when
    // the connection is open"。

    public override void ConnectionOpened(
        DbConnection connection,
        ConnectionEndEventData eventData)
    {
        ApplyPragmas(connection);
    }

    public override Task ConnectionOpenedAsync(
        DbConnection connection,
        ConnectionEndEventData eventData,
        CancellationToken cancellationToken = default)
    {
        ApplyPragmas(connection);
        return Task.CompletedTask;
    }

    private static void ApplyPragmas(DbConnection connection)
    {
        if (connection is not SqliteConnection sqliteConnection)
        {
            return;
        }

        // journal_mode=WAL：读写不再互斥。对已是 WAL 的库重复执行仅返回当前值，
        // 开销可忽略，无需查询当前模式再判断。
        Execute(sqliteConnection, "PRAGMA journal_mode=WAL;");

        // synchronous=NORMAL：WAL 模式下的官方推荐值。应用崩溃不丢已提交事务，
        // 仅断电/系统崩溃时可能丢失最近提交，换取提交路径不再强制 fsync。
        // 宿主同时禁用了 UoW 事务并大量使用 autoSave，写入粒度小，
        // 该权衡对本项目显著有利。
        Execute(sqliteConnection, "PRAGMA synchronous=NORMAL;");

        // busy_timeout 不在此设置：Microsoft.Data.Sqlite 打开连接时会按连接串
        // DefaultTimeout（默认 30s）自动下发 busy_timeout，此处重复设置可能与
        // 连接串覆盖产生不一致。
    }

    private static void Execute(SqliteConnection connection, string pragma)
    {
        using var command = connection.CreateCommand();
        command.CommandText = pragma;
        command.ExecuteNonQuery();
    }
}
