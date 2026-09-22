import type { HTMLAttributes, ReactNode, Ref } from "react";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { mergeStyle, usePaddingClass, type PaddingProps, type SizeProps } from "./spacing";

/** 居中轴：`both`（默认）双轴居中，`horizontal` / `vertical` 单轴居中。 */
export type CenterAxis = "both" | "horizontal" | "vertical";

const useStyles = makeStyles({
  flex: { display: "flex" },
  inlineFlex: { display: "inline-flex" },
  horizontal: { justifyContent: "center" },
  vertical: { alignItems: "center" },
});

export interface CenterProps extends HTMLAttributes<HTMLDivElement>, PaddingProps, SizeProps {
  ref?: Ref<HTMLDivElement>;
  /** 居中轴，默认 `both`。 */
  axis?: CenterAxis;
  /** 使用 `inline-flex`（文本/图标场景），默认 `false`。 */
  isInline?: boolean;
  children: ReactNode;
}

/**
 * 居中容器：把「居中」这件反复出现的事收进一个组件，
 * 调用方不再为 `display:flex + 居中` 写样式。
 * 高度类约束（如整屏居中 `minHeight="100dvh"`）通过尺寸 props 表达。
 */
export function Center({
  ref,
  axis = "both",
  isInline = false,
  padding,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  width,
  height,
  maxWidth,
  minHeight,
  className,
  style,
  children,
  ...rest
}: CenterProps) {
  const styles = useStyles();
  const paddingClass = usePaddingClass({
    padding,
    paddingInline,
    paddingInlineStart,
    paddingInlineEnd,
    paddingBlock,
    paddingBlockStart,
    paddingBlockEnd,
  });

  return (
    <div
      {...rest}
      ref={ref}
      className={mergeClasses(
        isInline ? styles.inlineFlex : styles.flex,
        axis === "horizontal" || axis === "both" ? styles.horizontal : undefined,
        axis === "vertical" || axis === "both" ? styles.vertical : undefined,
        paddingClass,
        className,
      )}
      style={mergeStyle({ width, height, maxWidth, minHeight }, style)}
    >
      {children}
    </div>
  );
}
