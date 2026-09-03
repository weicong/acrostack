using System.Threading.Tasks;
using AcroStack.OpenIddictManagement.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace AcroStack.OpenIddictManagement;

public interface IOpenIddictTokenAppService : IApplicationService
{
    Task<PagedResultDto<OpenIddictTokenDto>> GetListAsync(GetOpenIddictTokenListInput input);

    Task DeleteAsync(Guid id);

    /// <summary>
    /// Marks the token as revoked (Status = "revoked") via the OpenIddict
    /// token manager. Note: already-issued JWT access tokens are NOT
    /// validated against the database by default, so revocation takes
    /// effect immediately only for reference tokens / introspection; for
    /// JWT access tokens it blocks refresh and the "back to impersonator"
    /// flow on subsequent requests.
    /// </summary>
    Task RevokeAsync(Guid id);
}
