using System;
using Volo.Abp.Caching;

namespace AcroStack.Chat;

/// <summary>
/// Typed cache entry for chat online presence. The cache key is the user's
/// <see cref="Guid"/> id; tenant isolation comes from ABP's cache key
/// normalization (cache name + tenant id prefix), which fixes the previous
/// hand-rolled <c>chat-online:{userId}</c> key that let same-id users from
/// different tenants overwrite each other's presence.
/// </summary>
[CacheName("ChatOnlineUser")]
public class ChatOnlineCacheItem
{
    /// <summary>UTC timestamp of the last heartbeat / connect.</summary>
    public DateTime LastSeen { get; set; }
}
