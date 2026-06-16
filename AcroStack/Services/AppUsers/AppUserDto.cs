using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.AppUsers;

public class AppUserDto : EntityDto<Guid>
{
    public string UserName { get; set; } = null!;
    public string? Email { get; set; }
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public string? PhoneNumber { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreationTime { get; set; }
}
