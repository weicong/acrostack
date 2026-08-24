/**
 * 教师驾驶舱（/classroom/$sessionId）。
 *
 * 提示词四节"教师驾驶舱"：
 * - 实时显示：课堂码、状态、当前题、在线/参与/未开始/作答中/已提交人数、
 *   截止未交、完成率、选项分布、正确率、平均用时、学员列表、断线状态、
 *   最近统计更新时间、连接状态
 * - 控制按钮按状态机禁用（服务端仍会再次校验）：
 *   开始课堂 / 下一题 / 截止当前题 / 公布统计 / 公布答案 / 结束课堂
 *
 * 实时通道：SignalR 教师分组（OpenIddict 令牌）。
 * - DashboardUpdated 直接替换统计（服务端节流合并推送）
 * - 其余事件刷新教师快照；版本跳跃（丢事件）时也刷新快照校准
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  Input,
  Spinner,
  Text,
  Title2,
  Title3,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useToastController } from "@fluentui/react-components";
import { Copy20Regular, ProjectionScreen20Regular } from "@fluentui/react-icons";
import type { HubConnection } from "@microsoft/signalr";
import {
  ClassroomClientMethods,
  ClassSessionStatusValue,
  SessionQuestionStatusValue,
  classSessionStatusLabel,
  onlineStatusLabel,
  participantAnswerStateLabel,
  questionTypeLabel,
  type ClassroomEventBase,
  type DashboardUpdatedEvent,
  type ParticipantChangedEvent,
} from "@/pages/classroom/classroomEvents";
import { buildTeacherHubConnection } from "@/pages/classroom/classroomHub";
import {
  closeQuestion,
  createPresentationToken,
  finishSession,
  getTeacherSnapshot,
  openNextQuestion,
  publishAnswer,
  publishStatistics,
  startSession,
  teacherApiErrorMessage,
} from "@/pages/classroom/teacherApi";
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import type { ClassroomDtosTeacherSnapshotDto } from "@/api/models/classroom/dtos/TeacherSnapshotDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";

type ConnectionState = "connecting" | "connected" | "reconnecting" | "offline";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    paddingBottom: tokens.spacingVerticalXXL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  classroomCode: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
    letterSpacing: "0.12em",
    lineHeight: 1,
  },
  card: {
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  controls: {
    display: "flex",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: tokens.spacingHorizontalS,
  },
  statItem: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  statValue: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    lineHeight: 1.1,
  },
  statLabel: { color: tokens.colorNeutralForeground3 },
  distribution: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statBar: {
    height: "16px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
    minWidth: 0,
  },
  countdown: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
  },
  participants: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    maxHeight: "420px",
    overflowY: "auto",
  },
  participantRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS + " " + tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorNeutralBackground3,
  },
  center: { textAlign: "center", padding: tokens.spacingVerticalXXL },
});

export function TeacherDashboardPage() {
  const styles = useStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  const { dispatchToast } = useToastController();

  const [snapshot, setSnapshot] = useState<ClassroomDtosTeacherSnapshotDto | null>(null);
  const [dashboard, setDashboard] = useState<ClassroomDtosDashboardDto | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("connecting");
  const [loadError, setLoadError] = useState<string | null>(null);
  const [busyAction, setBusyAction] = useState<string | null>(null);
  const [durationSeconds, setDurationSeconds] = useState("60");
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  const clockOffsetRef = useRef(0);
  const seenEventIdsRef = useRef(new Set<string>());
  const lastVersionRef = useRef(0);

  const refreshSnapshot = useCallback(async () => {
    try {
      const snap = await getTeacherSnapshot(sessionId);
      setSnapshot(snap);
      if (snap.dashboard) setDashboard(snap.dashboard);
      setLoadError(null);
      clockOffsetRef.current = Date.parse(snap.serverTime ?? "") - Date.now() || 0;
      lastVersionRef.current = snap.version ?? 0;
    } catch (err) {
      setLoadError(teacherApiErrorMessage(err));
    }
  }, [sessionId]);

  useEffect(() => {
    void refreshSnapshot();
  }, [refreshSnapshot]);

  // SignalR 教师连接
  useEffect(() => {
    let conn: HubConnection | null = null;
    let cancelled = false;

    async function start() {
      try {
        conn = await buildTeacherHubConnection(sessionId);
      } catch (err) {
        if (!cancelled) {
          setConnectionState("offline");
          setLoadError(teacherApiErrorMessage(err));
        }
        return;
      }
      registerHandlers(conn);

      conn.onreconnecting(() => setConnectionState("reconnecting"));
      conn.onreconnected(() => {
        setConnectionState("connected");
        void refreshSnapshot(); // 断线期间可能丢事件，重连后校准
      });
      conn.onclose(() => {
        if (!cancelled) setConnectionState("offline");
      });

      try {
        await conn.start();
        if (!cancelled) setConnectionState("connected");
      } catch {
        if (!cancelled) setConnectionState("offline");
      }
    }

    function registerHandlers(connection: HubConnection) {
      // 事件去重 + 版本跳跃检测（丢事件时重新拉快照）
      const check = (evt: ClassroomEventBase): boolean => {
        if (evt.eventId && seenEventIdsRef.current.has(evt.eventId)) return false;
        if (evt.eventId) seenEventIdsRef.current.add(evt.eventId);
        const gap = lastVersionRef.current > 0 && evt.version > lastVersionRef.current + 1;
        lastVersionRef.current = Math.max(lastVersionRef.current, evt.version);
        if (gap) void refreshSnapshot();
        return !gap;
      };

      connection.on(ClassroomClientMethods.DashboardUpdated, (evt: DashboardUpdatedEvent) => {
        if (!check(evt)) return;
        setDashboard(evt.dashboard);
      });

      connection.on(ClassroomClientMethods.ParticipantChanged, (evt: ParticipantChangedEvent) => {
        if (!check(evt)) return;
        // 单个学员状态变更：就地更新，避免整表刷新
        setDashboard((d) =>
          d
            ? {
                ...d,
                version: evt.version,
                participants: (d.participants ?? []).map((p) =>
                  p.participantId === evt.participantId
                    ? {
                        ...p,
                        nickname: evt.nickname,
                        onlineStatus: evt.onlineStatus as 0 | 1,
                        answerState: evt.answerState as 0 | 1 | 2,
                        submittedAt: evt.submittedAt ?? null,
                      }
                    : p,
                ),
              }
            : d,
        );
      });

      // 课堂/题目生命周期事件：快照重新校准（含 currentQuestion 状态）
      const resync = (evt: ClassroomEventBase) => {
        if (!check(evt)) return;
        void refreshSnapshot();
      };
      connection.on(ClassroomClientMethods.ClassroomStarted, resync);
      connection.on(ClassroomClientMethods.QuestionOpened, resync);
      connection.on(ClassroomClientMethods.QuestionClosed, resync);
      connection.on(ClassroomClientMethods.StatisticsPublished, resync);
      connection.on(ClassroomClientMethods.AnswerPublished, resync);
      connection.on(ClassroomClientMethods.ClassroomEnded, resync);
    }

    void start();

    return () => {
      cancelled = true;
      if (conn) void conn.stop().catch(() => {});
    };
  }, [sessionId, refreshSnapshot]);

  // 当前题倒计时（服务端时钟校正）
  useEffect(() => {
    const endsAt = snapshot?.currentQuestion?.endsAt;
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
  }, [snapshot?.currentQuestion?.endsAt]);

  const status = snapshot?.status ?? 0;
  const question: ClassroomDtosQuestionViewDto | null = snapshot?.currentQuestion?.question ?? null;
  const questionStatus = snapshot?.currentQuestion?.status ?? 0;
  const questionCount = snapshot?.questionCount ?? 0;
  const currentQuestionNumber = snapshot?.currentQuestionNumber ?? 0;
  const statistics = dashboard?.statistics ?? null;
  const participants = dashboard?.participants ?? [];

  // 控制按钮可用性（前端禁用只是体验优化；服务端仍校验状态机与权限）
  const canStart = status === ClassSessionStatusValue.Preparing;
  const hasOpenQuestion = questionStatus === SessionQuestionStatusValue.Open;
  const canNext =
    !canStart &&
    status !== ClassSessionStatusValue.Finished &&
    !hasOpenQuestion &&
    currentQuestionNumber < questionCount;
  const canClose = hasOpenQuestion;
  const canPublishStatistics =
    question !== null &&
    (questionStatus === SessionQuestionStatusValue.Closed ||
      questionStatus === SessionQuestionStatusValue.StatisticsPublished);
  const canPublishAnswer =
    question !== null &&
    (questionStatus === SessionQuestionStatusValue.Closed ||
      questionStatus === SessionQuestionStatusValue.StatisticsPublished);
  const canFinish =
    status !== ClassSessionStatusValue.Preparing && status !== ClassSessionStatusValue.Finished;

  async function runAction(name: string, action: () => Promise<unknown>) {
    if (busyAction) return;
    setBusyAction(name);
    try {
      await action();
      await refreshSnapshot();
    } catch (err) {
      dispatchToast(`操作失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    } finally {
      setBusyAction(null);
    }
  }

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

  async function handleCopyInvite() {
    const code = snapshot?.classroomCode ?? "";
    try {
      await navigator.clipboard.writeText(`课堂码：${code}`);
      dispatchToast("已复制课堂码", { intent: "success" });
    } catch {
      dispatchToast(`复制失败，课堂码：${code}`, { intent: "warning" });
    }
  }

  async function handleOpenPresentation() {
    if (busyAction) return;
    setBusyAction("presentation");
    try {
      const result = await createPresentationToken(sessionId);
      if (!result.accessToken) throw new Error("服务端未返回投屏令牌");
      window.open(
        `/presentation/${sessionId}?t=${encodeURIComponent(result.accessToken)}`,
        "_blank",
        "noopener",
      );
    } catch (err) {
      dispatchToast(`投屏令牌生成失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    } finally {
      setBusyAction(null);
    }
  }

  if (loadError && !snapshot) {
    return (
      <div className={styles.page}>
        <Card className={styles.card}>
          <Title2>无法加载课堂</Title2>
          <Text block>{loadError}</Text>
          <Link to="/classroom">
            <Button appearance="primary">返回课堂列表</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!snapshot) {
    return (
      <div className={styles.page}>
        <div className={styles.center}>
          <Spinner />
          <Text block>正在加载驾驶舱…</Text>
        </div>
      </div>
    );
  }

  const optionLabelMap = new Map<string, string>();
  question?.options?.forEach((opt) => optionLabelMap.set(opt.key ?? "", opt.text ?? ""));

  const optionCounts = statistics?.optionCounts ?? null;
  const totalSubmitted = optionCounts ? Object.values(optionCounts).reduce((a, b) => a + b, 0) : 0;
  const notSubmitted = statistics
    ? (statistics.notStartedCount ?? 0) + (statistics.answeringCount ?? 0)
    : 0;

  const duration = Number.parseInt(durationSeconds, 10);

  return (
    <div className={styles.page}>
      {/* 头部：课堂码 + 状态 + 连接 */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.classroomCode}>{snapshot.classroomCode ?? "—"}</span>
          <Badge
            appearance="filled"
            color={status === ClassSessionStatusValue.Finished ? "subtle" : "brand"}
          >
            {classSessionStatusLabel[status] ?? "未知"}
          </Badge>
          {connectionBadge}
        </div>
        <div className={styles.headerLeft}>
          <Button
            icon={<Copy20Regular />}
            appearance="secondary"
            onClick={() => void handleCopyInvite()}
          >
            复制课堂码
          </Button>
          <Button
            icon={<ProjectionScreen20Regular />}
            appearance="secondary"
            onClick={() => void handleOpenPresentation()}
            disabled={busyAction !== null}
          >
            打开投屏
          </Button>
        </div>
      </div>

      {/* 控制台 */}
      <Card className={styles.card}>
        <Title3>课堂控制</Title3>
        <div className={styles.controls}>
          <Button
            appearance="primary"
            disabled={!canStart || busyAction !== null}
            onClick={() => void runAction("start", () => startSession(sessionId))}
          >
            {busyAction === "start" ? <Spinner size="tiny" /> : "开始课堂"}
          </Button>

          <Input
            type="number"
            min={10}
            max={600}
            step={10}
            style={{ width: "110px" }}
            value={durationSeconds}
            onChange={(_, d) => setDurationSeconds(d.value)}
            contentBefore="时长"
            contentAfter="秒"
            disabled={!canNext}
          />
          <Button
            appearance="primary"
            disabled={!canNext || busyAction !== null || !Number.isFinite(duration) || duration < 1}
            onClick={() =>
              void runAction("next", () => openNextQuestion(sessionId, duration || undefined))
            }
            title={canNext ? "开放下一题" : "当前题开放中或已无剩余题目"}
          >
            {busyAction === "next" ? <Spinner size="tiny" /> : "下一题"}
          </Button>

          <Button
            appearance="primary"
            disabled={!canClose || busyAction !== null}
            onClick={() =>
              void runAction("close", () => closeQuestion(sessionId, question!.sessionQuestionId!))
            }
          >
            {busyAction === "close" ? <Spinner size="tiny" /> : "截止当前题"}
          </Button>

          <Button
            disabled={!canPublishStatistics || busyAction !== null}
            onClick={() =>
              void runAction("publishStats", () =>
                publishStatistics(sessionId, question!.sessionQuestionId!),
              )
            }
          >
            {busyAction === "publishStats" ? <Spinner size="tiny" /> : "公布匿名统计"}
          </Button>

          <Button
            disabled={!canPublishAnswer || busyAction !== null}
            onClick={() =>
              void runAction("publishAnswer", () =>
                publishAnswer(sessionId, question!.sessionQuestionId!),
              )
            }
          >
            {busyAction === "publishAnswer" ? <Spinner size="tiny" /> : "公布正确答案"}
          </Button>

          <Button
            appearance="primary"
            style={{ marginLeft: "auto" }}
            disabled={!canFinish || busyAction !== null}
            onClick={() => void runAction("finish", () => finishSession(sessionId))}
          >
            {busyAction === "finish" ? <Spinner size="tiny" /> : "结束课堂"}
          </Button>
        </div>
        <Text size={200}>
          进度：第 {currentQuestionNumber} / {questionCount} 题 · 学员加入地址
          {snapshot.classroomCode ? `/student/join?code=${snapshot.classroomCode}` : "—"}
        </Text>
      </Card>

      {/* 当前题 */}
      <Card className={styles.card}>
        <div className={styles.header}>
          <Title3>
            {question
              ? `第 ${question.order} 题 · ${questionTypeLabel[question.type ?? 0] ?? "题目"}`
              : "暂无开放题目"}
          </Title3>
          {hasOpenQuestion && remainingSeconds !== null && (
            <span className={styles.countdown}>
              {Math.floor(remainingSeconds / 60)}:{String(remainingSeconds % 60).padStart(2, "0")}
            </span>
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
                    {snapshot?.currentQuestion?.correctAnswer &&
                      questionStatus === SessionQuestionStatusValue.AnswerPublished && (
                        <Text
                          weight="semibold"
                          style={{
                            marginLeft: tokens.spacingHorizontalS,
                            color: tokens.colorPaletteGreenForeground1,
                          }}
                        >
                          {snapshot?.currentQuestion?.correctAnswer === opt.key ? "✓ 正确答案" : ""}
                        </Text>
                      )}
                  </Text>
                ))}
              </div>
            )}
            {questionStatus === SessionQuestionStatusValue.AnswerPublished &&
              snapshot?.currentQuestion?.explanation && (
                <Text block size={300}>
                  解析：{snapshot.currentQuestion.explanation}
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

      {/* 实时统计 */}
      <Card className={styles.card}>
        <div className={styles.header}>
          <Title3>实时统计</Title3>
          {dashboard?.lastStatisticsUpdatedAt && (
            <Text size={200} className={styles.statLabel}>
              更新于 {new Date(dashboard.lastStatisticsUpdatedAt).toLocaleTimeString()}
            </Text>
          )}
        </div>
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{dashboard?.onlineCount ?? 0}</span>
            <span className={styles.statLabel}>在线人数</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{dashboard?.totalParticipants ?? 0}</span>
            <span className={styles.statLabel}>参与总人数</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{statistics?.notStartedCount ?? 0}</span>
            <span className={styles.statLabel}>未开始</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{statistics?.answeringCount ?? 0}</span>
            <span className={styles.statLabel}>作答中</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{statistics?.submittedCount ?? 0}</span>
            <span className={styles.statLabel}>已提交</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{notSubmitted}</span>
            <span className={styles.statLabel}>截止未交</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {Math.round((statistics?.completionRate ?? 0) * 100)}%
            </span>
            <span className={styles.statLabel}>完成率</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {statistics?.correctRate != null
                ? `${Math.round(statistics.correctRate * 100)}%`
                : "—"}
            </span>
            <span className={styles.statLabel}>正确率</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {statistics?.averageAnswerSeconds != null
                ? `${Math.round(statistics.averageAnswerSeconds)}s`
                : "—"}
            </span>
            <span className={styles.statLabel}>平均用时</span>
          </div>
        </div>

        {optionCounts && (
          <div className={styles.distribution}>
            <Text weight="semibold">选项分布（{totalSubmitted} 人已提交）</Text>
            {Object.entries(optionCounts).map(([key, count]) => (
              <div key={key} className={styles.statRow}>
                <Text style={{ width: "3em" }}>
                  {key}. {optionLabelMap.get(key) ?? ""}
                </Text>
                <div
                  className={styles.statBar}
                  style={{
                    width: `${totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}%`,
                    minWidth: count > 0 ? "12px" : 0,
                  }}
                />
                <Text size={300}>
                  {count} 人（{totalSubmitted > 0 ? Math.round((count / totalSubmitted) * 100) : 0}
                  %）
                </Text>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* 学员列表 */}
      <Card className={styles.card}>
        <div className={styles.header}>
          <Title3>学员（{participants.length}）</Title3>
          <Text size={200} className={styles.statLabel}>
            断线学员以灰色展示
          </Text>
        </div>
        {participants.length === 0 ? (
          <Text size={300}>还没有学员加入。等待学员通过课堂码加入。</Text>
        ) : (
          <div className={styles.participants}>
            {participants.map((p) => (
              <ParticipantRow key={p.participantId} participant={p} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function ParticipantRow({ participant }: { participant: ClassroomDtosParticipantStateDto }) {
  const styles = useStyles();
  const online = participant.onlineStatus === 1;
  const answerState = participant.answerState ?? 0;
  return (
    <div className={styles.participantRow} style={{ opacity: online ? 1 : 0.55 }}>
      <Badge appearance={online ? "filled" : "ghost"} color={online ? "success" : "subtle"}>
        {onlineStatusLabel[participant.onlineStatus ?? 0] ?? "未知"}
      </Badge>
      <Text weight="semibold" style={{ minWidth: "8em" }}>
        {participant.nickname ?? "匿名"}
      </Text>
      {participant.studentNumber && (
        <Text size={200} className={styles.statLabel}>
          {participant.studentNumber}
        </Text>
      )}
      <Badge
        appearance="outline"
        color={answerState === 2 ? "success" : answerState === 1 ? "informative" : "subtle"}
      >
        {participantAnswerStateLabel[answerState] ?? "未知"}
      </Badge>
      {participant.isCorrect != null && (
        <Badge appearance="outline" color={participant.isCorrect ? "success" : "danger"}>
          {participant.isCorrect ? "正确" : "错误"}
        </Badge>
      )}
      {participant.submittedAt && (
        <Text size={200} className={styles.statLabel}>
          {new Date(participant.submittedAt).toLocaleTimeString()}
        </Text>
      )}
    </div>
  );
}
