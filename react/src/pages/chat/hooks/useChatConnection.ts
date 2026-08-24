/**
 * React hook that establishes and manages a single SignalR chat hub connection.
 *
 * - Builds the connection on mount (after the user is authenticated).
 * - Auto-restarts on reconnect.
 * - Exposes the live `HubConnection` via a ref so consumers can register
 *   `on(...)` handlers imperatively.
 * - Tears the connection down on unmount.
 *
 * Returns a stable ref-like object so callers can register/clear handlers in
 * their own effects without restarting the connection.
 */
import { useEffect, useRef, useState } from "react";
import { HubConnection } from "@microsoft/signalr";
import { buildChatHubConnection } from "../constants/chatHub";
import { userManager } from "@/lib/auth/userManager";
import { useAuth } from "@/lib/auth/AuthContext";

export interface ChatConnectionState {
  /** Current connection, or null while initializing/after teardown. */
  connection: HubConnection | null;
  /** True while the initial connection attempt is in flight. */
  isConnecting: boolean;
  /** Set if the initial connection attempt failed. */
  error: Error | null;
}

/**
 * Maintains a chat hub connection for the duration of the calling component's
 * life. Reconnects when the authenticated user id changes.
 */
export function useChatConnection(): ChatConnectionState {
  const { isAuthenticated } = useAuth();
  const [state, setState] = useState<ChatConnectionState>({
    connection: null,
    isConnecting: true,
    error: null,
  });
  // Hold the connection outside React state so handler re-registrations
  // don't tear it down.
  const connectionRef = useRef<HubConnection | null>(null);

  useEffect(() => {
    let cancelled = false;
    let conn: HubConnection | null = null;

    async function start() {
      // Skip if the user isn't signed in yet.
      const oidcUser = await userManager.getUser();
      if (!oidcUser?.access_token) {
        if (!cancelled) {
          setState({ connection: null, isConnecting: false, error: null });
        }
        return;
      }

      try {
        conn = await buildChatHubConnection();
        if (cancelled) {
          // Component unmounted while we were building — abort.
          await conn.stop().catch(() => {});
          return;
        }
        connectionRef.current = conn;

        conn.onclose((err) => {
          if (!cancelled && err) {
            setState((s) => ({ ...s, error: err }));
          }
        });

        await conn.start();

        if (!cancelled) {
          setState({ connection: conn, isConnecting: false, error: null });
        } else {
          await conn.stop().catch(() => {});
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            connection: null,
            isConnecting: false,
            error: err instanceof Error ? err : new Error(String(err)),
          });
        }
      }
    }

    void start();

    return () => {
      cancelled = true;
      const c = connectionRef.current;
      connectionRef.current = null;
      if (c) {
        void c.stop().catch(() => {});
      }
    };
    // Reconnect only when the auth state changes (not on every render).
  }, [isAuthenticated]);

  return state;
}
