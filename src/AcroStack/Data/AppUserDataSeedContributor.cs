using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace AcroStack.AppUsers;

public class AppUserDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IIdentityUserRepository _identityUserRepository;
    private readonly IRepository<AppUser, Guid> _appUserRepository;

    public AppUserDataSeedContributor(
        IIdentityUserRepository identityUserRepository,
        IRepository<AppUser, Guid> appUserRepository)
    {
        _identityUserRepository = identityUserRepository;
        _appUserRepository = appUserRepository;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        var identityUsers = await _identityUserRepository.GetListAsync();
        foreach (var identityUser in identityUsers)
        {
            var existing = await _appUserRepository.FindAsync(identityUser.Id);
            if (existing != null)
            {
                continue;
            }

            var appUser = new AppUser(
                identityUser.Id,
                identityUser.UserName,
                identityUser.Email,
                identityUser.Name,
                identityUser.Surname,
                identityUser.PhoneNumber,
                identityUser.IsActive,
                identityUser.TenantId);

            await _appUserRepository.InsertAsync(appUser);
        }
    }
}
