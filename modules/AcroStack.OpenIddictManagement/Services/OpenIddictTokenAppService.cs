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
using Volo.Abp.OpenIddict.Tokens;

namespace AcroStack.OpenIddictManagement;

[Authorize(OpenIddictManagementPermissions.Tokens)]
public class OpenIddictTokenAppService : OpenIddictManagementAppServiceBase, IOpenIddictTokenAppService
{
    private readonly IRepository<OpenIddictToken, Guid> _repository;
    private readonly IOpenIddictTokenManager _tokenManager;

    public OpenIddictTokenAppService(
        IRepository<OpenIddictToken, Guid> repository,
        IOpenIddictTokenManager tokenManager)
    {
        _repository = repository;
        _tokenManager = tokenManager;
    }

    public async Task<PagedResultDto<OpenIddictTokenDto>> GetListAsync(GetOpenIddictTokenListInput input)
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

        var tokens = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictTokenDto>(
            totalCount,
            tokens.Select(MapToDto).ToList()
        );
    }

    public async Task DeleteAsync(Guid id)
    {
        var token = await _repository.GetAsync(id);
        // IOpenIddictTokenManager handles internal reference-token cleanup.
        await _tokenManager.DeleteAsync(token);
    }

    public async Task RevokeAsync(Guid id)
    {
        var token = await _repository.GetAsync(id);
        if (!await _tokenManager.TryRevokeAsync(token))
        {
            // TryRevokeAsync returns false when the token was already
            // revoked/deleted concurrently; surface as a user-facing error.
            throw new BusinessException(OpenIddictManagementErrorCodes.TokenRevokeFailed);
        }
    }

    private OpenIddictTokenDto MapToDto(OpenIddictToken token)
    {
        return new OpenIddictTokenDto
        {
            Id = token.Id,
            ApplicationId = token.ApplicationId,
            AuthorizationId = token.AuthorizationId,
            Subject = token.Subject,
            Type = token.Type,
            Status = token.Status,
            ReferenceId = token.ReferenceId,
            ExpirationDate = token.ExpirationDate,
        };
    }
}
