using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Chat;

public interface IChatBlockAppService : IApplicationService
{
    /// <summary>Blocks a user (prevents them from sending messages to the current user).</summary>
    Task BlockUserAsync(Guid blockedUserId);

    /// <summary>Removes a previously applied block.</summary>
    Task UnblockUserAsync(Guid blockedUserId);

    /// <summary>Lists all users blocked by the current user.</summary>
    Task<ListResultDto<BlockedUserDto>> GetBlockedUsersAsync();

    /// <summary>
    /// Returns true if <paramref name="userId"/> has blocked <paramref name="targetUserId"/>.
    /// </summary>
    Task<bool> IsUserBlockedAsync(Guid userId, Guid targetUserId);
}
