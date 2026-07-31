using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Application.Dtos;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Paged input for listing comments attached to an entity.</summary>
public class CommentGetListInput : PagedResultRequestDto
{
    [Required]
    [StringLength(64)]
    public string EntityType { get; set; } = string.Empty;

    [Required]
    public Guid EntityId { get; set; }
}
