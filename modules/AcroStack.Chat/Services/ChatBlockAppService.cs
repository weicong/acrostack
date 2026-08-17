using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Chat;

/// <summary>
/// Manages chat user blocking. Mirrors ABP Commercial Chat module's
/// blocking concept. A blocked user cannot send messages to the user who
/// blocked them, and blocked users are filtered out of the contact list.
/// </summary>
[Authorize]
public class ChatBlockAppService : AcroStackAppService, IChatBlockAppService
{
    private readonly IRepository<ChatBlockedUser, Guid> _blockedUserRepository;
    private readonly IRepository<AppUser, Guid> _appUserRepository;

    public ChatBlockAppService(
        IRepository<ChatBlockedUser, Guid> blockedUserRepository,
        IRepository<AppUser, Guid> appUserRepository)
    {
        _blockedUserRepository = blockedUserRepository;
        _appUserRepository = appUserRepository;
    }

    public async Task BlockUserAsync(Guid blockedUserId)
    {
        var currentUserId = CurrentUser.GetId();
        if (blockedUserId == currentUserId)
        {
            throw new BusinessException("AcroStack:YouCannotBlockYourself");
        }

        var existing = await _blockedUserRepository.FirstOrDefaultAsync(
            b => b.UserId == currentUserId && b.BlockedUserId == blockedUserId);
        if (existing != null)
        {
            return;
        }

        await _blockedUserRepository.InsertAsync(
            new ChatBlockedUser(GuidGenerator.Create(), currentUserId, blockedUserId));
    }

    public async Task UnblockUserAsync(Guid blockedUserId)
    {
        var currentUserId = CurrentUser.GetId();
        var existing = await _blockedUserRepository.FirstOrDefaultAsync(
            b => b.UserId == currentUserId && b.BlockedUserId == blockedUserId);
        if (existing == null)
        {
            return;
        }

        await _blockedUserRepository.DeleteAsync(existing);
    }

    public async Task<ListResultDto<BlockedUserDto>> GetBlockedUsersAsync()
    {
        var currentUserId = CurrentUser.GetId();

        var blockQueryable = await _blockedUserRepository.GetQueryableAsync();
        var userQueryable = await _appUserRepository.GetQueryableAsync();

        var rows = await AsyncExecuter.ToListAsync(
            from b in blockQueryable
            where b.UserId == currentUserId
            join u in userQueryable on b.BlockedUserId equals u.Id
            orderby b.CreationTime descending
            select new { b, u }
        );

        var dtos = rows.Select(r => new BlockedUserDto
        {
            Id = r.b.Id,
            BlockedUserId = r.b.BlockedUserId,
            BlockedUserName = r.u.UserName,
            CreationTime = r.b.CreationTime,
        }).ToList();

        return new ListResultDto<BlockedUserDto>(dtos);
    }

    public async Task<bool> IsUserBlockedAsync(Guid userId, Guid targetUserId)
    {
        var existing = await _blockedUserRepository.FirstOrDefaultAsync(
            b => b.UserId == userId && b.BlockedUserId == targetUserId);
        return existing != null;
    }
}
