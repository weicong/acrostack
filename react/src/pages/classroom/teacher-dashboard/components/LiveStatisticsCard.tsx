/**
 * 实时统计卡片：主指标（在线人数 + 环形完成率）+ 次指标网格 + 选项分布条形图。
 */
import { Card, Text, Title3, mergeClasses } from "@fluentui/react-components";
import { CheckmarkCircle16Filled } from "@fluentui/react-icons";
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import { distributionKeyLabel, isCorrectDistributionKey } from "../../shared/utils/distribution";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

interface LiveStatisticsCardProps {
  dashboard: ClassroomDtosDashboardDto | null;
  /** 当前题视图：用于把选项 key 映射为选项文本。 */
  question: ClassroomDtosQuestionViewDto | null;
  /** 公布答案后的正确选项 key（用于在分布条上高亮正确项）。 */
  correctAnswer?: string | null;
}

/** 环形完成率（SVG，深色底上用白色系高对比，带过渡动画）。 */
function ProgressRing({ value, size = 72 }: { value: number; size?: number }) {
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, value));
  const offset = circumference * (1 - clamped);
  const center = size / 2;
  return (
    <svg width={size} height={size} aria-label={`完成率 ${Math.round(clamped * 100)}%`}>
      <circle
        cx={center}
        cy={center}
        r={r}
        fill="none"
        stroke="rgba(255, 255, 255, 0.26)"
        strokeWidth={stroke}
      />
      <circle
        cx={center}
        cy={center}
        r={r}
        fill="none"
        stroke="#ffffff"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
        style={{
          transitionProperty: "stroke-dashoffset",
          transitionDuration: "500ms",
          transitionTimingFunction: "ease-out",
        }}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={size * 0.22}
        fontWeight={700}
        fill="#ffffff"
      >
        {Math.round(clamped * 100)}%
      </text>
    </svg>
  );
}

export function LiveStatisticsCard({
  dashboard,
  question,
  correctAnswer,
}: LiveStatisticsCardProps) {
  const styles = useTeacherDashboardStyles();
  const statistics = dashboard?.statistics ?? null;
  const optionCounts = statistics?.optionCounts ?? null;
  // 提交人数来自后端 submittedCount：optionCounts 是"人次"（多选一人贡献多个键），不能求和
  const totalSubmitted = statistics?.submittedCount ?? 0;
  const notSubmittedCount = statistics
    ? (statistics.notStartedCount ?? 0) + (statistics.answeringCount ?? 0)
    : 0;
  const completionRate = statistics?.completionRate ?? 0;
  const onlineCount = dashboard?.onlineCount ?? 0;

  const optionLabelMap = new Map<string, string>();
  question?.options?.forEach((opt) => optionLabelMap.set(opt.key ?? "", opt.text ?? ""));

  // 语义色：作答中=品牌、已提交/正确率=绿、截止未交>0=红，其余中性
  const secondaryStats: Array<{
    value: string;
    label: string;
    tone?: "brand" | "success" | "danger";
  }> = [
    { value: String(dashboard?.totalParticipants ?? 0), label: "参与总人数" },
    { value: String(statistics?.notStartedCount ?? 0), label: "未开始" },
    { value: String(statistics?.answeringCount ?? 0), label: "作答中", tone: "brand" },
    { value: String(statistics?.submittedCount ?? 0), label: "已提交", tone: "success" },
    {
      value: String(notSubmittedCount),
      label: "截止未交",
      tone: notSubmittedCount > 0 ? "danger" : undefined,
    },
    {
      value: statistics?.correctRate != null ? `${Math.round(statistics.correctRate * 100)}%` : "—",
      label: "正确率",
      tone: statistics?.correctRate != null ? "success" : undefined,
    },
    {
      value:
        statistics?.averageAnswerSeconds != null
          ? `${Math.round(statistics.averageAnswerSeconds)}s`
          : "—",
      label: "平均用时",
    },
  ];
  const toneClass = {
    brand: styles.statValueBrand,
    success: styles.statValueSuccess,
    danger: styles.statValueDanger,
  } as const;

  return (
    <Card className={mergeClasses(styles.card, styles.cardDelay2)}>
      <div className={styles.cardHeader}>
        <Title3 as="h2">实时统计</Title3>
        {dashboard?.lastStatisticsUpdatedAt && (
          <Text size={200} className={styles.statLabel}>
            更新于 {new Date(dashboard.lastStatisticsUpdatedAt).toLocaleTimeString()}
          </Text>
        )}
      </div>

      {/* 主指标：在线人数大数字 + 环形完成率（深色块与 Hero 呼应） */}
      <div className={styles.statHeroRow}>
        <div className={styles.statHeroLeft}>
          <span className={styles.statHeroValue}>{onlineCount}</span>
          <span className={styles.statHeroLabel}>在线人数</span>
        </div>
        <ProgressRing value={completionRate} />
      </div>

      {/* 次指标网格 */}
      <div className={styles.statSecondaryGrid}>
        {secondaryStats.map((item) => (
          <div key={item.label} className={styles.statItem}>
            <span className={mergeClasses(styles.statValue, item.tone && toneClass[item.tone])}>
              {item.value}
            </span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* 选项分布 */}
      {optionCounts && (
        <div className={styles.distribution}>
          <div className={styles.distributionTitle}>
            <Text weight="semibold">选项分布</Text>
            <Text size={200} className={styles.statLabel}>
              {totalSubmitted} 人已提交
            </Text>
          </div>
          {Object.entries(optionCounts).map(([key, count]) => {
            const pct = totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0;
            const isCorrect = isCorrectDistributionKey(correctAnswer, key);
            const displayKey = distributionKeyLabel(key);
            const optionText = optionLabelMap.get(displayKey) ?? "";
            return (
              <div key={key} className={styles.statRow}>
                <Text
                  className={mergeClasses(
                    styles.statBarLabel,
                    isCorrect && styles.statBarLabelCorrect,
                  )}
                  size={300}
                >
                  {optionText ? `${displayKey}. ${optionText}` : displayKey}
                </Text>
                <div className={styles.statBarTrack}>
                  <div
                    className={mergeClasses(styles.statBar, isCorrect && styles.statBarCorrect)}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <Text className={styles.statBarCount} size={300}>
                  {count} · {pct}%
                </Text>
                {isCorrect && (
                  <CheckmarkCircle16Filled className={styles.correctIcon} aria-label="正确选项" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
