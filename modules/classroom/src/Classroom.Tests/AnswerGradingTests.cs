using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Xunit;

namespace Classroom;

/// <summary>
/// 客观题判分与答案格式校验测试（提示词十五节：客观题判分 / 多选答案顺序不影响判定）。
/// 答案编码：单选 "A"；多选 "A,C"；判断 "true"/"false"；简答任意文本不判分。
/// </summary>
public class AnswerGraderTests
{
    private static Question CreateQuestion(QuestionType type, string? correctAnswer = null, params string[] optionKeys)
    {
        var options = (optionKeys.Length > 0 ? optionKeys : new[] { "A", "B", "C" })
            .Select(k => new QuestionOption(k, $"选项{k}"))
            .ToList();
        return new Question(Guid.NewGuid(), type, $"题干-{type}", options, correctAnswer, null);
    }

    #region 判分

    [Theory]
    [InlineData("B", "B", true)]
    [InlineData("B", "b", true)]   // 忽略大小写
    [InlineData("B", "A", false)]
    [InlineData("B", " B ", true)] // 容忍空白
    public void Grade_SingleChoice(string correct, string submitted, bool expected)
    {
        var result = AnswerGrader.Grade(QuestionType.SingleChoice, correct, submitted);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("A,C", "A,C", true)]
    [InlineData("A,C", "C,A", true)]   // 顺序无关
    [InlineData("A,C", "c , a", true)] // 顺序 + 大小写 + 空白
    [InlineData("A,C", "A,B", false)]
    [InlineData("A,C", "A", false)]    // 缺项
    [InlineData("A,C", "A,C,B", false)]
    [InlineData("A,C", "A,C,C", true)] // 重复提交同一项按集合比较
    public void Grade_MultipleChoice_OrderIndependent(string correct, string submitted, bool expected)
    {
        var result = AnswerGrader.Grade(QuestionType.MultipleChoice, correct, submitted);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("true", "true", true)]
    [InlineData("true", "false", false)]
    [InlineData("false", "False", true)] // 判分大小写不敏感（格式校验已限制仅小写）
    public void Grade_TrueOrFalse(string correct, string submitted, bool expected)
    {
        var result = AnswerGrader.Grade(QuestionType.TrueOrFalse, correct, submitted);
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Grade_ShortAnswer_ReturnsNull_NotGraded()
    {
        Assert.Null(AnswerGrader.Grade(QuestionType.ShortAnswer, null, "任意主观回答"));
    }

    [Fact]
    public void Grade_MultipleChoice_NullCorrect_AnswerWrong()
    {
        Assert.False(AnswerGrader.Grade(QuestionType.MultipleChoice, null, "A"));
    }

    #endregion

    #region 格式校验

    [Theory]
    [InlineData("A")]
    [InlineData("B")]
    public void Validate_SingleChoice_ValidKey_Passes(string answer)
    {
        var question = CreateQuestion(QuestionType.SingleChoice, "A");
        AnswerGrader.ValidateAnswer(question, answer); // 不抛即通过
    }

    [Theory]
    [InlineData("D")]        // 不存在的选项
    [InlineData("A,B")]      // 单选提交多项
    [InlineData("")]         // 空
    [InlineData("A,C")]      // 多项
    public void Validate_SingleChoice_Invalid_Throws(string answer)
    {
        var question = CreateQuestion(QuestionType.SingleChoice, "A", "A", "B", "C");
        var ex = Assert.Throws<BusinessException>(() => AnswerGrader.ValidateAnswer(question, answer));
        Assert.Equal(ClassroomErrorCodes.InvalidAnswerFormat, ex.Code);
    }

    [Fact]
    public void Validate_MultipleChoice_MultipleKeys_Passes()
    {
        var question = CreateQuestion(QuestionType.MultipleChoice, "A,C", "A", "B", "C");
        AnswerGrader.ValidateAnswer(question, "C,A");
    }

    [Fact]
    public void Validate_MultipleChoice_UnknownKey_Throws()
    {
        var question = CreateQuestion(QuestionType.MultipleChoice, "A,C", "A", "B", "C");
        Assert.Throws<BusinessException>(() => AnswerGrader.ValidateAnswer(question, "A,X"));
    }

    [Theory]
    [InlineData("true")]
    [InlineData("false")]
    public void Validate_TrueOrFalse_Valid_Passes(string answer)
    {
        var question = CreateQuestion(QuestionType.TrueOrFalse, "true", "A", "B");
        AnswerGrader.ValidateAnswer(question, answer);
    }

    [Theory]
    [InlineData("True")]
    [InlineData("对")]
    [InlineData("A")]
    [InlineData("1")]
    public void Validate_TrueOrFalse_Invalid_Throws(string answer)
    {
        var question = CreateQuestion(QuestionType.TrueOrFalse, "true", "A", "B");
        Assert.Throws<BusinessException>(() => AnswerGrader.ValidateAnswer(question, answer));
    }

    [Fact]
    public void Validate_ShortAnswer_NonEmpty_Passes()
    {
        var question = CreateQuestion(QuestionType.ShortAnswer, null, "A");
        AnswerGrader.ValidateAnswer(question, "我的回答");
    }

    [Fact]
    public void Validate_ShortAnswer_Empty_Throws()
    {
        var question = CreateQuestion(QuestionType.ShortAnswer, null, "A");
        Assert.Throws<BusinessException>(() => AnswerGrader.ValidateAnswer(question, "   "));
    }

    #endregion
}

/// <summary>答案记录幂等/修订语义测试（首次 Revision=1；截止前重提交递增并重新判分）。</summary>
public class AnswerRecordTests
{
    private static readonly DateTimeOffset Now = new(2026, 1, 1, 8, 0, 0, TimeSpan.Zero);

