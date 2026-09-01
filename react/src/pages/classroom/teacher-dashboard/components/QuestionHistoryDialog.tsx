/**
 * 题目记录弹窗：回看本课堂全部题目（题干/选项/正确答案/各题统计）。
 * 切到下一题后，已讲过的题目及其答题分布仍可在此查看；
 * 当前题为实时统计，已截止/已公布的题为终值。
 */
import { useState } from "react";
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  Spinner,
  Text,
  mergeClasses,
} from "@fluentui/react-components";
import { CheckmarkCircle20Filled } from "@fluentui/react-icons";
import { useClassSessionGetQuestionHistory } from "@/api/hooks/classSession/useClassSessionGetQuestionHistory";
import type { ClassroomDtosTeacherQuestionHistoryItemDto } from "@/api/models/classroom/dtos/TeacherQuestionHistoryItemDto";
import { SessionQuestionStatusValue } from "../../shared/constants/classroom";
import { distributionKeyLabel, isCorrectDistributionKey } from "../../shared/utils/distribution";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

/** 题目状态中文标签（题目记录口径）。 */
const historyStatusLabel: Record<number, string> = {
  [SessionQuestionStatusValue.Pending]: "未开题",
  [SessionQuestionStatusValue.Open]: "进行中",
  [SessionQuestionStatusValue.Closed]: "已截止",
  [SessionQuestionStatusValue.AnswerPublished]: "已公布",
};

const historyStatusColor: Record<number, "brand" | "informative" | "success" | "severe"> = {
  [SessionQuestionStatusValue.Pending]: "severe",
  [SessionQuestionStatusValue.Open]: "brand",
  [SessionQuestionStatusValue.Closed]: "informative",
  [SessionQuestionStatusValue.AnswerPublished]: "success",
};

interface QuestionHistoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sessionId: string;
  /** 当前题号（用于列表中标记"当前"）。 */
  currentQuestionNumber: number;
}

export function QuestionHistoryDialog({
  open,
  onOpenChange,
  sessionId,
  currentQuestionNumber,
}: QuestionHistoryDialogProps) {
  const styles = useTeacherDashboardStyles();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data, isPending, isError } = useClassSessionGetQuestionHistory(
    { path: { id: sessionId } },
    { query: { enabled: open, refetchOnMount: "always" } },
  );

  const items = data?.items ?? [];
  // 未手动选择时默认看最后一题（教师回看场景：刚讲完的题）
  const selected = items.find((i) => i.sessionQuestionId === selectedId) ?? items.at(-1) ?? null;

  return (
    <Dialog open={open} onOpenChange={(_, d) => onOpenChange(d.open)}>
      <DialogSurface className={styles.historySurface} aria-describedby={undefined}>
        <DialogBody>
          <DialogTitle>题目记录（{data?.questionCount ?? items.length} 题）</DialogTitle>
          {isPending ? (
            <div className={styles.historyLoading}>
              <Spinner label="加载题目记录…" />
            </div>
          ) : isError || !selected ? (
            <div className={styles.historyLoading}>
              <Text size={300}>题目记录加载失败，请关闭后重试</Text>
            </div>
          ) : (
            <div className={styles.historyBody}>
              <nav className={styles.historyNav} aria-label="题目列表">
                {items.map((item) => (
                  <Button
                    key={item.sessionQuestionId}
                    size="small"
                    appearance={
                      item.sessionQuestionId === selected.sessionQuestionId ? "primary" : "subtle"
                    }
                    className={styles.historyNavItem}
                    onClick={() => setSelectedId(item.sessionQuestionId ?? null)}
                  >
                    {`第 ${item.order ?? 0} 题`}
                    {(item.order ?? 0) === currentQuestionNumber && (
                      <Badge appearance="ghost" size="small">
                        当前
                      </Badge>
                    )}
                  </Button>
                ))}
              </nav>
              <div className={styles.historyDetail}>
                <HistoryDetail item={selected} />
              </div>
            </div>
          )}
          <DialogActions>
            <Button appearance="subtle" onClick={() => onOpenChange(false)}>
              关闭
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

/** 单题详情：统计摘要 + 题干 + 选项分布（正确项标记）+ 解析。 */
function HistoryDetail({ item }: { item: ClassroomDtosTeacherQuestionHistoryItemDto }) {
  const styles = useTeacherDashboardStyles();
  const stats = item.statistics;
  const correctRate = stats?.correctRate != null ? `${Math.round(stats.correctRate * 100)}%` : "—";
  const optionCounts = stats?.optionCounts ?? {};

  return (
    <>
      <div className={styles.historyStatsRow}>
        <Badge appearance="tint" color={historyStatusColor[item.status ?? 0] ?? "brand"}>
          {historyStatusLabel[item.status ?? 0] ?? "未知"}
        </Badge>
        <Text size={200} className={styles.historyStatsText}>
          提交 {stats?.submittedCount ?? 0}/{stats?.totalParticipants ?? 0} · 正确率 {correctRate}
          {stats?.averageAnswerSeconds ? ` · 平均 ${stats.averageAnswerSeconds}s` : ""}
        </Text>
      </div>
      <Text className={styles.historyStem} block>
        {item.stem}
      </Text>
      {item.options && item.options.length > 0 && (
        <div className={styles.optionList}>
          {item.options.map((opt) => {
            const isCorrect = isCorrectDistributionKey(item.correctAnswer, opt.key ?? "");
            // 分布键为小写归一（"a"/"true"），选项 key 转小写匹配
            const count = optionCounts[(opt.key ?? "").toLowerCase()] ?? 0;
            return (
              <div
                key={opt.key}
                className={mergeClasses(styles.optionRow, isCorrect && styles.optionRowCorrect)}
              >
                <span
                  className={mergeClasses(styles.optionKey, isCorrect && styles.optionKeyCorrect)}
                >
                  {opt.key}
                </span>
                <Text className={styles.optionText} size={300}>
                  {opt.text}
                </Text>
                {isCorrect && <CheckmarkCircle20Filled className={styles.optionCheck} />}
                <span className={styles.historyOptionCount}>{count} 人</span>
              </div>
            );
          })}
        </div>
      )}
      {item.correctAnswer && (
        <div className={styles.historyAnswerRow}>
          <Text size={200} className={styles.explanationLabel}>
            正确答案
          </Text>
          <Text size={300} weight="semibold">
            {item.correctAnswer
              .split(",")
              .map((part) => distributionKeyLabel(part.trim().toLowerCase()))
              .join("、")}
          </Text>
        </div>
      )}
      {item.explanation && (
        <div className={styles.explanation}>
          <Text className={styles.explanationLabel} block size={200}>
            解析
          </Text>
          <Text block size={300}>
            {item.explanation}
          </Text>
        </div>
      )}
    </>
  );
}
