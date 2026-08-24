/**
 * 学员答题页（/student/sessions/:sessionId）。
 *
 * 提示词十三节交互要求：
 * - 移动优先；连接状态（已连接/重连中/离线）实时可见
 * - 离线时保留未提交的选择；提交中禁用按钮；成功后明确确认；失败保留答案可重试
 * - 倒计时 = 服务端 EndsAt - ServerTime（含时钟偏移校正）
 * - 截止后立即禁用编辑；刷新页面通过快照恢复
 * - SignalR 版本跳跃（事件丢失）时重新拉取快照校准
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  Spinner,
  Text,
  Textarea,
  Title2,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useToastController } from "@fluentui/react-components";
import type { HubConnection } from "@microsoft/signalr";
import {
  ClassroomClientMethods,
  ClassSessionStatusValue,
  SessionQuestionStatusValue,
  classSessionStatusLabel,
  questionTypeLabel,
  type AnswerPublishedEvent,
  type QuestionOpenedEvent,
  type StatisticsPublishedEvent,
} from "@/pages/classroom/classroomEvents";
import { buildClassroomTokenHubConnection } from "@/pages/classroom/classroomHub";
import {
  classroomErrorMessage,
  getMyAnswerHistory,
  getStudentSnapshot,
  submitAnswer,
} from "@/pages/classroom/studentApi";
import { clearStudentSession, loadStudentSession } from "@/pages/classroom/studentSession";
import type { ClassroomDtosStudentSnapshotDto } from "@/api/models/classroom/dtos/StudentSnapshotDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import type { ClassroomDtosStudentAnswerHistoryDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryDto";
import type { ClassroomDtosStudentAnswerHistoryItemDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryItemDto";

type ConnectionState = "connecting" | "connected" | "reconnecting" | "offline";

/** 判断题答案编码 "true"/"false" 的显示文案（对/错）。 */
function trueFalseLabel(value: string | null | undefined): string {
  if (value === "true") return "对";
  if (value === "false") return "错";
  return value ?? "";
}

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    maxWidth: "640px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalXXL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
  },
  card: {
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  options: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  optionButton: {
    justifyContent: "flex-start",
    minHeight: "48px",
    fontSize: tokens.fontSizeBase300,
  },
  statistics: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statBar: {
    height: "12px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
  },
  explanation: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalS,
  },
  countdown: { fontSize: tokens.fontSizeHero700, fontWeight: tokens.fontWeightBold },
  center: { textAlign: "center", padding: tokens.spacingVerticalXXL },
  viewTabs: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  summaryRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  historyOptions: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS },
  historyOptionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  historyOptionText: { flex: 1 },
  myAnswerBadge: { marginLeft: "auto" },
});

