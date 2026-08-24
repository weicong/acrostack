/**
 * 投屏端（/presentation/$sessionId?t=token）。
 *
 * 提示词四节"投屏端"：只读大屏视图，只展示——
 * 当前题目、题目序号、倒计时、已提交人数/总人数、匿名选项分布、
 * 教师公布后的正确答案与解析。
 *
 * 隐私约束：本页数据来自只读投屏快照（/api/presentation/...），
 * 服务端保证不含学员姓名、学号、ParticipantId 与个人答案。
 *
 * 投屏令牌由教师驾驶舱生成并经 URL 携带；本页存 sessionStorage 以便刷新恢复。
 * 令牌过期（401）时提示教师重新生成，页面不自愈（只读约束）。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearch } from "@tanstack/react-router";
import { Badge, Button, Spinner, Text, makeStyles, tokens } from "@fluentui/react-components";
import type { HubConnection } from "@microsoft/signalr";
import {
  ClassroomClientMethods,
  ClassSessionStatusValue,
  SessionQuestionStatusValue,
} from "@/pages/classroom/constants/classroom";
import type { ClassroomEventBase } from "@/pages/classroom/types/classroom-events";
import { buildClassroomTokenHubConnection } from "@/pages/classroom/utils/classroomHub";
import { classroomErrorMessage, getPresentationSnapshot } from "@/pages/classroom/utils/studentApi";
import type { ClassroomDtosPresentationSnapshotDto } from "@/api/models/classroom/dtos/PresentationSnapshotDto";

type ConnectionState = "connecting" | "connected" | "reconnecting" | "offline";

const tokenStorageKey = (sessionId: string) => `classroom:presentation-token:${sessionId}`;

const useStyles = makeStyles({
  screen: {
    minHeight: "100vh",
    background: tokens.colorNeutralBackground1,
    display: "flex",
    flexDirection: "column",
    padding: tokens.spacingVerticalXXL + " " + tokens.spacingHorizontalXXL,
    gap: tokens.spacingVerticalL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
  },
  questionNumber: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
  },
  countdown: {
    fontSize: tokens.fontSizeHero900,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
  },
  stem: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: 1.4,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeHero700,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusLarge,
  },
  optionCorrect: {
    background: tokens.colorPaletteGreenBackground2,
    color: tokens.colorPaletteGreenForeground2,
    fontWeight: tokens.fontWeightBold,
  },
  distribution: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    marginTop: tokens.spacingVerticalL,
  },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase500,
  },
  statBar: {
    height: "28px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
    minWidth: 0,
  },
  explanation: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusLarge,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase500,
    whiteSpace: "pre-wrap",
  },
  center: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalM,
    textAlign: "center",
  },
});

export function PresentationPage() {
  const styles = useStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  const search = useSearch({ strict: false }) as { t?: string | undefined };

  const [snapshot, setSnapshot] = useState<ClassroomDtosPresentationSnapshotDto | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("connecting");
  const [fatalError, setFatalError] = useState<string | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  const clockOffsetRef = useRef(0);
  const seenEventIdsRef = useRef(new Set<string>());

  // 令牌：URL ?t= 优先（教师刚生成），否则 sessionStorage（刷新恢复）；只读不需 setter
  const [token] = useState<string | null>(() => {
    if (search.t) {
      try {
        sessionStorage.setItem(tokenStorageKey(sessionId), search.t);
      } catch {
        // sessionStorage 不可用：仅本次会话内有效
      }
      return search.t;
    }
    try {
      return sessionStorage.getItem(tokenStorageKey(sessionId));
    } catch {
      return null;
    }
  });

  const refreshSnapshot = useCallback(async () => {
    if (!token) {
      setFatalError('缺少投屏令牌。请从教师驾驶舱点击"打开投屏"进入本页。');
      return;
    }
    try {
      const snap = await getPresentationSnapshot(sessionId, token);
      setSnapshot(snap);
      setFatalError(null);
      clockOffsetRef.current = Date.parse(snap.serverTime ?? "") - Date.now() || 0;
    } catch (err) {
      const message = classroomErrorMessage(err);
      if (/401|403|令牌|token/i.test(message)) {
        setFatalError('投屏令牌已失效。请在教师驾驶舱重新点击"打开投屏"。');
      } else {
        setFatalError(message);
      }
    }
  }, [sessionId, token]);

  useEffect(() => {
    void refreshSnapshot();
  }, [refreshSnapshot]);

  // SignalR 投屏连接（课堂令牌）
  useEffect(() => {
    if (!token || !sessionId || fatalError) return;
    let conn: HubConnection | null = null;
    let cancelled = false;

    async function start() {
      conn = buildClassroomTokenHubConnection(sessionId, token!);
      conn.onreconnecting(() => setConnectionState("reconnecting"));
      conn.onreconnected(() => {
        setConnectionState("connected");
        void refreshSnapshot();
      });
      conn.onclose(() => {
        if (!cancelled) setConnectionState("offline");
      });

      const dedupe = (evt: ClassroomEventBase) => {
        if (!evt.eventId) return true;
        if (seenEventIdsRef.current.has(evt.eventId)) return false;
        seenEventIdsRef.current.add(evt.eventId);
        return true;
      };

      // 投屏组只收匿名课堂级事件；收到即刷新快照（快照是唯一事实来源）
      const resync = (evt: ClassroomEventBase) => {
        if (!dedupe(evt)) return;
        void refreshSnapshot();
      };
      conn.on(ClassroomClientMethods.ClassroomStarted, resync);
      conn.on(ClassroomClientMethods.QuestionOpened, resync);
      conn.on(ClassroomClientMethods.QuestionClosed, resync);
      conn.on(ClassroomClientMethods.StatisticsPublished, resync);
      conn.on(ClassroomClientMethods.AnswerPublished, resync);
      conn.on(ClassroomClientMethods.ClassroomEnded, resync);

      try {
        await conn.start();
        if (!cancelled) setConnectionState("connected");
      } catch {
        if (!cancelled) setConnectionState("offline");
      }
    }

    void start();
    return () => {
      cancelled = true;
      if (conn) void conn.stop().catch(() => {});
    };
  }, [sessionId, token, fatalError, refreshSnapshot]);

  // 倒计时（服务端时钟校正）
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
  const totalSubmitted = optionCounts ? Object.values(optionCounts).reduce((a, b) => a + b, 0) : 0;
  const finished = snapshot.status === ClassSessionStatusValue.Finished;

  return (
    <div className={styles.screen}>
      {/* 头部：题号 + 提交进度 + 连接状态 */}
      <div className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.questionNumber}>
            {snapshot.currentQuestionNumber ?? 0}
            <Text size={500} style={{ fontWeight: 400 }}>
              {" "}
              / {snapshot.questionCount ?? 0}
            </Text>
          </span>
          <Badge
            appearance="filled"
            color={finished ? "subtle" : accepting ? "success" : "informative"}
            size="large"
          >
            {finished ? "课堂已结束" : accepting ? "答题中" : question ? "等待公布" : "等待开题"}
          </Badge>
        </div>
        <div className={styles.meta}>
          <Text size={500}>
            已提交 <b>{snapshot.submittedCount ?? 0}</b> / {snapshot.totalParticipants ?? 0} 人
          </Text>
          {connectionState !== "connected" && (
            <Badge appearance="filled" color={connectionState === "offline" ? "danger" : "severe"}>
              {connectionState === "offline" ? "离线" : "重连中…"}
            </Badge>
          )}
        </div>
      </div>

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
        <>
          <p className={styles.stem}>{question.stem}</p>

          {question.options && question.options.length > 0 && (
            <div className={styles.options}>
              {question.options.map((opt) => {
                const isCorrect =
                  questionStatus === SessionQuestionStatusValue.AnswerPublished &&
                  snapshot.correctAnswer === opt.key;
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
              <div>正确答案：{snapshot.correctAnswer}</div>
              {snapshot.explanation && <div>解析：{snapshot.explanation}</div>}
            </div>
          )}
        </>
      ) : (
        <div className={styles.center}>
          <Text size={700}>{finished ? "感谢参与！" : "等待教师开放题目…"}</Text>
        </div>
      )}
    </div>
  );
}
