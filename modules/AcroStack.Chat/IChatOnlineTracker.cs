using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AcroStack.Chat;

/// <summary>
/// Tracks which users are currently connected to the chat hub. Mirrors
/// ABP Commercial Chat module's online-presence tracking. Implementations
/// should be backed by a distributed cache so presence is shared across
/// multiple server instances.
/// </summary>
public interface IChatOnlineTracker
{
    /// <summary>Marks the user as online (renewing the sliding expiration).</summary>
    Task SetOnlineAsync(Guid userId);

    /// <summary>Marks the user as offline.</summary>
    Task SetOfflineAsync(Guid userId);

    /// <summary>Returns true if the user is currently online.</summary>
    Task<bool> IsOnlineAsync(Guid userId);

    /// <summary>Filters <paramref name="userIds"/> down to the online ones.</summary>
    Task<List<Guid>> GetOnlineUsersAsync(IEnumerable<Guid> userIds);
}
