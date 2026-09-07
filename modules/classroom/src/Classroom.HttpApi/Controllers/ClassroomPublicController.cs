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

    /// <summary>探测加入：按手机号判断是否已有学员档案（决定是否展示 单位/职务 表单）。</summary>
    [HttpPost("pre-join")]
    public Task<PreJoinResultDto> PreJoinAsync([FromBody] PreJoinClassroomInputDto input)
        => _publicAppService.PreJoinAsync(input, HttpContext.Connection.RemoteIpAddress?.ToString());

    /// <summary>加入课堂：手机号识别档案 -> 建档/复用 -> 签发课堂令牌 + 学员门户令牌。</summary>
    [HttpPost("join")]
    public Task<JoinResultDto> JoinAsync([FromBody] JoinClassroomInputDto input)
        => _publicAppService.JoinAsync(input, HttpContext.Connection.RemoteIpAddress?.ToString());
}
