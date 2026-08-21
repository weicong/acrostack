using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Classroom;

/// <summary>
/// 学员在线状态内存追踪（单实例 MVP；多实例部署时替换为 Redis 实现——接口已隔离）。
/// 在线状态允许短暂误差（提示词十一节）：只影响教师端展示，不影响答案提交准确性。
/// </summary>
public class ClassroomOnlineTracker : IClassroomOnlineTracker, ISingletonDependency
{
    // sessionId -> (participantId -> lastSeenUtc)
    private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<Guid, DateTimeOffset>> _sessions = new();

    public Task SetOnlineAsync(Guid sessionId, Guid participantId, Guid? tenantId)
    {
        MarkSeenInternal(sessionId, participantId);
        return Task.CompletedTask;
    }

    public Task SetOfflineAsync(Guid sessionId, Guid participantId, Guid? tenantId)
    {
        if (_sessions.TryGetValue(sessionId, out var participants))
        {
            participants.TryRemove(participantId, out _);
            if (participants.IsEmpty)
            {
                _sessions.TryRemove(sessionId, out _);
            }
        }

        return Task.CompletedTask;
    }

    public Task MarkSeenAsync(Guid sessionId, Guid participantId, Guid? tenantId)
    {
        MarkSeenInternal(sessionId, participantId);
        return Task.CompletedTask;
    }

    public Task<int> GetOnlineCountAsync(Guid sessionId, Guid? tenantId)
    {
        // 超过心跳超时未活跃的连接视为离线（允许短暂误差）
        var threshold = DateTimeOffset.UtcNow.AddSeconds(-ClassroomConsts.OnlineHeartbeatTimeoutSeconds);
        if (_sessions.TryGetValue(sessionId, out var participants))
        {
            var count = 0;
            foreach (var (_, lastSeen) in participants)
            {
                if (lastSeen > threshold)
                {
                    count++;
                }
            }

            return Task.FromResult(count);
        }

        return Task.FromResult(0);
    }

    public Task<bool> IsOnlineAsync(Guid sessionId, Guid participantId, Guid? tenantId)
    {
        var threshold = DateTimeOffset.UtcNow.AddSeconds(-ClassroomConsts.OnlineHeartbeatTimeoutSeconds);
        if (_sessions.TryGetValue(sessionId, out var participants)
            && participants.TryGetValue(participantId, out var lastSeen))
        {
            return Task.FromResult(lastSeen > threshold);
        }

        return Task.FromResult(false);
    }

    private void MarkSeenInternal(Guid sessionId, Guid participantId)
    {
        var participants = _sessions.GetOrAdd(sessionId, _ => new ConcurrentDictionary<Guid, DateTimeOffset>());
        participants[participantId] = DateTimeOffset.UtcNow;
    }
}
