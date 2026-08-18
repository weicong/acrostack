using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using Volo.Abp.DependencyInjection;

namespace AcroStack.Chat;

/// <summary>
/// Distributed-cache backed implementation of <see cref="IChatOnlineTracker"/>.
/// Each online user is stored under the key <c>chat-online:{userId}</c> with
/// a 30-second sliding expiration that is renewed on every SignalR
/// connection / heartbeat. A user is considered offline once the entry
/// expires or is explicitly removed.
/// </summary>
public class ChatOnlineTracker : IChatOnlineTracker, ISingletonDependency
{
    private static readonly TimeSpan OnlineExpiration = TimeSpan.FromSeconds(30);

    private readonly IDistributedCache _cache;

    public ChatOnlineTracker(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task SetOnlineAsync(Guid userId)
    {
        await _cache.SetStringAsync(
            Key(userId),
            userId.ToString(),
            new DistributedCacheEntryOptions { SlidingExpiration = OnlineExpiration });
    }

    public async Task SetOfflineAsync(Guid userId)
    {
        await _cache.RemoveAsync(Key(userId));
    }

    public async Task<bool> IsOnlineAsync(Guid userId)
    {
        return await _cache.GetStringAsync(Key(userId)) != null;
    }

    public async Task<List<Guid>> GetOnlineUsersAsync(IEnumerable<Guid> userIds)
    {
        var userIdList = userIds.Distinct().ToList();
        if (userIdList.Count == 0)
        {
            return new List<Guid>();
        }

        // 【性能】用 Task.WhenAll 并发发起所有缓存查询，替代逐个串行
        // GetStringAsync 的等待方式，避免 N 个用户就产生 N 次串行网络往返；
        // 结果数组与 userIdList 按下标一一对应，最后按原顺序组装输出。
        var cacheResults = await Task.WhenAll(
            userIdList.Select(userId => _cache.GetStringAsync(Key(userId))));

        return userIdList
            .Where((_, index) => cacheResults[index] != null)
            .ToList();
    }

    private static string Key(Guid userId) => $"chat-online:{userId}";
}
