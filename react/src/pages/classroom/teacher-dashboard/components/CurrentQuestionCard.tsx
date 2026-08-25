/**
 * 当前题卡片：题干、选项（含正确答案标记）、解析与倒计时。
 */
import { Card, Text, Title2, Title3, tokens } from "@fluentui/react-components";
import { ClassSessionStatusValue, SessionQuestionStatusValue } from "../constants/classroom";
import { questionTypeLabel } from "../constants/question";
import { formatCountdown } from "../hooks/useServerClockCountdown";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";

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

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Title3>
          {question
            ? `第 ${question.order} 题 · ${questionTypeLabel[question.type ?? 0] ?? "题目"}`
            : "暂无开放题目"}
        </Title3>
        {hasOpenQuestion && remainingSeconds !== null && (
          <span className={styles.countdown}>{formatCountdown(remainingSeconds)}</span>
        )}
      </div>
      {question ? (
        <>
          <Title2 as="p">{question.stem}</Title2>
          {question.options && question.options.length > 0 && (
            <div className={styles.distribution}>
              {question.options.map((opt) => (
                <Text key={opt.key} block size={300}>
                  {opt.key}. {opt.text}
                  {correctAnswer &&
                    questionStatus === SessionQuestionStatusValue.AnswerPublished && (
                      <Text
                        weight="semibold"
                        style={{
                          marginLeft: tokens.spacingHorizontalS,
                          color: tokens.colorPaletteGreenForeground1,
                        }}
                      >
                        {correctAnswer === opt.key ? "✓ 正确答案" : ""}
                      </Text>
                    )}
                </Text>
              ))}
            </div>
          )}
          {questionStatus === SessionQuestionStatusValue.AnswerPublished && explanation && (
            <Text block size={300}>
              解析：{explanation}
            </Text>
          )}
        </>
      ) : (
        <Text size={300}>
          {status === ClassSessionStatusValue.Waiting
            ? '点击"下一题"开放第一题'
            : status === ClassSessionStatusValue.Finished
              ? "课堂已结束"
              : "等待题目状态更新…"}
        </Text>
      )}
    </Card>
  );
}
