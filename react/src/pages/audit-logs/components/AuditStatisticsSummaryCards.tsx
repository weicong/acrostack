/**
 * 统计概览卡片网格：总请求数 / 平均耗时 / 最大、最小持续时间 / 错误数。
 */
import { Card, Text } from "@fluentui/react-components";
import type { AcroStackAuditLoggingAuditLogStatisticsDto as AuditLogStatisticsDto } from "@/api/models/acroStack/auditLogging/AuditLogStatisticsDto";
import { formatBigint, formatDuration } from "../utils/auditStatistics";
import { useAuditStatisticsStyles } from "../styles/auditStatistics";

interface AuditStatisticsSummaryCardsProps {
  /** 统计查询结果。 */
  stats: AuditLogStatisticsDto;
}

export function AuditStatisticsSummaryCards({ stats }: AuditStatisticsSummaryCardsProps) {
  const styles = useAuditStatisticsStyles();

  return (
    <div className={styles.statsGrid}>
      <Card className={styles.statCard}>
        <Text className={styles.statLabel}>{"总请求数"}</Text>
        <Text className={styles.statValue}>{formatBigint(stats.totalRequestCount)}</Text>
      </Card>
      <Card className={styles.statCard}>
        <Text className={styles.statLabel}>{"平均耗时"}</Text>
        <Text className={styles.statValue}>{formatDuration(stats.averageExecutionDuration)}</Text>
      </Card>
      <Card className={styles.statCard}>
        <Text className={styles.statLabel}>{"最大持续时间"}</Text>
        <Text className={styles.statValue}>{formatDuration(stats.maxExecutionDuration)}</Text>
      </Card>
      <Card className={styles.statCard}>
        <Text className={styles.statLabel}>{"分钟持续时间"}</Text>
        <Text className={styles.statValue}>{formatDuration(stats.minExecutionDuration)}</Text>
      </Card>
      <Card className={styles.statCard}>
        <Text className={styles.statLabel}>{"错误数"}</Text>
        <Text className={styles.statValue}>{formatBigint(stats.errorCount)}</Text>
      </Card>
    </div>
  );
}
