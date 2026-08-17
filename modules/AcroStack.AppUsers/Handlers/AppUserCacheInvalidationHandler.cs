using System;
using System.Threading.Tasks;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace AcroStack.AppUsers;

public class AppUserCacheInvalidationHandler :
    ILocalEventHandler<EntityCreatedEventData<AppUser>>,
    ILocalEventHandler<EntityUpdatedEventData<AppUser>>,
    ILocalEventHandler<EntityDeletedEventData<AppUser>>,
    ITransientDependency
{
    private readonly IDistributedCache<CachedAppUser, Guid> _cache;

    public AppUserCacheInvalidationHandler(IDistributedCache<CachedAppUser, Guid> cache)
    {
        _cache = cache;
    }

    public Task HandleEventAsync(EntityCreatedEventData<AppUser> eventData)
    {
        return RemoveAsync(eventData.Entity.Id);
    }

    public Task HandleEventAsync(EntityUpdatedEventData<AppUser> eventData)
    {
        return RemoveAsync(eventData.Entity.Id);
    }

    public Task HandleEventAsync(EntityDeletedEventData<AppUser> eventData)
    {
        return RemoveAsync(eventData.Entity.Id);
    }

    private async Task RemoveAsync(Guid userId)
    {
        await _cache.RemoveAsync(userId);
    }
}
