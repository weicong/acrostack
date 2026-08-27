using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace Classroom;

/// <summary>
/// 示例题库/试卷种子数据（交付物：示例题目和试卷）。
/// 在宿主租户（tenantId=null）与 Development 环境下运行；重复执行幂等（存在即跳过）。
/// </summary>
public class ClassroomDataSeeder : IClassroomDataSeeder, ITransientDependency
{
    private const string SeedQuizName = "示例试卷：随堂测验（默认）";

    private readonly IRepository<Question, Guid> _questionRepository;
    private readonly IRepository<Quiz, Guid> _quizRepository;
    private readonly ICurrentTenant _currentTenant;

    public ClassroomDataSeeder(
        IRepository<Question, Guid> questionRepository,
        IRepository<Quiz, Guid> quizRepository,
        ICurrentTenant currentTenant)
    {
        _questionRepository = questionRepository;
        _quizRepository = quizRepository;
        _currentTenant = currentTenant;
    }

    public async Task SeedAsync()
    {
        using (_currentTenant.Change(null))
        {
            if (await _quizRepository.AnyAsync(q => q.Name == SeedQuizName))
            {
                return;
            }

            var questions = new List<Question>
            {
                new(Guid.NewGuid(), QuestionType.SingleChoice,
                    "下列哪一项不是 HTTP 的标准方法？",
                    new List<QuestionOption>
                    {
                        new("A", "GET"), new("B", "POST"), new("C", "QUERY"), new("D", "DELETE"),
                    },
                    "C",
                    "HTTP/1.1 标准方法为 GET/POST/PUT/DELETE/PATCH/HEAD/OPTIONS/TRACE/CONNECT，QUERY 不是标准方法。"),
                new(Guid.NewGuid(), QuestionType.MultipleChoice,
                    "以下关于 TCP 连接三次握手正确的说法有？",
                    new List<QuestionOption>
                    {
                        new("A", "第一次握手客户端发送 SYN"), new("B", "第二次握手服务端发送 SYN+ACK"),
                        new("C", "第三次握手客户端发送 ACK"), new("D", "三次握手保证双方收发能力均正常"),
                    },
                    "A,B,C,D",
                    "三次握手依次为 SYN、SYN+ACK、ACK，同时验证双向收发能力。"),
                new(Guid.NewGuid(), QuestionType.TrueOrFalse,
                    "HTTPS 默认端口是 443。",
                    new List<QuestionOption>
                    {
                        new("A", "对"), new("B", "错"),
                    },
                    "true",
                    "HTTPS 默认端口 443，HTTP 默认端口 80。"),
                new(Guid.NewGuid(), QuestionType.ShortAnswer,
                    "简述你对幂等性（Idempotency）的理解，并举例说明 HTTP 中哪些方法是幂等的。",
                    new List<QuestionOption>(),
                    null,
                    "幂等性指同一操作执行一次与执行多次效果相同；GET/PUT/DELETE 是幂等的，POST 不是。"),
            };

            foreach (var question in questions)
            {
                await _questionRepository.InsertAsync(question, autoSave: true);
            }

            var quiz = new Quiz(Guid.NewGuid(), SeedQuizName, "覆盖单选/多选/判断/简答四种题型的示例试卷", null);
            quiz.SetQuestions(questions.Select(q => new QuizQuestion(Guid.NewGuid(), q.Id, 0)).ToList());
            await _quizRepository.InsertAsync(quiz, autoSave: true);
        }
    }
}

/// <summary>宿主 --migrate-database 管道接入（仅 Development 环境执行）。</summary>
public class ClassroomDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly ClassroomDataSeeder _seeder;
    private readonly MedicalExamTestDataSeeder _medicalExamTestDataSeeder;
    private readonly Microsoft.Extensions.Hosting.IHostEnvironment _environment;

    public ClassroomDataSeedContributor(
        ClassroomDataSeeder seeder,
        MedicalExamTestDataSeeder medicalExamTestDataSeeder,
        Microsoft.Extensions.Hosting.IHostEnvironment environment)
    {
        _seeder = seeder;
        _medicalExamTestDataSeeder = medicalExamTestDataSeeder;
        _environment = environment;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        // 测试数据仅限开发环境（与项目级种子安全约定一致）
        if (_environment.IsDevelopment())
        {
            await _seeder.SeedAsync();
            await _medicalExamTestDataSeeder.SeedAsync();
        }
    }
}
