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
 *
 * 数据获取：全部使用 Kubb 生成的 react-query hooks，不再手写请求封装。
 * 本文件只负责编排：快照/实时接线与子组件组装；
 * 样式见 styles/teacherDashboard，控制动作见 hooks/useSessionControl，
 * 展示卡片见 components/。
 */
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  Spinner,
  Text,
  Title2,
  mergeClasses,
  useToastController,
} from "@fluentui/react-components";
import type { ComponentProps } from "react";

type BadgeColor = NonNullable<ComponentProps<typeof Badge>["color"]>;
import {
  Board20Regular,
  Copy20Regular,
  Link20Regular,
  PeopleTeam20Regular,
  ProjectionScreen20Regular,
} from "@fluentui/react-icons";
import { formatCountdown } from "../shared/hooks/useServerClockCountdown";
import { usePageTitle } from "@/lib/usePageTitle";
import type { HubConnection } from "@microsoft/signalr";
import { useClassSessionGetSnapshot } from "@/api/hooks/classSession/useClassSessionGetSnapshot";
import { extractAbpErrorMessage } from "@/lib/http/error";
import {
  ClassroomClientMethods,
  ClassSessionStatusValue,
  classSessionStatusLabel,
} from "../shared/constants/classroom";
import type {
  ClassroomEventBase,
  DashboardUpdatedEvent,
  ParticipantChangedEvent,
} from "../shared/types/classroom-events";
import { buildTeacherHubConnection } from "../shared/utils/classroomHub";
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";
import { useTeacherDashboardStyles } from "./styles/teacherDashboard";
import { useSessionControl } from "./hooks/useSessionControl";
import { useServerClockCountdown } from "../shared/hooks/useServerClockCountdown";
import { ConnectionBadge, type ConnectionState } from "../shared/components/ConnectionBadge";
import { ControlsCard } from "./components/ControlsCard";
import { CurrentQuestionCard } from "./components/CurrentQuestionCard";
import { LeaderboardCard } from "./components/LeaderboardCard";
import { LiveStatisticsCard } from "./components/LiveStatisticsCard";
import { ParticipantsCard } from "./components/ParticipantsCard";

