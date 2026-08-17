using System;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.OpenIddictManagement;
using Microsoft.AspNetCore.Authorization;
using OpenIddict.Abstractions;
using System.Linq.Dynamic.Core;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.OpenIddict.Scopes;

namespace AcroStack.Services.OpenIddictManagement;

[Authorize(AcroStackPermissions.OpenIddictManagement.Scopes)]
public class OpenIddictScopeAppService : AcroStackAppService, IOpenIddictScopeAppService
{
    private readonly IRepository<OpenIddictScope, Guid> _repository;
    private readonly IOpenIddictScopeManager _scopeManager;

    public OpenIddictScopeAppService(
        IRepository<OpenIddictScope, Guid> repository,
        IOpenIddictScopeManager scopeManager)
    {
        _repository = repository;
        _scopeManager = scopeManager;
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
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var scopes = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictScopeDto>(
            totalCount,
            scopes.Select(MapToDto).ToList()
        );
    }

    [Authorize(AcroStackPermissions.OpenIddictManagement.Scopes)]
    public async Task<OpenIddictScopeDto> CreateAsync(CreateOpenIddictScopeDto input)
    {
        // IOpenIddictScopeManager handles JSON serialization of Resources.
        var descriptor = new OpenIddictScopeDescriptor
        {
            Name = input.Name,
            DisplayName = input.DisplayName,
            Description = input.Description,
        };

        foreach (var r in input.Resources) descriptor.Resources.Add(r);

        var created = (OpenIddictScope)await _scopeManager.CreateAsync(descriptor);
        return MapToDto(created);
    }

    [Authorize(AcroStackPermissions.OpenIddictManagement.Scopes)]
    public async Task<OpenIddictScopeDto> UpdateAsync(Guid id, UpdateOpenIddictScopeDto input)
    {
        var scope = await _repository.GetAsync(id);

        var descriptor = new OpenIddictScopeDescriptor
        {
            DisplayName = input.DisplayName,
            Description = input.Description,
        };

        foreach (var r in input.Resources) descriptor.Resources.Add(r);

        // PopulateAsync copies descriptor values onto the existing entity.
        await _scopeManager.PopulateAsync(scope, descriptor);
        await _repository.UpdateAsync(scope);
        return MapToDto(scope);
    }

    public async Task DeleteAsync(Guid id)
    {
        var scope = await _repository.GetAsync(id);
        await _scopeManager.DeleteAsync(scope);
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
