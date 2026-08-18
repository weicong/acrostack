using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace AcroStack.AppUsers;

public class AppUserSyncHandler :
    IDistributedEventHandler<EntityCreatedEto<AppIdentityUserEto>>,
    IDistributedEventHandler<EntityUpdatedEto<AppIdentityUserEto>>,
    IDistributedEventHandler<EntityDeletedEto<AppIdentityUserEto>>,
    ITransientDependency
{
    private readonly IRepository<AppUser, Guid> _appUserRepository;

    public AppUserSyncHandler(IRepository<AppUser, Guid> appUserRepository)
    {
        _appUserRepository = appUserRepository;
    }

    public Task HandleEventAsync(EntityCreatedEto<AppIdentityUserEto> eventData)
    {
        return UpsertAsync(eventData.Entity);
    }

    public Task HandleEventAsync(EntityUpdatedEto<AppIdentityUserEto> eventData)
    {
        return UpsertAsync(eventData.Entity);
    }

    public async Task HandleEventAsync(EntityDeletedEto<AppIdentityUserEto> eventData)
    {
        var appUser = await _appUserRepository.FindAsync(eventData.Entity.Id);
        if (appUser == null)
        {
            return;
        }

        await _appUserRepository.DeleteAsync(appUser);
    }

    private async Task UpsertAsync(AppIdentityUserEto identityUser)
    {
        var appUser = await _appUserRepository.FindAsync(identityUser.Id);
        if (appUser == null)
        {
            await _appUserRepository.InsertAsync(CreateAppUser(identityUser), autoSave: true);
            return;
        }

        appUser.SetUserName(identityUser.UserName);
        appUser.Update(
            identityUser.Email,
            identityUser.Name,
            identityUser.Surname,
            identityUser.PhoneNumber,
            identityUser.IsActive);

        await _appUserRepository.UpdateAsync(appUser);
    }

    private static AppUser CreateAppUser(AppIdentityUserEto identityUser)
    {
        // 显式传递租户归属，确保读模型与 IdentityUser 的租户一致
        return new AppUser(
            identityUser.Id,
            identityUser.UserName,
            identityUser.Email,
            identityUser.Name,
            identityUser.Surname,
            identityUser.PhoneNumber,
            identityUser.IsActive,
            identityUser.TenantId);
    }
}
