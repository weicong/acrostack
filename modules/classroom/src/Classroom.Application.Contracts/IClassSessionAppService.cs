using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Classroom.Dtos;

namespace Classroom;

/// <summary>
/// 教师课堂控制流（提示词七节：可靠业务命令走 HTTP；服务端再次校验状态与权限）。
/// 路径由 ABP Auto API 生成 /api/app/class-session/...。
/// </summary>
public interface IClassSessionAppService : IApplicationService
{
    /// <summary>从一份试卷创建课堂场次（生成课堂码与加入地址）。</summary>
    Task<ClassSessionDto> CreateAsync(CreateClassSessionDto input);

    Task<ClassSessionDto> GetAsync(Guid id);

    Task<PagedResultDto<ClassSessionDto>> GetListAsync(PagedAndSortedResultRequestDto input);

    /// <summary>开始课堂：Preparing -> Waiting。</summary>
    Task<ClassSessionDto> StartAsync(Guid id);

    /// <summary>开放指定题目（Waiting/Explaining -> Answering）。</summary>
    Task<ClassSessionDto> StartQuestionAsync(Guid id, Guid questionId, OpenQuestionDto input);

    /// <summary>截止当前题（Answering -> Explaining）。</summary>
    Task<ClassSessionDto> CloseQuestionAsync(Guid id, Guid questionId);

    /// <summary>公布正确答案与匿名统计（题目 -> AnswerPublished）。</summary>
    Task<ClassSessionDto> PublishAnswerAsync(Guid id, Guid questionId);

    /// <summary>切换下一题并开放（Explaining/Waiting -> Answering）。</summary>
    Task<ClassSessionDto> NextQuestionAsync(Guid id, OpenQuestionDto input);

    /// <summary>结束课堂（-> Finished；课堂码失效）。</summary>
    Task<ClassSessionDto> FinishAsync(Guid id);

    /// <summary>重新开始课堂：Finished -> Preparing，重置所有题目状态。</summary>
    Task<ClassSessionDto> RestartAsync(Guid id);

    /// <summary>驾驶舱数据（教师权限）。</summary>
    Task<DashboardDto> GetDashboardAsync(Guid id);

    /// <summary>随机点名：从（在线）学员中随机抽取一位现场回答，并向全体组广播点名事件。</summary>
    Task<PickedParticipantDto> PickRandomParticipantAsync(Guid id, PickRandomParticipantDto input);

    /// <summary>教师快照（断线重连恢复）。</summary>
    Task<TeacherSnapshotDto> GetSnapshotAsync(Guid id);

    /// <summary>生成投屏令牌（只读、短期、匿名）。</summary>
    Task<PresentationTokenResultDto> CreatePresentationTokenAsync(Guid id);
}

public class PresentationTokenResultDto
{
    public string AccessToken { get; set; } = default!;

    public int ExpiresInSeconds { get; set; }

    public Guid SessionId { get; set; }
}
