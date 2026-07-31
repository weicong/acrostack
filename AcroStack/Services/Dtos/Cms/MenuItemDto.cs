using System;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A single node in a menu tree.</summary>
public class MenuItemDto : FullAuditedEntityDto<Guid>
{
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

    /// <summary>Optional icon name.</summary>
    public string? Icon { get; set; }

    /// <summary>Link target attribute ("_self" or "_blank").</summary>
    public string Target { get; set; } = "_self";
}
