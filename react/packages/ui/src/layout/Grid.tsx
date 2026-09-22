import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from "react";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { mergeStyle, stepToCss, useGapClass, type SizeProps, type SpacingStep } from "./spacing";

/** 单元格在行/列内的对齐（对应 CSS `align-items` / `justify-items`）。 */
export type GridAlignment = "start" | "center" | "end" | "stretch";

/**
 * 列配置：
 * - `number`：固定等宽列数，如 `columns={3}`；
 * - 对象：按最小宽度响应式排布，`repeat` 默认 `'fill'`（保留空轨道、宽度一致），
 *   `'fit'` 折叠空轨道让项目拉伸；`max` 限制最多列数。
 */
export type GridColumns =
  | number
  | {
      minWidth: number;
      max?: number;
      repeat?: "fill" | "fit";
    };

const useStyles = makeStyles({
  root: { display: "grid", minWidth: 0 },
  alignStart: { alignItems: "start" },
  alignCenter: { alignItems: "center" },
  alignEnd: { alignItems: "end" },
  alignStretch: { alignItems: "stretch" },
  justifyStart: { justifyItems: "start" },
  justifyCenter: { justifyItems: "center" },
  justifyEnd: { justifyItems: "end" },
  justifyStretch: { justifyItems: "stretch" },
});

/** 列配置 → 内联样式（列数/轨道宽度值域开放，无法枚举成类名）。 */
function columnsStyle(
  columns: GridColumns | undefined,
  gap: SpacingStep | undefined,
): CSSProperties {
  if (columns === undefined) return {};
  if (typeof columns === "number") {
    return { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` };
  }
  const { minWidth, max, repeat = "fill" } = columns;
  const tracks = `repeat(auto-${repeat}, minmax(${minWidth}px, 1fr))`;
  if (max === undefined) return { gridTemplateColumns: tracks };
  // 用容器限宽把列数封顶：max 列等宽轨道 + 列间间距
  const gapSize = gap !== undefined ? stepToCss(gap) : "0px";
  return {
    gridTemplateColumns: tracks,
    maxWidth: `calc(${max} * ${minWidth}px + ${max - 1} * ${gapSize})`,
    marginInline: "auto",
  };
}

export interface GridProps extends HTMLAttributes<HTMLDivElement>, SizeProps {
  ref?: Ref<HTMLDivElement>;
  /** 列配置（固定列数或按最小宽度响应式），见 `GridColumns`。 */
  columns?: GridColumns;
  /** 行列统一间距（间距刻度）。 */
  gap?: SpacingStep;
  /** 行间距，覆盖 `gap`。 */
  rowGap?: SpacingStep;
  /** 列间距，覆盖 `gap`。 */
  columnGap?: SpacingStep;
  /** 隐式行高（像素）；配合 `GridSpan rows={n}` 可做瀑布流式排布。 */
  rowHeight?: number;
  /** 单元格垂直对齐（`align-items`），默认 `stretch`。 */
  align?: GridAlignment;
  /** 单元格水平对齐（`justify-items`），默认 `stretch`。 */
  justify?: GridAlignment;
  children?: ReactNode;
}

/**
 * 二维网格容器：卡片墙、仪表盘、任何「多列自动排布」的场景都用它，
 * 不要再为 `display: grid` 写自定义样式。
 */
export function Grid({
  ref,
  columns,
  gap,
  rowGap,
  columnGap,
  rowHeight,
  align,
  justify,
  width,
  height,
  maxWidth,
  minHeight,
  className,
  style,
  children,
  ...rest
}: GridProps) {
  const styles = useStyles();
  const alignClasses: Record<string, string | undefined> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    stretch: styles.alignStretch,
  };
  const justifyClasses: Record<string, string | undefined> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    stretch: styles.justifyStretch,
  };

  const gapClass = useGapClass(gap, rowGap, columnGap);
  const dynamic: CSSProperties = {
    ...columnsStyle(columns, gap),
    gridAutoRows: rowHeight !== undefined ? `${rowHeight}px` : undefined,
  };

  return (
    <div
      {...rest}
      ref={ref}
      className={mergeClasses(
        styles.root,
        align ? alignClasses[align] : undefined,
        justify ? justifyClasses[justify] : undefined,
        gapClass,
        className,
      )}
      style={mergeStyle({ width, height, maxWidth, minHeight }, style, dynamic)}
    >
      {children}
    </div>
  );
}

export interface GridSpanProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** 横跨的列数，或 `'full'` 占满整行。 */
  columns?: number | "full";
  /** 纵跨的行数。 */
  rows?: number;
  children?: ReactNode;
}

/**
 * 网格子项跨列/跨行声明。作为 `Grid` 的直接子元素使用，
 * 让「这一格占多宽/多高」由组件表达，而不是在调用方写 `grid-column`。
 */
export function GridSpan({
  ref,
  columns,
  rows,
  className,
  style,
  children,
  ...rest
}: GridSpanProps) {
  const dynamic: CSSProperties = {
    gridColumn:
      columns === undefined ? undefined : columns === "full" ? "1 / -1" : `span ${columns}`,
    gridRow: rows === undefined ? undefined : `span ${rows}`,
  };

  return (
    <div
      {...rest}
      ref={ref}
      className={mergeClasses(className)}
      style={mergeStyle({}, style, dynamic)}
    >
      {children}
    </div>
  );
}
