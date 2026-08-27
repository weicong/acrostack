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
    private readonly IRepository<ClassSession, Guid> _sessionRepository;

    public QuizAppService(
        IRepository<Quiz, Guid> quizRepository,
        IRepository<Question, Guid> questionRepository,
        IRepository<ClassSession, Guid> sessionRepository)
    {
        _quizRepository = quizRepository;
        _questionRepository = questionRepository;
        _sessionRepository = sessionRepository;
    }

    public async Task<QuizDto> CreateAsync(CreateUpdateQuizDto input)
    {
        await EnsureQuestionsExistAsync(input.QuestionIds);

        var quiz = new Quiz(GuidGenerator.Create(), input.Name, input.Description, CurrentTenant.Id);
        // 以输入顺序作为题目 Order，保证课堂复制题目时顺序与教师编排一致
        quiz.SetQuestions(input.QuestionIds
            .Select((qid, index) => new QuizQuestion(GuidGenerator.Create(), qid, index))
            .ToList());
        await _quizRepository.InsertAsync(quiz, autoSave: true);

        return MapToDto(quiz);
    }

    public async Task<QuizDto> UpdateAsync(Guid id, CreateUpdateQuizDto input)
    {
        await EnsureQuestionsExistAsync(input.QuestionIds);

        // 必须加载现有 Questions 集合：EF 变更追踪据此删除旧关联行，否则直接替换
        // List 会残留旧 QuizQuestion（聚合子实体无法被追踪为 Deleted）
        var quiz = await GetQuizWithQuestionsAsync(id);
        quiz.SetQuestions(input.QuestionIds
            .Select((qid, index) => new QuizQuestion(GuidGenerator.Create(), qid, index))
            .ToList());
        await _quizRepository.UpdateAsync(quiz, autoSave: true);

        return MapToDto(quiz);
    }

    public async Task DeleteAsync(Guid id)
    {
        // 已被课堂引用的试卷不允许删除（SessionQuestion 持有题目快照副本，
        // 删除 Quiz 会使进行中课堂的溯源断裂）
        if (await _sessionRepository.AnyAsync(s => s.QuizId == id))
        {
            throw new BusinessException(ClassroomErrorCodes.QuizInUse)
                .WithData("QuizId", id);
        }

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

        var totalCount = await AsyncExecuter.CountAsync(queryable);
        var items = await AsyncExecuter.ToListAsync(queryable
            .OrderByDescending(q => q.CreationTime)
            .PageBy(input.SkipCount, input.MaxResultCount));

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

        // 单次查询取回已存在的 Id，在内存中求差集，避免逐题 AnyAsync 的 N+1
        var queryable = await _questionRepository.GetQueryableAsync();
        var existingIds = await AsyncExecuter.ToListAsync(
            queryable.Where(q => distinctIds.Contains(q.Id)).Select(q => q.Id));
        var missingIds = distinctIds.Except(existingIds).ToList();

        if (missingIds.Count > 0)
        {
            throw new BusinessException(ClassroomErrorCodes.QuestionNotFound)
                .WithData("QuestionId", missingIds[0]);
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
