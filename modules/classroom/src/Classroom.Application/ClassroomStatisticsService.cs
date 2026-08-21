using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>
/// 课堂统计服务。策略（提示词十一节）：
/// - 答案提交：立即写库，然后使统计缓存失效并调度合并推送；
/// - 教师端统计在合并窗口内聚合一次推送，每次推送均从数据库重新校准（单机 SQLite 全量统计代价可忽略）；
/// - 将来多实例部署时以 Redis 轻量计数替换内存缓存（接口已隔离）。
/// </summary>
public class ClassroomStatisticsService : IClassroomStatisticsService, ITransientDependency
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IRepository<AnswerRecord, Guid> _answerRepository;
    private readonly IClassroomOnlineTracker _onlineTracker;

    public ClassroomStatisticsService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<Participant, Guid> participantRepository,
        IRepository<AnswerRecord, Guid> answerRepository,
        IClassroomOnlineTracker onlineTracker)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _participantRepository = participantRepository;
        _answerRepository = answerRepository;
        _onlineTracker = onlineTracker;
    }

    public async Task<QuestionStatisticsDto?> GetStatisticsAsync(Guid sessionId, Guid? tenantId)
    {
        var session = await _sessionRepository.GetAsync(sessionId);
        if (session.CurrentSessionQuestionId is null)
        {
            return null;
        }

        return await RecalibrateAsync(sessionId, session.CurrentSessionQuestionId.Value, tenantId);
    }

    public async Task<DashboardDto> GetDashboardAsync(Guid sessionId, Guid? tenantId)
    {
        var session = await _sessionRepository.GetAsync(sessionId);

        var participants = await _participantRepository.GetListAsync(p => p.SessionId == sessionId);
        var currentQuestion = session.CurrentSessionQuestionId.HasValue
            ? await _sessionQuestionRepository.FindAsync(session.CurrentSessionQuestionId.Value)
            : null;

        var answers = currentQuestion is not null
            ? await _answerRepository.GetListAsync(a => a.SessionQuestionId == currentQuestion.Id)
            : new List<AnswerRecord>();

        var statistics = currentQuestion is not null
            ? BuildStatistics(participants.Count, currentQuestion, answers)
            : null;

        var onlineCount = await _onlineTracker.GetOnlineCountAsync(sessionId, tenantId);

        var participantStates = new List<ParticipantStateDto>();
        foreach (var p in participants.OrderBy(p => p.JoinedAt))
        {
            var answer = answers.FirstOrDefault(a => a.ParticipantId == p.Id);
            var isOnline = await _onlineTracker.IsOnlineAsync(sessionId, p.Id, tenantId);
            participantStates.Add(new ParticipantStateDto
            {
                ParticipantId = p.Id,
                Nickname = p.Nickname,
                StudentNumber = p.StudentNumber,
                OnlineStatus = isOnline ? OnlineStatus.Online : OnlineStatus.Offline,
                LastSeenAt = p.LastSeenAt,
                AnswerState = answer is null
                    ? ParticipantAnswerState.NotStarted
                    : ParticipantAnswerState.Submitted,
                SubmittedAt = answer?.LastSubmittedAt,
                Revision = answer?.Revision,
                IsCorrect = answer?.IsCorrect,
            });
        }

        return new DashboardDto
        {
            SessionId = session.Id,
            ClassroomCode = session.ClassroomCode,
            Status = session.Status,
            Version = session.Version,
            CurrentQuestionNumber = session.CurrentQuestionNumber,
            CurrentSessionQuestionId = session.CurrentSessionQuestionId,
            OnlineCount = onlineCount,
            TotalParticipants = participants.Count,
            Statistics = statistics,
            Participants = participantStates,
            LastStatisticsUpdatedAt = DateTimeOffset.UtcNow,
            ServerTime = DateTimeOffset.UtcNow,
        };
    }

    public Task OnAnswerSubmittedAsync(Guid sessionId, Guid sessionQuestionId, Guid participantId, Guid? tenantId)
    {
        // MVP：立即失效 + 合并推送窗口内 DB 重算（正确性优先，接口保留以便切换 Redis 轻量计数）
        return Task.CompletedTask;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<QuestionStatisticsDto> RecalibrateAsync(Guid sessionId, Guid sessionQuestionId, Guid? tenantId)
    {
        var sessionQuestion = await _sessionQuestionRepository.GetAsync(sessionQuestionId);
        var participantCount = await _participantRepository.CountAsync(p => p.SessionId == sessionId);
        var answers = await _answerRepository.GetListAsync(a => a.SessionQuestionId == sessionQuestionId);

        return BuildStatistics(participantCount, sessionQuestion, answers);
    }

    private static QuestionStatisticsDto BuildStatistics(
        int totalParticipants,
        SessionQuestion sessionQuestion,
        List<AnswerRecord> answers)
    {
        var submittedCount = answers.Count;
        var graded = answers.Where(a => a.IsCorrect.HasValue).ToList();

        var optionCounts = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
        foreach (var answer in answers)
        {
            // 多选答案 "A,C" 拆分计数；单选/判断为单键；主观题自由文本不入选项分布
            var keys = answer.AnswerContent
                .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
            foreach (var key in keys)
            {
                if (key is "true" or "false" || key.Length == 1)
                {
                    var normalized = key.ToLowerInvariant();
                    optionCounts[normalized] = optionCounts.GetValueOrDefault(normalized) + 1;
                }
            }
        }

        double? correctRate = graded.Count > 0
            ? (double)graded.Count(a => a.IsCorrect!.Value) / graded.Count
            : null;

        var averageSeconds = submittedCount > 0 && sessionQuestion.OpenedAt.HasValue
            ? answers.Average(a => Math.Max(0, (a.LastSubmittedAt - sessionQuestion.OpenedAt.Value).TotalSeconds))
            : 0;

        return new QuestionStatisticsDto
        {
            SessionQuestionId = sessionQuestion.Id,
            TotalParticipants = totalParticipants,
            SubmittedCount = submittedCount,
            NotStartedCount = totalParticipants - submittedCount,
            AnsweringCount = 0, // 合并推送场景无法从 DB 区分"作答中"；由前端以 (总数-已提交) 展示
            CompletionRate = totalParticipants > 0 ? (double)submittedCount / totalParticipants : 0,
            OptionCounts = optionCounts,
            CorrectRate = correctRate,
            AverageAnswerSeconds = Math.Round(averageSeconds, 1),
        };
    }
}
