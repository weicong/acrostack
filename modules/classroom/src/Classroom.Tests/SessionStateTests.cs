using System;
using Volo.Abp;
using Xunit;

namespace Classroom;

/// <summary>课堂聚合状态机测试（提示词十五节：合法转换 / 非法转换拒绝 / 同时只开一题 / 结束后不能开放）。</summary>
public class ClassSessionTests
{
    private static readonly DateTimeOffset Now = new(2026, 1, 1, 8, 0, 0, TimeSpan.Zero);

    private static ClassSession CreateSession()
        => new(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), "ABC234");

    private static SessionQuestion CreateQuestion(Guid sessionId, int order = 1)
        => new(Guid.NewGuid(), sessionId, Guid.NewGuid(), order);

    [Fact]
    public void Start_FromPreparing_Succeeds_And_BumpsVersion()
    {
        var session = CreateSession();

        session.Start(Now);

        Assert.Equal(ClassSessionStatus.Waiting, session.Status);
        Assert.Equal(Now, session.StartedAt);
        Assert.Equal(1, session.Version);
    }

    [Fact]
    public void LegalLifecycle_Preparing_To_Finished_Succeeds()
    {
        var session = CreateSession();
        var question = CreateQuestion(session.Id);

        session.Start(Now);                                  // Preparing -> Waiting
        session.OpenQuestion(question, Now.AddMinutes(1));    // Waiting -> Answering
        session.CloseCurrentQuestion(Now.AddMinutes(3));      // Answering -> Explaining
        session.OpenQuestion(CreateQuestion(session.Id, 2), Now.AddMinutes(4)); // Explaining -> Answering（下一题）
        session.CloseCurrentQuestion(Now.AddMinutes(6));
        session.Finish(Now.AddMinutes(7));                    // Explaining -> Finished

        Assert.Equal(ClassSessionStatus.Finished, session.Status);
        Assert.Equal(6, session.Version);
        Assert.Equal(2, session.CurrentQuestionNumber);
    }

    [Theory]
    [InlineData(ClassSessionStatus.Preparing, ClassSessionStatus.Answering)]   // 未开始直接开题
    [InlineData(ClassSessionStatus.Preparing, ClassSessionStatus.Explaining)]
    [InlineData(ClassSessionStatus.Waiting, ClassSessionStatus.Explaining)]    // 未开题直接讲评
    [InlineData(ClassSessionStatus.Answering, ClassSessionStatus.Waiting)]
    [InlineData(ClassSessionStatus.Finished, ClassSessionStatus.Waiting)]      // 结束后重新开始
    [InlineData(ClassSessionStatus.Finished, ClassSessionStatus.Answering)]    // 结束后开题
    public void IllegalTransitions_AreRejected(ClassSessionStatus from, ClassSessionStatus to)
    {
        Assert.False(ClassSessionStateMachine.CanTransition(from, to));
    }

    [Theory]
    [InlineData(ClassSessionStatus.Preparing)]
    [InlineData(ClassSessionStatus.Waiting)]
    [InlineData(ClassSessionStatus.Answering)]
    [InlineData(ClassSessionStatus.Explaining)]
    public void Finish_FromAnyNonFinished_Succeeds(ClassSessionStatus from)
    {
        Assert.True(ClassSessionStateMachine.CanTransition(from, ClassSessionStatus.Finished));
    }

    [Fact]
    public void OpenQuestion_SecondQuestion_WithoutClosingFirst_IsRejected()
    {
        // 同时只能开放一题：Answering 状态下不能再 OpenQuestion（无自转换）
        var session = CreateSession();
        session.Start(Now);
        session.OpenQuestion(CreateQuestion(session.Id), Now);

        var ex = Assert.Throws<BusinessException>(
            () => session.OpenQuestion(CreateQuestion(session.Id, 2), Now.AddSeconds(10)));

        Assert.Equal(ClassroomErrorCodes.InvalidStatusTransition, ex.Code);
    }

    [Fact]
    public void OpenQuestion_AfterFinish_IsRejected()
    {
        var session = CreateSession();
        session.Start(Now);
        session.Finish(Now);

        Assert.Throws<BusinessException>(
            () => session.OpenQuestion(CreateQuestion(session.Id), Now.AddSeconds(10)));
    }

    [Fact]
    public void PublishOperations_DoNotChangeStatus_ButBumpVersion()
    {
        var session = CreateSession();
        session.Start(Now);
        session.OpenQuestion(CreateQuestion(session.Id), Now);
        session.CloseCurrentQuestion(Now.AddMinutes(1));
        var versionBefore = session.Version;

        session.BumpVersionOnPublish();
        session.BumpVersionOnPublish();

        Assert.Equal(ClassSessionStatus.Explaining, session.Status);
        Assert.Equal(versionBefore + 2, session.Version);
    }

    [Fact]
    public void CanTransition_Finished_To_Preparing_Succeeds()
    {
        Assert.True(ClassSessionStateMachine.CanTransition(ClassSessionStatus.Finished, ClassSessionStatus.Preparing));
    }

    [Fact]
    public void Restart_FromFinished_Succeeds_AndBumpsVersion()
    {
        var session = CreateSession();
        var question = CreateQuestion(session.Id);
        session.Start(Now);
        session.OpenQuestion(question, Now.AddMinutes(1));
        session.CloseCurrentQuestion(Now.AddMinutes(3));
        session.Finish(Now.AddMinutes(4));
        var versionBefore = session.Version;

        session.Restart(Now.AddMinutes(5));

        Assert.Equal(ClassSessionStatus.Preparing, session.Status);
        Assert.Null(session.CurrentSessionQuestionId);
        Assert.Equal(0, session.CurrentQuestionNumber);
        Assert.Null(session.FinishedAt);
        Assert.Equal(versionBefore + 1, session.Version);
    }

    [Fact]
    public void Restart_FromNonFinished_IsRejected()
    {
        var session = CreateSession();
        session.Start(Now);

        Assert.Throws<BusinessException>(() => session.Restart(Now.AddMinutes(1)));
    }

    [Fact]
    public void Restart_CanStartAgain_AfterRestart()
    {
        var session = CreateSession();
        session.Start(Now);
        session.Finish(Now.AddMinutes(1));
        session.Restart(Now.AddMinutes(2));

        session.Start(Now.AddMinutes(3));

        Assert.Equal(ClassSessionStatus.Waiting, session.Status);
    }
}

