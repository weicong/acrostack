using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using AcroStack.Entities.Chat;
using AcroStack.Services.Dtos.Chat;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Chat;

/// <summary>
/// Provides the contact list (all other users in the current tenant) and the
/// total unread message count for the chat icon badge. Mirrors ABP Commercial
/// Chat module's <c>ContactAppService</c>.
/// </summary>
[Authorize]
public class ContactAppService : ApplicationService, IContactAppService
{
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IRepository<Conversation, Guid> _conversationRepository;

    public ContactAppService(
        IRepository<AppUser, Guid> appUserRepository,
        IRepository<Conversation, Guid> conversationRepository)
    {
        _appUserRepository = appUserRepository;
        _conversationRepository = conversationRepository;
    }

    public async Task<ListResultDto<ContactDto>> GetListAsync()
    {
        var currentUserId = CurrentUser.GetId();

        var userQueryable = await _appUserRepository.GetQueryableAsync();
        var users = await AsyncExecuter.ToListAsync(userQueryable.Where(u => u.Id != currentUserId));

        var convQueryable = await _conversationRepository.GetQueryableAsync();
        var conversations = await AsyncExecuter.ToListAsync(convQueryable.Where(c => c.UserId == currentUserId));
        var convMap = conversations.ToDictionary(c => c.TargetUserId);

        var dtos = users.Select(u =>
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
