using System;
using System.ComponentModel.DataAnnotations;

namespace AcroStack.Books;

public class CreateUpdateBookDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public BookType Type { get; set; } = BookType.Undefined;

    [Required]
    [DataType(DataType.Date)]
    public DateTime PublishDate { get; set; } = DateTime.Now;

    [Required]
    [Range(0, 1_000_000)]
    public decimal Price { get; set; }
}
