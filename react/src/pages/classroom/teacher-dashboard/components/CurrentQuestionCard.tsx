/**
 * 当前题卡片：题干、选项（含正确答案标记）、解析与倒计时。
 */
import { Badge, Card, Text, Title3, mergeClasses } from "@fluentui/react-components";
import type { ComponentProps } from "react";

type BadgeColor = NonNullable<ComponentProps<typeof Badge>["color"]>;
import {
  CheckmarkCircle20Filled,
  Clipboard20Regular,
  CheckmarkCircle20Regular,
  Timer20Regular,
} from "@fluentui/react-icons";
import {
  ClassSessionStatusValue,
  SessionQuestionStatusValue,
} from "../../shared/constants/classroom";
import { questionTypeLabel } from "../../shared/constants/question";
import { formatCountdown } from "../../shared/hooks/useServerClockCountdown";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";

const questionTypeColor: Record<number, BadgeColor> = {
  1: "brand",
  2: "informative",
  3: "warning",
  4: "severe",
};

interface CurrentQuestionCardProps {
  /** 课堂状态枚举值（用于无题时的提示文案）。 */
  status: number;
  /** 题目状态枚举值。 */
  questionStatus: number;
  hasOpenQuestion: boolean;
  question: ClassroomDtosQuestionViewDto | null;
  correctAnswer?: string | null;
  explanation?: string | null;
  remainingSeconds: number | null;
}

export function CurrentQuestionCard({
  status,
  questionStatus,
  hasOpenQuestion,
  question,
  correctAnswer,
  explanation,
  remainingSeconds,
}: CurrentQuestionCardProps) {
  const styles = useTeacherDashboardStyles();
  const showCountdown = hasOpenQuestion && remainingSeconds !== null;
  const answerPublished = questionStatus === SessionQuestionStatusValue.AnswerPublished;

  return (
    <Card className={mergeClasses(styles.card, styles.cardDelay1)}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleRow}>
          <Title3 as="h2">{question ? `第 ${question.order} 题` : "暂无开放题目"}</Title3>
          {question && (
            <Badge appearance="tint" color={questionTypeColor[question.type ?? 1] ?? "brand"}>
              {questionTypeLabel[question.type ?? 0] ?? "题目"}
            </Badge>
          )}
        </div>
        {showCountdown && (
          <span
            className={mergeClasses(
              styles.countdownPill,
              remainingSeconds! < 10 && styles.countdownPillDanger,
            )}
          >
            <Timer20Regular />
            {formatCountdown(remainingSeconds!)}
          </span>
        )}
      </div>

      {question ? (
        <>
          <Title3 as="p" className={mergeClasses(styles.questionStem, styles.questionStemLarge)}>
            {question.stem}
          </Title3>
          {question.options && question.options.length > 0 && (
            <div className={styles.optionList}>
              {question.options.map((opt) => {
                const isCorrect = answerPublished && correctAnswer === opt.key;
                const isWrong =
                  answerPublished && correctAnswer != null && correctAnswer !== opt.key;
                return (
                  <div
                    key={opt.key}
                    className={mergeClasses(
                      styles.optionRow,
                      isCorrect && styles.optionRowCorrect,
                      isWrong && styles.optionRowWrong,
                    )}
                  >
                    <span
                      className={mergeClasses(
                        styles.optionKey,
                        isCorrect && styles.optionKeyCorrect,
                      )}
                    >
                      {opt.key}
                    </span>
                    <Text className={styles.optionText} size={300}>
                      {opt.text}
                    </Text>
                    {isCorrect && <CheckmarkCircle20Filled className={styles.optionCheck} />}
                  </div>
                );
              })}
            </div>
          )}
          {answerPublished && explanation && (
            <div className={styles.explanation}>
              <Text className={styles.explanationLabel} block size={200}>
                解析
              </Text>
              <Text block size={300}>
                {explanation}
              </Text>
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIconWrap}>
            {status === ClassSessionStatusValue.Finished ? (
              <CheckmarkCircle20Regular className={styles.emptyIcon} />
            ) : (
              <Clipboard20Regular className={styles.emptyIcon} />
            )}
          </span>
          <Text size={300}>
            {status === ClassSessionStatusValue.Waiting
              ? '点击"下一题"开放第一题'
              : status === ClassSessionStatusValue.Finished
                ? "课堂已结束"
                : "等待题目状态更新…"}
          </Text>
        </div>
      )}
    </Card>
  );
}
