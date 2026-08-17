using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AcroStack.AppUsers;

public interface IAppUserCacheService
{
    Task<CachedAppUser?> GetAsync(Guid userId);

    Task<Dictionary<Guid, CachedAppUser>> GetManyAsync(IEnumerable<Guid> userIds);
}
