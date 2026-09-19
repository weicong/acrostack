/**
 * 模拟登录会话工具栏：按会话状态筛选。
 * 后端查询输入不含自由文本过滤，因此只提供状态下拉。
 */
import { Field, Select } from "@fluentui/react-components";
import { ListToolbar } from "@/components/ui/ListToolbar";
import type { SessionStatusFilter } from "../hooks/useImpersonationSessionsTable";

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
  return (
    <ListToolbar
      label="会话筛选"
      filters={
        <Field label="会话状态">
          <Select
            appearance="outline"
            value={status}
            onChange={(_event, data) =>
              onStatusChange((data.value as SessionStatusFilter) ?? "all")
            }
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>
      }
    />
  );
}
