using Volo.Abp.Application.Dtos;

namespace AcroStack.Books;

public class BookGetListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public BookType? Type { get; set; }
}
