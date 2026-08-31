using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Classroom.EntityFrameworkCore;

public static class ClassroomEfCoreDbContextExtensions
{
    /// <summary>
    /// Classroom 实体配置（提示词六节数据库约束）。表前缀 Cls。
    /// 被 ClassroomDbContext 与挂载宿主（AcroStackDbContext）共同调用，保证表结构一致。
    /// </summary>
    public static void ConfigureClassroom(this ModelBuilder builder, string tablePrefix = "Cls", string? schema = null)
    {
        builder.Entity<Question>(b =>
        {
            b.ToTable(tablePrefix + "Questions", schema);
            b.ConfigureByConvention();

            b.Property(x => x.Stem).IsRequired().HasMaxLength(ClassroomConsts.MaxStemLength);
            b.Property(x => x.CorrectAnswer).HasMaxLength(128);
            b.Property(x => x.Explanation).HasMaxLength(ClassroomConsts.MaxExplanationLength);

            // 选项集合以 JSON 列存储在题目行内（值对象，无独立表）
            b.OwnsMany(x => x.Options, opt =>
            {
                opt.ToJson();
                opt.Property(o => o.Key).HasMaxLength(8);
                opt.Property(o => o.Text).HasMaxLength(ClassroomConsts.MaxOptionTextLength);
            });

            b.HasIndex(x => x.Type);
        });

        builder.Entity<Quiz>(b =>
        {
            b.ToTable(tablePrefix + "Quizzes", schema);
            b.ConfigureByConvention();

            b.Property(x => x.Name).IsRequired().HasMaxLength(ClassroomConsts.MaxQuizNameLength);
            b.Property(x => x.Description).HasMaxLength(ClassroomConsts.MaxQuizDescriptionLength);

            b.HasMany(x => x.Questions).WithOne().HasForeignKey("QuizId").IsRequired();
        });

        builder.Entity<QuizQuestion>(b =>
        {
            b.ToTable(tablePrefix + "QuizQuestions", schema);
            b.ConfigureByConvention();
            b.HasKey(x => x.Id);

            // QuizQuestion 无显式外键属性，按约定影子外键 QuizId 已在 Quiz 配置中声明
            b.HasIndex("QuizId", nameof(QuizQuestion.Order)).IsUnique();
        });

        builder.Entity<ClassSession>(b =>
        {
            b.ToTable(tablePrefix + "ClassSessions", schema);
            b.ConfigureByConvention();

            b.Property(x => x.ClassroomCode).IsRequired().HasMaxLength(ClassroomConsts.ClassroomCodeMaxLength);
            b.Property(x => x.Status).IsRequired();

            // 课堂码唯一索引：仅未结束课堂（4 位数字码空间 10^4，已结束课堂的码回收复用）；
            // 跨租户全局唯一（加入接口按码跨租户查课堂）。列长保持 6 以兼容历史 6 位码
            b.HasIndex(x => x.ClassroomCode)
                .IsUnique()
                .HasFilter($"[Status] <> {(int)ClassSessionStatus.Finished}");
            b.HasIndex(x => x.TeacherId);
            b.HasIndex(x => x.Status);
        });

        builder.Entity<SessionQuestion>(b =>
        {
            b.ToTable(tablePrefix + "SessionQuestions", schema);
            b.ConfigureByConvention();

            b.Property(x => x.Status).IsRequired();
            b.HasIndex(x => x.SessionId);
            b.HasIndex(x => new { x.SessionId, x.Order }).IsUnique();
            b.HasIndex(x => x.Status);
        });

        builder.Entity<Participant>(b =>
        {
            b.ToTable(tablePrefix + "Participants", schema);
            b.ConfigureByConvention();

            b.Property(x => x.Nickname).IsRequired().HasMaxLength(ClassroomConsts.MaxNicknameLength);
            b.Property(x => x.StudentNumber).HasMaxLength(ClassroomConsts.MaxStudentNumberLength);
            b.Property(x => x.OnlineStatus).IsRequired();

            // SessionId + ParticipantId 检索索引（重复昵称允许，以 ParticipantId 区分）
            b.HasIndex(x => x.SessionId);
            b.HasIndex(x => new { x.SessionId, x.Nickname });
        });

        builder.Entity<AnswerRecord>(b =>
        {
            b.ToTable(tablePrefix + "AnswerRecords", schema);
            b.ConfigureByConvention();

            b.Property(x => x.AnswerContent).IsRequired().HasMaxLength(ClassroomConsts.MaxAnswerContentLength);
            b.Property(x => x.RequestId).IsRequired().HasMaxLength(64);

            // 提示词六节：AnswerRecord 对 SessionQuestionId + ParticipantId 唯一
            b.HasIndex(x => new { x.SessionQuestionId, x.ParticipantId }).IsUnique();

            // 已处理的 RequestId 唯一（幂等）
            b.HasIndex(x => x.RequestId).IsUnique();

            // SessionQuestionId + LastSubmittedAt 索引（统计/校准查询）
            b.HasIndex(x => new { x.SessionQuestionId, x.LastSubmittedAt });
        });

        builder.Entity<AnswerRevision>(b =>
        {
            b.ToTable(tablePrefix + "AnswerRevisions", schema);
            b.ConfigureByConvention();

            b.Property(x => x.AnswerContent).IsRequired().HasMaxLength(ClassroomConsts.MaxAnswerContentLength);

            b.HasIndex(x => x.AnswerRecordId);
        });
    }
}
