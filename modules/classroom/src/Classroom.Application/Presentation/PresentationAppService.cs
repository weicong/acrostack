using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>
/// 投屏端：只读匿名快照（只读投屏令牌认证）。
/// 严禁返回学员姓名、学号、ParticipantId 与个人答案（提示词六节）。
/// </summary>
[DisableAuditing]
[RemoteService(false)] // 已由 ClassroomPresentationController 手写路由（/api/presentation/...）
public class PresentationAppService : ClassroomAppServiceBase, IPresentationAppService
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<Question, Guid> _questionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IRepository<AnswerRecord, Guid> _answerRepository;
    private readonly ICurrentPrincipalAccessor _principalAccessor;
    private readonly ICurrentTenant _currentTenant;
    private readonly IServiceProvider _serviceProvider;

    public PresentationAppService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<Question, Guid> questionRepository,
        IRepository<Participant, Guid> participantRepository,
        IRepository<AnswerRecord, Guid> answerRepository,
        ICurrentPrincipalAccessor principalAccessor,
        ICurrentTenant currentTenant,
        IServiceProvider serviceProvider)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _questionRepository = questionRepository;
        _participantRepository = participantRepository;
        _answerRepository = answerRepository;
        _principalAccessor = principalAccessor;
        _currentTenant = currentTenant;
        _serviceProvider = serviceProvider;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<PresentationSnapshotDto> GetSnapshotAsync(Guid sessionId)
    {
        var payload = _principalAccessor.Principal?.GetClassroomTokenPayload();
        if (payload is null || payload.ClientRole != ClassroomClientRole.Presentation)
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidPresentationToken);
        }

        if (payload.SessionId != sessionId)
        {
            throw new BusinessException(ClassroomErrorCodes.TokenSessionMismatch);
        }

        using (_currentTenant.Change(payload.TenantId))
        {
            var session = await _sessionRepository.GetAsync(sessionId);
            var serverNow = DateTimeOffset.UtcNow;
            var questionCount = await _sessionQuestionRepository.CountAsync(q => q.SessionId == sessionId);
            var totalParticipants = await _participantRepository.CountAsync(p => p.SessionId == sessionId);

            OpenQuestionInfoDto? currentQuestion = null;
            SessionQuestion? currentSessionQuestion = null;
            Question? question = null;
            if (session.CurrentSessionQuestionId.HasValue)
            {
                currentSessionQuestion = await _sessionQuestionRepository.FindAsync(session.CurrentSessionQuestionId.Value);
                if (currentSessionQuestion is not null)
                {
                    question = await _questionRepository.FindAsync(currentSessionQuestion.QuestionId);
                    currentQuestion = question is not null
                        ? new OpenQuestionInfoDto
                        {
                            Question = question.ToQuestionView(currentSessionQuestion),
                            OpenedAt = currentSessionQuestion.OpenedAt ?? default,
                            EndsAt = currentSessionQuestion.EndsAt,
                            IsAcceptingAnswers = currentSessionQuestion.IsAcceptingAnswers(serverNow),
                            Status = currentSessionQuestion.Status,
                        }
                        : null;
                }
            }

            var submittedCount = currentSessionQuestion is not null
                ? await _answerRepository.CountAsync(a => a.SessionQuestionId == currentSessionQuestion.Id)
                : 0;

            // 匿名选项分布：仅教师公布统计后可见
            Dictionary<string, int>? publishedOptionCounts = null;
            if (currentSessionQuestion?.StatisticsPublishedAt is not null)
            {
                var statistics = await _serviceProvider
                    .GetRequiredService<IClassroomStatisticsService>()
                    .RecalibrateAsync(session.Id, currentSessionQuestion.Id, payload.TenantId);
                publishedOptionCounts = statistics.OptionCounts;
                submittedCount = statistics.SubmittedCount;
            }

            // 正确答案与解析：仅教师公布答案后可见
            string? correctAnswer = null;
            string? explanation = null;
            if (currentSessionQuestion?.AnswerPublishedAt is not null && question is not null)
            {
                correctAnswer = question.CorrectAnswer;
                explanation = question.Explanation;
            }

            return new PresentationSnapshotDto
            {
                SessionId = session.Id,
                Status = session.Status,
                Version = session.Version,
                ServerTime = serverNow,
                QuestionCount = questionCount,
                CurrentQuestionNumber = session.CurrentQuestionNumber,
                CurrentQuestion = currentQuestion,
                SubmittedCount = submittedCount,
                TotalParticipants = totalParticipants,
                PublishedOptionCounts = publishedOptionCounts,
                CorrectAnswer = correctAnswer,
                Explanation = explanation,
            };
        }
    }
}
