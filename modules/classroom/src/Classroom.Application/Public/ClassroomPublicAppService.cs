using System;
using System.Collections.Concurrent;
using System.Linq;
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
/// 课堂码跨租户查询（Join 请求无租户上下文）；创建 Participant 与签发令牌
/// 在目标课堂所属租户内执行。
/// </summary>
[DisableAuditing] // 加入请求不产生审计日志（高频且无敏感价值）
[RemoteService(false)] // 已由 ClassroomPublicController 手写路由（/api/public/...）
public class ClassroomPublicAppService : ClassroomAppServiceBase, IClassroomPublicAppService
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IClassroomTokenService _tokenService;
    private readonly IClassroomRealtimeNotifier _notifier;
    private readonly IClassroomJoinRateLimiter _rateLimiter;

    public ClassroomPublicAppService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<Participant, Guid> participantRepository,
        IClassroomTokenService tokenService,
        IClassroomRealtimeNotifier notifier,
        IClassroomJoinRateLimiter rateLimiter)
    {
        _sessionRepository = sessionRepository;
        _participantRepository = participantRepository;
        _tokenService = tokenService;
        _notifier = notifier;
        _rateLimiter = rateLimiter;
    }

    [UnitOfWork(isTransactional: false)]
    public async Task<JoinResultDto> JoinAsync(JoinClassroomInputDto input, string? clientIp = null)
    {
        // 限流（提示词十二节：对加入课堂合理限流）——按客户端 IP
        if (!_rateLimiter.TryAcquire(clientIp ?? "unknown"))
        {
            throw new BusinessException(ClassroomErrorCodes.RateLimited);
        }

        var normalizedCode = input.ClassroomCode.Trim().ToUpperInvariant();

        // 跨租户查找课堂（当前请求无租户上下文，禁用租户过滤）
        ClassSession? session;
        using (DataFilter.Disable<IMultiTenant>())
        using (CurrentTenant.Change(null))
        {
            session = await _sessionRepository.FindAsync(s => s.ClassroomCode == normalizedCode);
        }

        if (session is null)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomCodeNotFound);
        }

        if (session.Status == ClassSessionStatus.Finished)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomCodeExpired);
        }

        // 未开始课堂超过 ClassroomCodeValidHours 的课堂码失效
        if (session.Status == ClassSessionStatus.Preparing
            && session.CreationTime.AddHours(ClassroomConsts.ClassroomCodeValidHours) < DateTime.UtcNow)
        {
            throw new BusinessException(ClassroomErrorCodes.ClassroomCodeExpired);
        }

        // 在课堂所属租户内创建 Participant，并按当时人数顺序分配学习小组（每组 5 人）：
        // 学习小组1、学习小组2 依次编号。并发加入时组内人数最坏偏差 1 人（SQLite 单写，可接受）
        var memberCount = await _participantRepository.CountAsync(p => p.SessionId == session.Id);
        var groupIndex = (int)(memberCount / ClassroomConsts.DefaultGroupSize) + 1;
        Participant participant;
        using (CurrentTenant.Change(session.TenantId))
        {
            participant = new Participant(
                GuidGenerator.Create(),
                session.Id,
                input.Nickname.Trim(),
                string.IsNullOrWhiteSpace(input.StudentNumber) ? null : input.StudentNumber.Trim(),
                groupIndex,
                DateTimeOffset.UtcNow,
                session.TenantId);

            await _participantRepository.InsertAsync(participant, autoSave: true);
        }

        var issuance = await _tokenService.IssueStudentTokenAsync(session.Id, participant.Id, session.TenantId);

        // 通知教师组：学员加入（数据库写入成功后推送）
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

        return new JoinResultDto
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
