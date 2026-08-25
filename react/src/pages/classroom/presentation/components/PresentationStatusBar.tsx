/**
 * 投屏端头部状态栏：题号进度、课堂/答题状态徽标、已提交人数与连接状态徽标。
 * 纯展示组件，所有数据经 props 显式传入。
 */
import { Badge, Text } from "@fluentui/react-components";
import type { PresentationConnectionState } from "../hooks/usePresentationSession";
import { usePresentationStyles } from "../styles/presentation";

interface PresentationStatusBarProps {
  currentQuestionNumber: number;
  questionCount: number;
  submittedCount: number;
  totalParticipants: number;
  /** 当前题是否正在接收答案。 */
  accepting: boolean;
  /** 课堂是否已结束。 */
  finished: boolean;
  /** 是否存在当前题目（区分"等待公布"与"等待开题"）。 */
  hasQuestion: boolean;
  connectionState: PresentationConnectionState;
}

export function PresentationStatusBar({
  currentQuestionNumber,
  questionCount,
  submittedCount,
  totalParticipants,
  accepting,
  finished,
  hasQuestion,
  connectionState,
}: PresentationStatusBarProps) {
  const styles = usePresentationStyles();

  return (
    <div className={styles.header}>
      <div className={styles.meta}>
        <span className={styles.questionNumber}>
          {currentQuestionNumber}
          <Text size={500} style={{ fontWeight: 400 }}>
            {" "}
            / {questionCount}
          </Text>
        </span>
        <Badge
          appearance="filled"
          color={finished ? "subtle" : accepting ? "success" : "informative"}
          size="large"
        >
          {finished ? "课堂已结束" : accepting ? "答题中" : hasQuestion ? "等待公布" : "等待开题"}
        </Badge>
      </div>
      <div className={styles.meta}>
        <Text size={500}>
          已提交 <b>{submittedCount}</b> / {totalParticipants} 人
        </Text>
        {connectionState !== "connected" && (
          <Badge appearance="filled" color={connectionState === "offline" ? "danger" : "severe"}>
            {connectionState === "offline" ? "离线" : "重连中…"}
          </Badge>
        )}
      </div>
    </div>
  );
}
