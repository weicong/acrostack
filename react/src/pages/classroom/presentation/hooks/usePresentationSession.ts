/**
 * 投屏端运行时聚合 hook：投屏令牌解析（URL ?t= 优先、sessionStorage 刷新恢复）、
 * 只读快照拉取（课堂短期令牌认证，走 utils/studentApi）、
 * SignalR 投屏连接与连接状态、服务端时钟校正倒计时。
 *
 * 数据来自只读投屏快照，服务端保证不含学员个人数据；
 * 令牌过期（401/403）时置 fatalError 提示教师重新生成，页面不自愈。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { HubConnection } from "@microsoft/signalr";
import { ClassroomClientMethods } from "../../shared/constants/classroom";
import type {
  ClassroomEventBase,
  ParticipantPickedEvent,
} from "../../shared/types/classroom-events";
import { buildClassroomTokenHubConnection } from "../../shared/utils/classroomHub";
import { getPresentationSnapshot } from "../../shared/utils/studentApi";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { ClassroomDtosPresentationSnapshotDto } from "@/api/models/classroom/dtos/PresentationSnapshotDto";

export type PresentationConnectionState = "connecting" | "connected" | "reconnecting" | "offline";

/** 随机点名结果（事件驱动：快照是匿名数据，点名信息只经实时事件下发）。 */
export interface PresentationPickedParticipant {
  participantId: string;
  nickname: string;
  groupIndex: number;
}

export interface UsePresentationSessionOptions {
  sessionId: string;
  /** 路由 ?t= 携带的投屏令牌（教师端刚生成时存在）。 */
  urlToken?: string;
}

const tokenStorageKey = (sessionId: string) => `classroom:presentation-token:${sessionId}`;

export function usePresentationSession(options: UsePresentationSessionOptions) {
  const { sessionId, urlToken } = options;

  const [snapshot, setSnapshot] = useState<ClassroomDtosPresentationSnapshotDto | null>(null);
  const [connectionState, setConnectionState] = useState<PresentationConnectionState>("connecting");
  const [fatalError, setFatalError] = useState<string | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);
  const [pickedParticipant, setPickedParticipant] = useState<PresentationPickedParticipant | null>(
    null,
  );

  const clockOffsetRef = useRef(0);
  const seenEventIdsRef = useRef(new Set<string>());

  // 令牌：URL ?t= 优先（教师刚生成），否则 sessionStorage（刷新恢复）；只读不需 setter
  const [token] = useState<string | null>(() => {
    if (urlToken) {
      try {
        sessionStorage.setItem(tokenStorageKey(sessionId), urlToken);
      } catch {
        // sessionStorage 不可用：仅本次会话内有效
      }
      return urlToken;
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
      const message = extractAbpErrorMessage(err);
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
        seenEventIdsRef.current.clear();
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
      conn.on(ClassroomClientMethods.ClassroomEnded, (evt: ClassroomEventBase) => {
        if (!dedupe(evt)) return;
        setPickedParticipant(null);
        void refreshSnapshot();
      });

      // 随机点名：大屏横幅展示被点学员（持续到下一次点名或课堂结束）
      conn.on(ClassroomClientMethods.ParticipantPicked, (evt: ParticipantPickedEvent) => {
        if (!dedupe(evt)) return;
        setPickedParticipant({
          participantId: evt.participantId,
          nickname: evt.nickname,
          groupIndex: evt.groupIndex,
        });
      });

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

  return {
    snapshot,
    connectionState,
    fatalError,
    remainingSeconds,
    /** 最近一次随机点名的学员（SignalR 事件驱动；null 表示当前无点名）。 */
    pickedParticipant,
    /** 手动重拉只读快照（重试按钮 / SignalR 重连后复用）。 */
    refreshSnapshot,
  };
}
