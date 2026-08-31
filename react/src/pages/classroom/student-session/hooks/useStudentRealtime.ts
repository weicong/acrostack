/**
 * 学员实时聚合 hook：快照拉取、SignalR 连接与事件处理。
 * 事件回调通过参数委托给页面（重置答案 / 刷新记录 / 恢复答案）。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { HubConnection } from "@microsoft/signalr";
import type { ClassroomDtosStudentSnapshotDto } from "@/api/models/classroom/dtos/StudentSnapshotDto";
import {
  ClassroomClientMethods,
  ClassSessionStatusValue,
  SessionQuestionStatusValue,
} from "../../shared/constants/classroom";
import type {
  AnswerPublishedEvent,
  ClassroomEventBase,
  ClassroomStartedEvent,
  ParticipantPickedEvent,
  QuestionClosedEvent,
  QuestionOpenedEvent,
} from "../../shared/types/classroom-events";
import { buildClassroomTokenHubConnection } from "../../shared/utils/classroomHub";
import { getStudentSnapshot, classroomErrorMessage } from "../../shared/utils/studentApi";
import type { ConnectionState } from "../../shared/components/ConnectionBadge";

interface UseStudentRealtimeOptions {
  sessionId: string;
  token: string | null;
  viewRef: { current: "current" | "history" };
  resetAnswer: () => void;
  refreshHistory: () => void;
  restoreAnswer: (content: string) => void;
  /** 教师随机点名事件（页面判断是否点到自己并提醒）。 */
  onParticipantPicked: (evt: ParticipantPickedEvent) => void;
}

export function useStudentRealtime({
  sessionId,
  token,
  viewRef,
  resetAnswer,
  refreshHistory,
  restoreAnswer,
  onParticipantPicked,
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
        seenEventIdsRef.current.clear();
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
      // 事件去重 + 版本跳跃检测（丢事件时重新拉快照），与教师课堂面板对齐
      const check = (evt: ClassroomEventBase): boolean => {
        if (evt.eventId && seenEventIdsRef.current.has(evt.eventId)) return false;
        if (evt.eventId) seenEventIdsRef.current.add(evt.eventId);
        const gap = lastVersionRef.current > 0 && evt.version > lastVersionRef.current + 1;
        lastVersionRef.current = Math.max(lastVersionRef.current, evt.version);
        if (gap) void refreshSnapshot();
        return !gap;
      };

      connection.on(ClassroomClientMethods.ClassroomStarted, (evt: ClassroomStartedEvent) => {
        if (!check(evt)) return;
        void refreshSnapshot();
      });

      connection.on(ClassroomClientMethods.QuestionOpened, (evt: QuestionOpenedEvent) => {
        if (!check(evt)) return;
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
                submittedCount: 0,
              }
            : s,
        );
        resetAnswer();
      });

      connection.on(ClassroomClientMethods.QuestionClosed, (evt: QuestionClosedEvent) => {
        if (!check(evt)) return;
        setSession((s) =>
          s
            ? {
                ...s,
                version: evt.version,
                // 截止即进入讲评阶段：顶部状态标签随课堂状态机更新
                status: ClassSessionStatusValue.Explaining,
                currentQuestion: s.currentQuestion
                  ? {
                      ...s.currentQuestion,
                      isAcceptingAnswers: false,
                      status: SessionQuestionStatusValue.Closed,
                    }
                  : s.currentQuestion,
              }
            : s,
        );
      });

      connection.on(ClassroomClientMethods.AnswerPublished, (evt: AnswerPublishedEvent) => {
        if (!check(evt)) return;
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
        // 匿名统计随答案一并公布：拉快照补分布数据（publishedOptionCounts）
        void refreshSnapshot();
        if (viewRef.current === "history") refreshHistory();
      });

      connection.on(ClassroomClientMethods.ClassroomEnded, () => {
        void refreshSnapshot();
        if (viewRef.current === "history") refreshHistory();
      });

      connection.on(ClassroomClientMethods.ParticipantPicked, (evt: ParticipantPickedEvent) => {
        if (!check(evt)) return;
        onParticipantPicked(evt);
      });
    }

    void start();

    return () => {
      cancelled = true;
      if (conn) void conn.stop().catch(() => {});
    };
  }, [
    sessionId,
    token,
    refreshSnapshot,
    refreshHistory,
    resetAnswer,
    viewRef,
    onParticipantPicked,
  ]);

  return { session, connectionState, loadError, refreshSnapshot, clockOffsetRef };
}
