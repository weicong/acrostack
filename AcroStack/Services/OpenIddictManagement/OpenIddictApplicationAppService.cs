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
using Volo.Abp.OpenIddict.Applications;

namespace AcroStack.Services.OpenIddictManagement;

[Authorize(AcroStackPermissions.OpenIddictManagement.Applications)]
public class OpenIddictApplicationAppService : ApplicationService, IOpenIddictApplicationAppService
{
    private readonly IRepository<OpenIddictApplication, Guid> _repository;

    public OpenIddictApplicationAppService(IRepository<OpenIddictApplication, Guid> repository)
    {
        _repository = repository;
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
            .OrderByDescending(x => x.CreationTime)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var apps = await AsyncExecuter.ToListAsync(query);

        return new PagedResultDto<OpenIddictApplicationDto>(
            totalCount,
            apps.Select(MapToDto).ToList()
        );
    }

    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
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
