namespace AcroStack.OpenIddictManagement;

/// <summary>
/// OpenIddictManagement 模块结构化错误码。本地化文本见 Localization/OpenIddictManagement/{en,zh-Hans}.json，
/// 通过 OpenIddictManagementModule 中 MapCodeNamespace("OpenIddictManagement", ...) 映射到 OpenIddictManagementResource。
/// </summary>
public static class OpenIddictManagementErrorCodes
{
    public const string InvalidRedirectUri = "OpenIddictManagement:InvalidRedirectUri";
    public const string InvalidPermission = "OpenIddictManagement:InvalidPermission";
    public const string InvalidClientType = "OpenIddictManagement:InvalidClientType";
    public const string InvalidConsentType = "OpenIddictManagement:InvalidConsentType";
    public const string TokenRevokeFailed = "OpenIddictManagement:TokenRevokeFailed";
    public const string AuthorizationRevokeFailed = "OpenIddictManagement:AuthorizationRevokeFailed";
}
