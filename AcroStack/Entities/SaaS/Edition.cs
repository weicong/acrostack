using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace AcroStack.Entities.SaaS;

/// <summary>
/// Represents a SaaS edition (plan) that can be assigned to tenants.
/// Mirrors the ABP Commercial SaaS Edition entity but is provided here
/// because the open-source <c>Volo.Abp.TenantManagement</c> module ships
/// no Edition entity, no manager, and no HTTP API.
/// </summary>
public class Edition : FullAuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Unique display name shown to users (e.g. "Free", "Pro", "Enterprise").
    /// </summary>
    public string DisplayName { get; set; } = string.Empty;

    public Edition() { }

    public Edition(Guid id, string displayName)
        : base(id)
    {
        DisplayName = displayName;
    }
}
