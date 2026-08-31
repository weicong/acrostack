using System.Threading.Tasks;
using Classroom.Realtime;

namespace Classroom;

/// <summary>
/// 强类型 SignalR 客户端契约（提示词八节：定义强类型 Hub Client 接口）。
/// 前端 @microsoft/signalr 的 .on(...) 方法名与此处方法名一致。
/// </summary>
public interface IClassroomClient
{
    /// <summary>课堂开始（全体组）。</summary>
    Task ClassroomStarted(ClassroomStartedEvent evt);

    /// <summary>题目开放（全体组；Question 不含正确答案）。</summary>
    Task QuestionOpened(QuestionOpenedEvent evt);

    /// <summary>题目截止（全体组）。</summary>
    Task QuestionClosed(QuestionClosedEvent evt);

    /// <summary>公布正确答案与解析（全体组；匿名统计随答案一并可见）。</summary>
    Task AnswerPublished(AnswerPublishedEvent evt);

    /// <summary>学员状态增量变化（仅教师组）。</summary>
    Task ParticipantChanged(ParticipantChangedEvent evt);

    /// <summary>课堂面板统计更新（仅教师组；合并窗口推送）。</summary>
    Task DashboardUpdated(DashboardUpdatedEvent evt);

    /// <summary>教师随机点名（全体组：教师高亮/投屏横幅/被选中学员提醒）。</summary>
    Task ParticipantPicked(ParticipantPickedEvent evt);

    /// <summary>课堂结束（全体组）。</summary>
    Task ClassroomEnded(ClassroomEndedEvent evt);
}
