using System;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>
/// 学员门户：浏览加入过的课堂与答题记录、维护本人资料。
/// 身份一律从学员门户令牌（ClassroomToken 方案，role=studentportal）解析，
/// 课堂令牌/投屏令牌无 StudentProfileId claim，无法访问本服务。
/// 所有查询/写入在档案所属租户内执行（CurrentTenant.Change）。
/// </summary>
[DisableAuditing] // 资料含手机号等个人信息，不写入审计日志
[RemoteService(false)] // 已由 ClassroomStudentPortalController 手写路由（/api/student-portal/...）
public class StudentPortalAppService : ClassroomAppServiceBase, IStudentPortalAppService
{
    private readonly IRepository<StudentProfile, Guid> _profileRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<Quiz, Guid> _quizRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<AnswerRecord, Guid> _answerRepository;
    private readonly IClassroomTokenService _tokenService;
    private readonly IClassroomAnswerHistoryService _historyService;
    private readonly ICurrentPrincipalAccessor _principalAccessor;
    private readonly ICurrentTenant _currentTenant;

    public StudentPortalAppService(
        IRepository<StudentProfile, Guid> profileRepository,
        IRepository<Participant, Guid> participantRepository,
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<Quiz, Guid> quizRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<AnswerRecord, Guid> answerRepository,
        IClassroomTokenService tokenService,
        IClassroomAnswerHistoryService historyService,
        ICurrentPrincipalAccessor principalAccessor,
        ICurrentTenant currentTenant)
    {
        _profileRepository = profileRepository;
        _participantRepository = participantRepository;
        _sessionRepository = sessionRepository;
        _quizRepository = quizRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _answerRepository = answerRepository;
        _tokenService = tokenService;
        _historyService = historyService;
        _principalAccessor = principalAccessor;
        _currentTenant = currentTenant;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<StudentProfileDto> GetMyProfileAsync()
    {
        var payload = GetRequiredPortalPayload();

        using (_currentTenant.Change(payload.TenantId))
        {
            var profile = await _profileRepository.GetAsync(payload.StudentProfileId);
            return ToProfileDto(profile);
        }
    }

    public async Task<StudentProfileDto> UpdateMyProfileAsync(UpdateStudentProfileInputDto input)
    {
        var payload = GetRequiredPortalPayload();

        using (_currentTenant.Change(payload.TenantId))
        {
            var profile = await _profileRepository.GetAsync(payload.StudentProfileId);
            profile.Update(input.Name.Trim(), input.Unit.Trim(), input.Position.Trim());
            await _profileRepository.UpdateAsync(profile, autoSave: true);
            return ToProfileDto(profile);
        }
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<System.Collections.Generic.List<MyClassroomItemDto>> GetMyClassroomsAsync()
    {
        var payload = GetRequiredPortalPayload();

        using (_currentTenant.Change(payload.TenantId))
        {
            var participants = await _participantRepository.GetListAsync(
                p => p.StudentProfileId == payload.StudentProfileId);
            if (participants.Count == 0)
            {
                return [];
            }

            var sessionIds = participants.Select(p => p.SessionId).Distinct().ToList();
            var sessions = (await _sessionRepository.GetListAsync(s => sessionIds.Contains(s.Id)))
                .ToDictionary(s => s.Id);

            var quizIds = sessions.Values.Select(s => s.QuizId).Distinct().ToList();
            var quizNames = (await _quizRepository.GetListAsync(q => quizIds.Contains(q.Id)))
                .ToDictionary(q => q.Id, q => q.Name);

            // 课堂题目总数（老师配置的题；未开放也计入）
            var questionCounts = (await _sessionQuestionRepository
                .GetListAsync(sq => sessionIds.Contains(sq.SessionId)))
                .GroupBy(sq => sq.SessionId)
                .ToDictionary(g => g.Key, g => g.Count());

            // 本人已提交答案数（participant 维度聚合后归并到课堂）
            var participantIds = participants.Select(p => p.Id).ToList();
            var answeredCounts = (await _answerRepository.GetListAsync(
                a => participantIds.Contains(a.ParticipantId)))
                .GroupBy(a => a.SessionId)
                .ToDictionary(g => g.Key, g => g.Count());

            var items = participants
                .Where(p => sessions.ContainsKey(p.SessionId))
                .Select(p =>
                {
                    var session = sessions[p.SessionId];
                    return new MyClassroomItemDto
                    {
                        SessionId = session.Id,
                        QuizTitle = quizNames.GetValueOrDefault(session.QuizId, "未命名试卷"),
                        Status = session.Status,
                        GroupIndex = p.GroupIndex,
                        JoinedAt = p.JoinedAt,
                        FinishedAt = session.FinishedAt,
                        QuestionCount = questionCounts.GetValueOrDefault(session.Id),
                        AnsweredCount = answeredCounts.GetValueOrDefault(session.Id),
                    };
                })
                // 进行中的排前；同组内按加入时间倒序
                .OrderByDescending(i => i.Status != ClassSessionStatus.Finished)
                .ThenByDescending(i => i.JoinedAt)
                .ToList();

            return items;
        }
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<StudentAnswerHistoryDto> GetMyClassroomAnswersAsync(Guid sessionId)
    {
        var payload = GetRequiredPortalPayload();

        using (_currentTenant.Change(payload.TenantId))
        {
            var participant = await FindSessionParticipantAsync(payload.StudentProfileId, sessionId);
            if (participant is null)
            {
                throw new BusinessException(ClassroomErrorCodes.ParticipantNotFound);
            }

            return await _historyService.BuildAsync(sessionId, participant.Id, participant.Nickname);
        }
    }

    public async Task<ResumeClassroomResultDto> ResumeClassroomAsync(Guid sessionId)
    {
        var payload = GetRequiredPortalPayload();

        using (_currentTenant.Change(payload.TenantId))
        {
            var participant = await FindSessionParticipantAsync(payload.StudentProfileId, sessionId);
            if (participant is null)
            {
                throw new BusinessException(ClassroomErrorCodes.ParticipantNotFound);
            }

            var session = await _sessionRepository.GetAsync(sessionId);
            var issuance = await _tokenService.IssueStudentTokenAsync(session.Id, participant.Id, session.TenantId);

            return new ResumeClassroomResultDto
            {
                SessionId = session.Id,
                ParticipantId = participant.Id,
                AccessToken = issuance.AccessToken,
                ExpiresInSeconds = issuance.ExpiresInSeconds,
                Nickname = participant.Nickname,
                GroupIndex = participant.GroupIndex,
                SessionStatus = session.Status,
            };
        }
    }

    /// <summary>本人（档案）在某课堂的参与者记录。</summary>
    private Task<Participant?> FindSessionParticipantAsync(Guid profileId, Guid sessionId)
        => _participantRepository.FindAsync(
            p => p.StudentProfileId == profileId && p.SessionId == sessionId);

    /// <summary>从令牌解析门户身份。课堂令牌/投屏令牌无 StudentProfileId，一律拒绝。</summary>
    private ClassroomPortalTokenPayload GetRequiredPortalPayload()
    {
        var payload = _principalAccessor.Principal?.GetStudentPortalTokenPayload();
        if (payload is null)
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidClassroomToken);
        }

        return payload;
    }

    private static StudentProfileDto ToProfileDto(StudentProfile profile)
    {
        return new StudentProfileDto
        {
            Id = profile.Id,
            Name = profile.Name,
            Phone = profile.Phone,
            Unit = profile.Unit,
            Position = profile.Position,
        };
    }
}
