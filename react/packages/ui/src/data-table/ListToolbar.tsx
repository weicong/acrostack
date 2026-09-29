import type { ReactNode } from "react";

export interface ListToolbarProps {
  /** 供读屏识别的工具栏名称（如「用户筛选与操作」）。 */
  label: string;
  /** 搜索框（可选）。 */
  search?: ReactNode;
  /** 筛选器等中间控件（可选）。 */
  filters?: ReactNode;
  /** 右侧的主要操作，例如「新用户」（可选）。 */
  actions?: ReactNode;
}

/**
 * 列表页工具栏：搜索与筛选在左、操作在右，窄屏自动换行。
 * 自带 `role="toolbar"` 与读屏名称，各列表页共用同一节奏。
 */
export function ListToolbar({ label, search, filters, actions }: ListToolbarProps) {
  return (
    <div
      role="toolbar"
      aria-label={label}
      className="flex flex-wrap items-center justify-between gap-2"
    >
      <div className="flex flex-wrap items-center gap-2">
        {search}
        {filters}
      </div>
      {actions !== undefined && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}
