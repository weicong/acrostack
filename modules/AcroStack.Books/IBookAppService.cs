using System;
using Volo.Abp.Application.Services;

namespace AcroStack.Books;

public interface IBookAppService :
    ICrudAppService<
        BookDto,
        Guid,
        BookGetListInput,
        CreateUpdateBookDto>
{

}
