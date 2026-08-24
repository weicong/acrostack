/**
 * URL 统计列表卡片：标题 + 排名行（URL、平均耗时、次数）。
 * 供"最慢 URL"与"最频繁 URL"两个分区复用。
 */
import { Card, Text } from "@fluentui/react-components";
import type { AcroStackAuditLoggingUrlStatisticDto as UrlStatisticDto } from "@/api/models/acroStack/auditLogging/UrlStatisticDto";
import { formatDuration } from "../utils/auditStatistics";
import { useAuditStatisticsStyles } from "../styles/auditStatistics";

/** 单行 URL 统计：排名、URL、平均耗时与次数。 */
function UrlStatisticRow({ stat, rank }: { stat: UrlStatisticDto; rank: number }) {
  const styles = useAuditStatisticsStyles();
  return (
    <div className={styles.urlRow}>
      <Text className={styles.urlText} title={stat.url ?? undefined}>
        {rank}. {stat.url || "-"}
      </Text>
      <Text size={200}>{formatDuration(stat.averageExecutionDuration)}</Text>
      <Text size={200}>×{stat.count ?? 0}</Text>
    </div>
  );
}

interface AuditUrlStatisticListCardProps {
  /** 分区标题。 */
  title: string;
  /** URL 统计条目。 */
  urls?: UrlStatisticDto[] | null;
}

export function AuditUrlStatisticListCard({ title, urls }: AuditUrlStatisticListCardProps) {
  const styles = useAuditStatisticsStyles();

  return (
    <>
      <Text as="h3" className={styles.sectionTitle}>
        {title}
      </Text>
      <Card className={styles.listCard}>
        {urls && urls.length > 0 ? (
          urls.map((stat, idx) => (
            <UrlStatisticRow key={`${stat.url}-${idx}`} stat={stat} rank={idx + 1} />
          ))
        ) : (
          <Text size={200}>{"暂无记录"}</Text>
        )}
      </Card>
    </>
  );
}
