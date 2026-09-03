/**
 * 模拟登录会话工具栏：会话状态筛选。
 * 后端查询输入不含自由文本过滤，此处仅提供状态下拉。
 */
import { Select } from "@fluentui/react-components";
import type { SessionStatusFilter } from "../hooks/useImpersonationSessionsTable";
import { useImpersonationSessionsStyles } from "../styles/impersonationSessions";

const statusOptions: { value: SessionStatusFilter; label: string }[] = [
  { value: "all", label: "全部会话" },
  { value: "active", label: "进行中" },
  { value: "ended", label: "已结束" },
];

export function ImpersonationSessionsToolbar({
  status,
  onStatusChange,
}: {
  status: SessionStatusFilter;
  onStatusChange: (status: SessionStatusFilter) => void;
}) {
  const styles = useImpersonationSessionsStyles();

  return (
    <div className={styles.toolbar}>
      <div className={styles.filters}>
        <Select
          appearance="outline"
          value={status}
          onChange={(_, data) => onStatusChange((data.value as SessionStatusFilter) ?? "all")}
          aria-label={"按会话状态筛选"}
        >
          {statusOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
