using System;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Options;
using Classroom.Permissions;
using Classroom.Realtime;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace Classroom;

/// <summary>
/// 教师课堂控制流（提示词七节处理顺序：验证身份/权限 -> 验证课堂状态 -> 数据库事务 ->
/// 提交成功 -> SignalR 推送；提交前绝不广播成功状态）。
/// 多聚合写操作通过 <see cref="IClassroomTransactionExecutor"/> 保证原子性；
/// 事件推送挂接 UoW OnCompleted（数据库提交成功之后）。
/// </summary>
[Authorize(ClassroomPermissions.Sessions.Create)]
public class ClassSessionAppService : ApplicationService, IClassSessionAppService
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<Quiz, Guid> _quizRepository;
    private readonly IRepository<Question, Guid> _questionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IClassroomTransactionExecutor _transactionExecutor;
    private readonly IClassroomRealtimeNotifier _notifier;
    private readonly IClassroomTokenService _tokenService;
    private readonly IClassroomAutoCloseService _autoCloseService;
    private readonly IClassroomOnlineTracker _onlineTracker;
    private readonly IServiceProvider _serviceProvider;
    private readonly ClassroomOptions _options;

    public ClassSessionAppService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<Quiz, Guid> quizRepository,
        IRepository<Question, Guid> questionRepository,
        IRepository<Participant, Guid> participantRepository,
        IClassroomTransactionExecutor transactionExecutor,
        IClassroomRealtimeNotifier notifier,
        IClassroomTokenService tokenService,
        IClassroomAutoCloseService autoCloseService,
        IClassroomOnlineTracker onlineTracker,
        IServiceProvider serviceProvider,
        IOptions<ClassroomOptions> options)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _quizRepository = quizRepository;
        _questionRepository = questionRepository;
        _participantRepository = participantRepository;
        _transactionExecutor = transactionExecutor;
        _notifier = notifier;
        _tokenService = tokenService;
        _autoCloseService = autoCloseService;
        _onlineTracker = onlineTracker;
        _serviceProvider = serviceProvider;
        _options = options.Value;
    }

    public async Task<ClassSessionDto> CreateAsync(CreateClassSessionDto input)
    {
        // 必须加载 Questions 导航属性：课堂创建时将试卷题目复制为课堂题目。
        // 默认仓储 GetAsync 不加载子集合，quiz.Questions 将为空导致 SessionQuestions=0。
        var quiz = await GetQuizWithQuestionsAsync(input.QuizId);
        var classroomCode = await GenerateUniqueClassroomCodeAsync();

        var session = new ClassSession(
            GuidGenerator.Create(),
            quiz.Id,
            CurrentUser.GetId(),
            classroomCode,
            CurrentTenant.Id);

        var sessionQuestions = quiz.Questions
            .OrderBy(q => q.Order)
            .Select(q => new SessionQuestion(GuidGenerator.Create(), session.Id, q.QuestionId, q.Order, CurrentTenant.Id))
            .ToList();

        // 多聚合写（课堂 + 课堂题目集合）：显式事务保证原子性
        await _transactionExecutor.ExecuteAsync(async () =>
        {
            await _sessionRepository.InsertAsync(session);
            await _sessionQuestionRepository.InsertManyAsync(sessionQuestions);
        });

        return await MapToDtoAsync(session, quiz, sessionQuestions.Count);
    }

    public async Task<ClassSessionDto> GetAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        return await MapToDtoAsync(session);
    }

    public async Task<PagedResultDto<ClassSessionDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var teacherId = CurrentUser.GetId();
        var queryable = await _sessionRepository.GetQueryableAsync();
        var query = queryable.Where(s => s.TeacherId == teacherId);

        var totalCount = await AsyncExecuter.CountAsync(query);
        var sessions = await AsyncExecuter.ToListAsync(query
            .OrderByDescending(s => s.CreationTime)
            .PageBy(input.SkipCount, input.MaxResultCount));

        // 批量预加载本页会话的 Quiz 与题目数，避免逐行 GetAsync/CountAsync 的 2N+1
        var quizIds = sessions.Select(s => s.QuizId).Distinct().ToList();
        var quizQueryable = await _quizRepository.GetQueryableAsync();
        var quizzes = await AsyncExecuter.ToListAsync(
            quizQueryable.Where(q => quizIds.Contains(q.Id)));
        var quizNames = quizzes.ToDictionary(q => q.Id, q => q.Name);

        var sessionIds = sessions.Select(s => s.Id).ToList();
        var sqQueryable = await _sessionQuestionRepository.GetQueryableAsync();
        var questionCounts = (await AsyncExecuter.ToListAsync(
                sqQueryable.Where(sq => sessionIds.Contains(sq.SessionId))
                    .GroupBy(sq => sq.SessionId)
                    .Select(g => new { SessionId = g.Key, Count = g.Count() })))
            .ToDictionary(x => x.SessionId, x => x.Count);

        var dtos = new System.Collections.Generic.List<ClassSessionDto>();
        foreach (var session in sessions)
        {
            dtos.Add(MapToDto(session, quizNames, questionCounts.GetValueOrDefault(session.Id)));
        }

        return new PagedResultDto<ClassSessionDto>(totalCount, dtos);
    }

    public async Task<ClassSessionDto> StartAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        session.Start(DateTimeOffset.UtcNow);
        await _sessionRepository.UpdateAsync(session);

        await NotifyAfterCommit(session, new ClassroomStartedEvent());
        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> StartQuestionAsync(Guid id, Guid questionId, OpenQuestionDto input)
    {
        var session = await GetAuthorizedSessionAsync(id);

        // 仅一题开放：当前题必须已非 Open（提示词五节）
        await EnsureNoOpenQuestionAsync(session);
        var sessionQuestion = await GetSessionQuestionAsync(session.Id, questionId);

        var now = DateTimeOffset.UtcNow;
        sessionQuestion.Open(now, input.DurationSeconds);
        session.OpenQuestion(sessionQuestion, now);

        await _transactionExecutor.ExecuteAsync(async () =>
        {
            await _sessionQuestionRepository.UpdateAsync(sessionQuestion);
            await _sessionRepository.UpdateAsync(session);
        });

        var question = await _questionRepository.GetAsync(sessionQuestion.QuestionId);
        await NotifyAfterCommit(session, new QuestionOpenedEvent
        {
            SessionQuestionId = sessionQuestion.Id,
            Question = question.ToQuestionView(sessionQuestion),
            OpenedAt = sessionQuestion.OpenedAt!.Value,
            EndsAt = sessionQuestion.EndsAt!.Value,
        });

        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> CloseQuestionAsync(Guid id, Guid questionId)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var sessionQuestion = await GetSessionQuestionAsync(session.Id, questionId);

        var now = DateTimeOffset.UtcNow;
        sessionQuestion.Close(now);
        session.CloseCurrentQuestion(now);

        await _transactionExecutor.ExecuteAsync(async () =>
        {
            await _sessionQuestionRepository.UpdateAsync(sessionQuestion);
            await _sessionRepository.UpdateAsync(session);
        });

        await NotifyAfterCommit(session, new QuestionClosedEvent
        {
            SessionQuestionId = sessionQuestion.Id,
        });

        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> PublishStatisticsAsync(Guid id, Guid questionId)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var sessionQuestion = await GetSessionQuestionAsync(session.Id, questionId);

        sessionQuestion.PublishStatistics(DateTimeOffset.UtcNow);
        session.BumpVersionOnPublish();
        await _sessionQuestionRepository.UpdateAsync(sessionQuestion);
        await _sessionRepository.UpdateAsync(session);

        await NotifyStatisticsAfterCommit(session, sessionQuestion);
        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> PublishAnswerAsync(Guid id, Guid questionId)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var sessionQuestion = await GetSessionQuestionAsync(session.Id, questionId);

        sessionQuestion.PublishAnswer(DateTimeOffset.UtcNow);
        session.BumpVersionOnPublish();
        await _sessionQuestionRepository.UpdateAsync(sessionQuestion);
        await _sessionRepository.UpdateAsync(session);

        var question = await _questionRepository.GetAsync(sessionQuestion.QuestionId);
        await NotifyAfterCommit(session, new AnswerPublishedEvent
        {
            SessionQuestionId = sessionQuestion.Id,
            CorrectAnswer = question.CorrectAnswer ?? string.Empty,
            Explanation = question.Explanation,
        });

        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> NextQuestionAsync(Guid id, OpenQuestionDto input)
    {
        var session = await GetAuthorizedSessionAsync(id);

        // 下一题 = 定位 Order = 当前题号 + 1 的 Pending 题目并开放
        var nextOrder = session.CurrentQuestionNumber + 1;
        var sessionQuestion = await _sessionQuestionRepository.FindAsync(
            q => q.SessionId == session.Id && q.Order == nextOrder);
        if (sessionQuestion is null)
        {
            throw new BusinessException(ClassroomErrorCodes.NoNextQuestion);
        }

        await EnsureNoOpenQuestionAsync(session);

        var now = DateTimeOffset.UtcNow;
        sessionQuestion.Open(now, input.DurationSeconds);
        session.OpenQuestion(sessionQuestion, now);

        await _transactionExecutor.ExecuteAsync(async () =>
        {
            await _sessionQuestionRepository.UpdateAsync(sessionQuestion);
            await _sessionRepository.UpdateAsync(session);
        });

        var question = await _questionRepository.GetAsync(sessionQuestion.QuestionId);
        await NotifyAfterCommit(session, new QuestionOpenedEvent
        {
            SessionQuestionId = sessionQuestion.Id,
            Question = question.ToQuestionView(sessionQuestion),
            OpenedAt = sessionQuestion.OpenedAt!.Value,
            EndsAt = sessionQuestion.EndsAt!.Value,
        });

        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> FinishAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        session.Finish(DateTimeOffset.UtcNow);
        await _sessionRepository.UpdateAsync(session);

        await NotifyAfterCommit(session, new ClassroomEndedEvent());
        return await MapToDtoAsync(session);
    }

    public async Task<ClassSessionDto> RestartAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var now = DateTimeOffset.UtcNow;
        session.Restart(now);

        var sessionQuestions = await _sessionQuestionRepository.GetListAsync(q => q.SessionId == session.Id);
        foreach (var sq in sessionQuestions)
        {
            sq.Reset();
        }

        await _transactionExecutor.ExecuteAsync(async () =>
        {
            await _transactionExecutor.HardDeleteAnswerRecordsAsync(session.Id);
            await _sessionRepository.UpdateAsync(session);
            foreach (var sq in sessionQuestions)
            {
                await _sessionQuestionRepository.UpdateAsync(sq);
            }
        });

        await NotifyAfterCommit(session, new ClassroomStartedEvent());
        return await MapToDtoAsync(session);
    }

    public async Task<DashboardDto> GetDashboardAsync(Guid id)
    {
        await GetAuthorizedSessionAsync(id);
        return await GetStatisticsService().GetDashboardAsync(id, CurrentTenant.Id);
    }

    public async Task<PickedParticipantDto> PickRandomParticipantAsync(Guid id, PickRandomParticipantDto input)
    {
        var session = await GetAuthorizedSessionAsync(id);
        if (session.Status == ClassSessionStatus.Finished)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomFinished);
        }

        var participants = await _participantRepository.GetListAsync(p => p.SessionId == session.Id);
        var excluded = input.ExcludeParticipantIds?.ToHashSet() ?? new HashSet<Guid>();

        var candidates = new List<Participant>();
        foreach (var p in participants)
        {
            if (excluded.Contains(p.Id))
            {
                continue;
            }

            // 在线状态以内存追踪器为准（与驾驶舱统计同一口径）
            if (input.OnlineOnly && !await _onlineTracker.IsOnlineAsync(session.Id, p.Id, session.TenantId))
            {
                continue;
            }

            candidates.Add(p);
        }

        if (candidates.Count == 0)
        {
            throw new BusinessException(ClassroomErrorCodes.NoParticipantsToPick);
        }

        var picked = candidates[Random.Shared.Next(candidates.Count)];

        // 只读命令（无数据库写入）：无需等待 UoW 提交，结果直接广播
        await _notifier.BroadcastAsync(session.Id, session.TenantId, new ParticipantPickedEvent
        {
            SessionId = session.Id,
            Version = session.Version,
            ServerTime = DateTimeOffset.UtcNow,
            EventId = Guid.NewGuid(),
            ParticipantId = picked.Id,
            Nickname = picked.Nickname,
            GroupIndex = picked.GroupIndex,
        });

        return new PickedParticipantDto
        {
            ParticipantId = picked.Id,
            Nickname = picked.Nickname,
            StudentNumber = picked.StudentNumber,
            GroupIndex = picked.GroupIndex,
        };
    }

    public async Task<TeacherSnapshotDto> GetSnapshotAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var dashboard = await GetStatisticsService().GetDashboardAsync(id, CurrentTenant.Id);

        var questionCount = await _sessionQuestionRepository.CountAsync(q => q.SessionId == session.Id);
        var currentQuestion = await BuildTeacherQuestionAsync(session);

        return new TeacherSnapshotDto
        {
            SessionId = session.Id,
            ClassroomCode = session.ClassroomCode,
            Status = session.Status,
            Version = session.Version,
            ServerTime = DateTimeOffset.UtcNow,
            QuestionCount = questionCount,
            CurrentQuestionNumber = session.CurrentQuestionNumber,
            CurrentQuestion = currentQuestion,
            Dashboard = dashboard,
        };
    }

    public async Task<PresentationTokenResultDto> CreatePresentationTokenAsync(Guid id)
    {
        var session = await GetAuthorizedSessionAsync(id);
        var issuance = await _tokenService.IssuePresentationTokenAsync(session.Id, session.TenantId);
        return new PresentationTokenResultDto
        {
            AccessToken = issuance.AccessToken,
            ExpiresInSeconds = issuance.ExpiresInSeconds,
            SessionId = session.Id,
        };
    }

    /// <summary>加载 Quiz 聚合（含 Questions 子集合），供创建课堂时复制题目。</summary>
    private async Task<Quiz> GetQuizWithQuestionsAsync(Guid id)
    {
        var queryable = await _quizRepository.WithDetailsAsync(q => q.Questions);
        var quiz = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(q => q.Id == id));
        return quiz ?? throw new Volo.Abp.Domain.Entities.EntityNotFoundException(typeof(Quiz), id);
    }

    /// <summary>校验当前用户是课堂创建者（MVP：创建者即授权教师）。</summary>
    private async Task<ClassSession> GetAuthorizedSessionAsync(Guid id)
    {
        var session = await _sessionRepository.GetAsync(id);
        if (session.TeacherId != CurrentUser.GetId())
        {
            throw new BusinessException(ClassroomErrorCodes.NotSessionTeacher)
                .WithData("SessionId", session.Id);
        }

        return session;
    }

    private async Task EnsureNoOpenQuestionAsync(ClassSession session)
    {
        if (session.CurrentSessionQuestionId is null)
        {
            return;
        }

        var current = await _sessionQuestionRepository.FindAsync(session.CurrentSessionQuestionId.Value);
        if (current is null)
        {
            return;
        }

        // 到时惰性截止：上一题已过 EndsAt 时先收卷并推进聚合，教师无需手动"截止当前题"即可开下一题
        if (await _autoCloseService.CloseIfExpiredAsync(session, current))
        {
            return;
        }

        if (current.Status == SessionQuestionStatus.Open)
        {
            throw new BusinessException(ClassroomErrorCodes.QuestionAlreadyOpen);
        }
    }

    private async Task<SessionQuestion> GetSessionQuestionAsync(Guid sessionId, Guid questionId)
    {
        var sessionQuestion = await _sessionQuestionRepository.FindAsync(
            q => q.SessionId == sessionId && q.QuestionId == questionId);
        if (sessionQuestion is null)
        {
            throw new BusinessException(ClassroomErrorCodes.SessionQuestionNotFound)
                .WithData("QuestionId", questionId);
        }

        return sessionQuestion;
    }

    private async Task<string> GenerateUniqueClassroomCodeAsync()
    {
        // 4 位数字码空间有限（10^4）：唯一性仅对未结束课堂（已结束课堂的码回收复用），
        // 且需跨租户全局校验（加入接口按码全局查课堂，索引也是全局唯一）
        using (DataFilter.Disable<IMultiTenant>())
        using (CurrentTenant.Change(null))
        {
            for (var attempt = 0; attempt < 10; attempt++)
            {
                var code = ClassroomCodeGenerator.Generate();
                if (!await _sessionRepository.AnyAsync(s =>
                        s.ClassroomCode == code && s.Status != ClassSessionStatus.Finished))
                {
                    return code;
                }
            }
        }

        throw new BusinessException(ClassroomErrorCodes.DuplicateClassroomCode);
    }

    /// <summary>
    /// 注册 UoW 提交成功后的推送回调（提示词七节：数据库事务提交成功后才广播成功状态）。
    /// 事件公共字段（SessionId/Version/ServerTime/EventId）在此填充。
    /// </summary>
    private async Task NotifyAfterCommit(ClassSession session, params ClassroomEventBase[] events)
    {
        var version = session.Version;
        var sessionId = session.Id;
        var tenantId = session.TenantId;

        foreach (var evt in events)
        {
            evt.SessionId = sessionId;
            evt.Version = version;
            evt.ServerTime = DateTimeOffset.UtcNow;
            evt.EventId = Guid.NewGuid();
        }

        await RegisterOnCompleted(() => _notifier.BroadcastAsync(sessionId, tenantId, events));
    }

    /// <summary>公布统计：提交后重新计算统计并随事件推送（匿名选项分布）。</summary>
    private async Task NotifyStatisticsAfterCommit(ClassSession session, SessionQuestion sessionQuestion)
    {
        var evt = new StatisticsPublishedEvent
        {
            SessionId = session.Id,
            Version = session.Version,
            ServerTime = DateTimeOffset.UtcNow,
            EventId = Guid.NewGuid(),
            SessionQuestionId = sessionQuestion.Id,
        };

        var sessionId = session.Id;
        var sessionQuestionId = sessionQuestion.Id;
        var tenantId = session.TenantId;

        RegisterOnCompleted(async () =>
        {
            // 事务提交后从数据库重新校准统计，确保公布的是最终数据
            using var scope = _serviceProvider.CreateScope();
            var statistics = scope.ServiceProvider.GetRequiredService<IClassroomStatisticsService>();
            var recalibrated = await statistics.RecalibrateAsync(sessionId, sessionQuestionId, tenantId);
            evt.OptionCounts = recalibrated.OptionCounts;
            evt.SubmittedCount = recalibrated.SubmittedCount;
            evt.TotalParticipants = recalibrated.TotalParticipants;
            await _notifier.BroadcastAsync(sessionId, tenantId, evt);
        });
    }

    private async Task RegisterOnCompleted(Func<Task> callback)
    {
        var uow = UnitOfWorkManager.Current;
        if (uow is null)
        {
            // 无 UoW 上下文（单元测试等）：立即推送
            await callback();
            return;
        }

        uow.OnCompleted(() => callback());
    }

    private IClassroomStatisticsService GetStatisticsService()
    {
        return _serviceProvider.GetRequiredService<IClassroomStatisticsService>();
    }

    private async Task<TeacherQuestionInfoDto?> BuildTeacherQuestionAsync(ClassSession session)
    {
        if (session.CurrentSessionQuestionId is null)
        {
            return null;
        }

        var sessionQuestion = await _sessionQuestionRepository.GetAsync(session.CurrentSessionQuestionId.Value);
        // 到时惰性截止：读取教师快照时发现题目过期则顺手收卷并推进聚合
        await _autoCloseService.CloseIfExpiredAsync(session, sessionQuestion);

        var question = await _questionRepository.GetAsync(sessionQuestion.QuestionId);

        return new TeacherQuestionInfoDto
        {
            Question = question.ToQuestionView(sessionQuestion),
            OpenedAt = sessionQuestion.OpenedAt ?? default,
            EndsAt = sessionQuestion.EndsAt,
            IsAcceptingAnswers = sessionQuestion.IsAcceptingAnswers(DateTimeOffset.UtcNow),
            Status = sessionQuestion.Status,
            CorrectAnswer = question.CorrectAnswer,
            Explanation = question.Explanation,
            ClosedAt = sessionQuestion.ClosedAt,
            StatisticsPublishedAt = sessionQuestion.StatisticsPublishedAt,
            AnswerPublishedAt = sessionQuestion.AnswerPublishedAt,
        };
    }

    private async Task<ClassSessionDto> MapToDtoAsync(ClassSession session, Quiz? quiz = null, int? questionCount = null)
    {
        quiz ??= await _quizRepository.GetAsync(session.QuizId);
        var count = questionCount ?? await _sessionQuestionRepository.CountAsync(q => q.SessionId == session.Id);

        return BuildDto(session, quiz.Name, count);
    }

    /// <summary>列表页专用：QuizName 与题目数由调用方批量预载，避免逐行查询。</summary>
    private ClassSessionDto MapToDto(
        ClassSession session,
        System.Collections.Generic.Dictionary<Guid, string> quizNames,
        int questionCount)
    {
        return BuildDto(session, quizNames[session.QuizId], questionCount);
    }

    private ClassSessionDto BuildDto(ClassSession session, string quizName, int count)
    {
        var joinUrl = string.IsNullOrWhiteSpace(_options.FrontendBaseUrl)
            ? $"/student/join?code={session.ClassroomCode}"
            : $"{_options.FrontendBaseUrl.TrimEnd('/')}/student/join?code={session.ClassroomCode}";

        return new ClassSessionDto
        {
            Id = session.Id,
            QuizId = session.QuizId,
            QuizName = quizName,
            TeacherId = session.TeacherId,
            ClassroomCode = session.ClassroomCode,
            JoinUrl = joinUrl,
            Status = session.Status,
            Version = session.Version,
            QuestionCount = count,
            CurrentQuestionNumber = session.CurrentQuestionNumber,
            StartedAt = session.StartedAt,
            FinishedAt = session.FinishedAt,
            CreationTime = session.CreationTime,
        };
    }
}
