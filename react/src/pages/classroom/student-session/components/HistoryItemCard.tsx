/**
 * 答题记录单题回顾卡片：选项对错标记、简答回答与解析。
 */
import { Badge, Card, Text } from "@fluentui/react-components";
import type { ClassroomDtosStudentAnswerHistoryItemDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryItemDto";
import { SessionQuestionStatusValue } from "../constants/classroom";
import { questionTypeLabel } from "../constants/question";
import { trueFalseLabel } from "../utils/answerFormat";
import { useStudentSessionStyles } from "../styles/studentSession";

export function HistoryItemCard({ item }: { item: ClassroomDtosStudentAnswerHistoryItemDto }) {
  const styles = useStudentSessionStyles();

  const published = item.questionStatus === SessionQuestionStatusValue.AnswerPublished;
  const type = item.questionType ?? 1;
  const isChoice = type === 1 || type === 2;
  const isTF = type === 3;
  const answered = Boolean(item.myAnswerContent);
  const myKeys = new Set(
    (item.myAnswerContent ?? "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
  );
  const correctKeys = new Set(
    isTF
      ? [item.correctAnswer ?? ""]
      : (item.correctAnswer ?? "")
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
  );

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Text size={300}>
          第 {item.order} 题 · {questionTypeLabel[type] ?? "未知"}
        </Text>
        {answered ? (
          item.myIsCorrect != null ? (
            <Badge appearance="filled" color={item.myIsCorrect ? "success" : "danger"}>
              {item.myIsCorrect ? "回答正确" : "回答错误"}
            </Badge>
          ) : (
            <Badge appearance="filled" color="informative">
              已作答
            </Badge>
          )
        ) : (
          <Badge appearance="filled" color="subtle">
            未答
          </Badge>
        )}
      </div>

      <Text block weight="semibold">
        {item.stem}
      </Text>

      {(isChoice || isTF) && (
        <div className={styles.historyOptions}>
          {(item.options ?? []).map((opt) => {
            const value = isTF ? (opt.key === "A" ? "true" : "false") : (opt.key ?? "");
            const mine = myKeys.has(value);
            const correct = published && correctKeys.has(value);
            return (
              <div key={opt.key} className={styles.historyOptionRow}>
                <Text className={styles.historyOptionText}>
                  {opt.key}. {opt.text}
                </Text>
                {mine && (
                  <Badge appearance="ghost" color="brand">
                    我的答案
                  </Badge>
                )}
                {correct && (
                  <Badge appearance="ghost" color="success">
                    正确答案
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      )}

      {type === 4 && (
        <div className={styles.explanation}>
          <Text block size={300}>
            我的回答：{item.myAnswerContent ?? "（未答）"}
          </Text>
        </div>
      )}

      {answered && (item.myRevision ?? 0) > 1 && (
        <Text size={200}>已修订 {item.myRevision} 次</Text>
      )}

      {published ? (
        <div className={styles.explanation}>
          {item.correctAnswer && (
            <Text block size={300} weight="semibold">
              正确答案：{isTF ? trueFalseLabel(item.correctAnswer) : item.correctAnswer}
            </Text>
          )}
          {item.explanation && (
            <Text block size={300}>
              解析：{item.explanation}
            </Text>
          )}
        </div>
      ) : (
        <Text size={300}>等待老师公布答案</Text>
      )}
    </Card>
  );
}
