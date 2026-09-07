using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classroom.Dtos;
using Volo.Abp.Application.Services;

namespace Classroom;

/// <summary>
/// 学员门户端（学员门户长期令牌认证；StudentProfileId 一律从令牌解析，不信任请求体）。
/// 浏览加入过的课堂与答题记录、维护本人资料；不承载课堂内实时答题（那走课堂短期令牌）。
/// </summary>
public interface IStudentPortalAppService : IApplicationService
{
    /// <summary>本人资料。</summary>
    Task<StudentProfileDto> GetMyProfileAsync();

    /// <summary>更新本人资料（姓名/单位/职务；手机号不可改）。</summary>
    Task<StudentProfileDto> UpdateMyProfileAsync(UpdateStudentProfileInputDto input);

    /// <summary>加入过的课堂列表（进行中的排前）。</summary>
    Task<List<MyClassroomItemDto>> GetMyClassroomsAsync();

    /// <summary>本人某课堂的答题记录（逐题回顾；正确答案仅公布后下发）。</summary>
    Task<StudentAnswerHistoryDto> GetMyClassroomAnswersAsync(Guid sessionId);

    /// <summary>从门户进入课堂：校验会员关系后签发课堂短期令牌（已结束课堂也允许，便于查看记录）。</summary>
    Task<ResumeClassroomResultDto> ResumeClassroomAsync(Guid sessionId);
}
