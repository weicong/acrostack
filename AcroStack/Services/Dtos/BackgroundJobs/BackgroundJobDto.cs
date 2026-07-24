using System;

namespace AcroStack.Services.Dtos.BackgroundJobs;

public class BackgroundJobDto
{
    public Guid Id { get; set; }
    public string? JobName { get; set; }
    public string? JobArgs { get; set; }
    public short TryCount { get; set; }
    public DateTime CreationTime { get; set; }
    public DateTime NextTryTime { get; set; }
    public DateTime? LastTryTime { get; set; }
    public bool IsAbandoned { get; set; }
}
