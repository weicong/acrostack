/**
 * 学习小组统计卡片：按加入顺序自动分组（每组 5 人，学习小组1/2…依次编号），
 * 每组展示在线、当前题提交进度与正确率（已判分口径）。
 * 数据随 DashboardUpdated 合并推送整卡刷新，无需单独接口。
 */
import { Card, Text, Title3, mergeClasses } from "@fluentui/react-components";
import { PeopleTeam20Regular } from "@fluentui/react-icons";
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

export function GroupStatisticsCard({
  dashboard,
}: {
  dashboard: ClassroomDtosDashboardDto | null;
}) {
  const styles = useTeacherDashboardStyles();
  const groups = dashboard?.groupStatistics ?? [];

  return (
    <Card className={mergeClasses(styles.card, styles.cardDelay2)}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleRow}>
          <Title3 as="h2">学习小组</Title3>
          {groups.length > 0 && (
            <Text size={200} className={styles.statLabel}>
              {groups.length} 组
            </Text>
          )}
        </div>
        <Text size={200} className={styles.statLabel}>
          每组 5 人，按加入顺序分配
        </Text>
      </div>
      {groups.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIconWrap}>
            <PeopleTeam20Regular className={styles.emptyIcon} />
          </span>
          <Text size={300}>还没有学习小组，学员加入后自动分组</Text>
        </div>
      ) : (
        <div className={styles.groupList}>
          {groups.map((g) => {
            const memberCount = g.memberCount ?? 0;
            const submittedCount = g.submittedCount ?? 0;
            const onlineCount = g.onlineCount ?? 0;
            const pct = memberCount > 0 ? Math.round((submittedCount / memberCount) * 100) : 0;
            return (
              <div key={g.groupIndex} className={styles.groupRow}>
                <Text size={300} weight="semibold" className={styles.groupName}>
                  {`学习小组${g.groupIndex}`}
                </Text>
                <Text size={200} className={styles.statLabel}>
                  {`${onlineCount}/${memberCount} 在线`}
                </Text>
                <div className={styles.groupBarTrack}>
                  <div className={styles.groupBar} style={{ width: `${pct}%` }} />
                </div>
                <Text size={300} className={styles.groupSubmitted}>
                  {`${submittedCount}/${memberCount} 已提交`}
                </Text>
                <Text
                  size={300}
                  className={mergeClasses(
                    styles.groupRate,
                    g.correctRate != null && styles.groupRateValue,
                  )}
                >
                  {g.correctRate != null ? `${Math.round(g.correctRate * 100)}%` : "—"}
                </Text>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
