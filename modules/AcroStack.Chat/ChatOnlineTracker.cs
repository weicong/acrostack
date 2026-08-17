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

        var online = new List<Guid>();
        foreach (var userId in userIdList)
        {
            if (await _cache.GetStringAsync(Key(userId)) != null)
            {
                online.Add(userId);
            }
        }
        return online;
    }

    private static string Key(Guid userId) => $"chat-online:{userId}";
}
