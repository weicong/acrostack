using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using IdentityPermissions = Volo.Abp.Identity.IdentityPermissions;

namespace AcroStack.AppUsers;

[Authorize(IdentityPermissions.Users.Default)]
public class AppUserAppService : ApplicationService, IAppUserAppService
{
    private readonly IRepository<AppUser, Guid> _appUserRepository;

    public AppUserAppService(IRepository<AppUser, Guid> appUserRepository)
    {
        _appUserRepository = appUserRepository;
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
        await _appUserRepository.DeleteAsync(id);
    }
}
