using Volo.Abp.Application.Dtos;
using AcroStack.Entities.Books;

namespace AcroStack.Services.Dtos.Books;

public class BookGetListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public BookType? Type { get; set; }
}
