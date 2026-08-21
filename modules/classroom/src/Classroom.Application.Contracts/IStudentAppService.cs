using System;
using Volo.Abp.Application.Services;
using Classroom.Dtos;

namespace Classroom;

/// <summary>公开端点（无需认证）：学员通过课堂码加入。</summary>
public interface IClassroomPublicAppService : IApplicationService
{
    /// <summary>
    /// 加入课堂：校验课堂码有效性 -> 创建 Participant -> 签发课堂范围短期令牌。
    /// 限流：每 IP 每分钟 MaxJoinsPerMinute 次（clientIp 由控制器层传入）。
    /// </summary>
    Task<JoinResultDto> JoinAsync(JoinClassroomInputDto input, string? clientIp = null);
}

/// <summary>学员端（课堂令牌认证；ParticipantId 一律从令牌解析，不信任请求体）。</summary>
public interface IStudentAppService : IApplicationService
{
    /// <summary>学员快照：断线重连 / 刷新页面 / 版本跳跃时恢复状态。</summary>
    Task<StudentSnapshotDto> GetSnapshotAsync(Guid sessionId);

    /// <summary>本人本课堂答题记录（逐题：我的答案/修订/公布后的对错与解析）。</summary>
    Task<StudentAnswerHistoryDto> GetMyAnswerHistoryAsync(Guid sessionId);

    /// <summary>提交或修改答案（幂等：相同 RequestId 返回首次结果）。</summary>
    Task<SubmitAnswerResultDto> SubmitAnswerAsync(Guid sessionId, SubmitAnswerInputDto input);
}

/// <summary>投屏端（只读投屏令牌；仅匿名数据）。</summary>
public interface IPresentationAppService : IApplicationService
{
    Task<PresentationSnapshotDto> GetSnapshotAsync(Guid sessionId);
}
