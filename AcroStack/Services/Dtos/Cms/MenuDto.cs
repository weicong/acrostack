using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>A named menu container with its items.</summary>
public class MenuDto : FullAuditedEntityDto<Guid>
{
    /// <summary>Unique menu name used to look up a menu by code.</summary>
    public string Name { get; set; } = string.Empty;

    /// <summary>Items in this menu (flat list — front-end builds the tree).</summary>
    public List<MenuItemDto> Items { get; set; } = new();
}
