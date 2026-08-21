using System;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Realtime;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>
/// 学员端：快照恢复 + 答案提交。
/// 身份一律从课堂令牌（ClassroomToken 认证方案）解析，不信任请求体；
/// 截止判定以服务端时间为准（客户端时间仅诊断）。
/// </summary>
[DisableAuditing] // 答案内容属敏感数据，不写入审计日志（提示词十二节）
[RemoteService(false)] // 已由 ClassroomStudentController 手写路由（/api/student/...）
public class StudentAppService : ClassroomAppServiceBase, IStudentAppService
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<Question, Guid> _questionRepository;
    private readonly IRepository<AnswerRecord, Guid> _answerRepository;
    private readonly IRepository<AnswerRevision, Guid> _answerRevisionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IClassroomTransactionExecutor _transactionExecutor;
    private readonly IClassroomOnlineTracker _onlineTracker;
    private readonly IClassroomDashboardThrottler _dashboardThrottler;
    private readonly IClassroomRealtimeNotifier _notifier;
    private readonly ICurrentPrincipalAccessor _principalAccessor;
    private readonly ICurrentTenant _currentTenant;
    private readonly IServiceProvider _serviceProvider;

    public StudentAppService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<Question, Guid> questionRepository,
        IRepository<AnswerRecord, Guid> answerRepository,
        IRepository<AnswerRevision, Guid> answerRevisionRepository,
        IRepository<Participant, Guid> participantRepository,
        IClassroomTransactionExecutor transactionExecutor,
        IClassroomOnlineTracker onlineTracker,
        IClassroomDashboardThrottler dashboardThrottler,
        IClassroomRealtimeNotifier notifier,
        ICurrentPrincipalAccessor principalAccessor,
        ICurrentTenant currentTenant,
        IServiceProvider serviceProvider)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _questionRepository = questionRepository;
        _answerRepository = answerRepository;
        _answerRevisionRepository = answerRevisionRepository;
        _participantRepository = participantRepository;
        _transactionExecutor = transactionExecutor;
        _onlineTracker = onlineTracker;
        _dashboardThrottler = dashboardThrottler;
        _notifier = notifier;
        _principalAccessor = principalAccessor;
        _currentTenant = currentTenant;
        _serviceProvider = serviceProvider;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<StudentSnapshotDto> GetSnapshotAsync(Guid sessionId)
    {
        var payload = GetRequiredStudentPayload(sessionId);

        using (_currentTenant.Change(payload.TenantId))
        {
            var session = await _sessionRepository.GetAsync(sessionId);

            // 心跳：学员拉快照视为活跃（在线状态允许短暂误差）
            var participant = await _participantRepository.FindAsync(p => p.Id == payload.ParticipantId && p.SessionId == sessionId);
            if (participant is not null)
            {
                participant.MarkSeen(DateTimeOffset.UtcNow, OnlineStatus.Online);
                await _participantRepository.UpdateAsync(participant);
            }

            await _onlineTracker.MarkSeenAsync(sessionId, payload.ParticipantId!.Value, payload.TenantId);

            var snapshot = await BuildSnapshotAsync(session, payload);

            return snapshot;
        }
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<StudentAnswerHistoryDto> GetMyAnswerHistoryAsync(Guid sessionId)
    {
        var payload = GetRequiredStudentPayload(sessionId);

        using (_currentTenant.Change(payload.TenantId))
        {
            var session = await _sessionRepository.GetAsync(sessionId);

            var participant = await _participantRepository.FindAsync(
                p => p.Id == payload.ParticipantId && p.SessionId == sessionId);
            if (participant is null)
            {
                throw new BusinessException(ClassroomErrorCodes.InvalidClassroomToken);
            }

            var sessionQuestions = (await _sessionQuestionRepository
                .GetListAsync(sq => sq.SessionId == sessionId))
                .OrderBy(sq => sq.Order)
                .ToList();

            var questionIds = sessionQuestions.Select(sq => sq.QuestionId).Distinct().ToList();
            var questions = (await _questionRepository.GetListAsync(q => questionIds.Contains(q.Id)))
                .ToDictionary(q => q.Id);

            var answers = (await _answerRepository.GetListAsync(
                a => a.SessionId == sessionId && a.ParticipantId == payload.ParticipantId))
                .ToDictionary(a => a.SessionQuestionId);

            var items = new List<StudentAnswerHistoryItemDto>();
            var answeredCount = 0;
            var correctCount = 0;

            foreach (var sq in sessionQuestions)
            {
                if (!questions.TryGetValue(sq.QuestionId, out var question))
                {
                    continue;
                }

                var answerPublished = sq.Status == SessionQuestionStatus.AnswerPublished;
                answers.TryGetValue(sq.Id, out var myAnswer);

                if (myAnswer is not null)
                {
                    answeredCount++;
                }

                // 判分结果仅在公布答案后下发（与快照规则一致）
                bool? myIsCorrect = answerPublished ? myAnswer?.IsCorrect : null;
                if (myIsCorrect == true)
                {
                    correctCount++;
                }

                items.Add(new StudentAnswerHistoryItemDto
                {
                    Order = sq.Order,
                    QuestionType = question.Type,
                    Stem = question.Stem,
                    Options = question.Options
                        .Select(o => new QuestionOptionDto { Key = o.Key, Text = o.Text })
                        .ToList(),
                    QuestionStatus = sq.Status,
                    MyAnswerContent = myAnswer?.AnswerContent,
                    MyIsCorrect = myIsCorrect,
                    MyRevision = myAnswer?.Revision ?? 0,
                    MyLastSubmittedAt = myAnswer?.LastSubmittedAt,
                    CorrectAnswer = answerPublished ? question.CorrectAnswer : null,
                    Explanation = answerPublished ? question.Explanation : null,
                });
            }

            return new StudentAnswerHistoryDto
            {
                SessionId = session.Id,
                Status = session.Status,
                Version = session.Version,
                ServerTime = DateTimeOffset.UtcNow,
                Nickname = participant.Nickname,
                QuestionCount = items.Count,
                AnsweredCount = answeredCount,
                CorrectCount = correctCount,
                Items = items,
            };
        }
    }

    public async Task<SubmitAnswerResultDto> SubmitAnswerAsync(Guid sessionId, SubmitAnswerInputDto input)
    {
        var payload = GetRequiredStudentPayload(sessionId);

        using (_currentTenant.Change(payload.TenantId))
        {
            var session = await _sessionRepository.GetAsync(sessionId);
            if (session.Status == ClassSessionStatus.Finished)
            {
                throw new BusinessException(ClassroomErrorCodes.ClassroomFinished);
            }

            var sessionQuestion = await _sessionQuestionRepository.GetAsync(input.SessionQuestionId);
            if (sessionQuestion.SessionId != sessionId)
            {
                throw new BusinessException(ClassroomErrorCodes.TokenSessionMismatch);
            }

            // 截止判定：服务端时间（提示词四节——最终是否超时由服务端时间判定）
            var serverNow = DateTimeOffset.UtcNow;
            if (sessionQuestion.Status == SessionQuestionStatus.Open && !sessionQuestion.IsAcceptingAnswers(serverNow))
            {
                throw new BusinessException(ClassroomErrorCodes.QuestionClosed);
            }

            if (sessionQuestion.Status != SessionQuestionStatus.Open)
            {
                throw new BusinessException(ClassroomErrorCodes.QuestionNotOpen);
            }

            var question = await _questionRepository.GetAsync(sessionQuestion.QuestionId);
            AnswerGrader.ValidateAnswer(question, input.AnswerContent);

            // 幂等：相同 RequestId 重试返回首次处理结果，不产生重复记录（提示词十节）
            var existingByRequestId = await _answerRepository.FindAsync(a => a.RequestId == input.RequestId);
            if (existingByRequestId is not null)
            {
                if (existingByRequestId.ParticipantId != payload.ParticipantId
                    || existingByRequestId.SessionQuestionId != input.SessionQuestionId)
                {
                    // RequestId 被不同身份/题目复用：视为异常请求
                    throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat)
                        .WithData("Reason", "RequestId mismatch.");
                }

                return new SubmitAnswerResultDto
                {
                    SessionQuestionId = existingByRequestId.SessionQuestionId,
                    AnswerRecordId = existingByRequestId.Id,
                    IsDuplicateRequest = true,
                    Revision = existingByRequestId.Revision,
                    ServerSubmittedAt = existingByRequestId.LastSubmittedAt,
                    ClassroomVersion = session.Version,
                    ServerTime = serverNow,
                };
            }

            var isCorrect = AnswerGrader.Grade(question.Type, question.CorrectAnswer, input.AnswerContent);
            var participantId = payload.ParticipantId!.Value;

            var existingRecord = await _answerRepository.FindAsync(
                a => a.SessionQuestionId == input.SessionQuestionId && a.ParticipantId == participantId);

            AnswerRecord record;
            if (existingRecord is null)
            {
                record = new AnswerRecord(
                    GuidGenerator.Create(),
                    sessionId,
                    input.SessionQuestionId,
                    participantId,
                    input.AnswerContent,
                    input.ClientStartedAt,
                    isCorrect,
                    input.RequestId,
                    serverNow,
                    _currentTenant.Id);

                await _transactionExecutor.ExecuteAsync(async () =>
                {
                    await _answerRepository.InsertAsync(record);
                    await _answerRevisionRepository.InsertAsync(new AnswerRevision(
                        GuidGenerator.Create(), record.Id, input.AnswerContent, 1, serverNow, _currentTenant.Id));
                });
            }
            else
            {
                existingRecord.Resubmit(input.AnswerContent, isCorrect, serverNow);
                var revision = existingRecord.Revision;

                await _transactionExecutor.ExecuteAsync(async () =>
                {
                    await _answerRepository.UpdateAsync(existingRecord);
                    await _answerRevisionRepository.InsertAsync(new AnswerRevision(
                        GuidGenerator.Create(), existingRecord.Id, input.AnswerContent, revision, serverNow, _currentTenant.Id));
                });

                record = existingRecord;
            }

            // 数据库写入成功后：心跳 + 教师组增量事件 + 驾驶舱合并推送（提示词十一节）
            await _onlineTracker.MarkSeenAsync(sessionId, participantId, payload.TenantId);

            var participant = await _participantRepository.FindAsync(p => p.Id == participantId);
            var participantEvent = new ParticipantChangedEvent
            {
                SessionId = sessionId,
                Version = session.Version,
                ServerTime = DateTimeOffset.UtcNow,
                EventId = Guid.NewGuid(),
                ParticipantId = participantId,
                Nickname = participant?.Nickname ?? string.Empty,
                OnlineStatus = OnlineStatus.Online,
                AnswerState = ParticipantAnswerState.Submitted,
                SubmittedAt = serverNow,
            };

            RegisterNotifierCallback(() => _notifier.NotifyTeachersAsync(sessionId, payload.TenantId, participantEvent));
            _dashboardThrottler.ScheduleUpdate(sessionId, payload.TenantId);

            return new SubmitAnswerResultDto
            {
                SessionQuestionId = input.SessionQuestionId,
                AnswerRecordId = record.Id,
                IsDuplicateRequest = false,
                Revision = record.Revision,
                ServerSubmittedAt = record.LastSubmittedAt,
                ClassroomVersion = session.Version,
                ServerTime = DateTimeOffset.UtcNow,
            };
        }
    }

    private ClassroomTokenPayload GetRequiredStudentPayload(Guid sessionId)
    {
        var payload = _principalAccessor.Principal?.GetClassroomTokenPayload();
        if (payload is null || payload.ClientRole != ClassroomClientRole.Student || payload.ParticipantId is null)
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidClassroomToken);
        }

        // 令牌与目标课堂关联校验（提示词十二节：令牌不能用于访问其他课堂）
        if (payload.SessionId != sessionId)
        {
            throw new BusinessException(ClassroomErrorCodes.TokenSessionMismatch);
        }

        return payload;
    }

    private async Task<StudentSnapshotDto> BuildSnapshotAsync(ClassSession session, ClassroomTokenPayload payload)
    {
        var serverNow = DateTimeOffset.UtcNow;

        SessionQuestion? currentSessionQuestion = null;
        Question? currentQuestion = null;
        if (session.CurrentSessionQuestionId.HasValue)
        {
            currentSessionQuestion = await _sessionQuestionRepository.FindAsync(session.CurrentSessionQuestionId.Value);
            if (currentSessionQuestion is not null)
            {
                currentQuestion = await _questionRepository.FindAsync(currentSessionQuestion.QuestionId);
            }
        }

        var myAnswer = currentSessionQuestion is not null
            ? await _answerRepository.FindAsync(
                a => a.SessionQuestionId == currentSessionQuestion.Id && a.ParticipantId == payload.ParticipantId)
            : null;

        var statisticsPublished = currentSessionQuestion?.StatisticsPublishedAt.HasValue == true;
        var answerPublished = currentSessionQuestion?.AnswerPublishedAt.HasValue == true;

        Dictionary<string, int>? publishedOptionCounts = null;
        string? correctAnswer = null;
        string? explanation = null;

        if (answerPublished && currentSessionQuestion is not null && currentQuestion is not null)
        {
            correctAnswer = currentQuestion.CorrectAnswer;
            explanation = currentQuestion.Explanation;
        }

        if (statisticsPublished && currentSessionQuestion is not null)
        {
            var statistics = await _serviceProvider
                .GetRequiredService<IClassroomStatisticsService>()
                .RecalibrateAsync(session.Id, currentSessionQuestion.Id, payload.TenantId);
            publishedOptionCounts = statistics.OptionCounts;
        }

        return new StudentSnapshotDto
        {
            SessionId = session.Id,
            Status = session.Status,
            Version = session.Version,
            ServerTime = serverNow,
            CurrentQuestion = currentSessionQuestion is not null && currentQuestion is not null
                ? BuildOpenQuestionInfo(currentSessionQuestion, currentQuestion, serverNow)
                : null,
            MyAnswer = myAnswer is null
                ? null
                : new MyAnswerDto
                {
                    AnswerContent = myAnswer.AnswerContent,
                    SubmittedAt = myAnswer.LastSubmittedAt,
                    Revision = myAnswer.Revision,
                    // 判分结果仅在公布答案后下发
                    IsCorrect = answerPublished ? myAnswer.IsCorrect : null,
                },
            StatisticsPublished = statisticsPublished,
            AnswerPublished = answerPublished,
            CorrectAnswer = correctAnswer,
            Explanation = explanation,
            PublishedOptionCounts = publishedOptionCounts,
        };
    }

    private static OpenQuestionInfoDto BuildOpenQuestionInfo(
        SessionQuestion sessionQuestion, Question question, DateTimeOffset serverNow)
    {
        return new OpenQuestionInfoDto
        {
            Question = question.ToQuestionView(sessionQuestion),
            OpenedAt = sessionQuestion.OpenedAt ?? default,
            EndsAt = sessionQuestion.EndsAt,
            IsAcceptingAnswers = sessionQuestion.IsAcceptingAnswers(serverNow),
            Status = sessionQuestion.Status,
        };
    }
}
