/**
 * 投屏端页面（/presentation/$sessionId?t=token）。
 *
 * 本文件只负责编排：路由参数解析、运行时 hook（令牌/快照/SignalR/倒计时，
 * 见 hooks/usePresentationSession）与只读大屏视图组装（见 components/Presentation*）。
 *
 * 隐私约束：本页数据来自只读投屏快照（/api/presentation/...），
 * 服务端保证不含学员姓名、学号、ParticipantId 与个人答案；
 * 令牌过期时提示教师重新生成，页面不自愈（只读约束）。
 */
import { useParams, useSearch } from "@tanstack/react-router";
import { Button, Spinner, Text } from "@fluentui/react-components";
import { ClassSessionStatusValue } from "./constants/classroom";
import { usePresentationSession } from "./hooks/usePresentationSession";
import { usePresentationStyles } from "./styles/presentation";
import { PresentationStatusBar } from "./components/PresentationStatusBar";
import { PresentationQuestionPanel } from "./components/PresentationQuestionPanel";

export function PresentationPage() {
  const styles = usePresentationStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  const search = useSearch({ strict: false }) as { t?: string | undefined };

  const { snapshot, connectionState, fatalError, remainingSeconds, refreshSnapshot } =
    usePresentationSession({ sessionId, urlToken: search.t });

  if (fatalError) {
    return (
      <div className={styles.screen}>
        <div className={styles.center}>
          <Text as="h1" size={800} weight="bold">
            无法加载投屏
          </Text>
          <Text size={400}>{fatalError}</Text>
          <Button appearance="primary" onClick={() => void refreshSnapshot()}>
            重试
          </Button>
        </div>
      </div>
    );
  }

  if (!snapshot) {
    return (
      <div className={styles.screen}>
        <div className={styles.center}>
          <Spinner size="huge" />
          <Text size={500}>正在连接课堂…</Text>
        </div>
      </div>
    );
  }

  const question = snapshot.currentQuestion?.question ?? null;
  const questionStatus = snapshot.currentQuestion?.status ?? 0;
  const accepting = snapshot.currentQuestion?.isAcceptingAnswers === true;
  const optionCounts = snapshot.publishedOptionCounts ?? null;
  const finished = snapshot.status === ClassSessionStatusValue.Finished;

  return (
    <div className={styles.screen}>
      {/* 头部：题号 + 提交进度 + 连接状态 */}
      <PresentationStatusBar
        currentQuestionNumber={snapshot.currentQuestionNumber ?? 0}
        questionCount={snapshot.questionCount ?? 0}
        submittedCount={snapshot.submittedCount ?? 0}
        totalParticipants={snapshot.totalParticipants ?? 0}
        accepting={accepting}
        finished={finished}
        hasQuestion={question !== null}
        connectionState={connectionState}
      />

      {/* 倒计时 */}
      {accepting && remainingSeconds !== null && (
        <div className={styles.center} style={{ flex: 0, padding: 0 }}>
          <span className={styles.countdown}>
            {Math.floor(remainingSeconds / 60)}:{String(remainingSeconds % 60).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* 题目 */}
      {question ? (
        <PresentationQuestionPanel
          question={question}
          questionStatus={questionStatus}
          correctAnswer={snapshot.correctAnswer ?? null}
          explanation={snapshot.explanation ?? null}
          optionCounts={optionCounts}
        />
      ) : (
        <div className={styles.center}>
          <Text size={700}>{finished ? "感谢参与！" : "等待教师开放题目…"}</Text>
        </div>
      )}
    </div>
  );
}
