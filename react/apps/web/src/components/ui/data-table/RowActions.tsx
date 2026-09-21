import type { ReactNode } from "react";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    /* 行内图标按钮之间统一 S(8)，与工具栏的控件间距同档 */
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

interface RowActionsProps {
  children: ReactNode;
}

/**
 * 表格行内操作组：编辑、删除等图标按钮的统一容器。
 *
 * 之前各表格用裸 `<div>` 包裹相邻按钮，按钮完全贴合（间距 0）；
 * 这里把排布收敛到一处，保证所有表格的操作列节奏一致。
 */
export function RowActions({ children }: RowActionsProps) {
  const styles = useStyles();

  return <div className={styles.root}>{children}</div>;
}
