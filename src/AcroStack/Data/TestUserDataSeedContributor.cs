using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Uow;
using AcroStack.AppUsers;

namespace AcroStack.Data;

public class TestUserDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private const int TargetUserCount = 1000;
    private const string TestPassword = "Test@123456";

    private readonly IIdentityUserRepository _identityUserRepository;
    private readonly IdentityUserManager _identityUserManager;
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly ILogger<TestUserDataSeedContributor> _logger;

    public TestUserDataSeedContributor(
        IIdentityUserRepository identityUserRepository,
        IdentityUserManager identityUserManager,
        IRepository<AppUser, Guid> appUserRepository,
        ILogger<TestUserDataSeedContributor> logger)
    {
        _identityUserRepository = identityUserRepository;
        _identityUserManager = identityUserManager;
        _appUserRepository = appUserRepository;
        _logger = logger;
    }

    [UnitOfWork]
    public virtual async Task SeedAsync(DataSeedContext context)
    {
        var allUsers = await _identityUserRepository.GetListAsync();
        var existingTestUsers = allUsers.Count(u => u.UserName.StartsWith("testuser"));

        var usersToCreate = TargetUserCount - existingTestUsers;
        if (usersToCreate <= 0)
        {
            _logger.LogInformation("已有 {Count} 个测试用户，跳过创建", existingTestUsers);
            return;
        }

        _logger.LogInformation("正在创建 {Count} 个测试用户...", usersToCreate);

        var startIndex = existingTestUsers + 1;
        var createdCount = 0;

        for (var i = startIndex; i <= TargetUserCount; i++)
        {
            var userName = $"testuser{i:D4}";

            var identityUser = new IdentityUser(
                Guid.NewGuid(),
                userName,
                $"testuser{i:D4}@example.com");

            identityUser.Name = $"Test{i:D4}";
            identityUser.Surname = $"User{i:D4}";

            var result = await _identityUserManager.CreateAsync(identityUser, TestPassword);

            if (result.Succeeded)
            {
                // 同时创建对应的 AppUser 记录
                var appUser = new AppUser(
                    identityUser.Id,
                    identityUser.UserName,
                    identityUser.Email,
                    identityUser.Name,
                    identityUser.Surname,
                    identityUser.PhoneNumber,
                    identityUser.IsActive);

                await _appUserRepository.InsertAsync(appUser, autoSave: true);

                createdCount++;
                if (createdCount % 100 == 0)
                {
                    _logger.LogInformation("已创建 {Count}/{Total} 个测试用户...", createdCount, TargetUserCount);
                }
            }
            else
            {
                _logger.LogWarning("创建用户 {User} 失败: {Errors}",
                    userName, string.Join(", ", result.Errors));
            }
        }

        _logger.LogInformation("成功创建 {Count} 个测试用户", createdCount);
    }
}
