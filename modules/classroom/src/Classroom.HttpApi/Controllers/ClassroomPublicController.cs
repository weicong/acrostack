using System.Threading.Tasks;
using Classroom.Dtos;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Classroom;

/// <summary>
/// 公开端点（提示词十四节）：学员通过课堂码加入，无需登录。
/// 课堂码限流由应用服务内实现（每 IP 每分钟 MaxJoinsPerMinute 次）。
/// </summary>
[Route("api/public/class-sessions")]
public class ClassroomPublicController : AbpController
{
    private readonly IClassroomPublicAppService _publicAppService;

    public ClassroomPublicController(IClassroomPublicAppService publicAppService)
    {
        _publicAppService = publicAppService;
    }

    /// <summary>加入课堂：校验课堂码 -> 创建 Participant -> 签发课堂范围短期令牌。</summary>
    [HttpPost("join")]
    public Task<JoinResultDto> JoinAsync([FromBody] JoinClassroomInputDto input)
        => _publicAppService.JoinAsync(input, HttpContext.Connection.RemoteIpAddress?.ToString());
}
