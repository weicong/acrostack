using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.SaaS;

public class CreateUpdateEditionDto
{
    [Required]
    [StringLength(256)]
    public string DisplayName { get; set; } = string.Empty;
}
