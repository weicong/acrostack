/**
 * HTTP 方法分布区块：标题 + 按次数降序的方法徽标列表（内层为彩色方法小徽标）。
 */
import { useMemo } from "react";
import { Badge, Text } from "@fluentui/react-components";
import type { AcroStackAuditLoggingAuditLogStatisticsDto as AuditLogStatisticsDto } from "@/api/models/acroStack/auditLogging/AuditLogStatisticsDto";
import { methodBadgeColor, sortHttpMethodEntries } from "../utils/auditStatistics";
import { useAuditStatisticsStyles } from "../styles/auditStatistics";

/** HTTP 方法彩色小徽标。 */
function HttpMethodBadge({ method }: { method: string }) {
  return (
    <Badge appearance="filled" color={methodBadgeColor(method)} size="small">
      {method}
    </Badge>
  );
}

interface AuditHttpMethodDistributionProps {
  /** 统计查询结果。 */
  stats: AuditLogStatisticsDto;
}

export function AuditHttpMethodDistribution({ stats }: AuditHttpMethodDistributionProps) {
  const styles = useAuditStatisticsStyles();
  const entries = useMemo(() => sortHttpMethodEntries(stats), [stats]);

  return (
    <>
      <Text as="h3" className={styles.sectionTitle}>
        {"HTTP 方法分布"}
      </Text>
      {entries.length === 0 ? (
        <Text size={200}>{"暂无记录"}</Text>
      ) : (
        <div className={styles.methodBadges}>
          {entries.map(([method, count]) => (
            <Badge key={method} appearance="outline" size="large">
              <HttpMethodBadge method={method} /> {String(count)}
            </Badge>
          ))}
        </div>
      )}
    </>
  );
}
