/**
 * 实时统计卡片：总览指标 + 选项分布条形图。
 */
import { Card, Text, Title3 } from "@fluentui/react-components";
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

interface LiveStatisticsCardProps {
  dashboard: ClassroomDtosDashboardDto | null;
  /** 当前题视图：用于把选项 key 映射为选项文本。 */
  question: ClassroomDtosQuestionViewDto | null;
}

export function LiveStatisticsCard({ dashboard, question }: LiveStatisticsCardProps) {
  const styles = useTeacherDashboardStyles();
  const statistics = dashboard?.statistics ?? null;
  const optionCounts = statistics?.optionCounts ?? null;
  const totalSubmitted = optionCounts ? Object.values(optionCounts).reduce((a, b) => a + b, 0) : 0;
  const notSubmitted = statistics
    ? (statistics.notStartedCount ?? 0) + (statistics.answeringCount ?? 0)
    : 0;

  const optionLabelMap = new Map<string, string>();
  question?.options?.forEach((opt) => optionLabelMap.set(opt.key ?? "", opt.text ?? ""));

  const statItems: Array<{ value: string; label: string }> = [
    { value: String(dashboard?.onlineCount ?? 0), label: "在线人数" },
    { value: String(dashboard?.totalParticipants ?? 0), label: "参与总人数" },
    { value: String(statistics?.notStartedCount ?? 0), label: "未开始" },
    { value: String(statistics?.answeringCount ?? 0), label: "作答中" },
    { value: String(statistics?.submittedCount ?? 0), label: "已提交" },
    { value: String(notSubmitted), label: "截止未交" },
    { value: `${Math.round((statistics?.completionRate ?? 0) * 100)}%`, label: "完成率" },
    {
      value: statistics?.correctRate != null ? `${Math.round(statistics.correctRate * 100)}%` : "—",
      label: "正确率",
    },
    {
      value:
        statistics?.averageAnswerSeconds != null
          ? `${Math.round(statistics.averageAnswerSeconds)}s`
          : "—",
      label: "平均用时",
    },
  ];

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Title3>实时统计</Title3>
        {dashboard?.lastStatisticsUpdatedAt && (
          <Text size={200} className={styles.statLabel}>
            更新于 {new Date(dashboard.lastStatisticsUpdatedAt).toLocaleTimeString()}
          </Text>
        )}
      </div>
      <div className={styles.statGrid}>
        {statItems.map((item) => (
          <div key={item.label} className={styles.statItem}>
            <span className={styles.statValue}>{item.value}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      {optionCounts && (
        <div className={styles.distribution}>
          <Text weight="semibold">选项分布（{totalSubmitted} 人已提交）</Text>
          {Object.entries(optionCounts).map(([key, count]) => (
            <div key={key} className={styles.statRow}>
              <Text style={{ width: "3em" }}>
                {key}. {optionLabelMap.get(key) ?? ""}
              </Text>
              <div
                className={styles.statBar}
                style={{
                  width: `${totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%`,
                  minWidth: count > 0 ? "12px" : 0,
                }}
              />
              <Text size={300}>
                {count} 人（{totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}
                %）
              </Text>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
