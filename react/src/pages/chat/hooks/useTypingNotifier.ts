/**
 * 输入框"正在输入"通知：首次按键立即 Send，之后防抖；
 * 停止输入超过 TYPING_NOTIFY_DEBOUNCE_MS 自动 Stop，清空输入框立即 Stop。
 * 切换会话 / 发送成功后调用 reset() 重置内部状态。
 */
import { useCallback, useEffect, useRef } from "react";
import type { HubConnection } from "@microsoft/signalr";
import { ChatHubMethods } from "../constants/chatHub";
import { TYPING_NOTIFY_DEBOUNCE_MS } from "../constants/chat";

export function useTypingNotifier(connection: HubConnection | null, targetUserId: string | null) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notifiedRef = useRef(false);

  const notify = useCallback(() => {
    if (!connection || !targetUserId) return;
    void connection.invoke(ChatHubMethods.SendTypingNotification, targetUserId).catch(() => {
      /* best-effort；忽略瞬时 hub 错误 */
    });
  }, [connection, targetUserId]);

  const stop = useCallback(() => {
    if (!connection || !targetUserId) return;
    // 从未发送过"正在输入"则无需发送停止（幂等，可安全随时调用）。
    if (!notifiedRef.current) return;
    notifiedRef.current = false;
    void connection.invoke(ChatHubMethods.StopTypingNotification, targetUserId).catch(() => {
      /* best-effort */
    });
  }, [connection, targetUserId]);

  /** 每次输入变化调用；value 为空表示输入框已清空。 */
  const onCompose = useCallback(
    (value: string) => {
      if (value && connection && targetUserId) {
        if (!notifiedRef.current) {
          notifiedRef.current = true;
          notify();
        }
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          stop();
        }, TYPING_NOTIFY_DEBOUNCE_MS);
      } else if (!value) {
        // 清空输入框 — 立即停止"正在输入"
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (notifiedRef.current) stop();
      }
    },
    [connection, targetUserId, notify, stop],
  );

  /** 切换会话或发送成功后重置（不发网络请求）。 */
  const reset = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    notifiedRef.current = false;
  }, []);

  // 卸载时清理定时器
  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  return { onCompose, stop, reset };
}
