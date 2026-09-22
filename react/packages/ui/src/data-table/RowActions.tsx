import type { ReactNode } from "react";
import { HStack } from "../layout";

export interface RowActionsProps {
  /** 行内操作按钮（编辑、删除等）。 */
  children: ReactNode;
}

/**
 * 表格行内操作组：编辑、删除等图标按钮的统一容器。
 * 间距取自 `HStack` 的间距刻度，各表格的操作列节奏一致。
 */
export function RowActions({ children }: RowActionsProps) {
  return (
    <HStack gap={2} align="center">
      {children}
    </HStack>
  );
}
