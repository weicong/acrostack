using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A named menu container (e.g. "Main", "Footer") owning a tree of
/// <see cref="MenuItem"/> entries. Mirrors ABP Commercial CMS Kit Pro's
/// <c>Menu</c> aggregate root.
/// </summary>
public class Menu : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Unique menu name used to look up a menu by code (e.g. "Main").</summary>
    public string Name { get; set; } = string.Empty;

    protected Menu() { }

    public Menu(Guid id, string name) : base(id)
    {
        Name = name;
    }
}
