using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for updating an existing <see cref="MenuItemDto"/>.</summary>
public class UpdateMenuItemInput
{
    public Guid? ParentId { get; set; }

    [Required]
    [StringLength(256)]
    public string DisplayName { get; set; } = string.Empty;

    [StringLength(512)]
    public string? Url { get; set; }

    public int Order { get; set; }

    [StringLength(64)]
    public string? Icon { get; set; }

    [StringLength(16)]
    public string Target { get; set; } = "_self";
}
