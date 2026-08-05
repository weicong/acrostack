namespace AcroStack.Services.AuditLogging;

/// <summary>
/// Configuration for the Audit Logging feature. Bound from the
/// <c>AuditLog</c> configuration section in <c>appsettings.json</c>.
/// Mirrors the host/tenant scoping switch found in ABP Commercial
/// AuditLogging Pro.
/// </summary>
public class AuditLogOptions
{
    /// <summary>
    /// When <c>true</c> (default), audit logs are accessible only from the
    /// host side — the existing Host-only permission definitions are
    /// sufficient to enforce this. When <c>false</c>, tenant users may be
    /// granted the audit log permissions and the AppService will
    /// automatically scope queries to the caller's tenant.
    /// </summary>
    public bool IsHostOnly { get; set; } = true;
}
