using System.Threading.Tasks;
using AcroStack.Services.Dtos.Chat;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Chat;

public interface IContactAppService : IApplicationService
{
    /// <summary>Lists all users the current user can chat with (with per-contact unread count).</summary>
    Task<ListResultDto<ContactDto>> GetListAsync();

    /// <summary>Total unread messages across all conversations for the current user.</summary>
    Task<int> GetTotalUnreadMessageCountAsync();
}
