using System;

namespace AcroStack.Services.AuditLogging;

/// <summary>
/// Configuration for the audit log retention / cleanup background worker.
/// Bound from the <c>AuditLogCleanup</c> configuration section in
/// <c>appsettings.json</c>. Mirrors ABP Commercial AuditLogging Pro's
/// <c>AbpAuditLoggingCleanupOptions</c>.
/// </summary>
public class AuditLogCleanupOptions
{
    /// <summary>
    /// Whether the periodic cleanup worker is enabled. Default <c>true</c>.
    /// </summary>
    public bool IsEnabled { get; set; } = true;

    /// <summary>
    /// How long to keep audit logs before they are eligible for deletion.
    /// Default 90 days.
    /// </summary>
    public TimeSpan RetentionPeriod { get; set; } = TimeSpan.FromDays(90);

    /// <summary>
    /// How often the cleanup worker runs. Default 24 hours.
    /// </summary>
    public TimeSpan WorkerPeriod { get; set; } = TimeSpan.FromHours(24);

    /// <summary>
    /// Maximum number of audit logs to delete per batch. Default 1000.
    /// </summary>
    public int BatchSize { get; set; } = 1000;
}
