import type { HTMLAttributes, ReactNode, Ref } from "react";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { mergeStyle, usePaddingClass, type PaddingProps, type SizeProps } from "./spacing";

/** 区域底色：`section` 为卡片面（默认），`muted` 为次级底，`transparent` 完全透明。 */
export type SectionVariant = "section" | "muted" | "transparent";

/** 分隔线所在边（`start`/`end` 为逻辑边缘，自动适配 RTL）。 */
export type SectionDivider = "top" | "bottom" | "start" | "end";

const useStyles = makeStyles({
  surface: { backgroundColor: tokens.colorNeutralBackground1 },
  muted: { backgroundColor: tokens.colorNeutralBackground2 },
  transparent: { backgroundColor: "transparent" },
  dividerTop: {
    borderTopWidth: tokens.strokeWidthThin,
    borderTopStyle: "solid",
    borderTopColor: tokens.colorNeutralStroke2,
  },
  dividerBottom: {
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  dividerStart: {
    borderInlineStartWidth: tokens.strokeWidthThin,
    borderInlineStartStyle: "solid",
    borderInlineStartColor: tokens.colorNeutralStroke2,
  },
  dividerEnd: {
    borderInlineEndWidth: tokens.strokeWidthThin,
    borderInlineEndStyle: "solid",
    borderInlineEndColor: tokens.colorNeutralStroke2,
  },
});

export interface SectionProps extends HTMLAttributes<HTMLDivElement>, PaddingProps, SizeProps {
  ref?: Ref<HTMLDivElement>;
  /** 底色变体，默认 `section`。 */
  variant?: SectionVariant;
  /** 需要画分隔线的边；不传则不画线。 */
  dividers?: SectionDivider[];
  /** 内边距，默认 `4`（16px）。 */
  padding?: PaddingProps["padding"];
  children?: ReactNode;
}

/**
 * 带底色的区域容器：页面/卡片内需要「换一个底色 + 一圈内边距」的分区时用它，
 * 不要在调用方写背景色与 padding。分隔线用 `dividers` 声明，不写边框样式。
 */
export function Section({
  ref,
  variant = "section",
  dividers,
  padding = 4,
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
}: SectionProps) {
  const styles = useStyles();
  const variantClasses: Record<SectionVariant, string> = {
    section: styles.surface,
    muted: styles.muted,
    transparent: styles.transparent,
  };
  const dividerClasses: Record<SectionDivider, string> = {
    top: styles.dividerTop,
    bottom: styles.dividerBottom,
    start: styles.dividerStart,
    end: styles.dividerEnd,
  };
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
        variantClasses[variant],
        ...(dividers?.map((side) => dividerClasses[side]) ?? []),
        paddingClass,
        className,
      )}
      style={mergeStyle({ width, height, maxWidth, minHeight }, style)}
    >
      {children}
    </div>
  );
}
