using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Classroom.Dtos;

namespace Classroom;

public interface IQuestionAppService : IApplicationService
{
    Task<QuestionDto> CreateAsync(CreateUpdateQuestionDto input);

    Task<QuestionDto> UpdateAsync(Guid id, CreateUpdateQuestionDto input);

    Task DeleteAsync(Guid id);

    Task<QuestionDto> GetAsync(Guid id);

    Task<PagedResultDto<QuestionDto>> GetListAsync(QuestionGetListInput input);
}

public interface IQuizAppService : IApplicationService
{
    Task<QuizDto> CreateAsync(CreateUpdateQuizDto input);

    Task<QuizDto> UpdateAsync(Guid id, CreateUpdateQuizDto input);

    Task DeleteAsync(Guid id);

    Task<QuizDto> GetAsync(Guid id);

    Task<PagedResultDto<QuizDto>> GetListAsync(QuizGetListInput input);
}
