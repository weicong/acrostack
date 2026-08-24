/**
 * 正在输入提示的发送方登记表：userId -> { userName, 过期时间 }。
 * 内置定时 GC：对端异常离线（未发 StopTypingNotification）时提示也能消失。
 */
import { useCallback, useEffect, useState } from "react";
import { TYPING_HINT_TTL_MS } from "../constants/chat";

interface TypingSender {
  userName: string | null;
  expiresAt: number;
}

export function useTypingSenders() {
  const [typingSenders, setTypingSenders] = useState<Record<string, TypingSender>>({});

  const addSender = useCallback((senderUserId: string, senderUserName: string | null) => {
    setTypingSenders((prev) => ({
      ...prev,
      [senderUserId]: {
        userName: senderUserName,
        expiresAt: Date.now() + TYPING_HINT_TTL_MS,
      },
    }));
  }, []);

  const removeSender = useCallback((senderUserId: string) => {
    setTypingSenders((prev) => {
      if (!prev[senderUserId]) return prev;
      const next = { ...prev };
      delete next[senderUserId];
      return next;
    });
  }, []);

  const clearSenders = useCallback(() => setTypingSenders({}), []);

  // 定期清理过期条目
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingSenders((prev) => {
        const now = Date.now();
        let changed = false;
        const next: Record<string, TypingSender> = {};
        for (const [id, entry] of Object.entries(prev)) {
          if (entry.expiresAt > now) {
            next[id] = entry;
          } else {
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { typingSenders, addSender, removeSender, clearSenders };
}
