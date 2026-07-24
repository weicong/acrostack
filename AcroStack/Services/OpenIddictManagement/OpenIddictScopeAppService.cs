using System;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.OpenIddictManagement;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.OpenIddict.Scopes;

namespace AcroStack.Services.OpenIddictManagement;

[Authorize(AcroStackPermissions.OpenIddictManagement.Scopes)]
public class OpenIddictScopeAppService : ApplicationService, IOpenIddictScopeAppService
{
    private readonly IRepository<OpenIddictScope, Guid> _repository;

    public OpenIddictScopeAppService(IRepository<OpenIddictScope, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<OpenIddictScopeDto> GetAsync(Guid id)
    {
        var scope = await _repository.GetAsync(id);
        return MapToDto(scope);
    }

    public async Task<PagedResultDto<OpenIddictScopeDto>> GetListAsync(GetOpenIddictScopeListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x =>
                (x.Name != null && x.Name.Contains(input.Filter)) ||
                (x.DisplayName != null && x.DisplayName.Contains(input.Filter)));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderByDescending(x => x.CreationTime)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var scopes = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictScopeDto>(
            totalCount,
            scopes.Select(MapToDto).ToList()
        );
    }

    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }

    private static OpenIddictScopeDto MapToDto(OpenIddictScope scope)
    {
        return new OpenIddictScopeDto
        {
            Id = scope.Id,
            Name = scope.Name,
            DisplayName = scope.DisplayName,
            Description = scope.Description,
            Resources = ParseJsonList(scope.Resources),
            CreationTime = scope.CreationTime,
        };
    }

    private static List<string> ParseJsonList(string? json)
    {
        if (json.IsNullOrWhiteSpace())
        {
            return new List<string>();
        }

        try
        {
            return JsonSerializer.Deserialize<List<string>>(json!) ?? new List<string>();
        }
        catch
        {
            return new List<string>();
        }
    }
}