export function TeacherDashboardPage() {
  const styles = useTeacherDashboardStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };

  const [dashboard, setDashboard] = useState<ClassroomDtosDashboardDto | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("connecting");
  const [hubError, setHubError] = useState<string | null>(null);

  // 服务端时钟偏移 + 事件去重 + 版本跳跃检测
  const clockOffsetRef = useRef(0);
  const seenEventIdsRef = useRef(new Set<string>());
  const lastVersionRef = useRef(0);

  // 教师快照：初始加载 + 各类事件后重新校准均走同一查询
  const snapshotQuery = useClassSessionGetSnapshot(
    { path: { id: sessionId } },
    { query: { enabled: Boolean(sessionId) } },
  );
  const refreshSnapshot = snapshotQuery.refetch;
  const snapshot = snapshotQuery.data ?? null;

  // 标签页标题带课堂码，多课堂标签时可直接区分
  usePageTitle(snapshot?.classroomCode ? `驾驶舱 ${snapshot.classroomCode}` : "课堂驾驶舱");

  // 快照到达后：同步仪表盘基线 + 服务端时钟偏移 + 版本号（供事件去重/跳跃检测）
  useEffect(() => {
    if (!snapshot) return;
    if (snapshot.dashboard) setDashboard(snapshot.dashboard);
    clockOffsetRef.current = Date.parse(snapshot.serverTime ?? "") - Date.now() || 0;
    lastVersionRef.current = snapshot.version ?? 0;
  }, [snapshot]);

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
          setHubError(extractAbpErrorMessage(err));
        }
        return;
      }
      registerHandlers(conn);

      conn.onreconnecting(() => setConnectionState("reconnecting"));
      conn.onreconnected(() => {
        setConnectionState("connected");
        seenEventIdsRef.current.clear();
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
        // 单个学员状态变更：就地 upsert（新上线学员追加），避免整表刷新。
        // 离线事件仅翻转在线状态，不覆盖昵称/作答状态（断开时后端不带这些字段）。
        setDashboard((d) => {
          if (!d) return d;
          const list = d.participants ?? [];
          const idx = list.findIndex((p) => p.participantId === evt.participantId);
          const isOnline = evt.onlineStatus === 1;

          // 离线：仅更新已存在学员的在线状态
          if (!isOnline) {
            if (idx === -1 || list[idx].onlineStatus === 0) {
              return { ...d, version: evt.version };
            }
            return {
              ...d,
              version: evt.version,
              onlineCount: Math.max(0, (d.onlineCount ?? 0) - 1),
              participants: list.map((p, i) =>
                i === idx ? { ...p, onlineStatus: 0 as 0 | 1 } : p,
              ),
            };
          }

          // 上线：upsert（新学员追加，已存在则合并；answerState=0 时保留原作答状态）
          const evtAnswerState = evt.answerState as 0 | 1 | 2;
          if (idx === -1) {
            return {
              ...d,
              version: evt.version,
              totalParticipants: (d.totalParticipants ?? 0) + 1,
              onlineCount: (d.onlineCount ?? 0) + 1,
              participants: [
                ...list,
                {
                  participantId: evt.participantId,
                  nickname: evt.nickname,
                  onlineStatus: 1 as 0 | 1,
                  answerState: evtAnswerState,
                  submittedAt: evt.submittedAt ?? null,
                },
              ],
            };
          }
          const prev = list[idx];
          const wasOnline = prev.onlineStatus === 1;
          return {
            ...d,
            version: evt.version,
            onlineCount: wasOnline ? d.onlineCount : (d.onlineCount ?? 0) + 1,
            participants: list.map((p, i) =>
              i === idx
                ? {
                    ...p,
                    nickname: evt.nickname || p.nickname,
                    onlineStatus: 1 as 0 | 1,
                    answerState: evtAnswerState || (p.answerState ?? 0),
                    submittedAt: evt.submittedAt ?? p.submittedAt ?? null,
                  }
                : p,
            ),
          };
        });
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
  const remainingSeconds = useServerClockCountdown(
    snapshot?.currentQuestion?.endsAt,
    clockOffsetRef,
  );

  // 倒计时总时长（openedAt→endsAt），用于进度条比例
  const countdownTotal = (() => {
    const openedAt = snapshot?.currentQuestion?.openedAt;
    const endsAt = snapshot?.currentQuestion?.endsAt;
    if (!openedAt || !endsAt) return null;
    const ms = Date.parse(endsAt) - Date.parse(openedAt);
    return Number.isFinite(ms) && ms > 0 ? Math.round(ms / 1000) : null;
  })();

  const status = snapshot?.status ?? 0;
  const question: ClassroomDtosQuestionViewDto | null = snapshot?.currentQuestion?.question ?? null;
  const questionStatus = snapshot?.currentQuestion?.status ?? 0;
  const loadError = snapshotQuery.error ? extractAbpErrorMessage(snapshotQuery.error) : hubError;

  // 控制动作：7 个 mutation + busy 状态 + 可用性标志 + 投屏/复制课堂码
  const control = useSessionControl({
    sessionId,
    status,
    question,
    questionStatus,
    currentQuestionNumber: snapshot?.currentQuestionNumber ?? 0,
    questionCount: snapshot?.questionCount ?? 0,
    classroomCode: snapshot?.classroomCode,
    refreshSnapshot,
  });

  // 倒计时归零自动截止：服务端在读取快照时惰性截止过期题目（AutoCloseIfExpired）。
  // 注意前端 Math.floor 使"显示归零"比服务端 EndsAt 早约 1 秒，单次刷新可能拿回未截止
  // 状态；因此在归零状态下轮询刷新，直到快照确认题目已截止（hasOpenQuestion 离开）。
  const { dispatchToast } = useToastController();
  const { hasOpenQuestion, busyAction } = control;
  const countdownExpired = hasOpenQuestion && remainingSeconds === 0;
  useEffect(() => {
    if (!countdownExpired || busyAction !== null) return;
    void refreshSnapshot();
    dispatchToast("作答时间到，正在自动截止当前题…", { intent: "info" });
    const timer = setInterval(() => void refreshSnapshot(), 1500);
    return () => clearInterval(timer);
  }, [countdownExpired, busyAction, refreshSnapshot, dispatchToast]);

  const statusColor: BadgeColor =
    status === ClassSessionStatusValue.Finished
      ? "success"
      : status === ClassSessionStatusValue.Answering
        ? "brand"
        : status === ClassSessionStatusValue.Explaining
          ? "warning"
          : status === ClassSessionStatusValue.Waiting
            ? "informative"
            : "subtle";

  const showCountdown = control.hasOpenQuestion && remainingSeconds !== null;
  const totalParticipants = dashboard?.totalParticipants ?? 0;
  const countdownPct =
    showCountdown && countdownTotal
      ? Math.max(0, Math.min(100, (remainingSeconds! / countdownTotal) * 100))
      : 0;

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
          <Spinner size="large" />
          <Text block>正在加载驾驶舱…</Text>
        </div>
      </div>
    );
  }

  const questionCount = snapshot.questionCount ?? 0;
  const currentQuestionNumber = snapshot.currentQuestionNumber ?? 0;

  return (
    <div className={styles.page}>
      {/* Hero 顶条：深色渐变 + 光斑 + 课堂码 + 状态 + 进度点 + 大倒计时进度条 + 操作 */}
      <div className={styles.heroBar}>
        <div className={styles.heroBlob + " " + styles.heroBlobA} />
        <div className={styles.heroBlob + " " + styles.heroBlobB} />
        <div className={styles.heroGrid} />
        <div className={styles.heroStripe} />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroCodeLabel}>课堂码</span>
            <div className={styles.heroLeftTop}>
              <span className={styles.classroomCode}>{snapshot.classroomCode ?? "—"}</span>
              <Badge appearance="filled" color={statusColor}>
                {classSessionStatusLabel[status] ?? "未知"}
              </Badge>
              <ConnectionBadge state={connectionState} />
            </div>
            <div className={styles.heroMeta}>
              <PeopleTeam20Regular />
              <span>{totalParticipants} 人参与</span>
              <span className={styles.heroMetaDivider} />
              <Board20Regular />
              <span>共 {questionCount} 题</span>
              {snapshot.classroomCode && (
                <>
                  <span className={styles.heroMetaDivider} />
                  <Link20Regular />
                  <span>加入地址 /student/join?code={snapshot.classroomCode}</span>
                </>
              )}
            </div>
          </div>

          <div className={styles.heroCenter}>
            {questionCount > 0 && (
              <div
                className={styles.progressDots}
                role="img"
                aria-label={`进度：第 ${currentQuestionNumber} / ${questionCount} 题`}
              >
                {Array.from({ length: questionCount }, (_, i) => {
                  const n = i + 1;
                  return (
                    <span
                      key={n}
                      className={mergeClasses(
                        styles.progressDot,
                        n < currentQuestionNumber && styles.progressDotDone,
                        n === currentQuestionNumber &&
                          status !== ClassSessionStatusValue.Finished &&
                          styles.progressDotActive,
                      )}
                    />
                  );
                })}
              </div>
            )}
            {showCountdown ? (
              <>
                <span
                  className={mergeClasses(
                    styles.heroCountdown,
                    remainingSeconds! < 10 && styles.heroCountdownDanger,
                  )}
                >
                  {formatCountdown(remainingSeconds!)}
                </span>
                <div className={styles.countdownTrack}>
                  <div
                    className={mergeClasses(
                      styles.countdownFill,
                      remainingSeconds! < 10 && styles.countdownFillDanger,
                    )}
                    style={{ width: `${countdownPct}%` }}
                  />
                </div>
                <span className={styles.heroCountdownLabel}>剩余作答时间</span>
              </>
            ) : (
              <>
                <span className={styles.heroCountdown}>
                  第 {currentQuestionNumber} / {questionCount} 题
                </span>
                <span className={styles.heroCountdownLabel}>
                  {classSessionStatusLabel[status] ?? "课堂"}
                </span>
              </>
            )}
          </div>

          <div className={styles.heroRight}>
            <Button
              icon={<Copy20Regular />}
              appearance="secondary"
              onClick={() => void control.copyClassroomCode()}
            >
              复制课堂码
            </Button>
            <Button
              icon={<ProjectionScreen20Regular />}
              appearance="secondary"
              onClick={() => void control.openPresentation()}
              disabled={control.busyAction !== null}
            >
              打开投屏
            </Button>
          </div>
        </div>
      </div>

      {/* 控制条：独立于 Hero 的操作行，与下方卡片同族对齐 */}
      <ControlsCard control={control} />

      {/* 双栏：左 当前题 + 学员列表 ｜ 右 实时统计 */}
      <div className={styles.mainGrid}>
        <div className={styles.mainCol}>
          <CurrentQuestionCard
            status={status}
            questionStatus={questionStatus}
            question={question}
            correctAnswer={snapshot.currentQuestion?.correctAnswer}
            explanation={snapshot.currentQuestion?.explanation}
          />
          <ParticipantsCard participants={dashboard?.participants ?? []} />
        </div>
        <div className={styles.mainCol}>
          <LiveStatisticsCard
            dashboard={dashboard}
            question={question}
            correctAnswer={snapshot.currentQuestion?.correctAnswer}
          />
          <LeaderboardCard
            participants={dashboard?.participants ?? []}
            openedAt={snapshot.currentQuestion?.openedAt}
            questionNumber={currentQuestionNumber}
          />
        </div>
      </div>
    </div>
  );
}
