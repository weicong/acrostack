using System;

namespace AcroStack.AppUsers;

public class AppIdentityUserEto
{
    public Guid Id { get; set; }
    public string UserName { get; set; } = null!;
    public string? Email { get; set; }
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public string? PhoneNumber { get; set; }
    public bool IsActive { get; set; }
}
