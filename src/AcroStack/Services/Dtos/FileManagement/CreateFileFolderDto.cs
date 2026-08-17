using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Services.Dtos.FileManagement;

public class CreateFileFolderDto
{
    [Required]
    [StringLength(256)]
    public string Name { get; set; } = string.Empty;

    public Guid? ParentId { get; set; }
}
