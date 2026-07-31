using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for updating an existing <see cref="MenuDto"/>.</summary>
public class UpdateMenuInput
{
    [Required]
    [StringLength(64)]
    public string Name { get; set; } = string.Empty;
}
