namespace AcroStack.Impersonation;

public static class ImpersonationPermissions
{
    /// <summary>发起用户模拟。字符串与 ABP 官方（Identity Pro）一致。</summary>
    public const string UserImpersonation = "AbpIdentity.Users.Impersonation";

    /// <summary>查看/撤销模拟会话记录。</summary>
    public const string ManageImpersonationSessions = "AbpIdentity.Users.ManageImpersonationSessions";
}
