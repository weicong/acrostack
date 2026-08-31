using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Realtime;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace Classroom;

/// <summary>
/// 课堂实时 Hub（提示词八节）。
/// 分组（组名含租户 Id 防跨租户串扰）：
///   classroom:{tenantId}:{sessionId}:teachers / students / presentation
/// 客户端不能自行决定分组：连接时服务端依据令牌与权限校验（提示词十二节）。
///
/// 连接方式：/signalr-hubs/classroom?sessionId=xxx&access_token=yyy[&__tenant=zzz]
/// - 学员/投屏：access_token 为课堂短期令牌（HMAC），服务端 TryValidate 后按角色分组；
/// - 教师：access_token 为 OpenIddict 令牌（宿主中间件已将其转至 Authorization 头验证），
///   服务端校验该教师是否为课堂创建者后加入教师组。
/// Hub 不承载业务逻辑（答案持久化走 HTTP，提示词七节）。
/// </summary>
public class ClassroomHub : Hub<IClassroomClient>
{
    private const string PayloadItemKey = "classroom.payload";
    private const string SessionIdItemKey = "classroom.sessionId";

    private readonly IClassroomTokenService _tokenService;
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<Participant, Guid> _participantRepository;
    private readonly IClassroomOnlineTracker _onlineTracker;
    private readonly IClassroomRealtimeNotifier _notifier;
    private readonly ICurrentTenant _currentTenant;
    private readonly ICurrentUser _currentUser;
    private readonly IUnitOfWorkManager _unitOfWorkManager;
    private readonly IDataFilter _dataFilter;
    private readonly ILogger<ClassroomHub> _logger;

    public ClassroomHub(
        IClassroomTokenService tokenService,
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<Participant, Guid> participantRepository,
        IClassroomOnlineTracker onlineTracker,
        IClassroomRealtimeNotifier notifier,
        ICurrentTenant currentTenant,
        ICurrentUser currentUser,
        IUnitOfWorkManager unitOfWorkManager,
        IDataFilter dataFilter,
        ILogger<ClassroomHub> logger)
    {
        _tokenService = tokenService;
        _sessionRepository = sessionRepository;
        _participantRepository = participantRepository;
        _onlineTracker = onlineTracker;
        _notifier = notifier;
        _currentTenant = currentTenant;
        _currentUser = currentUser;
        _unitOfWorkManager = unitOfWorkManager;
        _dataFilter = dataFilter;
        _logger = logger;
    }

    #region 分组命名（静态：推送侧与连接侧共享）

    public static string TeacherGroupName(Guid? tenantId, Guid sessionId) =>
        $"classroom:{tenantId}:{sessionId}:teachers";

    public static string StudentGroupName(Guid? tenantId, Guid sessionId) =>
        $"classroom:{tenantId}:{sessionId}:students";

    public static string PresentationGroupName(Guid? tenantId, Guid sessionId) =>
        $"classroom:{tenantId}:{sessionId}:presentation";

    #endregion

    public override async Task OnConnectedAsync()
    {
        var httpContext = Context.GetHttpContext();
        var sessionIdText = httpContext?.Request.Query["sessionId"].ToString();
        var accessToken = httpContext?.Request.Query["access_token"].ToString();

        if (!Guid.TryParse(sessionIdText, out var sessionId) || sessionId == Guid.Empty)
        {
            await RejectAsync("Missing or invalid sessionId.");
            return;
        }

        var payload = string.IsNullOrEmpty(accessToken)
            ? null
            : _tokenService.TryValidate(accessToken);

        if (payload is not null)
        {
            await ConnectWithClassroomTokenAsync(sessionId, payload);
        }
        else
        {
            await ConnectAsTeacherAsync(sessionId);
        }

        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        var sessionId = Context.Items[SessionIdItemKey] as Guid?;
        var payload = Context.Items[PayloadItemKey] as ClassroomTokenPayload;

        if (sessionId.HasValue && payload is { ClientRole: ClassroomClientRole.Student, ParticipantId: not null })
        {
            await _onlineTracker.SetOfflineAsync(sessionId.Value, payload.ParticipantId.Value, payload.TenantId);

            // 通知教师组：学员离线（增量）
            try
            {
                var evt = new ParticipantChangedEvent
                {
                    SessionId = sessionId.Value,
                    ParticipantId = payload.ParticipantId.Value,
                    Nickname = string.Empty, // 断开时避免再查库，教师端以本地列表为准
                    OnlineStatus = OnlineStatus.Offline,
                    ServerTime = DateTimeOffset.UtcNow,
                    EventId = Guid.NewGuid(),
                };
                await _notifier.NotifyTeachersAsync(sessionId.Value, payload.TenantId, evt);
            }
            catch (Exception ex)
            {
                // 推送失败不影响断开流程
                _logger.LogWarning(ex, "Failed to notify teacher group on participant disconnect.");
            }
        }

        await base.OnDisconnectedAsync(exception);
    }

