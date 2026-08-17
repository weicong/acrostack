using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace AcroStack.AppUsers;

public class AppUser : AuditedAggregateRoot<Guid>
{
    public string UserName { get; private set; } = null!;
    public string? Email { get; private set; }
    public string? Name { get; private set; }
    public string? Surname { get; private set; }
    public string? PhoneNumber { get; private set; }
    public bool IsActive { get; private set; }

    protected AppUser()
    {
    }

    public AppUser(
        Guid id,
        string userName,
        string? email,
        string? name,
        string? surname,
        string? phoneNumber,
        bool isActive)
        : base(id)
    {
        UserName = Check.NotNullOrWhiteSpace(userName, nameof(userName), maxLength: AppUserConsts.MaxUserNameLength);
        Update(email, name, surname, phoneNumber, isActive);
    }

    public void SetUserName(string userName)
    {
        UserName = Check.NotNullOrWhiteSpace(userName, nameof(userName), maxLength: AppUserConsts.MaxUserNameLength);
    }

    public void Update(
        string? email,
        string? name,
        string? surname,
        string? phoneNumber,
        bool isActive)
    {
        Email = email != null ? Check.Length(email, nameof(email), AppUserConsts.MaxEmailLength) : null;
        Name = name != null ? Check.Length(name, nameof(name), AppUserConsts.MaxNameLength) : null;
        Surname = surname != null ? Check.Length(surname, nameof(surname), AppUserConsts.MaxSurnameLength) : null;
        PhoneNumber = phoneNumber != null ? Check.Length(phoneNumber, nameof(phoneNumber), AppUserConsts.MaxPhoneNumberLength) : null;
        IsActive = isActive;
    }
}
