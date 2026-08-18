using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace AcroStack.AppUsers;

public class AppUserCacheService : IAppUserCacheService, ITransientDependency
{
    private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(30);

    private readonly IDistributedCache<CachedAppUser, Guid> _cache;
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly ICurrentTenant _currentTenant;

    public AppUserCacheService(
        IDistributedCache<CachedAppUser, Guid> cache,
        IRepository<AppUser, Guid> appUserRepository,
        ICurrentTenant currentTenant)
    {
        _cache = cache;
        _appUserRepository = appUserRepository;
        _currentTenant = currentTenant;
    }

    public async Task<CachedAppUser?> GetAsync(Guid userId)
    {
        var cached = await _cache.GetOrAddAsync(
            userId,
            async () =>
            {
                var user = await _appUserRepository.FindAsync(userId);
                return user == null ? null! : MapToCache(user);
            },
            () => new DistributedCacheEntryOptions { SlidingExpiration = CacheDuration });

        // 纵深防御：缓存键不含租户，读取时校验归属租户，
        // 不匹配则视为缓存未命中并清除，避免跨租户串用。
        if (cached != null && cached.TenantId != _currentTenant.Id)
        {
            await _cache.RemoveAsync(userId);
            return null;
        }

        return cached;
    }

    public async Task<Dictionary<Guid, CachedAppUser>> GetManyAsync(IEnumerable<Guid> userIds)
    {
        var userIdList = userIds.Distinct().ToList();
        if (userIdList.Count == 0)
        {
            return new Dictionary<Guid, CachedAppUser>();
        }

        var cachedItems = await _cache.GetOrAddManyAsync(
            userIdList,
            async (missingUserIds) =>
            {
                var missingList = missingUserIds.ToList();
                var users = await _appUserRepository.GetListAsync(u => missingList.Contains(u.Id));
                return users
                    .Select(u => new KeyValuePair<Guid, CachedAppUser>(u.Id, MapToCache(u)))
                    .ToList();
            },
            () => new DistributedCacheEntryOptions { SlidingExpiration = CacheDuration });

        return cachedItems
            .Where(x => x.Value != null)
            .ToDictionary(x => x.Key, x => x.Value!);
    }

    private static CachedAppUser MapToCache(AppUser user)
    {
        return new CachedAppUser(
            id: user.Id,
            tenantId: user.TenantId,
            userName: user.UserName,
            email: user.Email,
            name: user.Name,
            surname: user.Surname,
            phoneNumber: user.PhoneNumber,
            isActive: user.IsActive,
            creationTime: user.CreationTime);
    }
}
