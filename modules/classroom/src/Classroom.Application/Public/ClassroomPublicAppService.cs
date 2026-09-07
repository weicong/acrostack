using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Realtime;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>
/// 公开端点：学员通过课堂码加入（无需登录）。
/// 身份识别：手机号为学员档案唯一键——首次加入建档（姓名/单位/职务必填），
/// 再次加入其他课堂直接复用档案；重复进入同一课堂幂等（复用已分配小组）。
/// 课堂码跨租户查询（Join 请求无租户上下文）；档案/Participant 创建与令牌签发
/// 在目标课堂所属租户内执行。
/// </summary>
[DisableAuditing] // 加入请求含手机号等个人信息，不写入审计日志
[RemoteService(false)] // 已由 ClassroomPublicController 手写路由（/api/public/...）
public class ClassroomPublicAppService : ClassroomAppServiceBase, IClassroomPublicAppService
{
    private static readonly Regex PhoneFormat = new(@"^\+?\d{6,20}$", RegexOptions.Compiled);

    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IRepository<StudentProfile, Guid> _profileRepository;
    private readonly IClassroomTokenService _tokenService;
    private readonly IClassroomRealtimeNotifier _notifier;
    private readonly IClassroomJoinRateLimiter _rateLimiter;
    private readonly IClassroomTransactionExecutor _transactionExecutor;

