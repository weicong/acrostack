namespace Classroom;

/// <summary>Classroom 模块常量（字段长度、课堂码长度、令牌有效期等）。</summary>
public static class ClassroomConsts
{
    /** 题干 / 解析 / 答案文本长度上限 */
    public const int MaxStemLength = 2000;
    public const int MaxExplanationLength = 4000;
    public const int MaxAnswerContentLength = 4000;
    public const int MaxOptionTextLength = 500;
    public const int MaxOptionCount = 8;

    /** 学员昵称 / 学号 */
    public const int MaxNicknameLength = 32;
    public const int MaxStudentNumberLength = 32;

    /** 试卷 */
    public const int MaxQuizNameLength = 128;
    public const int MaxQuizDescriptionLength = 500;

    /** 课堂码：6 位大写字母 + 数字，排除易混淆字符 */
    public const int ClassroomCodeLength = 6;

    /** 学员课堂令牌有效期（小时）——覆盖一次完整课堂 */
    public const int StudentTokenValidHours = 4;

    /** 投屏令牌有效期（小时）——大屏长时间挂着 */
    public const int PresentationTokenValidHours = 12;

    /** 课堂码有效期（小时）：课堂结束后课堂码立即失效；此值限制未开始课堂的码有效期 */
    public const int ClassroomCodeValidHours = 24;

    /** 教师端 DashboardUpdated 合并推送窗口（毫秒） */
    public const int DashboardMergeWindowMs = 300;

    /** 学员被视为离线前允许的 LastSeen 心跳间隔（秒） */
    public const int OnlineHeartbeatTimeoutSeconds = 60;

    /** 每学员每题的提交频率限制（次/分钟），防止刷提交 */
    public const int MaxSubmitsPerMinute = 30;

    /** 加入课堂接口每 IP 限流（次/分钟）。需容纳单课堂约 100 名学员共用同一出口 IP（校园 WiFi）集中加入，并留出重试/重连余量 */
    public const int MaxJoinsPerMinute = 200;

    /** 学习小组默认每组人数：加入时按当时人数顺序分配，学习小组1、学习小组2 依次编号 */
    public const int DefaultGroupSize = 5;
}
