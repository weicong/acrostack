using System;
using System.Collections.Generic;

namespace AcroStack.AuditLogging;

/// <summary>
/// Input for the audit log statistics endpoint. Filters the aggregation to
/// the given time range and limits the top-N lists.
/// </summary>
public class GetAuditLogStatisticsInput
{
    public DateTime? StartTime { get; set; }
    public DateTime? EndTime { get; set; }

    /// <summary>
    /// Maximum number of entries to return in the TopSlowUrls and
    /// TopFrequentUrls lists. Default 10.
    /// </summary>
    public int TopCount { get; set; } = 10;
}

/// <summary>
/// Aggregated statistics over a set of audit logs. Mirrors ABP Commercial
/// AuditLogging Pro's statistics endpoint.
/// </summary>
public class AuditLogStatisticsDto
{
    public long TotalRequestCount { get; set; }
    public double AverageExecutionDuration { get; set; }
    public int MaxExecutionDuration { get; set; }
    public int MinExecutionDuration { get; set; }
    public long ErrorCount { get; set; }
    public List<UrlStatisticDto> TopSlowUrls { get; set; } = new();
    public List<UrlStatisticDto> TopFrequentUrls { get; set; } = new();
    public Dictionary<string, int> HttpRequestMethodCounts { get; set; } = new();
}

/// <summary>
/// Per-URL aggregation: how many requests hit this URL, average and max
/// execution duration.
/// </summary>
public class UrlStatisticDto
{
    public string? Url { get; set; }
    public int Count { get; set; }
    public double AverageExecutionDuration { get; set; }
    public int MaxExecutionDuration { get; set; }
}
