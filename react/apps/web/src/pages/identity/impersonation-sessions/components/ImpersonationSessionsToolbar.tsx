/**
 * 模拟登录会话工具栏：按会话状态筛选。
 * 后端查询输入不含自由文本过滤，因此只提供状态下拉。
 */
import { ListToolbar } from "@workspace/ui/data-table";
import { Field, FieldLabel } from "@workspace/ui/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
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
        <Field>
          <FieldLabel>会话状态</FieldLabel>
          <Select
            value={status}
            onValueChange={(value) => onStatusChange((value as SessionStatusFilter) ?? "all")}
            items={statusOptions.map((option) => ({ value: option.value, label: option.label }))}
          >
            <SelectTrigger aria-label="会话状态">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      }
    />
  );
}
