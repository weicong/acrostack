using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OpenIddict.Abstractions;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.OpenIddict;
using Volo.Abp.OpenIddict.Applications;

namespace AcroStack.OpenIddictManagement;

[Authorize(OpenIddictManagementPermissions.Applications)]
public class OpenIddictApplicationAppService
    : OpenIddictManagementAppServiceBase,
        IOpenIddictApplicationAppService
{
    /// <summary>
    /// 已知权限白名单：OpenIddict 内置端点/授权类型/scope 常量，
    /// 加上本项目自定义的 LinkLogin、Impersonation 授权类型。
    /// </summary>
    private static readonly HashSet<string> KnownPermissions = new(StringComparer.Ordinal)
    {
        OpenIddictConstants.Permissions.Endpoints.Authorization,
        OpenIddictConstants.Permissions.Endpoints.DeviceAuthorization,
        OpenIddictConstants.Permissions.Endpoints.EndSession,
        OpenIddictConstants.Permissions.Endpoints.Introspection,
        OpenIddictConstants.Permissions.Endpoints.PushedAuthorization,
        OpenIddictConstants.Permissions.Endpoints.Revocation,
        OpenIddictConstants.Permissions.Endpoints.Token,
        OpenIddictConstants.Permissions.GrantTypes.AuthorizationCode,
        OpenIddictConstants.Permissions.GrantTypes.ClientCredentials,
        OpenIddictConstants.Permissions.GrantTypes.DeviceCode,
        OpenIddictConstants.Permissions.GrantTypes.Implicit,
        OpenIddictConstants.Permissions.GrantTypes.Password,
        OpenIddictConstants.Permissions.GrantTypes.RefreshToken,
        OpenIddictConstants.Permissions.GrantTypes.TokenExchange,
        OpenIddictConstants.Permissions.Scopes.Address,
        OpenIddictConstants.Permissions.Scopes.Email,
        OpenIddictConstants.Permissions.Scopes.Phone,
        OpenIddictConstants.Permissions.Scopes.Profile,
        OpenIddictConstants.Permissions.Scopes.Roles,
        // 本项目自定义授权类型。
        "LinkLogin",
        "Impersonation",
    };

    private readonly IRepository<OpenIddictApplication, Guid> _repository;
    private readonly IAbpApplicationManager _applicationManager;
    private readonly IHostEnvironment _hostEnvironment;

    public OpenIddictApplicationAppService(
        IRepository<OpenIddictApplication, Guid> repository,
        IAbpApplicationManager applicationManager,
        IHostEnvironment hostEnvironment
    )
    {
        _repository = repository;
        _applicationManager = applicationManager;
        _hostEnvironment = hostEnvironment;
    }

    public async Task<OpenIddictApplicationDto> GetAsync(Guid id)
    {
        var app = await _repository.GetAsync(id);
        return MapToDto(app);
    }

    public async Task<PagedResultDto<OpenIddictApplicationDto>> GetListAsync(
        GetOpenIddictApplicationListInput input
    )
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x =>
                (x.ClientId != null && x.ClientId.Contains(input.Filter))
                || (x.DisplayName != null && x.DisplayName.Contains(input.Filter))
            );
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
        ValidateApplicationInput(
            input.RedirectUris,
            input.PostLogoutRedirectUris,
            input.Permissions,
            input.ClientType,
            input.ConsentType
        );

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

        foreach (var p in input.Permissions)
            descriptor.Permissions.Add(p);
        foreach (var u in input.RedirectUris)
            descriptor.RedirectUris.Add(new Uri(u));
        foreach (var u in input.PostLogoutRedirectUris)
            descriptor.PostLogoutRedirectUris.Add(new Uri(u));
        foreach (var r in input.Requirements)
            descriptor.Requirements.Add(r);

        var created = (OpenIddictApplication)await _applicationManager.CreateAsync(descriptor);
        return MapToDto(created);
    }

    [Authorize(OpenIddictManagementPermissions.Applications)]
    public async Task<OpenIddictApplicationDto> UpdateAsync(
        Guid id,
        UpdateOpenIddictApplicationDto input
    )
    {
        var app = await _repository.GetAsync(id);

        ValidateApplicationInput(
            input.RedirectUris,
            input.PostLogoutRedirectUris,
            input.Permissions,
            input.ClientType,
            input.ConsentType
        );

        var descriptor = new OpenIddictApplicationDescriptor
        {
            DisplayName = input.DisplayName,
            ClientType = input.ClientType,
            ConsentType = input.ConsentType,
        };

        // 仅当提交了新密钥（非空）时才设置 descriptor.ClientSecret；
        // 为空/null 时不设置，PopulateAsync 会保留实体上的原有哈希值。
        // 不再用 `input.ClientSecret ?? app.ClientSecret` 回退——那依赖
        // OpenIddict"已哈希则跳过再哈希"的内部行为，一旦行为变化就会把
        // 哈希值二次哈希，导致客户端密钥校验失效。
        if (!input.ClientSecret.IsNullOrWhiteSpace())
        {
            descriptor.ClientSecret = input.ClientSecret;
        }

        foreach (var p in input.Permissions)
            descriptor.Permissions.Add(p);
        foreach (var u in input.RedirectUris)
            descriptor.RedirectUris.Add(new Uri(u));
        foreach (var u in input.PostLogoutRedirectUris)
            descriptor.PostLogoutRedirectUris.Add(new Uri(u));
        foreach (var r in input.Requirements)
            descriptor.Requirements.Add(r);

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

    private void ValidateApplicationInput(
        List<string> redirectUris,
        List<string> postLogoutRedirectUris,
        List<string> permissions,
        string? clientType,
        string? consentType
    )
    {
        ValidateRedirectUris(redirectUris);
        ValidateRedirectUris(postLogoutRedirectUris);
        ValidatePermissions(permissions);
        ValidateClientType(clientType);
        ValidateConsentType(consentType);
    }

    private void ValidateRedirectUris(List<string> uris)
    {
        var invalid = uris.Where(u => !IsValidRedirectUri(u)).ToList();
        if (invalid.Count > 0)
        {
            throw new BusinessException(
                OpenIddictManagementErrorCodes.InvalidRedirectUri,
                $"以下回调地址不合法（必须为 https 绝对地址）: {string.Join(", ", invalid)}"
            );
        }
    }

    private bool IsValidRedirectUri(string uri)
    {
        if (!Uri.TryCreate(uri, UriKind.Absolute, out var parsed))
        {
            return false;
        }

        if (parsed.Scheme == Uri.UriSchemeHttps)
        {
            return true;
        }

        // 开发环境下放行指向本机（localhost/127.0.0.1）的 http 回调，
        // 便于本地联调 SPA。
        return parsed.Scheme == Uri.UriSchemeHttp
            && IsLocalHost(parsed.Host)
            && _hostEnvironment.IsDevelopment();
    }

    private static bool IsLocalHost(string host)
    {
        return host.Equals("localhost", StringComparison.OrdinalIgnoreCase) || host == "127.0.0.1";
    }

    private static void ValidatePermissions(List<string> permissions)
    {
        var invalid = permissions
            .Where(p =>
                !KnownPermissions.Contains(p)
                && !p.StartsWith(
                    OpenIddictConstants.Permissions.Prefixes.Scope,
                    StringComparison.Ordinal
                )
                && !p.StartsWith(
                    OpenIddictConstants.Permissions.Prefixes.ResponseType,
                    StringComparison.Ordinal
                )
                && !p.StartsWith("role:", StringComparison.Ordinal)
            )
            .ToList();

        if (invalid.Count > 0)
        {
            throw new BusinessException(
                OpenIddictManagementErrorCodes.InvalidPermission,
                $"以下权限不在白名单内: {string.Join(", ", invalid)}"
            );
        }
    }

    private static void ValidateClientType(string? clientType)
    {
        if (clientType.IsNullOrWhiteSpace())
        {
            return;
        }

        if (
            clientType != OpenIddictConstants.ClientTypes.Public
            && clientType != OpenIddictConstants.ClientTypes.Confidential
        )
        {
            throw new BusinessException(
                OpenIddictManagementErrorCodes.InvalidClientType,
                $"ClientType 只允许 {OpenIddictConstants.ClientTypes.Public} 或 {OpenIddictConstants.ClientTypes.Confidential}: {clientType}"
            );
        }
    }

    private static void ValidateConsentType(string? consentType)
    {
        if (consentType.IsNullOrWhiteSpace())
        {
            return;
        }

        if (
            consentType != OpenIddictConstants.ConsentTypes.Implicit
            && consentType != OpenIddictConstants.ConsentTypes.Explicit
            && consentType != OpenIddictConstants.ConsentTypes.External
        )
        {
            throw new BusinessException(
                OpenIddictManagementErrorCodes.InvalidConsentType,
                $"ConsentType 只允许 {OpenIddictConstants.ConsentTypes.Implicit}/{OpenIddictConstants.ConsentTypes.Explicit}/{OpenIddictConstants.ConsentTypes.External}: {consentType}"
            );
        }
    }

    private OpenIddictApplicationDto MapToDto(OpenIddictApplication app)
    {
        return new OpenIddictApplicationDto
        {
            Id = app.Id,
            ClientId = app.ClientId,
            DisplayName = app.DisplayName,
            ClientType = app.ClientType,
            ConsentType = app.ConsentType,
            // 密钥本体（哈希）不外泄，仅返回是否已配置。
            HasClientSecret = !app.ClientSecret.IsNullOrWhiteSpace(),
            Permissions = ParseJsonList(app.Permissions),
            RedirectUris = ParseJsonList(app.RedirectUris),
            PostLogoutRedirectUris = ParseJsonList(app.PostLogoutRedirectUris),
            Requirements = ParseJsonList(app.Requirements),
            CreationTime = app.CreationTime,
        };
    }

    private List<string> ParseJsonList(string? json)
    {
        if (json.IsNullOrWhiteSpace())
        {
            return new List<string>();
        }

        try
        {
            return JsonSerializer.Deserialize<List<string>>(json!) ?? new List<string>();
        }
        catch (Exception ex)
        {
            // JSON 反序列化失败时记录警告而不是静默吞掉异常，
            // 便于排查数据库中残留的脏数据。
            Logger.LogWarning(
                ex,
                "OpenIddict 应用的 JSON 列字段解析失败，已返回空列表。原始内容: {Json}",
                json
            );
            return new List<string>();
        }
    }
}
