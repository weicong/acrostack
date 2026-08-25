/**
 * 学员实时聚合 hook：快照拉取、SignalR 连接与事件处理。
 * 事件回调通过参数委托给页面（重置答案 / 刷新记录 / 恢复答案）。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { HubConnection } from "@microsoft/signalr";
import type { ClassroomDtosStudentSnapshotDto } from "@/api/models/classroom/dtos/StudentSnapshotDto";
import { ClassroomClientMethods, ClassSessionStatusValue } from "../constants/classroom";
import type {
  AnswerPublishedEvent,
  QuestionOpenedEvent,
  StatisticsPublishedEvent,
} from "../types/classroom-events";
import { buildClassroomTokenHubConnection } from "../utils/classroomHub";
import { getStudentSnapshot, classroomErrorMessage } from "../utils/studentApi";
import type { ConnectionState } from "../components/ConnectionBadge";

interface UseStudentRealtimeOptions {
  sessionId: string;
  token: string | null;
  viewRef: { current: "current" | "history" };
  resetAnswer: () => void;
  refreshHistory: () => void;
  restoreAnswer: (content: string) => void;
}

export function useStudentRealtime({
  sessionId,
  token,
  viewRef,
  resetAnswer,
  refreshHistory,
  restoreAnswer,
}: UseStudentRealtimeOptions) {
  const [session, setSession] = useState<ClassroomDtosStudentSnapshotDto | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("connecting");
  const [loadError, setLoadError] = useState<string | null>(null);

  const clockOffsetRef = useRef(0);
  const seenEventIdsRef = useRef(new Set<string>());
  const lastVersionRef = useRef(0);

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

      if (snapshot.myAnswer) {
        restoreAnswer(snapshot.myAnswer.answerContent ?? "");
      }
    } catch (err) {
      setLoadError(classroomErrorMessage(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, token, restoreAnswer]);

  useEffect(() => {
    void refreshSnapshot();
  }, [refreshSnapshot]);

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
        resetAnswer();
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
        if (viewRef.current === "history") refreshHistory();
      });

      connection.on(ClassroomClientMethods.ClassroomEnded, () => {
        void refreshSnapshot();
        if (viewRef.current === "history") refreshHistory();
      });
    }

    void start();

    return () => {
      cancelled = true;
      if (conn) void conn.stop().catch(() => {});
    };
  }, [sessionId, token, refreshSnapshot, refreshHistory, resetAnswer, viewRef]);

  return { session, connectionState, loadError, refreshSnapshot, clockOffsetRef };
}