    public ClassroomPublicAppService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<Participant, Guid> participantRepository,
        IRepository<StudentProfile, Guid> profileRepository,
        IClassroomTokenService tokenService,
        IClassroomRealtimeNotifier notifier,
        IClassroomJoinRateLimiter rateLimiter,
        IClassroomTransactionExecutor transactionExecutor)
    {
        _sessionRepository = sessionRepository;
        _participantRepository = participantRepository;
        _profileRepository = profileRepository;
        _tokenService = tokenService;
        _notifier = notifier;
        _rateLimiter = rateLimiter;
        _transactionExecutor = transactionExecutor;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<PreJoinResultDto> PreJoinAsync(PreJoinClassroomInputDto input, string? clientIp = null)
    {
        if (!_rateLimiter.TryAcquire(clientIp ?? "unknown"))
        {
            throw new BusinessException(ClassroomErrorCodes.RateLimited);
        }

        var session = await FindActiveSessionAsync(input.ClassroomCode);
        var phone = NormalizePhone(input.Phone);

        using (CurrentTenant.Change(session.TenantId))
        {
            var exists = await _profileRepository.FindAsync(p => p.Phone == phone);
            return new PreJoinResultDto { NeedProfile = exists is null };
        }
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<JoinResultDto> JoinAsync(JoinClassroomInputDto input, string? clientIp = null)
    {
        // 限流（提示词十二节：对加入课堂合理限流）——按客户端 IP
        if (!_rateLimiter.TryAcquire(clientIp ?? "unknown"))
        {
            throw new BusinessException(ClassroomErrorCodes.RateLimited);
        }

        var session = await FindActiveSessionAsync(input.ClassroomCode);
        var phone = NormalizePhone(input.Phone);
        var name = input.Name.Trim();

        // 档案/Participant 均在课堂所属租户内解析与创建
        using (CurrentTenant.Change(session.TenantId))
        {
            var profile = await _profileRepository.FindAsync(p => p.Phone == phone);

            if (profile is null)
            {
                // 首次加入任意课堂：建立学员档案（姓名/电话/单位/职务）
                if (string.IsNullOrWhiteSpace(input.Unit) || string.IsNullOrWhiteSpace(input.Position))
                {
                    throw new BusinessException(ClassroomErrorCodes.StudentProfileFieldsRequired);
                }

                profile = new StudentProfile(
                    GuidGenerator.Create(),
                    name,
                    phone,
                    input.Unit.Trim(),
                    input.Position.Trim(),
                    session.TenantId);

                var groupIndex = await AllocateGroupIndexAsync(session.Id);
                Participant participant = default!;
                await _transactionExecutor.ExecuteAsync(async () =>
                {
                    await _profileRepository.InsertAsync(profile, autoSave: true);
                    participant = await CreateParticipantAsync(session, name, groupIndex, profile.Id);
                });

                var issuance = await IssueTokensAsync(session, participant, profile);
                NotifyTeacherParticipantJoined(session, participant);
                return BuildJoinResult(session, participant, profile, issuance);
            }

            // 档案已存在：姓名核对（手机号+姓名双匹配，防止误用他人手机号加入）
            if (!string.Equals(profile.Name.Trim(), name, StringComparison.OrdinalIgnoreCase))
            {
                throw new BusinessException(ClassroomErrorCodes.StudentProfileNameMismatch);
            }

            // 幂等重复进入同一课堂：复用已分配小组的 Participant，不重复通知教师端
            var existingParticipant = await _participantRepository.FindAsync(
                p => p.SessionId == session.Id && p.StudentProfileId == profile.Id);

            if (existingParticipant is null)
            {
                var groupIndex = await AllocateGroupIndexAsync(session.Id);
                existingParticipant = await CreateParticipantAsync(session, name, groupIndex, profile.Id);
                NotifyTeacherParticipantJoined(session, existingParticipant);
            }
            else
            {
                existingParticipant.MarkSeen(DateTimeOffset.UtcNow, OnlineStatus.Online);
                await _participantRepository.UpdateAsync(existingParticipant);
            }

            var rejoinIssuance = await IssueTokensAsync(session, existingParticipant, profile);
            return BuildJoinResult(session, existingParticipant, profile, rejoinIssuance);
        }
    }

    /// <summary>跨租户查找有效课堂（当前请求无租户上下文，禁用租户过滤）。</summary>
    private async Task<ClassSession> FindActiveSessionAsync(string classroomCode)
    {
        var normalizedCode = classroomCode.Trim().ToUpperInvariant();

        // 仅匹配未结束课堂——4 位数字码会在课堂结束后回收复用，须排除同码的历史课堂
        ClassSession? session;
        using (DataFilter.Disable<IMultiTenant>())
        using (CurrentTenant.Change(null))
        {
            session = await _sessionRepository.FindAsync(
                s => s.ClassroomCode == normalizedCode && s.Status != ClassSessionStatus.Finished);
        }

        if (session is null)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomCodeNotFound);
        }

        // 未开始课堂超过 ClassroomCodeValidHours 的课堂码失效
        if (session.Status == ClassSessionStatus.Preparing
            && session.CreationTime.AddHours(ClassroomConsts.ClassroomCodeValidHours) < DateTime.UtcNow)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomCodeExpired);
        }

        return session;
    }

    /// <summary>手机号规范化（去空格/连字符）与格式校验。</summary>
    private static string NormalizePhone(string phone)
    {
        var normalized = Regex.Replace(phone.Trim(), @"[\s\-]", "");
        if (!PhoneFormat.IsMatch(normalized))
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidPhoneFormat);
        }

        return normalized;
    }

    /// <summary>分配学习小组（1 起，每组 DefaultGroupSize 人顺序分配）。
    /// 并发加入时组内人数最坏偏差 1 人（SQLite 单写，可接受）。</summary>
    private async Task<int> AllocateGroupIndexAsync(Guid sessionId)
    {
        var memberCount = await _participantRepository.CountAsync(p => p.SessionId == sessionId);
        return (int)(memberCount / ClassroomConsts.DefaultGroupSize) + 1;
    }

    private async Task<Participant> CreateParticipantAsync(
        ClassSession session, string displayName, int groupIndex, Guid profileId)
    {
        var participant = new Participant(
            GuidGenerator.Create(),
            session.Id,
            displayName,
            null,
            groupIndex,
            DateTimeOffset.UtcNow,
            session.TenantId,
            profileId);

        await _participantRepository.InsertAsync(participant, autoSave: true);
        return participant;
    }

    private async Task<ClassroomTokenIssuanceResult> IssueTokensAsync(
        ClassSession session, Participant participant, StudentProfile profile)
    {
        var classroom = await _tokenService.IssueStudentTokenAsync(session.Id, participant.Id, session.TenantId);
        var portal = await _tokenService.IssueStudentPortalTokenAsync(profile.Id, session.TenantId);
        return new ClassroomTokenIssuanceResult(classroom, portal);
    }

    private void NotifyTeacherParticipantJoined(ClassSession session, Participant participant)
    {
        // 通知教师组：学员加入（由 UoW 提交成功后推送）
        var evt = new ParticipantChangedEvent
        {
            SessionId = session.Id,
            Version = session.Version,
            ServerTime = DateTimeOffset.UtcNow,
            EventId = Guid.NewGuid(),
            ParticipantId = participant.Id,
            Nickname = participant.Nickname,
            OnlineStatus = OnlineStatus.Online,
            AnswerState = ParticipantAnswerState.NotStarted,
        };

        var sessionId = session.Id;
        var sessionTenantId = session.TenantId;
        RegisterNotifierCallback(() => _notifier.NotifyTeachersAsync(sessionId, sessionTenantId, evt));
    }

    private static JoinResultDto BuildJoinResult(
        ClassSession session,
        Participant participant,
        StudentProfile profile,
        ClassroomTokenIssuanceResult issuance)
    {
        return new JoinResultDto
        {
            SessionId = session.Id,
            ParticipantId = participant.Id,
            AccessToken = issuance.Classroom.AccessToken,
            ExpiresInSeconds = issuance.Classroom.ExpiresInSeconds,
            Nickname = participant.Nickname,
            GroupIndex = participant.GroupIndex,
            SessionStatus = session.Status,
            StudentProfileId = profile.Id,
            StudentToken = issuance.Portal.AccessToken,
            StudentTokenExpiresInSeconds = issuance.Portal.ExpiresInSeconds,
            Unit = profile.Unit,
            Position = profile.Position,
        };
    }

    private sealed record ClassroomTokenIssuanceResult(
        ClassroomTokenIssuance Classroom,
        ClassroomTokenIssuance Portal);
}

/// <summary>加入接口内存限流（每 IP 每分钟 MaxJoinsPerMinute 次；多实例部署换 Redis）。</summary>
public interface IClassroomJoinRateLimiter
{
    bool TryAcquire(string clientIp);
}

public class ClassroomJoinRateLimiter : IClassroomJoinRateLimiter, ISingletonDependency
{
    private readonly ConcurrentDictionary<string, (DateTime WindowStart, int Count)> _windows = new();

    public bool TryAcquire(string clientIp)
    {
        var now = DateTime.UtcNow;
        var entry = _windows.AddOrUpdate(
            clientIp,
            _ => (now, 1),
            (_, existing) =>
            {
                if (now - existing.WindowStart >= TimeSpan.FromMinutes(1))
                {
                    return (now, 1);
                }

                return (existing.WindowStart, existing.Count + 1);
            });

        // 惰性清理，防止字典无限增长
        if (_windows.Count > 10000)
        {
            foreach (var stale in _windows.Where(kv => now - kv.Value.WindowStart >= TimeSpan.FromMinutes(1)).ToList())
            {
                _windows.TryRemove(stale.Key, out _);
            }
        }

        return entry.Count <= ClassroomConsts.MaxJoinsPerMinute;
    }
}
