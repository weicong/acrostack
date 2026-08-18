using System;

namespace AcroStack.AppUsers;

public class CachedAppUser
{
    public Guid Id { get; init; }
    /// <summary>归属租户。读取缓存时校验，防止缓存内容跨租户串用（纵深防御）。</summary>
    public Guid? TenantId { get; init; }
    public string UserName { get; init; } = null!;
    public string? Email { get; init; }
    public string? Name { get; init; }
    public string? Surname { get; init; }
    public string? PhoneNumber { get; init; }
    public bool IsActive { get; init; }
    public DateTime CreationTime { get; init; }

    public CachedAppUser()
    {
    }

    public CachedAppUser(
        Guid id,
        Guid? tenantId,
        string userName,
        string? email,
        string? name,
        string? surname,
        string? phoneNumber,
        bool isActive,
        DateTime creationTime)
    {
        Id = id;
        TenantId = tenantId;
        UserName = userName;
        Email = email;
        Name = name;
        Surname = surname;
        PhoneNumber = phoneNumber;
        IsActive = isActive;
        CreationTime = creationTime;
    }
}
