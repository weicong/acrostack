import type { ReactNode } from "react";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    /* 与 Fluent 的 DialogActions 一致：操作按钮之间用 8px（spacingHorizontalS） */
    ...shorthands.gap(tokens.spacingHorizontalS),
    /* 与上方字段区拉开一组：字段堆叠 12px + 这里 12px = 24px（分区间距） */
    marginTop: tokens.spacingVerticalM,
  },
});

interface FormActionsProps {
  children: ReactNode;
}

/**
 * 表单操作行：把提交、取消等按钮收进同一排。
 *
 * 对齐与间距对齐 Fluent 的 `DialogActions`（右对齐、按钮间距 8px），
 * 弹窗表单与卡片表单共用，保证全站按钮位置与间距一致。
 */
export function FormActions({ children }: FormActionsProps) {
  const styles = useStyles();

  return <div className={styles.actions}>{children}</div>;
}
