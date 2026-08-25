/**
 * 审计日志统计面板（AuditLogStatisticsPanel）。
 *
 * 本文件只负责编排：日期范围状态、统计数据查询与各分区组装；
 * 筛选栏与各分区子组件见 components/，样式见 styles/auditStatistics，数据加工助手见 utils/auditStatistics。
 */
import { useMemo, useState } from "react";
import { Spinner, Text } from "@fluentui/react-components";
import { useQuery } from "@tanstack/react-query";
import {
  auditLogGetStatisticsQueryOptions,
  auditLogGetStatisticsQueryKey,
} from "@/api/hooks/auditLog/useAuditLogGetStatistics";
import type { AcroStackAuditLoggingAuditLogStatisticsDto as AuditLogStatisticsDto } from "@/api/models/acroStack/auditLogging/AuditLogStatisticsDto";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { AuditStatisticsFilterBar, type AuditLogDateRange } from "./AuditStatisticsFilterBar";
import { AuditStatisticsSummaryCards } from "./AuditStatisticsSummaryCards";
import { AuditHttpMethodDistribution } from "./AuditHttpMethodDistribution";
import { AuditUrlStatisticListCard } from "./AuditUrlStatisticListCard";
import { useAuditStatisticsStyles } from "../styles/auditStatistics";
import { defaultEndDate, defaultStartDate } from "../utils/auditStatistics";

interface AuditLogStatisticsPanelProps {
  /** 预留：按租户/键范围调整返回条数上限；当前未使用。 */
  defaultTopCount?: number;
}

export function AuditLogStatisticsPanel({ defaultTopCount = 10 }: AuditLogStatisticsPanelProps) {
  const styles = useAuditStatisticsStyles();

  // 日期范围（ISO 时间串）：初始默认最近 7 天，与筛选栏的本地初始值保持一致
  const [dateRange, setDateRange] = useState<AuditLogDateRange>(() => ({
    StartTime: defaultStartDate().toISOString(),
    EndTime: defaultEndDate().toISOString(),
  }));

  const params = useMemo(
    () => ({
      query: {
        StartTime: dateRange.StartTime,
        EndTime: dateRange.EndTime,
        TopCount: defaultTopCount,
      },
    }),
    [dateRange, defaultTopCount],
  );

  // 使用生成的 queryOptions 工厂，保证查询缓存键与 useAuditLogGetStatistics 一致以便共享失效
  const query = useQuery({
    ...auditLogGetStatisticsQueryOptions(params),
    // 筛选条件变化时重新拉取；默认 staleTime 即可
    refetchOnMount: true,
  });

  const stats = query.data as AuditLogStatisticsDto | undefined;

  return (
    <div className={styles.root}>
      <AuditStatisticsFilterBar
        onRangeChange={setDateRange}
        onRefresh={() => query.refetch()}
        refreshing={query.isFetching}
      />

      {query.isLoading && <Spinner label={"加载中..."} />}
      {query.isError && (
        <Text className={styles.errorState}>
          {query.error ? extractAbpErrorMessage(query.error) : "内部服务器错误"}
        </Text>
      )}

      {stats && (
        <>
          <AuditStatisticsSummaryCards stats={stats} />
          <AuditHttpMethodDistribution stats={stats} />
          <AuditUrlStatisticListCard title={"最慢 URL"} urls={stats.topSlowUrls} />
          <AuditUrlStatisticListCard title={"最频繁 URL"} urls={stats.topFrequentUrls} />
        </>
      )}
    </div>
  );
}

// 为需要在租户切换等场景失效统计查询的调用方保留再导出
export { auditLogGetStatisticsQueryKey };
