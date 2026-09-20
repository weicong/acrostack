import type { ReactNode } from "react";
import { Toolbar, makeStyles, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  // Toolbar 自带 display:flex / align-items:center 与默认内边距；
  // 这里只补它没有的两件事：窄屏换行、以及"搜索在左、操作在右"的两端对齐。
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

interface ListToolbarProps {
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
 * 列表页工具栏：基于 Fluent `Toolbar` 构建（自带 `role="toolbar"`、
 * 默认内边距与方向键导航），只补充两点排布：两端对齐与窄屏换行。
 * 各列表页共用同一排布，使用户在不同页面看到一致的操作位置。
 */
export function ListToolbar({ label, search, filters, actions }: ListToolbarProps) {
  const styles = useStyles();

  return (
    <Toolbar className={styles.toolbar} aria-label={label}>
      {search}
      {filters}
      {actions}
    </Toolbar>
  );
}
