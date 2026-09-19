namespace AcroStack.Impersonation;

/// <summary>
/// Configuration options for the <see cref="ImpersonationGrantHandler"/>.
/// Mirrors the relevant subset of ABP Account Pro's <c>AbpAccountOptions</c>.
/// </summary>
public class ImpersonationOptions
{
    /// <summary>
    /// The OAuth2 audience that access tokens must be issued for. Tokens
    /// with a different audience are rejected by the impersonation handler.
    /// Should match the audience registered via
    /// <c>AddAudiences(...)</c> in the host module's
    /// <c>PreConfigureServices</c> (see <c>AcroStackModule</c>).
    /// </summary>
    public string TokenAudience { get; set; } = "AcroStack";
}
