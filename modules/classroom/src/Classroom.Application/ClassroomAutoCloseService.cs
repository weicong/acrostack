using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace Classroom;

public interface IClassroomAutoCloseService
{
    /// <summary>
    /// 检查并惰性截止过期题目；发生截止时同步推进课堂聚合到讲评中。
    /// 调用方负责在读取路径上传入已加载的聚合；落库于当前 UoW。
    /// </summary>
    Task<bool> CloseIfExpiredAsync(ClassSession session, SessionQuestion question, DateTimeOffset? now = null);
}

/// <summary>
/// 到时惰性截止服务：题目 Open 且已过 EndsAt 时收卷，并同步把课堂聚合推进到讲评中。
/// 必须推进聚合：否则聚合停留在 Answering，状态机将拒绝"下一题"（Answering→Answering 非法）；
/// CloseCurrentQuestion 的 Version+1 同时驱动各端快照自愈。
/// 在读取路径（教师/学员/投屏快照、驾驶舱、统计校准）上调用，无页面在线也能正确流转。
/// </summary>
public class ClassroomAutoCloseService : IClassroomAutoCloseService, ITransientDependency
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;

    public ClassroomAutoCloseService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
    }

    public async Task<bool> CloseIfExpiredAsync(ClassSession session, SessionQuestion question, DateTimeOffset? now = null)
    {
        var closedAt = now ?? DateTimeOffset.UtcNow;
        if (!question.AutoCloseIfExpired(closedAt))
        {
            return false;
        }

        if (session.Status == ClassSessionStatus.Answering)
        {
            session.CloseCurrentQuestion(closedAt);
            await _sessionRepository.UpdateAsync(session);
        }

        await _sessionQuestionRepository.UpdateAsync(question);
        return true;
    }
}
