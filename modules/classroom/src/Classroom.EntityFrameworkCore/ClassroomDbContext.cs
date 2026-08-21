using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Classroom.EntityFrameworkCore;

/// <summary>
/// Classroom 模块 DbContext 接口（IIdentityDbContext 模式）。
/// 宿主 DbContext 通过 [ReplaceDbContext(typeof(IClassroomDbContext))] + 实现本接口，
/// 将模块注册的默认仓储与 IDbContextProvider&lt;ClassroomDbContext&gt; 重定向到宿主 DbContext，
/// 保证 ClassroomTransactionExecutor 的显式事务与仓储写入同一 DbContext 实例。
/// </summary>
public interface IClassroomDbContext
{
    DbSet<Question> Questions { get; }

    DbSet<Quiz> Quizzes { get; }

    DbSet<ClassSession> ClassSessions { get; }

    DbSet<SessionQuestion> SessionQuestions { get; }

    DbSet<Participant> Participants { get; }

    DbSet<AnswerRecord> AnswerRecords { get; }

    DbSet<AnswerRevision> AnswerRevisions { get; }
}

/// <summary>
/// Classroom 模块 DbContext（独立部署用）。
/// 挂载到 AcroStack 宿主时通过 ReplaceDbContext 替换为 AcroStackDbContext，
/// 实体配置由共享的 ConfigureClassroom() 扩展提供（两套 DbContext 完全一致）。
/// </summary>
public class ClassroomDbContext : AbpDbContext<ClassroomDbContext>, IClassroomDbContext
{
    public DbSet<Question> Questions { get; set; }

    public DbSet<Quiz> Quizzes { get; set; }

    public DbSet<ClassSession> ClassSessions { get; set; }

    public DbSet<SessionQuestion> SessionQuestions { get; set; }

    public DbSet<Participant> Participants { get; set; }

    public DbSet<AnswerRecord> AnswerRecords { get; set; }

    public DbSet<AnswerRevision> AnswerRevisions { get; set; }

    public ClassroomDbContext(DbContextOptions<ClassroomDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ConfigureClassroom();
    }
}
