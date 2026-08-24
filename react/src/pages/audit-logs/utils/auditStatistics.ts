/**
 * 审计日志统计面板（AuditLogStatisticsPanel）的数据加工助手。
 */
import type { AcroStackAuditLoggingAuditLogStatisticsDto as AuditLogStatisticsDto } from "@/api/models/acroStack/auditLogging/AuditLogStatisticsDto";

/** 取当日开始时刻（00:00:00.000）。 */
export function toStartOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** 取当日结束时刻（23:59:59.999）。 */
export function toEndOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

/** 默认筛选起点：7 天前的当日开始时刻。 */
export function defaultStartDate(): Date {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return toStartOfDay(d);
}

/** 默认筛选终点：今天的当日结束时刻。 */
export function defaultEndDate(): Date {
  return toEndOfDay(new Date());
}

/** 格式化耗时（毫秒），空值显示 "-"。 */
export function formatDuration(ms: number | undefined | null): string {
  if (ms === undefined || ms === null) return "-";
  return `${ms} ms`;
}

/** 格式化 bigint/number 计数（千分位），空值显示 "0"。 */
export function formatBigint(value: bigint | number | undefined | null): string {
  if (value === undefined || value === null) return "0";
  if (typeof value === "bigint") return value.toLocaleString();
  return value.toLocaleString();
}

/** HTTP 方法映射为徽标颜色。 */
export function methodBadgeColor(
  method: string,
): "success" | "brand" | "warning" | "danger" | "informative" {
  switch (method) {
    case "GET":
      return "success";
    case "POST":
      return "brand";
    case "PUT":
    case "PATCH":
      return "warning";
    case "DELETE":
      return "danger";
    default:
      return "informative";
  }
}

/** 从统计结果中提取按次数降序排列的 HTTP 方法分布条目。 */
export function sortHttpMethodEntries(stats?: AuditLogStatisticsDto) {
  const map = stats?.httpRequestMethodCounts ?? {};
  return Object.entries(map)
    .filter(([method]) => Boolean(method))
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0));
}