    /// <summary>学员/投屏连接：课堂令牌校验（令牌课堂匹配 + 课堂未结束 + Participant 有效）。</summary>
    private async Task ConnectWithClassroomTokenAsync(Guid sessionId, ClassroomTokenPayload payload)
    {
        // 令牌与目标课堂关联校验（防止越权加入其他课堂分组）
        if (payload.SessionId != sessionId)
        {
            await RejectAsync("Token does not match the target session.");
            return;
        }

        ClassSession? session;
        using (var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
        using (_currentTenant.Change(payload.TenantId))
        {
            session = await _sessionRepository.FindAsync(sessionId);
            await uow.CompleteAsync();
        }

        if (session is null || session.Status == ClassSessionStatus.Finished)
        {
            await RejectAsync("Session not found or finished.");
            return;
        }

        Context.Items[PayloadItemKey] = payload;
        Context.Items[SessionIdItemKey] = sessionId;

        if (payload.ClientRole == ClassroomClientRole.Student)
        {
            if (payload.ParticipantId is null)
            {
                await RejectAsync("Student token missing participant.");
                return;
            }

            Participant? participant;
            using (var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
            using (_currentTenant.Change(payload.TenantId))
            {
                participant = await _participantRepository.FindAsync(
                    p => p.Id == payload.ParticipantId && p.SessionId == sessionId);
                await uow.CompleteAsync();
            }

            if (participant is null)
            {
                await RejectAsync("Participant not found.");
                return;
            }

            await Groups.AddToGroupAsync(
                Context.ConnectionId,
                StudentGroupName(payload.TenantId, sessionId));
            await _onlineTracker.SetOnlineAsync(sessionId, payload.ParticipantId.Value, payload.TenantId);

            // 通知教师组：学员上线（增量，与 OnDisconnectedAsync 对称；重连场景亦触发）
            try
            {
                var evt = new ParticipantChangedEvent
                {
                    SessionId = sessionId,
                    ParticipantId = payload.ParticipantId.Value,
                    Nickname = participant.Nickname,
                    OnlineStatus = OnlineStatus.Online,
                    AnswerState = ParticipantAnswerState.NotStarted,
                    ServerTime = DateTimeOffset.UtcNow,
                    EventId = Guid.NewGuid(),
                };
                await _notifier.NotifyTeachersAsync(sessionId, payload.TenantId, evt);
            }
            catch (Exception ex)
            {
                // 推送失败不影响连接流程
                _logger.LogWarning(ex, "Failed to notify teacher group on participant connect.");
            }
        }
        else
        {
            await Groups.AddToGroupAsync(
                Context.ConnectionId,
                PresentationGroupName(payload.TenantId, sessionId));
        }
    }

    /// <summary>教师连接：OpenIddict 认证（宿主中间件）+ 课堂创建者校验。</summary>
    private async Task ConnectAsTeacherAsync(Guid sessionId)
    {
        var teacherId = _currentUser.Id;
        if (teacherId is null)
        {
            await RejectAsync("Unauthenticated teacher connection.");
            return;
        }

        // 教师连接可能未携带 __tenant：跨租户查找自己的课堂后按课堂租户分组
        ClassSession? session;
        using (var uow = _unitOfWorkManager.Begin(requiresNew: true, isTransactional: false))
        using (_currentTenant.Change(_currentTenant.Id))
        using (_dataFilter.Disable<Volo.Abp.MultiTenancy.IMultiTenant>())
        {
            session = await _sessionRepository.FindAsync(s => s.Id == sessionId && s.TeacherId == teacherId.Value);
            await uow.CompleteAsync();
        }

        if (session is null)
        {
            // 非课堂教师不得加入教师分组（防止越权监听课堂面板数据）
            await RejectAsync("Only the session teacher can join the teachers group.");
            return;
        }

        Context.Items[SessionIdItemKey] = sessionId;

        await Groups.AddToGroupAsync(
            Context.ConnectionId,
            TeacherGroupName(session.TenantId, sessionId));
    }

    private async Task RejectAsync(string reason)
    {
        _logger.LogWarning("Rejected classroom hub connection: {Reason}", reason);
        Context.Abort();
        await base.OnConnectedAsync();
    }
}
