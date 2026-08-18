using System;
using Volo.Abp.BackgroundJobs;

namespace AcroStack.BackgroundJobs;

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

    /// <summary>任务完成时间（未完成为 null）。</summary>
    public DateTime? CompletionTime { get; set; }

    /// <summary>产生任务的应用名称。</summary>
    public string? ApplicationName { get; set; }

    /// <summary>任务优先级（值越大越优先）。</summary>
    public BackgroundJobPriority? Priority { get; set; }
}
