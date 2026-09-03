using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;

namespace AcroStack.Chat;

/// <summary>
/// Distributed-cache backed implementation of <see cref="IChatOnlineTracker"/>
/// using ABP's typed cache (<see cref="ChatOnlineCacheItem"/>). Each online
/// user is stored under the cache name <c>ChatOnlineUser</c> keyed by user
/// id with a 60-second sliding expiration renewed on every SignalR
/// connection / heartbeat; a user is considered offline once the entry
/// expires or is explicitly removed.
/// Tenant isolation relies on ABP's cache key normalization (cache name +
/// tenant id), so identical user ids in different tenants no longer collide
/// (unlike the previous hand-rolled <c>chat-online:{userId}</c> key).
/// </summary>
public class ChatOnlineTracker : IChatOnlineTracker, ISingletonDependency
{
    private static readonly TimeSpan OnlineExpiration = TimeSpan.FromSeconds(60);

    private readonly IDistributedCache<ChatOnlineCacheItem> _cache;

    public ChatOnlineTracker(IDistributedCache<ChatOnlineCacheItem> cache)
    {
        _cache = cache;
    }

    public async Task SetOnlineAsync(Guid userId)
    {
        await _cache.SetAsync(
            userId.ToString(),
            new ChatOnlineCacheItem { LastSeen = DateTime.UtcNow },
            new DistributedCacheEntryOptions { SlidingExpiration = OnlineExpiration });
    }

    public Task SetOfflineAsync(Guid userId)
    {
        return _cache.RemoveAsync(userId.ToString());
    }

    public async Task<bool> IsOnlineAsync(Guid userId)
    {
        return await _cache.GetAsync(userId.ToString()) != null;
    }

    public async Task<List<Guid>> GetOnlineUsersAsync(IEnumerable<Guid> userIds)
    {
        var userIdList = userIds.Distinct().ToList();
        if (userIdList.Count == 0)
        {
            return new List<Guid>();
        }

        // 【性能】用 Task.WhenAll 并发发起所有缓存查询，替代逐个串行
        // GetAsync 的等待方式，避免 N 个用户就产生 N 次串行网络往返；
        // 结果数组与 userIdList 按下标一一对应，最后按原顺序组装输出。
        var cacheResults = await Task.WhenAll(
            userIdList.Select(userId => _cache.GetAsync(userId.ToString())));

        return userIdList
            .Where((_, index) => cacheResults[index] != null)
            .ToList();
    }
}
