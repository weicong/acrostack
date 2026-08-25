/**
 * 投屏端题目面板：题干、选项（公布答案后高亮正确项）、
 * 匿名选项分布条形图与正确答案/解析。
 * 纯展示组件，所有数据经 props 显式传入。
 */
import { SessionQuestionStatusValue } from "../constants/classroom";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import { usePresentationStyles } from "../styles/presentation";

interface PresentationQuestionPanelProps {
  question: ClassroomDtosQuestionViewDto;
  /** 当前题目状态枚举值。 */
  questionStatus: number;
  correctAnswer: string | null;
  explanation: string | null;
  /** 教师公布统计后的匿名选项计数；为空表示未公布。 */
  optionCounts: Record<string, number> | null;
}

export function PresentationQuestionPanel({
  question,
  questionStatus,
  correctAnswer,
  explanation,
  optionCounts,
}: PresentationQuestionPanelProps) {
  const styles = usePresentationStyles();

  const totalSubmitted = optionCounts ? Object.values(optionCounts).reduce((a, b) => a + b, 0) : 0;

  return (
    <>
      <p className={styles.stem}>{question.stem}</p>

      {question.options && question.options.length > 0 && (
        <div className={styles.options}>
          {question.options.map((opt) => {
            const isCorrect =
              questionStatus === SessionQuestionStatusValue.AnswerPublished &&
              correctAnswer === opt.key;
            return (
              <div
                key={opt.key}
                className={`${styles.optionRow} ${isCorrect ? styles.optionCorrect : ""}`}
              >
                <span>{opt.key}.</span>
                <span>{opt.text}</span>
                {isCorrect && <span>✓</span>}
              </div>
            );
          })}
        </div>
      )}

      {/* 匿名选项分布（教师公布统计后） */}
      {optionCounts && (
        <div className={styles.distribution}>
          {Object.entries(optionCounts).map(([key, count]) => (
            <div key={key} className={styles.statRow}>
              <span style={{ width: "2.5em" }}>{key}</span>
              <div
                className={styles.statBar}
                style={{
                  width: `${totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%`,
                  minWidth: count > 0 ? "16px" : 0,
                }}
              />
              <span>
                {count} 人（
                {totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%）
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 正确答案与解析（教师公布后） */}
      {questionStatus === SessionQuestionStatusValue.AnswerPublished && (
        <div className={styles.explanation}>
          <div>正确答案：{correctAnswer}</div>
          {explanation && <div>解析：{explanation}</div>}
        </div>
      )}
    </>
  );
}