/// <summary>课堂题目状态机与接收窗口测试（截止后不能提交）。</summary>
public class SessionQuestionTests
{
    private static readonly DateTimeOffset Now = new(2026, 1, 1, 8, 0, 0, TimeSpan.Zero);

    private static SessionQuestion CreateQuestion()
        => new(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), 1);

    [Fact]
    public void Open_FromPending_SetsWindow()
    {
        var question = CreateQuestion();

        question.Open(Now, 60);

        Assert.Equal(SessionQuestionStatus.Open, question.Status);
        Assert.Equal(Now, question.OpenedAt);
        Assert.Equal(Now.AddSeconds(60), question.EndsAt);
        Assert.True(question.IsAcceptingAnswers(Now.AddSeconds(59)));
    }

    [Fact]
    public void IsAcceptingAnswers_False_AfterEndsAt()
    {
        var question = CreateQuestion();
        question.Open(Now, 60);

        Assert.False(question.IsAcceptingAnswers(Now.AddSeconds(60)));
        Assert.False(question.IsAcceptingAnswers(Now.AddSeconds(61)));
    }

    [Fact]
    public void IsAcceptingAnswers_False_WhenPending()
    {
        var question = CreateQuestion();

        Assert.False(question.IsAcceptingAnswers(Now));
    }

    [Fact]
    public void IsAcceptingAnswers_False_AfterClosed()
    {
        var question = CreateQuestion();
        question.Open(Now, 60);
        question.Close(Now.AddSeconds(30));

        Assert.Equal(SessionQuestionStatus.Closed, question.Status);
        Assert.False(question.IsAcceptingAnswers(Now.AddSeconds(31)));
    }

    [Fact]
    public void LegalLifecycle_Pending_To_AnswerPublished()
    {
        var question = CreateQuestion();
        question.Open(Now, 60);
        question.Close(Now.AddSeconds(60));
        question.PublishAnswer(Now.AddSeconds(80));

        Assert.Equal(SessionQuestionStatus.AnswerPublished, question.Status);
        // 公布答案时统计一并可见
        Assert.Equal(Now.AddSeconds(80), question.StatisticsPublishedAt);
        Assert.Equal(Now.AddSeconds(80), question.AnswerPublishedAt);
    }

    [Theory]
    [InlineData(SessionQuestionStatus.Pending, SessionQuestionStatus.Closed)]
    [InlineData(SessionQuestionStatus.Pending, SessionQuestionStatus.AnswerPublished)]
    [InlineData(SessionQuestionStatus.Open, SessionQuestionStatus.Open)]
    [InlineData(SessionQuestionStatus.Open, SessionQuestionStatus.AnswerPublished)]
    [InlineData(SessionQuestionStatus.AnswerPublished, SessionQuestionStatus.Open)]
    [InlineData(SessionQuestionStatus.Closed, SessionQuestionStatus.Closed)]
    public void IllegalQuestionTransitions_AreRejected(SessionQuestionStatus from, SessionQuestionStatus to)
    {
        Assert.False(SessionQuestionStateMachine.CanTransition(from, to));
    }

    [Fact]
    public void Reset_FromAnswerPublished_RestoresToPending()
    {
        var question = CreateQuestion();
        question.Open(Now, 60);
        question.Close(Now.AddSeconds(60));
        question.PublishAnswer(Now.AddSeconds(80));

        question.Reset();

        Assert.Equal(SessionQuestionStatus.Pending, question.Status);
        Assert.Null(question.OpenedAt);
        Assert.Null(question.EndsAt);
        Assert.Null(question.ClosedAt);
        Assert.Null(question.StatisticsPublishedAt);
        Assert.Null(question.AnswerPublishedAt);
    }

    [Fact]
    public void Reset_CanOpenAgain_AfterReset()
    {
        var question = CreateQuestion();
        question.Open(Now, 60);
        question.Close(Now.AddSeconds(60));
        question.PublishAnswer(Now.AddSeconds(70));
        question.Reset();

        question.Open(Now.AddSeconds(100), 30);

        Assert.Equal(SessionQuestionStatus.Open, question.Status);
    }
}
