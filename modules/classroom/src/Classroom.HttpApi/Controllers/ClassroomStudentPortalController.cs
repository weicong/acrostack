using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Classroom;

/// <summary>
/// 学员门户端点：浏览加入过的课堂与答题记录、维护本人资料。
/// 认证使用学员门户长期令牌（ClassroomToken 方案，role=studentportal）；
/// 身份（StudentProfileId）一律从令牌解析，不信任请求体。
/// </summary>
[Authorize(AuthenticationSchemes = ClassroomHttpApiModule.ClassroomTokenScheme)]
[Route("api/student-portal")]
public class ClassroomStudentPortalController : AbpController
{
    private readonly IStudentPortalAppService _portalAppService;

    public ClassroomStudentPortalController(IStudentPortalAppService portalAppService)
    {
        _portalAppService = portalAppService;
    }

    /// <summary>本人资料。</summary>
    [HttpGet("me")]
    public Task<StudentProfileDto> GetMyProfileAsync()
        => _portalAppService.GetMyProfileAsync();

    /// <summary>更新本人资料（姓名/单位/职务；手机号不可改）。</summary>
    [HttpPut("me")]
    public Task<StudentProfileDto> UpdateMyProfileAsync([FromBody] UpdateStudentProfileInputDto input)
        => _portalAppService.UpdateMyProfileAsync(input);

    /// <summary>加入过的课堂列表（进行中的排前）。</summary>
    [HttpGet("my/classrooms")]
    public Task<System.Collections.Generic.List<MyClassroomItemDto>> GetMyClassroomsAsync()
        => _portalAppService.GetMyClassroomsAsync();

    /// <summary>本人某课堂的答题记录（逐题回顾；正确答案仅公布后下发）。</summary>
    [HttpGet("my/classrooms/{sessionId}/answers")]
    public Task<StudentAnswerHistoryDto> GetMyClassroomAnswersAsync(Guid sessionId)
        => _portalAppService.GetMyClassroomAnswersAsync(sessionId);

    /// <summary>从门户进入课堂：校验会员关系后签发课堂短期令牌。</summary>
    [HttpPost("my/classrooms/{sessionId}/resume")]
    public Task<ResumeClassroomResultDto> ResumeClassroomAsync(Guid sessionId)
        => _portalAppService.ResumeClassroomAsync(sessionId);
}
