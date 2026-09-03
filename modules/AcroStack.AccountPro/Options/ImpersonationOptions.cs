namespace AcroStack.AccountPro;

/// <summary>
/// Configuration options for the <see cref="ImpersonationGrantHandler"/>.
/// Mirrors the relevant subset of ABP Account Pro's <c>AbpAccountOptions</c>.
/// </summary>
public class ImpersonationOptions
{
    /// <summary>
    /// The user name to impersonate when a host admin impersonates a tenant.
    /// Defaults to <c>"admin"</c>, matching ABP Account Pro's
    /// <c>AbpAccountOptions.TenantAdminUserName</c>.
    /// </summary>
    public string TenantAdminUserName { get; set; } = "admin";

    /// <summary>
    /// The OAuth2 audience that access tokens must be issued for. Tokens
    /// with a different audience are rejected by the impersonation handler.
    /// Should match the audience registered via
    /// <c>AddAudiences(...)</c> in the host module's
    /// <c>PreConfigureServices</c> (see <c>AcroStackModule</c>).
    /// </summary>
    public string TokenAudience { get; set; } = "AcroStack";
}
