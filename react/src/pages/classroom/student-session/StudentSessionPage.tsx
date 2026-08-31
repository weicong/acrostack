/**
 * 学员答题页（/student/sessions/:sessionId）。
 *
 * 提示词十三节交互要求：
 * - 移动优先；连接状态（已连接/重连中/离线）实时可见
 * - 离线时保留未提交的选择；提交中禁用按钮；成功后明确确认；失败保留答案可重试
 * - 倒计时 = 服务端 EndsAt - ServerTime（含时钟偏移校正）
 * - 截止后立即禁用编辑；刷新页面通过快照恢复
 * - SignalR 版本跳跃（事件丢失）时重新拉取快照校准
 *
 * 数据获取：学员端持课堂短期 JWT（与 OIDC 共享客户端冲突），
 * 必须经 utils/studentApi 直连，不能替换为 Kubb hooks。
 *
 * 逻辑拆分到 hooks/：
 *   - useStudentAnswer：答案状态 / 提交 / 重置 / 恢复
 *   - useStudentHistory：答题记录拉取
 *   - useStudentRealtime：快照 / SignalR 连接 / 事件处理
 * 样式见 styles/studentSession，答题记录视图见 components/HistoryView。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  Spinner,
  Text,
  Textarea,
  Title2,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { Mic20Regular } from "@fluentui/react-icons";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import { useStudentSessionStyles } from "./styles/studentSession";
import { useServerClockCountdown } from "../shared/hooks/useServerClockCountdown";
import { useStudentAnswer } from "./hooks/useStudentAnswer";
import { useStudentHistory } from "./hooks/useStudentHistory";
import { useStudentRealtime } from "./hooks/useStudentRealtime";
import { ConnectionBadge } from "../shared/components/ConnectionBadge";
import { HistoryView } from "./components/HistoryView";
import { distributionKeyLabel } from "../shared/utils/distribution";
import { usePageTitle } from "@/lib/usePageTitle";
import { ClassSessionStatusValue, classSessionStatusLabel } from "../shared/constants/classroom";
import { clearStudentSession, loadStudentSession } from "../shared/utils/studentSession";
import type { ParticipantPickedEvent } from "../shared/types/classroom-events";
import { trueFalseLabel } from "./utils/answerFormat";

export function StudentSessionPage() {
  const styles = useStudentSessionStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  const { dispatchToast } = useToastController();

  const [view, setView] = useState<"current" | "history">("current");
  const viewRef = useRef<"current" | "history">("current");
  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  const stored = sessionId ? loadStudentSession(sessionId) : null;
  const token = stored?.accessToken ?? null;
  // 标签页标题带昵称，多课堂标签时可直接区分
  usePageTitle(stored?.nickname ? `${stored.nickname} · 课堂答题` : "课堂答题");

  const answer = useStudentAnswer({ sessionId, token, dispatchToast });
  const history = useStudentHistory({ sessionId, token, view });

  // 随机点名：点到自己时醒目提醒（存储的 participantId 与事件比对）
  const [pickedMe, setPickedMe] = useState(false);
  const participantIdRef = useRef<string | null>(stored?.participantId ?? null);
  const handleParticipantPicked = useCallback(
    (evt: ParticipantPickedEvent) => {
      if (evt.participantId && evt.participantId === participantIdRef.current) {
        setPickedMe(true);
        dispatchToast("老师点名请你回答问题！", { intent: "warning" });
      }
    },
    [dispatchToast],
  );

  const realtime = useStudentRealtime({
    sessionId,
    token,
    viewRef,
    resetAnswer: answer.resetAnswer,
    refreshHistory: history.refreshHistory,
    restoreAnswer: answer.restoreAnswer,
    onParticipantPicked: handleParticipantPicked,
  });

  const session = realtime.session;
  const connectionState = realtime.connectionState;
  const loadError = realtime.loadError;

  const remainingSeconds = useServerClockCountdown(
    session?.currentQuestion?.endsAt,
    realtime.clockOffsetRef,
  );

  const question: ClassroomDtosQuestionViewDto | null = session?.currentQuestion?.question ?? null;
  const isAccepting =
    session?.currentQuestion?.isAcceptingAnswers === true &&
    remainingSeconds !== null &&
    remainingSeconds > 0;
  const isChoiceQuestion = question?.type === 1 || question?.type === 2;
  const isMultipleChoice = question?.type === 2;
  const isTrueOrFalse = question?.type === 3;

  async function handleSubmit() {
    if (!token || !question || answer.submitting) return;
    const content = isChoiceQuestion || isTrueOrFalse ? answer.selected : answer.textAnswer.trim();
    if (!content) return;
    await answer.submit(question.sessionQuestionId!, content);
  }

  if (loadError && !session) {
    return (
      <div className={styles.page}>
        <Card className={styles.card}>
          <Title2>无法进入课堂</Title2>
          <Text block>{loadError}</Text>
          <Button appearance="primary" as="a" href="/student/join">
            重新加入课堂
          </Button>
        </Card>
      </div>
    );
  }

  if (!session) {
    return (
      <div className={styles.page}>
        <div className={styles.center}>
          <Spinner />
          <Text block>正在恢复课堂状态…</Text>
        </div>
      </div>
    );
  }

  const status = session.status ?? 0;
  const optionCounts = session.publishedOptionCounts ?? null;
  // 提交人数来自后端 submittedCount：optionCounts 是"人次"（多选一人贡献多个键），不能求和
  const totalSubmitted = session.submittedCount ?? 0;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Text size={400} weight="semibold">
          {[stored?.nickname, session.groupIndex ? `学习小组${session.groupIndex}` : null]
            .filter(Boolean)
            .join(" · ") || "课堂答题"}
        </Text>
        <div className={styles.viewTabs}>
          <Button
            size="small"
            appearance={view === "current" ? "primary" : "secondary"}
            onClick={() => setView("current")}
          >
            当前题目
          </Button>
          <Button
            size="small"
            appearance={view === "history" ? "primary" : "secondary"}
            onClick={() => setView("history")}
          >
            答题记录
          </Button>
          <ConnectionBadge state={connectionState} />
        </div>
      </div>

      {connectionState === "offline" && (
        <Card className={styles.card}>
          <Text>网络连接已断开。你的选择已保留，恢复网络后将自动重连。</Text>
        </Card>
      )}

      {pickedMe && (
        <Card className={styles.pickedCard} role="status">
          <Mic20Regular className={styles.pickedIcon} />
          <div className={styles.pickedText}>
            <Text size={400} weight="semibold">
              老师随机点名请你回答问题
            </Text>
            <Text size={300}>请整理思路，准备现场作答</Text>
          </div>
          <Button size="small" appearance="subtle" onClick={() => setPickedMe(false)}>
            知道了
          </Button>
        </Card>
      )}

      {view === "history" ? (
        <HistoryView
          history={history.history}
          loading={history.historyLoading}
          error={history.historyError}
        />
      ) : status === ClassSessionStatusValue.Finished ? (
        <Card className={styles.card}>
          <Title2>课堂已结束</Title2>
          <Text block>感谢参与！</Text>
          <div className={styles.viewTabs}>
            <Button appearance="primary" onClick={() => setView("history")}>
              查看答题记录
            </Button>
            <Button
              onClick={() => {
                clearStudentSession(sessionId);
                window.location.href = "/student/join";
              }}
            >
              返回加入页
            </Button>
          </div>
        </Card>
      ) : question ? (
        <>
          <Card className={styles.card}>
            <div className={styles.header}>
              <Text size={300}>
                第 {question.order} 题 · {classSessionStatusLabel[status] ?? ""}
              </Text>
              {isAccepting && remainingSeconds !== null && (
                <Text className={styles.countdown} size={500}>
                  {Math.floor(remainingSeconds / 60)}:
                  {String(remainingSeconds % 60).padStart(2, "0")}
                </Text>
              )}
            </div>

            <Title2 as="p">{question.stem}</Title2>

            {(isChoiceQuestion || isTrueOrFalse) && (
              <div className={styles.options}>
                {question.options?.map((opt) => {
                  const value = isTrueOrFalse
                    ? opt.key === "A"
                      ? "true"
                      : "false"
                    : (opt.key ?? "");
                  const isSelected = isMultipleChoice
                    ? answer.selected.split(",").filter(Boolean).includes(value)
                    : answer.selected === value;
                  const disabled = !isAccepting || answer.submitted;
                  return (
                    <Button
                      key={opt.key}
                      className={styles.optionButton}
                      appearance={isSelected ? "primary" : "secondary"}
                      disabled={disabled}
                      onClick={() => {
                        if (isMultipleChoice) {
                          answer.setSelected((prev) => {
                            const keys = prev.split(",").filter(Boolean);
                            const next = keys.includes(value)
                              ? keys.filter((k) => k !== value)
                              : [...keys, value];
                            return next.join(",");
                          });
                        } else {
                          answer.setSelected(value);
                        }
                      }}
                    >
                      {opt.key}. {opt.text}
                    </Button>
                  );
                })}
              </div>
            )}

            {question.type === 4 && (
              <Textarea
                value={answer.textAnswer}
                onChange={(_, d) => answer.setTextAnswer(d.value)}
                placeholder="输入你的回答"
                disabled={!isAccepting || answer.submitted}
                resize="vertical"
              />
            )}

            {isAccepting && !answer.submitted ? (
              <Button
                appearance="primary"
                size="large"
                disabled={
                  answer.submitting ||
                  (isChoiceQuestion || isTrueOrFalse ? !answer.selected : !answer.textAnswer.trim())
                }
                onClick={() => void handleSubmit()}
              >
                {answer.submitting ? <Spinner size="tiny" /> : "提交答案"}
              </Button>
            ) : answer.submitted ? (
              <Badge appearance="filled" color="success">
                已提交
                {session.myAnswer?.revision && session.myAnswer.revision > 1
                  ? `（第 ${session.myAnswer.revision} 次修订）`
                  : ""}
              </Badge>
            ) : (
              <Text>本题已截止，等待老师公布结果</Text>
            )}

            {answer.submitError && (
              <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{answer.submitError}</Text>
            )}
          </Card>

          {session.statisticsPublished && optionCounts && (
            <Card className={styles.card}>
              <Text weight="semibold">答题分布（{totalSubmitted} 人已提交）</Text>
              <div className={styles.statistics}>
                {Object.entries(optionCounts).map(([key, count]) => (
                  <div key={key} className={styles.statRow}>
                    <Text style={{ width: "2em" }}>{distributionKeyLabel(key)}</Text>
                    <div
                      className={styles.statBar}
                      style={{
                        width: `${totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%`,
                        minWidth: count > 0 ? "12px" : 0,
                      }}
                    />
                    <Text size={300}>
                      {count} 人（
                      {totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%）
                    </Text>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {session.answerPublished && (
            <Card className={styles.card}>
              <Text weight="semibold">
                正确答案：
                {isTrueOrFalse ? trueFalseLabel(session.correctAnswer) : session.correctAnswer}
              </Text>
              {session.myAnswer?.isCorrect != null && (
                <Badge
                  appearance="filled"
                  color={session.myAnswer.isCorrect ? "success" : "danger"}
                >
                  {session.myAnswer.isCorrect ? "回答正确" : "回答错误"}
                </Badge>
              )}
              {session.explanation && (
                <div className={styles.explanation}>
                  <Text block size={300}>
                    {session.explanation}
                  </Text>
                </div>
              )}
            </Card>
          )}
        </>
      ) : (
        <Card className={styles.card}>
          <div className={styles.center}>
            <Spinner />
            <Text block size={400}>
              {status === ClassSessionStatusValue.Waiting ? "等待老师开放题目…" : "等待课堂开始…"}
            </Text>
          </div>
        </Card>
      )}

      <Link to="/student/join" style={{ textAlign: "center" }}>
        <Text size={200}>退出并加入其他课堂</Text>
      </Link>
    </div>
  );
}
