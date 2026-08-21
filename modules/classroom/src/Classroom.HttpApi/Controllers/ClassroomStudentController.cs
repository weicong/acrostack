using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Classroom;

/// <summary>
/// 学员端点（提示词十四节）：快照恢复 + 答案提交。
/// 认证使用课堂短期令牌（ClassroomToken 方案）；身份一律从令牌解析，
/// 不信任请求体中的 SessionId / ParticipantId。
/// </summary>
[Authorize(AuthenticationSchemes = ClassroomHttpApiModule.ClassroomTokenScheme)]
[Route("api/student/class-sessions")]
public class ClassroomStudentController : AbpController
{
    private readonly IStudentAppService _studentAppService;

    public ClassroomStudentController(IStudentAppService studentAppService)
    {
        _studentAppService = studentAppService;
    }

    /// <summary>学员快照：断线重连 / 刷新页面 / 版本跳跃时恢复状态。</summary>
    [HttpGet("{id}/snapshot")]
    public Task<StudentSnapshotDto> GetSnapshotAsync(Guid id)
        => _studentAppService.GetSnapshotAsync(id);

    /// <summary>本人本课堂答题记录（逐题回顾；正确答案仅公布后下发）。</summary>
    [HttpGet("{id}/my-answers")]
    public Task<StudentAnswerHistoryDto> GetMyAnswerHistoryAsync(Guid id)
        => _studentAppService.GetMyAnswerHistoryAsync(id);

    /// <summary>提交或修改答案（幂等：相同 RequestId 返回首次处理结果）。</summary>
    [HttpPost("{id}/answers")]
    public Task<SubmitAnswerResultDto> SubmitAnswerAsync(Guid id, [FromBody] SubmitAnswerInputDto input)
        => _studentAppService.SubmitAnswerAsync(id, input);
}
