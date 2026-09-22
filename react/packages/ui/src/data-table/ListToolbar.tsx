import type { ReactNode } from "react";
import { HStack } from "../layout";

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
 * 列表页工具栏：搜索在左、操作在右，窄屏自动换行。
 * 自带 `role="toolbar"` 与读屏名称，排布由布局原语给出，
 * 各列表页共用同一节奏，使用户在不同页面看到一致的操作位置。
 */
export function ListToolbar({ label, search, filters, actions }: ListToolbarProps) {
  return (
    <HStack role="toolbar" aria-label={label} justify="between" align="center" gap={2} wrap="wrap">
      {search}
      {filters}
      {actions}
    </HStack>
  );
}
