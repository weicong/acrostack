using System;
using System.Threading.Tasks;
using Classroom.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Classroom;

/// <summary>
/// 投屏端点（提示词十四节）：只读匿名快照。
/// 认证使用只读投屏令牌；响应严禁包含学员姓名、学号、ParticipantId 与个人答案。
/// </summary>
[Authorize(AuthenticationSchemes = ClassroomHttpApiModule.ClassroomTokenScheme)]
[Route("api/presentation/class-sessions")]
public class ClassroomPresentationController : AbpController
{
    private readonly IPresentationAppService _presentationAppService;

    public ClassroomPresentationController(IPresentationAppService presentationAppService)
    {
        _presentationAppService = presentationAppService;
    }

    /// <summary>投屏快照：当前题、倒计时（EndsAt/ServerTime）、匿名统计。</summary>
    [HttpGet("{id}/snapshot")]
    public Task<PresentationSnapshotDto> GetSnapshotAsync(Guid id)
        => _presentationAppService.GetSnapshotAsync(id);
}
