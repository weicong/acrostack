using System;

namespace AcroStack.FileManagement;

/// <summary>
/// Input for creating a share link for a file. Both fields are
/// optional: when omitted, the link never expires / has no download cap.
/// </summary>
public class CreateShareLinkDto
{
    public DateTime? ExpirationTime { get; set; }

    public int? MaxDownloadCount { get; set; }
}
