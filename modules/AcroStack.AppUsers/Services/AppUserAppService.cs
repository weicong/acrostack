using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using IdentityPermissions = Volo.Abp.Identity.IdentityPermissions;

namespace AcroStack.AppUsers;

[Authorize(IdentityPermissions.Users.Default)]
public class AppUserAppService : ApplicationService, IAppUserAppService
{
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IdentityUserManager _identityUserManager;
    private readonly IRepository<IdentityUser, Guid> _identityUserRepository;

    public AppUserAppService(
        IRepository<AppUser, Guid> appUserRepository,
        IdentityUserManager identityUserManager,
        IRepository<IdentityUser, Guid> identityUserRepository)
    {
        _appUserRepository = appUserRepository;
        _identityUserManager = identityUserManager;
        _identityUserRepository = identityUserRepository;
    }

    public async Task<PagedResultDto<AppUserDto>> GetListAsync(GetAppUsersInput input)
    {
        var queryable = await _appUserRepository.GetQueryableAsync();

        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            var filter = input.Filter.ToLower();
            queryable = queryable.Where(u =>
                u.UserName.ToLower().Contains(filter) ||
                (u.Email != null && u.Email.ToLower().Contains(filter)) ||
                (u.Name != null && u.Name.ToLower().Contains(filter)) ||
                (u.Surname != null && u.Surname.ToLower().Contains(filter)));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var users = await AsyncExecuter.ToListAsync(
            queryable
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "UserName" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
        );

        return new PagedResultDto<AppUserDto>(totalCount, ObjectMapper.Map<List<AppUser>, List<AppUserDto>>(users));
    }

    [Authorize(IdentityPermissions.Users.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        // 禁止自删（否则当前会话的动态声明/令牌仍有效却已无对应记录）
        if (CurrentUser.Id == id)
        {
            throw new BusinessException(IdentityErrorCodes.UserSelfDeletion);
        }

        // 删除真实 IdentityUser 聚合（IdentityUserManager 内置最后管理员保护、
        // 级联清理角色/声明/令牌等），而非只删本模块的只读投影行。
        var identityUser = await _identityUserRepository.FindAsync(id)
            ?? throw new Volo.Abp.Domain.Entities.EntityNotFoundException(typeof(IdentityUser), id);

        await _identityUserManager.DeleteAsync(identityUser);

        // 同一 UoW 内直接清理投影行，不依赖分布式 EntityDeletedEto 的异步到达；
        // AppUserSyncHandler 对重复删除幂等，事件晚到时为 no-op。
        var appUser = await _appUserRepository.FindAsync(id);
        if (appUser != null)
        {
            await _appUserRepository.DeleteAsync(appUser);
        }
    }
}
