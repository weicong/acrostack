using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.AppUsers;

/// <summary>
/// IdentityUser 的反规范化读模型。
/// 必须实现 IMultiTenant：否则 ABP 查询过滤器不会按租户隔离该表，
/// 任何租户的管理员都能看到全部租户的用户（跨租户数据泄露）。
/// </summary>
public class AppUser : AuditedAggregateRoot<Guid>, IMultiTenant
{
    public string UserName { get; private set; } = null!;
    public string? Email { get; private set; }
    public string? Name { get; private set; }
    public string? Surname { get; private set; }
    public string? PhoneNumber { get; private set; }
    public bool IsActive { get; private set; }

    /// <inheritdoc cref="IMultiTenant" />
    public virtual Guid? TenantId { get; protected set; }

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
        bool isActive,
        Guid? tenantId = null)
        : base(id)
    {
        UserName = Check.NotNullOrWhiteSpace(userName, nameof(userName), maxLength: AppUserConsts.MaxUserNameLength);
        Update(email, name, surname, phoneNumber, isActive);
        TenantId = tenantId;
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
