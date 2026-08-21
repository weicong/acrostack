namespace Classroom.Options;

/// <summary>
/// Classroom 模块配置（appsettings "Classroom" 节）。
/// TokenSigningKey 属敏感配置：生产环境必须放在 appsettings.secrets.json 或环境变量。
/// </summary>
public class ClassroomOptions
{
    /// <summary>课堂短期令牌 HMAC 签名密钥（>= 32 字符）。</summary>
    public string TokenSigningKey { get; set; } = "change-me-in-production-classroom-signing-key!";

    public string TokenIssuer { get; set; } = "Classroom";

    public string TokenAudience { get; set; } = "ClassroomToken";

    /// <summary>前端基础地址，用于拼接课堂加入链接（如 http://localhost:5173）。</summary>
    public string? FrontendBaseUrl { get; set; }

    /// <summary>合并推送窗口（毫秒），默认 ClassroomConsts.DashboardMergeWindowMs。</summary>
    public int DashboardMergeWindowMs { get; set; } = ClassroomConsts.DashboardMergeWindowMs;

    /// <summary>统计缓存 TTL（秒）。</summary>
    public int StatisticsCacheSeconds { get; set; } = 10;
}
