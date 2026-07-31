using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Entities.Cms;

/// <summary>
/// A single node in a <see cref="Menu"/> tree. <see cref="ParentId"/>
/// establishes the hierarchy; <see cref="Order"/> controls sibling sort.
/// Mirrors ABP Commercial CMS Kit Pro's <c>MenuItem</c> aggregate root.
/// </summary>
public class MenuItem : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; set; }

    /// <summary>Owning menu.</summary>
    public Guid MenuId { get; set; }

    /// <summary>Parent item id. Null for top-level items.</summary>
    public Guid? ParentId { get; set; }

    /// <summary>Display label shown to users.</summary>
    public string DisplayName { get; set; } = string.Empty;

    /// <summary>Target URL (internal route or external link). Null for group-only nodes.</summary>
    public string? Url { get; set; }

    /// <summary>Sort order among siblings (smaller renders first).</summary>
    public int Order { get; set; }

    /// <summary>Optional icon name (e.g. Fluent UI icon name).</summary>
    public string? Icon { get; set; }

    /// <summary>Link target attribute ("_self" or "_blank"). Defaults to "_self".</summary>
    public string Target { get; set; } = "_self";

    protected MenuItem() { }

    public MenuItem(Guid id, Guid menuId, string displayName) : base(id)
    {
        MenuId = menuId;
        DisplayName = displayName;
    }
}
