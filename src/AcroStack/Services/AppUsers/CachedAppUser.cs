using System;

namespace AcroStack.AppUsers;

public class CachedAppUser
{
    public Guid Id { get; init; }
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
        string userName,
        string? email,
        string? name,
        string? surname,
        string? phoneNumber,
        bool isActive,
        DateTime creationTime)
    {
        Id = id;
        UserName = userName;
        Email = email;
        Name = name;
        Surname = surname;
        PhoneNumber = phoneNumber;
        IsActive = isActive;
        CreationTime = creationTime;
    }
}
