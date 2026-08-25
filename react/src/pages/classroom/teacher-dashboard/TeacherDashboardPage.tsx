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
import { Badge, Button, Card, Spinner, Text, Title2 } from "@fluentui/react-components";
import { Copy20Regular, ProjectionScreen20Regular } from "@fluentui/react-icons";
import type { HubConnection } from "@microsoft/signalr";
import { useClassSessionGetSnapshot } from "@/api/hooks/classSession/useClassSessionGetSnapshot";
import { extractAbpErrorMessage } from "@/lib/api/error";
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
  const remainingSeconds = useServerClockCountdown(
    snapshot?.currentQuestion?.endsAt,
    clockOffsetRef,
  );

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
          <ConnectionBadge state={connectionState} />
        </div>
        <div className={styles.headerLeft}>
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

      {/* 控制台 */}
      <ControlsCard
        control={control}
        classroomCode={snapshot.classroomCode}
        currentQuestionNumber={snapshot.currentQuestionNumber ?? 0}
        questionCount={snapshot.questionCount ?? 0}
      />

      {/* 当前题 */}
      <CurrentQuestionCard
        status={status}
        questionStatus={questionStatus}
        hasOpenQuestion={control.hasOpenQuestion}
        question={question}
        correctAnswer={snapshot.currentQuestion?.correctAnswer}
        explanation={snapshot.currentQuestion?.explanation}
        remainingSeconds={remainingSeconds}
      />

      {/* 实时统计 */}
      <LiveStatisticsCard dashboard={dashboard} question={question} />

      {/* 学员列表 */}
      <ParticipantsCard participants={dashboard?.participants ?? []} />
    </div>
  );
}
