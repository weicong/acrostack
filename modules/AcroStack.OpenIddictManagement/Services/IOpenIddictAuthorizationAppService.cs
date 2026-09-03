using System.Threading.Tasks;
using AcroStack.OpenIddictManagement.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.OpenIddictManagement;

public interface IOpenIddictAuthorizationAppService : IApplicationService
{
    Task<PagedResultDto<OpenIddictAuthorizationDto>> GetListAsync(GetOpenIddictAuthorizationListInput input);

    Task DeleteAsync(Guid id);

    /// <summary>
    /// Marks the authorization as revoked (Status = "revoked") via the
    /// OpenIddict authorization manager. Future refresh-token flows tied to
    /// this authorization will fail; active JWT access tokens are not
    /// retroactively invalidated (no introspection by default).
    /// </summary>
    Task RevokeAsync(Guid id);
}
