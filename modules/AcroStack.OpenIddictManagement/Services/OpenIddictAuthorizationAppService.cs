using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.OpenIddictManagement.Dtos;
using Microsoft.AspNetCore.Authorization;
using OpenIddict.Abstractions;
using System.Linq.Dynamic.Core;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.OpenIddict.Authorizations;

namespace AcroStack.OpenIddictManagement;

[Authorize(OpenIddictManagementPermissions.Authorizations)]
public class OpenIddictAuthorizationAppService : OpenIddictManagementAppServiceBase, IOpenIddictAuthorizationAppService
{
    private readonly IRepository<OpenIddictAuthorization, Guid> _repository;
    private readonly IOpenIddictAuthorizationManager _authorizationManager;

    public OpenIddictAuthorizationAppService(
        IRepository<OpenIddictAuthorization, Guid> repository,
        IOpenIddictAuthorizationManager authorizationManager)
    {
        _repository = repository;
        _authorizationManager = authorizationManager;
    }

    public async Task<PagedResultDto<OpenIddictAuthorizationDto>> GetListAsync(GetOpenIddictAuthorizationListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (input.ApplicationId.HasValue)
        {
            queryable = queryable.Where(x => x.ApplicationId == input.ApplicationId);
        }

        if (!input.Subject.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Subject.Contains(input.Subject));
        }

        if (!input.Status.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Status == input.Status);
        }

        if (!input.Type.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Type == input.Type);
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var authorizations = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictAuthorizationDto>(
            totalCount,
            authorizations.Select(MapToDto).ToList()
        );
    }

    public async Task DeleteAsync(Guid id)
    {
        var authorization = await _repository.GetAsync(id);
        // IOpenIddictAuthorizationManager handles internal cleanup.
        await _authorizationManager.DeleteAsync(authorization);
    }

    public async Task RevokeAsync(Guid id)
    {
        var authorization = await _repository.GetAsync(id);
        if (!await _authorizationManager.TryRevokeAsync(authorization))
        {
            // TryRevokeAsync returns false when the authorization was already
            // revoked/deleted concurrently; surface as a user-facing error.
            throw new BusinessException(OpenIddictManagementErrorCodes.AuthorizationRevokeFailed);
        }
    }

    private OpenIddictAuthorizationDto MapToDto(OpenIddictAuthorization authorization)
    {
        return new OpenIddictAuthorizationDto
        {
            Id = authorization.Id,
            ApplicationId = authorization.ApplicationId,
            Subject = authorization.Subject,
            Type = authorization.Type,
            Status = authorization.Status,
            CreationDate = authorization.CreationDate,
        };
    }
}