    [Fact]
    public void FirstSubmit_RevisionIsOne()
    {
        var record = new AnswerRecord(
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(),
            "A", Now.AddSeconds(-10), true, "req-1", Now);

        Assert.Equal(1, record.Revision);
        Assert.Equal("A", record.AnswerContent);
        Assert.Equal(Now, record.LastSubmittedAt);
        Assert.True(record.IsCorrect);
    }

    [Fact]
    public void Resubmit_IncrementsRevision_And_Regrades()
    {
        var record = new AnswerRecord(
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(),
            "A", Now.AddSeconds(-10), false, "req-1", Now);

        record.Resubmit("B", true, Now.AddSeconds(20));

        Assert.Equal(2, record.Revision);
        Assert.Equal("B", record.AnswerContent);
        Assert.Equal(Now.AddSeconds(20), record.LastSubmittedAt);
        Assert.True(record.IsCorrect);
    }

    [Fact]
    public void SameRequestId_DoesNotChangeRecord_MockedByIdempotencyKey()
    {
        // 幂等由应用层按 RequestId 唯一索引实现（重放返回首次结果）；
        // 领域层保证：未调用 Resubmit 时记录保持不变。
        var record = new AnswerRecord(
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(),
            "A", null, true, "req-1", Now);

        Assert.Equal(1, record.Revision);
        Assert.Equal("A", record.AnswerContent);
        Assert.Equal("req-1", record.RequestId);
    }

    [Fact]
    public void SecondsSinceFirstStart_ComputesFromOpenedAt()
    {
        var record = new AnswerRecord(
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(),
            "A", Now, true, "req-1", Now.AddSeconds(30));

        Assert.Equal(30, record.SecondsSinceFirstStart(Now));
    }

    [Fact]
    public void SecondsSinceFirstStart_NullStartedAt_ReturnsZero()
    {
        var record = new AnswerRecord(
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(),
            "A", null, true, "req-1", Now.AddSeconds(30));

        Assert.Equal(0, record.SecondsSinceFirstStart(Now));
    }
}

/// <summary>课堂码生成器测试（长度、纯数字字符集）。</summary>
public class ClassroomCodeGeneratorTests
{
    [Fact]
    public void Generate_ReturnsFourDigits()
    {
        var code = ClassroomCodeGenerator.Generate();

        Assert.Equal(ClassroomConsts.ClassroomCodeLength, code.Length);
        Assert.All(code, c => Assert.InRange(c, '0', '9'));
    }

    [Fact]
    public void Generate_ManyTimes_NoEmptyOrWrongLength()
    {
        for (var i = 0; i < 1000; i++)
        {
            var code = ClassroomCodeGenerator.Generate();
            Assert.Equal(4, code.Length);
            Assert.All(code, c => Assert.InRange(c, '0', '9'));
        }
    }
}
