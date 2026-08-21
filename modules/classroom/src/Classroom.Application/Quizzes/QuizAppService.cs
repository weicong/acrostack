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

/// <summary>试卷管理（教师；权限 ClassroomPermissions.Quizzes.Manage）。</summary>
[Authorize(ClassroomPermissions.Quizzes.Manage)]
public class QuizAppService : ApplicationService, IQuizAppService
{
    private readonly IRepository<Quiz, Guid> _quizRepository;
    private readonly IRepository<Question, Guid> _questionRepository;

    public QuizAppService(IRepository<Quiz, Guid> quizRepository, IRepository<Question, Guid> questionRepository)
    {
        _quizRepository = quizRepository;
        _questionRepository = questionRepository;
    }

    public async Task<QuizDto> CreateAsync(CreateUpdateQuizDto input)
    {
        await EnsureQuestionsExistAsync(input.QuestionIds);

        var quiz = new Quiz(GuidGenerator.Create(), input.Name, input.Description, CurrentTenant.Id);
        quiz.SetQuestions(input.QuestionIds.Select(qid => new QuizQuestion(GuidGenerator.Create(), qid, 0)).ToList());
        await _quizRepository.InsertAsync(quiz, autoSave: true);

        return MapToDto(quiz);
    }

    public async Task<QuizDto> UpdateAsync(Guid id, CreateUpdateQuizDto input)
    {
        await EnsureQuestionsExistAsync(input.QuestionIds);

        // 必须加载现有 Questions 集合：EF 变更追踪据此删除旧关联行，否则直接替换
        // List 会残留旧 QuizQuestion（聚合子实体无法被追踪为 Deleted）
        var quiz = await GetQuizWithQuestionsAsync(id);
        quiz.SetQuestions(input.QuestionIds.Select(qid => new QuizQuestion(GuidGenerator.Create(), qid, 0)).ToList());
        await _quizRepository.UpdateAsync(quiz, autoSave: true);

        return MapToDto(quiz);
    }

    public async Task DeleteAsync(Guid id)
    {
        await _quizRepository.DeleteAsync(id);
    }

    public async Task<QuizDto> GetAsync(Guid id)
    {
        var quiz = await GetQuizWithQuestionsAsync(id);
        return MapToDto(quiz);
    }

    public async Task<PagedResultDto<QuizDto>> GetListAsync(QuizGetListInput input)
    {
        var queryable = await _quizRepository.WithDetailsAsync(q => q.Questions);
        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            queryable = queryable.Where(q => q.Name.Contains(input.Filter));
        }

        var totalCount = queryable.Count();
        var items = queryable
            .OrderByDescending(q => q.CreationTime)
            .PageBy(input.SkipCount, input.MaxResultCount)
            .ToList();

        return new PagedResultDto<QuizDto>(totalCount, items.Select(MapToDto).ToList());
    }

    /// <summary>加载 Quiz 聚合（含 Questions 子集合）。默认仓储不自动加载导航属性。</summary>
    private async Task<Quiz> GetQuizWithQuestionsAsync(Guid id)
    {
        var queryable = await _quizRepository.WithDetailsAsync(q => q.Questions);
        var quiz = await AsyncExecuter.FirstOrDefaultAsync(queryable.Where(q => q.Id == id));
        return quiz ?? throw new Volo.Abp.Domain.Entities.EntityNotFoundException(typeof(Quiz), id);
    }

    private async Task EnsureQuestionsExistAsync(System.Collections.Generic.List<Guid> questionIds)
    {
        var distinctIds = questionIds.Distinct().ToList();
        if (distinctIds.Count == 0)
        {
            throw new BusinessException(ClassroomErrorCodes.QuizNotFound)
                .WithData("Reason", "Quiz must contain at least one question.");
        }

        foreach (var questionId in distinctIds)
        {
            if (!await _questionRepository.AnyAsync(q => q.Id == questionId))
            {
                throw new BusinessException(ClassroomErrorCodes.QuestionNotFound)
                    .WithData("QuestionId", questionId);
            }
        }
    }

    private static QuizDto MapToDto(Quiz quiz)
    {
        return new QuizDto
        {
            Id = quiz.Id,
            Name = quiz.Name,
            Description = quiz.Description,
            QuestionIds = quiz.Questions
                .OrderBy(q => q.Order)
                .Select(q => q.QuestionId)
                .ToList(),
            CreationTime = quiz.CreationTime,
        };
    }
}
