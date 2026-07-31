using System;

namespace AcroStack.Services.Dtos.Chat;

/// <summary>Paged input for fetching conversation message history.</summary>
public class GetMessageListInput
{
    public Guid TargetUserId { get; set; }

    public int SkipCount { get; set; }

    public int MaxResultCount { get; set; } = 50;
}
