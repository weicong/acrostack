using System.ComponentModel.DataAnnotations;

namespace AcroStack.FileManagement;

public class RenameDto
{
    [Required]
    [StringLength(256)]
    public string Name { get; set; } = string.Empty;
}
