using System;
using System.Linq;
using System.Threading.Tasks;
using Classroom.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace Classroom;

/// <summary>
/// 学员答题记录构建（学员端 my-answers 与学员门户共用）。
/// 输入为已验证身份的 sessionId + participantId；判分结果仅在公布答案后下发。
/// </summary>
public class ClassroomAnswerHistoryService : IClassroomAnswerHistoryService, ITransientDependency
{
    private readonly IRepository<ClassSession, Guid> _sessionRepository;
    private readonly IRepository<SessionQuestion, Guid> _sessionQuestionRepository;
    private readonly IRepository<Question, Guid> _questionRepository;
    private readonly IRepository<AnswerRecord, Guid> _answerRepository;

    public ClassroomAnswerHistoryService(
        IRepository<ClassSession, Guid> sessionRepository,
        IRepository<SessionQuestion, Guid> sessionQuestionRepository,
        IRepository<Question, Guid> questionRepository,
        IRepository<AnswerRecord, Guid> answerRepository)
    {
        _sessionRepository = sessionRepository;
        _sessionQuestionRepository = sessionQuestionRepository;
        _questionRepository = questionRepository;
        _answerRepository = answerRepository;
    }

    public async Task<StudentAnswerHistoryDto> BuildAsync(Guid sessionId, Guid participantId, string nickname)
    {
        var session = await _sessionRepository.GetAsync(sessionId);

        var sessionQuestions = (await _sessionQuestionRepository
            .GetListAsync(sq => sq.SessionId == sessionId))
            .OrderBy(sq => sq.Order)
            .ToList();

        var questionIds = sessionQuestions.Select(sq => sq.QuestionId).Distinct().ToList();
        var questions = (await _questionRepository.GetListAsync(q => questionIds.Contains(q.Id)))
            .ToDictionary(q => q.Id);

        var answers = (await _answerRepository.GetListAsync(
            a => a.SessionId == sessionId && a.ParticipantId == participantId))
            .ToDictionary(a => a.SessionQuestionId);

        var items = new List<StudentAnswerHistoryItemDto>();
        var answeredCount = 0;
        var correctCount = 0;

        foreach (var sq in sessionQuestions)
        {
            if (!questions.TryGetValue(sq.QuestionId, out var question))
            {
                continue;
            }

            var answerPublished = sq.Status == SessionQuestionStatus.AnswerPublished;
            answers.TryGetValue(sq.Id, out var myAnswer);

            if (myAnswer is not null)
            {
                answeredCount++;
            }

            // 判分结果仅在公布答案后下发（与快照规则一致）
            bool? myIsCorrect = answerPublished ? myAnswer?.IsCorrect : null;
            if (myIsCorrect == true)
            {
                correctCount++;
            }

            items.Add(new StudentAnswerHistoryItemDto
            {
                Order = sq.Order,
                QuestionType = question.Type,
                Stem = question.Stem,
                Options = question.Options
                    .Select(o => new QuestionOptionDto { Key = o.Key, Text = o.Text })
                    .ToList(),
                QuestionStatus = sq.Status,
                MyAnswerContent = myAnswer?.AnswerContent,
                MyIsCorrect = myIsCorrect,
                MyRevision = myAnswer?.Revision ?? 0,
                MyLastSubmittedAt = myAnswer?.LastSubmittedAt,
                CorrectAnswer = answerPublished ? question.CorrectAnswer : null,
                Explanation = answerPublished ? question.Explanation : null,
            });
        }

        return new StudentAnswerHistoryDto
        {
            SessionId = session.Id,
            Status = session.Status,
            Version = session.Version,
            ServerTime = DateTimeOffset.UtcNow,
            Nickname = nickname,
            QuestionCount = items.Count,
            AnsweredCount = answeredCount,
            CorrectCount = correctCount,
            Items = items,
        };
    }
}

public interface IClassroomAnswerHistoryService
{
    /// <summary>构建指定学员在某课堂的逐题答题记录（判分结果仅公布后下发）。</summary>
    Task<StudentAnswerHistoryDto> BuildAsync(Guid sessionId, Guid participantId, string nickname);
}
