import type { ReactNode } from "react";

export interface RowActionsProps {
  /** 行内操作按钮（编辑、删除等）。 */
  children: ReactNode;
}

/** 表格行内操作组：编辑、删除等图标按钮的统一容器。 */
export function RowActions({ children }: RowActionsProps) {
  return <div className="flex items-center gap-1">{children}</div>;
}
