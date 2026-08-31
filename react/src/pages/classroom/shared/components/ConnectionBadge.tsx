/**
 * SignalR 连接状态徽章（教师课堂面板 / 学员答题页共用）。
 */
import { Badge } from "@fluentui/react-components";

export type ConnectionState = "connecting" | "connected" | "reconnecting" | "offline";

const LABELS: Record<
  ConnectionState,
  { text: string; color: "success" | "severe" | "informative" | "danger" }
> = {
  connected: { text: "已连接", color: "success" },
  reconnecting: { text: "重连中…", color: "severe" },
  connecting: { text: "连接中…", color: "informative" },
  offline: { text: "离线", color: "danger" },
};

export function ConnectionBadge({ state }: { state: ConnectionState }) {
  const label = LABELS[state] ?? LABELS.offline;
  return (
    <Badge appearance="filled" color={label.color}>
      {label.text}
    </Badge>
  );
}
