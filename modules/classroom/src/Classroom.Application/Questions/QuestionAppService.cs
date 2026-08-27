using System;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Classroom.Permissions;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Classroom;

/// <summary>题库管理（教师；权限 ClassroomPermissions.Questions.Manage）。</summary>
[Authorize(ClassroomPermissions.Questions.Manage)]
public class QuestionAppService : ApplicationService, IQuestionAppService
{
    private readonly IRepository<Question, Guid> _questionRepository;

    public QuestionAppService(IRepository<Question, Guid> questionRepository)
    {
        _questionRepository = questionRepository;
    }

    public async Task<QuestionDto> CreateAsync(CreateUpdateQuestionDto input)
    {
        var question = new Question(
            GuidGenerator.Create(),
            input.Type,
            input.Stem,
            input.Options.Select(o => new QuestionOption(o.Key, o.Text)).ToList(),
            input.CorrectAnswer,
            input.Explanation,
            CurrentTenant.Id);

        ValidateQuestion(question);
        await _questionRepository.InsertAsync(question, autoSave: true);
        return MapToDto(question);
    }

    public async Task<QuestionDto> UpdateAsync(Guid id, CreateUpdateQuestionDto input)
    {
        var question = await _questionRepository.GetAsync(id);
        question.SetContent(
            input.Type,
            input.Stem,
            input.Options.Select(o => new QuestionOption(o.Key, o.Text)).ToList(),
            input.CorrectAnswer,
            input.Explanation);

        ValidateQuestion(question);
        await _questionRepository.UpdateAsync(question, autoSave: true);
        return MapToDto(question);
    }

    public async Task DeleteAsync(Guid id)
    {
        await _questionRepository.DeleteAsync(id);
    }

    public async Task<QuestionDto> GetAsync(Guid id)
    {
        var question = await _questionRepository.GetAsync(id);
        return MapToDto(question);
    }

    public async Task<PagedResultDto<QuestionDto>> GetListAsync(QuestionGetListInput input)
    {
        var queryable = await _questionRepository.GetQueryableAsync();

        if (input.Type.HasValue)
        {
            queryable = queryable.Where(q => q.Type == input.Type.Value);
        }

        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            queryable = queryable.Where(q => q.Stem.Contains(input.Filter));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);
        var items = await AsyncExecuter.ToListAsync(queryable
            .OrderByDescending(q => q.CreationTime)
            .PageBy(input.SkipCount, input.MaxResultCount));

        return new PagedResultDto<QuestionDto>(
            totalCount,
            items.Select(MapToDto).ToList());
    }

    /// <summary>客观题必须配置正确答案（主观题忽略）。</summary>
    private static void ValidateQuestion(Question question)
    {
        if (question.Type != QuestionType.ShortAnswer && string.IsNullOrWhiteSpace(question.CorrectAnswer))
        {
            throw new BusinessException(ClassroomErrorCodes.InvalidAnswerFormat)
                .WithData("Reason", "Objective questions require a correct answer.");
        }
    }

    private static QuestionDto MapToDto(Question question)
    {
        return new QuestionDto
        {
            Id = question.Id,
            Type = question.Type,
            Stem = question.Stem,
            Options = question.Options
                .Select(o => new QuestionOptionDto { Key = o.Key, Text = o.Text })
                .ToList(),
            CorrectAnswer = question.CorrectAnswer,
            Explanation = question.Explanation,
            CreationTime = question.CreationTime,
        };
    }
}
