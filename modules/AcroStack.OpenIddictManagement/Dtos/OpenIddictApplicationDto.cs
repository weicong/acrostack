using System;
using System.Collections.Generic;

namespace AcroStack.OpenIddictManagement;

public class OpenIddictApplicationDto
{
    public Guid Id { get; set; }
    public string? ClientId { get; set; }
    public string? DisplayName { get; set; }
    public string? ClientType { get; set; }
    public string? ConsentType { get; set; }

    /// <summary>
    /// 仅指示是否已配置客户端密钥，不回传密钥本体（密钥在数据库中为哈希值，
    /// 不应通过 API 泄露）。
    /// </summary>
    public bool HasClientSecret { get; set; }

    public List<string> Permissions { get; set; } = new();
    public List<string> RedirectUris { get; set; } = new();
    public List<string> PostLogoutRedirectUris { get; set; } = new();
    public List<string> Requirements { get; set; } = new();
    public DateTime CreationTime { get; set; }
}
