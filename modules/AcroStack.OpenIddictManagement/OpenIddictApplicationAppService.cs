using System;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AcroStack;
using Microsoft.AspNetCore.Authorization;
using OpenIddict.Abstractions;
using System.Linq.Dynamic.Core;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.OpenIddict;
using Volo.Abp.OpenIddict.Applications;

namespace AcroStack.OpenIddictManagement;

[Authorize(OpenIddictManagementPermissions.Applications)]
public class OpenIddictApplicationAppService : AcroStackAppService, IOpenIddictApplicationAppService
{
    private readonly IRepository<OpenIddictApplication, Guid> _repository;
    private readonly IAbpApplicationManager _applicationManager;

    public OpenIddictApplicationAppService(
        IRepository<OpenIddictApplication, Guid> repository,
        IAbpApplicationManager applicationManager)
    {
        _repository = repository;
        _applicationManager = applicationManager;
    }

    public async Task<OpenIddictApplicationDto> GetAsync(Guid id)
    {
        var app = await _repository.GetAsync(id);
        return MapToDto(app);
    }

    public async Task<PagedResultDto<OpenIddictApplicationDto>> GetListAsync(GetOpenIddictApplicationListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x =>
                (x.ClientId != null && x.ClientId.Contains(input.Filter)) ||
                (x.DisplayName != null && x.DisplayName.Contains(input.Filter)));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var apps = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictApplicationDto>(
            totalCount,
            apps.Select(MapToDto).ToList()
        );
    }

    [Authorize(OpenIddictManagementPermissions.Applications)]
    public async Task<OpenIddictApplicationDto> CreateAsync(CreateOpenIddictApplicationDto input)
    {
        // IAbpApplicationManager handles ClientSecret hashing and JSON
        // serialization of list fields (Permissions, RedirectUris, ...).
        var descriptor = new OpenIddictApplicationDescriptor
        {
            ClientId = input.ClientId,
            DisplayName = input.DisplayName,
            ClientType = input.ClientType,
            ConsentType = input.ConsentType,
            ClientSecret = input.ClientSecret,
        };

        foreach (var p in input.Permissions) descriptor.Permissions.Add(p);
        foreach (var u in input.RedirectUris) descriptor.RedirectUris.Add(new Uri(u));
        foreach (var u in input.PostLogoutRedirectUris) descriptor.PostLogoutRedirectUris.Add(new Uri(u));
        foreach (var r in input.Requirements) descriptor.Requirements.Add(r);

        var created = (OpenIddictApplication)await _applicationManager.CreateAsync(descriptor);
        return MapToDto(created);
    }

    [Authorize(OpenIddictManagementPermissions.Applications)]
    public async Task<OpenIddictApplicationDto> UpdateAsync(Guid id, UpdateOpenIddictApplicationDto input)
    {
        var app = await _repository.GetAsync(id);

        var descriptor = new OpenIddictApplicationDescriptor
        {
            DisplayName = input.DisplayName,
            ClientType = input.ClientType,
            ConsentType = input.ConsentType,
            // Pass through the existing hash when no new secret is supplied
            // (null input.ClientSecret means "leave unchanged"; empty string
            // would clear it). IAbpApplicationManager re-hashes non-null
            // non-empty values.
            ClientSecret = input.ClientSecret ?? app.ClientSecret,
        };

        foreach (var p in input.Permissions) descriptor.Permissions.Add(p);
        foreach (var u in input.RedirectUris) descriptor.RedirectUris.Add(new Uri(u));
        foreach (var u in input.PostLogoutRedirectUris) descriptor.PostLogoutRedirectUris.Add(new Uri(u));
        foreach (var r in input.Requirements) descriptor.Requirements.Add(r);

        // PopulateAsync copies descriptor values onto the existing entity
        // (including re-hashing ClientSecret when it's a new plain-text value).
        await _applicationManager.PopulateAsync(app, descriptor);
        await _repository.UpdateAsync(app);
        return MapToDto(app);
    }

    public async Task DeleteAsync(Guid id)
    {
        var app = await _repository.GetAsync(id);
        await _applicationManager.DeleteAsync(app);
    }

    private static OpenIddictApplicationDto MapToDto(OpenIddictApplication app)
    {
        return new OpenIddictApplicationDto
        {
            Id = app.Id,
            ClientId = app.ClientId,
            DisplayName = app.DisplayName,
            ClientType = app.ClientType,
            ConsentType = app.ConsentType,
            ClientSecret = app.ClientSecret,
            Permissions = ParseJsonList(app.Permissions),
            RedirectUris = ParseJsonList(app.RedirectUris),
            PostLogoutRedirectUris = ParseJsonList(app.PostLogoutRedirectUris),
            Requirements = ParseJsonList(app.Requirements),
            CreationTime = app.CreationTime,
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
