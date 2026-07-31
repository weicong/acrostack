using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.Cms;

/// <summary>Input for creating a new <see cref="MenuDto"/>.</summary>
public class CreateMenuInput
{
    [Required]
    [StringLength(64)]
    public string Name { get; set; } = string.Empty;
}
