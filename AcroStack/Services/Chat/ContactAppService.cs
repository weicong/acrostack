using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using AcroStack.Entities.Chat;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Chat;

/// <summary>
/// Provides the contact list (all other users in the current tenant) and the
/// total unread message count for the chat icon badge. Mirrors ABP Commercial
/// Chat module's <c>ContactAppService</c>. Enriches each contact with their
/// real-time online status (via <see cref="IChatOnlineTracker"/>) and filters
/// out users blocked by the current user.
/// </summary>
[Authorize]
public class ContactAppService : AcroStackAppService, IContactAppService
{
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IRepository<Conversation, Guid> _conversationRepository;
    private readonly IRepository<ChatBlockedUser, Guid> _blockedUserRepository;
    private readonly IChatOnlineTracker _onlineTracker;

    public ContactAppService(
        IRepository<AppUser, Guid> appUserRepository,
        IRepository<Conversation, Guid> conversationRepository,
        IRepository<ChatBlockedUser, Guid> blockedUserRepository,
        IChatOnlineTracker onlineTracker)
    {
        _appUserRepository = appUserRepository;
        _conversationRepository = conversationRepository;
        _blockedUserRepository = blockedUserRepository;
        _onlineTracker = onlineTracker;
    }

    public async Task<ListResultDto<ContactDto>> GetListAsync()
    {
        var currentUserId = CurrentUser.GetId();

        var userQueryable = await _appUserRepository.GetQueryableAsync();
        var users = await AsyncExecuter.ToListAsync(userQueryable.Where(u => u.Id != currentUserId));

        var convQueryable = await _conversationRepository.GetQueryableAsync();
        var conversations = await AsyncExecuter.ToListAsync(convQueryable.Where(c => c.UserId == currentUserId));
        var convMap = conversations.ToDictionary(c => c.TargetUserId);

        // Load the set of users blocked by the current user so they can be
        // filtered out of the contact list (or flagged, depending on UI need).
        var blockedQueryable = await _blockedUserRepository.GetQueryableAsync();
        var blockedIds = await AsyncExecuter.ToListAsync(
            blockedQueryable.Where(b => b.UserId == currentUserId).Select(b => b.BlockedUserId));
        var blockedSet = blockedIds.ToHashSet();

        // Filter out blocked users from the contact list.
        var visibleUsers = users.Where(u => !blockedSet.Contains(u.Id)).ToList();

        // Resolve online status for all visible contacts in one batch.
        var onlineUserIds = await _onlineTracker.GetOnlineUsersAsync(visibleUsers.Select(u => u.Id));
        var onlineSet = onlineUserIds.ToHashSet();

        var dtos = visibleUsers.Select(u =>
        {
            convMap.TryGetValue(u.Id, out var c);
            return new ContactDto
            {
                UserId = u.Id,
                UserName = u.UserName,
                Name = u.Name ?? string.Empty,
                Surname = u.Surname ?? string.Empty,
                Email = u.Email,
                UnreadMessageCount = c?.UnreadMessageCount ?? 0,
                LastMessageDate = c?.LastMessageDate,
                IsOnline = onlineSet.Contains(u.Id),
                IsBlocked = false,
            };
        }).ToList();

        return new ListResultDto<ContactDto>(dtos);
    }

    public async Task<int> GetTotalUnreadMessageCountAsync()
    {
        var currentUserId = CurrentUser.GetId();
        var queryable = await _conversationRepository.GetQueryableAsync();
        var conversations = await AsyncExecuter.ToListAsync(queryable.Where(c => c.UserId == currentUserId));
        return conversations.Sum(c => c.UnreadMessageCount);
    }
}