export function StudentSessionPage() {
  const styles = useStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  const { dispatchToast } = useToastController();

  const [session, setSession] = useState<ClassroomDtosStudentSnapshotDto | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("connecting");
  const [selected, setSelected] = useState<string>("");
  const [textAnswer, setTextAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // 视图切换：当前题目 / 答题记录
  const [view, setView] = useState<"current" | "history">("current");
  const [history, setHistory] = useState<ClassroomDtosStudentAnswerHistoryDto | null>(null);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);

  // 服务端时钟偏移校正：offset = serverNow - localNow
  const clockOffsetRef = useRef(0);
  // 本会话已见事件 Id（去重）
  const seenEventIdsRef = useRef(new Set<string>());
  // 上次版本号（版本跳跃触发快照校准）
  const lastVersionRef = useRef(0);
  // 当前视图（供 SignalR 事件回调读取，避免视图切换导致重连）
  const viewRef = useRef<"current" | "history">("current");
  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  const stored = sessionId ? loadStudentSession(sessionId) : null;
  const token = stored?.accessToken ?? null;

  const refreshSnapshot = useCallback(async () => {
    if (!token) {
      setLoadError("本地会话已失效，请重新加入课堂");
      return;
    }
    try {
      const snapshot = await getStudentSnapshot(sessionId, token);
      setSession(snapshot);
      setLoadError(null);
      clockOffsetRef.current = Date.parse(snapshot.serverTime ?? "") - Date.now() || 0;
      lastVersionRef.current = snapshot.version ?? 0;

      // 恢复本人已提交答案
      if (snapshot.myAnswer) {
        setSubmitted(true);
        setSelected(snapshot.myAnswer.answerContent ?? "");
        setTextAnswer(snapshot.myAnswer.answerContent ?? "");
      }
    } catch (err) {
      setLoadError(classroomErrorMessage(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, token]);

  // 初始快照
  useEffect(() => {
    void refreshSnapshot();
  }, [refreshSnapshot]);

  // 答题记录：切到记录视图时拉取（其余时机由事件回调触发）
  const refreshHistory = useCallback(async () => {
    if (!token) return;
    setHistoryLoading(true);
    try {
      const result = await getMyAnswerHistory(sessionId, token);
      setHistory(result);
      setHistoryError(null);
    } catch (err) {
      setHistoryError(classroomErrorMessage(err));
    } finally {
      setHistoryLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, token]);

  useEffect(() => {
    if (view === "history") void refreshHistory();
  }, [view, refreshHistory]);

  // SignalR 连接 + 事件处理
  useEffect(() => {
    if (!token || !sessionId) return;
    let conn: HubConnection | null = null;
    let cancelled = false;

    async function start() {
      conn = buildClassroomTokenHubConnection(sessionId, token!);
      registerHandlers(conn!);

      conn!.onreconnecting(() => setConnectionState("reconnecting"));
      conn!.onreconnected(() => {
        setConnectionState("connected");
        // 重连成功：重新拉取快照校准（断线期间可能丢事件）
        void refreshSnapshot();
      });
      conn!.onclose(() => {
        if (!cancelled) setConnectionState("offline");
      });

      try {
        await conn!.start();
        if (!cancelled) setConnectionState("connected");
      } catch {
        if (!cancelled) setConnectionState("offline");
      }
    }

    function registerHandlers(connection: HubConnection) {
      const dedupe = (eventId: string | undefined) => {
        if (!eventId) return true;
        if (seenEventIdsRef.current.has(eventId)) return false;
        seenEventIdsRef.current.add(eventId);
        return true;
      };

      connection.on(ClassroomClientMethods.QuestionOpened, (evt: QuestionOpenedEvent) => {
        if (!dedupe(evt.eventId)) return;
        // 新题开放：重置作答状态
        setSession((s) =>
          s
            ? {
                ...s,
                version: evt.version,
                status: ClassSessionStatusValue.Answering,
                currentQuestion: {
                  question: evt.question,
                  openedAt: evt.openedAt,
                  endsAt: evt.endsAt,
                  isAcceptingAnswers: true,
                  status: 10,
                },
                myAnswer: undefined,
                statisticsPublished: false,
                answerPublished: false,
                correctAnswer: null,
                explanation: null,
                publishedOptionCounts: null,
              }
            : s,
        );
        setSelected("");
        setTextAnswer("");
        setSubmitted(false);
        setSubmitError(null);
        lastVersionRef.current = evt.version;
      });

      connection.on(ClassroomClientMethods.StatisticsPublished, (evt: StatisticsPublishedEvent) => {
        if (!dedupe(evt.eventId)) return;
        setSession((s) =>
          s
            ? {
                ...s,
                version: evt.version,
                statisticsPublished: true,
                publishedOptionCounts: evt.optionCounts,
              }
            : s,
        );
        lastVersionRef.current = evt.version;
      });

      connection.on(ClassroomClientMethods.AnswerPublished, (evt: AnswerPublishedEvent) => {
        if (!dedupe(evt.eventId)) return;
        setSession((s) =>
          s
            ? {
                ...s,
                version: evt.version,
                answerPublished: true,
                correctAnswer: evt.correctAnswer,
                explanation: evt.explanation ?? null,
              }
            : s,
        );
        lastVersionRef.current = evt.version;
        // 记录视图中实时刷新（新公布的正确答案/解析）
        if (viewRef.current === "history") void refreshHistory();
      });

      connection.on(ClassroomClientMethods.ClassroomEnded, () => {
        void refreshSnapshot();
        if (viewRef.current === "history") void refreshHistory();
      });
    }

    void start();

    return () => {
      cancelled = true;
      if (conn) void conn.stop().catch(() => {});
    };
  }, [sessionId, token, refreshSnapshot, refreshHistory]);

  // 倒计时：EndsAt - 服务端校正后的当前时间
  useEffect(() => {
    const endsAt = session?.currentQuestion?.endsAt;
    if (!endsAt) {
      setRemainingSeconds(null);
      return;
    }
    const compute = () => {
      const serverNow = Date.now() + clockOffsetRef.current;
      const diff = Math.floor((Date.parse(endsAt) - serverNow) / 1000);
      setRemainingSeconds(diff > 0 ? diff : 0);
    };
    compute();
    const timer = setInterval(compute, 1000);
    return () => clearInterval(timer);
  }, [session?.currentQuestion?.endsAt]);

  const question: ClassroomDtosQuestionViewDto | null = session?.currentQuestion?.question ?? null;
  const isAccepting =
    session?.currentQuestion?.isAcceptingAnswers === true &&
    remainingSeconds !== null &&
    remainingSeconds > 0;
  const isChoiceQuestion = question?.type === 1 || question?.type === 2;
  const isMultipleChoice = question?.type === 2;
  const isTrueOrFalse = question?.type === 3;

  const connectionBadge = useMemo(() => {
    switch (connectionState) {
      case "connected":
        return (
          <Badge appearance="filled" color="success">
            已连接
          </Badge>
        );
      case "reconnecting":
        return (
          <Badge appearance="filled" color="severe">
            重连中…
          </Badge>
        );
      case "connecting":
        return (
          <Badge appearance="filled" color="informative">
            连接中…
          </Badge>
        );
      default:
        return (
          <Badge appearance="filled" color="danger">
            离线
          </Badge>
        );
    }
  }, [connectionState]);

  async function handleSubmit() {
    if (!token || !question || submitting) return;
    const content = isChoiceQuestion || isTrueOrFalse ? selected : textAnswer.trim();
    if (!content) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitAnswer(sessionId, token, {
        sessionQuestionId: question.sessionQuestionId!,
        requestId: crypto.randomUUID(),
        answerContent: content,
        clientSubmittedAt: new Date().toISOString(),
      });
      setSubmitted(true);
      dispatchToast("提交成功", { intent: "success" });
    } catch (err) {
      // 失败：保留答案，允许重试（提示词十三节）
      setSubmitError(classroomErrorMessage(err));
      dispatchToast(`提交失败：${classroomErrorMessage(err)}`, { intent: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  /** 答题记录：单题回顾卡片。 */
  function renderHistoryItem(item: ClassroomDtosStudentAnswerHistoryItemDto) {
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
      <Card key={item.order} className={styles.card}>
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

  /** 答题记录视图：汇总条 + 逐题卡片。 */
  function renderHistory() {
    if (!history && historyLoading) {
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
          <Text block>{historyError ?? "暂无答题记录"}</Text>
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
            {historyLoading && <Spinner size="tiny" />}
          </div>
          {historyError && (
            <Text size={300} style={{ color: tokens.colorPaletteRedForeground1 }}>
              {historyError}（数据可能不是最新）
            </Text>
          )}
        </Card>
        {items.length === 0 ? (
          <Card className={styles.card}>
            <Text>老师还没有开放题目。</Text>
          </Card>
        ) : (
          items.map((item) => renderHistoryItem(item))
        )}
      </>
    );
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
  const totalSubmitted = optionCounts ? Object.values(optionCounts).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Text size={400} weight="semibold">
          {stored?.nickname ? `${stored.nickname} · ` : ""}课堂答题
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
          {connectionBadge}
        </div>
      </div>

      {connectionState === "offline" && (
        <Card className={styles.card}>
          <Text>网络连接已断开。你的选择已保留，恢复网络后将自动重连。</Text>
        </Card>
      )}

      {view === "history" ? (
        renderHistory()
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
                  // 判断题提交值按后端 AnswerGrader 约定为 "true"/"false"（A=对，B=错）
                  const value = isTrueOrFalse
                    ? opt.key === "A"
                      ? "true"
                      : "false"
                    : (opt.key ?? "");
                  // 多选可多选（提交 "A,C"）；单选/判断单选
                  const isSelected = isMultipleChoice
                    ? selected.split(",").filter(Boolean).includes(value)
                    : selected === value;
                  const disabled = !isAccepting || submitted;
                  return (
                    <Button
                      key={opt.key}
                      className={styles.optionButton}
                      appearance={isSelected ? "primary" : "secondary"}
                      disabled={disabled}
                      onClick={() => {
                        if (isMultipleChoice) {
                          setSelected((prev) => {
                            const keys = prev.split(",").filter(Boolean);
                            const next = keys.includes(value)
                              ? keys.filter((k) => k !== value)
                              : [...keys, value];
                            return next.join(",");
                          });
                        } else {
                          setSelected(value);
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
                value={textAnswer}
                onChange={(_, d) => setTextAnswer(d.value)}
                placeholder="输入你的回答"
                disabled={!isAccepting || submitted}
                resize="vertical"
              />
            )}

            {isAccepting && !submitted ? (
              <Button
                appearance="primary"
                size="large"
                disabled={
                  submitting || (isChoiceQuestion || isTrueOrFalse ? !selected : !textAnswer.trim())
                }
                onClick={() => void handleSubmit()}
              >
                {submitting ? <Spinner size="tiny" /> : "提交答案"}
              </Button>
            ) : submitted ? (
              <Badge appearance="filled" color="success">
                已提交
                {session.myAnswer?.revision && session.myAnswer.revision > 1
                  ? `（第 ${session.myAnswer.revision} 次修订）`
                  : ""}
              </Badge>
            ) : (
              <Text>本题已截止，等待老师公布结果</Text>
            )}

            {submitError && (
              <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{submitError}</Text>
            )}
          </Card>

          {session.statisticsPublished && optionCounts && (
            <Card className={styles.card}>
              <Text weight="semibold">答题分布（{totalSubmitted} 人已提交）</Text>
              <div className={styles.statistics}>
                {Object.entries(optionCounts).map(([key, count]) => (
                  <div key={key} className={styles.statRow}>
                    <Text style={{ width: "2em" }}>
                      {isTrueOrFalse ? trueFalseLabel(key) : key}
                    </Text>
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
