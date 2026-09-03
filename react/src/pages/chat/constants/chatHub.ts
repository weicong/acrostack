/**
 * Chat hub connection management.
 *
 * Builds a SignalR `HubConnection` to the backend `ChatHub` at
 * `/signalr-hubs/chat`. The access token is sent as a query-string parameter
 * (`access_token`) because WebSocket/SSE transports cannot set the
 * `Authorization` header; the backend middleware moves it back to the header
 * for the ABP/OpenIddict auth middleware (see `AcroStackModule.OnApplicationInitialization`).
 *
 * Client method names mirror `ChatClientMethods` in `AcroStack/Hubs/ChatHub.cs`.
 */
import { HubConnection, HubConnectionBuilder, HttpTransportType } from "@microsoft/signalr";
import { userManager } from "@/lib/auth/userManager";
import { getBackendOrigin } from "@/lib/runtimeConfig";

/** Server-pushed client method names (must match `ChatClientMethods` in ChatHub.cs). */
export const ChatClientMethods = {
  ReceiveMessage: "ReceiveMessage",
  MessagesRead: "MessagesRead",
  UnreadCountChanged: "UnreadCountChanged",
  MessageEdited: "MessageEdited",
  MessageDeleted: "MessageDeleted",
  ReactionChanged: "ReactionChanged",
  UserOnlineStatusChanged: "UserOnlineStatusChanged",
  TypingNotification: "TypingNotification",
  StopTypingNotification: "StopTypingNotification",
} as const;

/** Server-side hub method names the client can invoke. */
export const ChatHubMethods = {
  SendTypingNotification: "SendTypingNotification",
  StopTypingNotification: "StopTypingNotification",
  /** Heartbeat that keeps the caller marked online (sliding TTL on the server). */
  Ping: "Ping",
} as const;

/**
 * Builds (but does not start) a chat hub connection.
 * The caller is responsible for starting/stopping it (e.g. via an effect).
 */
export async function buildChatHubConnection(): Promise<HubConnection> {
  const user = await userManager.getUser();
  const accessToken = user?.access_token;
  if (!accessToken) {
    throw new Error("Cannot build chat hub connection: no access_token in user session.");
  }

  const origin = getBackendOrigin();
  const url = `${origin}/signalr-hubs/chat?access_token=${encodeURIComponent(accessToken)}`;

  return (
    new HubConnectionBuilder()
      .withUrl(url, { transport: HttpTransportType.WebSockets })
      // 自定义重连间隔：延长重连窗口（默认最多 4 次、约 30s 后放弃），
      // 网络闪断或后端短暂重启后仍有约 107s 的自动恢复机会
      .withAutomaticReconnect([0, 2000, 5000, 10000, 30000, 60000])
      .build()
  );
}
