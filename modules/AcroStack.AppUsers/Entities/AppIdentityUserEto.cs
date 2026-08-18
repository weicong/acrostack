using System;

namespace AcroStack.AppUsers;

public class AppIdentityUserEto
{
    public Guid Id { get; set; }
    /// <summary>携带租户信息，避免同步到 AppUser 读模型时丢失租户归属。</summary>
    public Guid? TenantId { get; set; }
    public string UserName { get; set; } = null!;
    public string? Email { get; set; }
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public string? PhoneNumber { get; set; }
    public bool IsActive { get; set; }
}
