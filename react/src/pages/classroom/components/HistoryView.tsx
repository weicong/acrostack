/**
 * 答题记录视图：汇总条 + 逐题回顾卡片列表。
 */
import { Badge, Card, Spinner, Text, tokens } from "@fluentui/react-components";
import type { ClassroomDtosStudentAnswerHistoryDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryDto";
import { useStudentSessionStyles } from "../styles/studentSession";
import { HistoryItemCard } from "./HistoryItemCard";

interface HistoryViewProps {
  history: ClassroomDtosStudentAnswerHistoryDto | null;
  loading: boolean;
  error: string | null;
}

export function HistoryView({ history, loading, error }: HistoryViewProps) {
  const styles = useStudentSessionStyles();

  if (!history && loading) {
    return (
      <Card className={styles.card}>
        <div className={styles.center}>
          <Spinner />
          <Text block>正在加载答题记录…</Text>
        </div>
      </Card>
    );
  }
  if (!history) {
    return (
      <Card className={styles.card}>
        <Text block>{error ?? "暂无答题记录"}</Text>
      </Card>
    );
  }

  const items = history.items ?? [];
  return (
    <>
      <Card className={styles.card}>
        <div className={styles.summaryRow}>
          <Text weight="semibold">答题记录</Text>
          <Badge appearance="filled" color="informative">
            共 {history.questionCount ?? 0} 题
          </Badge>
          <Badge appearance="filled" color="brand">
            已答 {history.answeredCount ?? 0}
          </Badge>
          <Badge appearance="filled" color="success">
            答对 {history.correctCount ?? 0}
          </Badge>
          {loading && <Spinner size="tiny" />}
        </div>
        {error && (
          <Text size={300} style={{ color: tokens.colorPaletteRedForeground1 }}>
            {error}（数据可能不是最新）
          </Text>
        )}
      </Card>
      {items.length === 0 ? (
        <Card className={styles.card}>
          <Text>老师还没有开放题目。</Text>
        </Card>
      ) : (
        items.map((item) => <HistoryItemCard key={item.order} item={item} />)
      )}
    </>
  );
}
