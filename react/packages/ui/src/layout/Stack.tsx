import type { HTMLAttributes, ReactNode, Ref } from "react";
import { makeStyles, mergeClasses } from "@fluentui/react-components";
import {
  mergeStyle,
  useGapClass,
  usePaddingClass,
  type PaddingProps,
  type SizeProps,
  type SpacingStep,
} from "./spacing";

/** 排列方向：`horizontal` 等同于 `HStack`，`vertical` 等同于 `VStack`（默认）。 */
export type StackDirection = "horizontal" | "vertical";

/** 主轴对齐（对应 CSS `justify-content`）。 */
export type StackMainAlignment = "start" | "center" | "end" | "between" | "around" | "evenly";

/** 交叉轴对齐（对应 CSS `align-items`）。 */
export type StackCrossAlignment = "start" | "center" | "end" | "stretch";

/** 两个轴的对齐取值并集；按 `direction` 决定某个值落在主轴还是交叉轴。 */
export type StackAlignment = StackMainAlignment | StackCrossAlignment;

/** 换行行为（对应 CSS `flex-wrap`）。 */
export type StackWrap = "nowrap" | "wrap" | "wrap-reverse";

/** 子项在交叉轴上的自我对齐（对应 CSS `align-self`）。 */
export type StackItemCrossAlignSelf = "start" | "center" | "end" | "stretch";

/** 子项尺寸行为：`static` 保持自身尺寸，`fill` 撑满剩余空间。 */
export type StackItemSize = "static" | "fill";

const useStyles = makeStyles({
  root: { display: "flex", minWidth: 0 },
  horizontal: { flexDirection: "row" },
  vertical: { flexDirection: "column" },
  wrap: { flexWrap: "wrap" },
  wrapReverse: { flexWrap: "wrap-reverse" },
  scrollable: { overflowX: "auto", overflowY: "auto" },
  justifyStart: { justifyContent: "flex-start" },
  justifyCenter: { justifyContent: "center" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },
  alignStart: { alignItems: "flex-start" },
  alignCenter: { alignItems: "center" },
  alignEnd: { alignItems: "flex-end" },
  alignStretch: { alignItems: "stretch" },
});

const useItemStyles = makeStyles({
  /* static：保持自身尺寸，既不拉伸也不被压缩（Astryx 的默认语义） */
  static: { flexShrink: 0 },
  fill: { flexGrow: 1, minWidth: 0, minHeight: 0 },
  scrollable: { overflowX: "auto", overflowY: "auto", minWidth: 0, minHeight: 0 },
  crossStart: { alignSelf: "flex-start" },
  crossCenter: { alignSelf: "center" },
  crossEnd: { alignSelf: "flex-end" },
  crossStretch: { alignSelf: "stretch" },
});

export interface StackProps extends HTMLAttributes<HTMLDivElement>, PaddingProps, SizeProps {
  ref?: Ref<HTMLDivElement>;
  /** 排列方向，默认 `vertical`。 */
  direction?: StackDirection;
  /** 水平方向的对齐：横向时是主轴，纵向时是交叉轴。 */
  hAlign?: StackAlignment;
  /** 垂直方向的对齐：纵向时是主轴，横向时是交叉轴。 */
  vAlign?: StackAlignment;
  /** 主轴对齐别名（对应 CSS `justify-content`），优先于 `hAlign`/`vAlign`。 */
  justify?: StackMainAlignment;
  /** 交叉轴对齐别名（对应 CSS `align-items`），优先于 `hAlign`/`vAlign`。 */
  align?: StackCrossAlignment;
  /** 子项间距（间距刻度）。 */
  gap?: SpacingStep;
  /** 子项换行行为，默认 `nowrap`。 */
  wrap?: StackWrap;
  /** 自身溢出滚动（配合父级 `StackItem size="fill"` 使用）。 */
  isScrollable?: boolean;
  children?: ReactNode;
}

/**
 * 一维排列容器：用 `direction` 统一 HStack / VStack，避免两套组件。
 *
 * `hAlign` / `vAlign` 按方向自动映射到主轴或交叉轴；`justify` / `align`
 * 是贴近 CSS 习惯的别名，二者同时出现时以别名为准。
 * 间距只接受刻度值，颜色与边框不在这里定义。
 */
export function Stack({
  ref,
  direction = "vertical",
  hAlign,
  vAlign,
  justify,
  align,
  gap,
  wrap = "nowrap",
  isScrollable = false,
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
}: StackProps) {
  const styles = useStyles();
  const isHorizontal = direction === "horizontal";
  const mainAlign = justify ?? (isHorizontal ? hAlign : vAlign);
  const crossAlign = align ?? (isHorizontal ? vAlign : hAlign);

  const mainClasses: Record<string, string | undefined> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
    around: styles.justifyAround,
    evenly: styles.justifyEvenly,
  };
  const crossClasses: Record<string, string | undefined> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    stretch: styles.alignStretch,
  };
  const wrapClasses: Record<string, string | undefined> = {
    wrap: styles.wrap,
    "wrap-reverse": styles.wrapReverse,
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
  const gapClass = useGapClass(gap);

  return (
    <div
      {...rest}
      ref={ref}
      className={mergeClasses(
        styles.root,
        isHorizontal ? styles.horizontal : styles.vertical,
        mainAlign ? mainClasses[mainAlign] : undefined,
        crossAlign ? crossClasses[crossAlign] : undefined,
        wrapClasses[wrap],
        gapClass,
        paddingClass,
        isScrollable ? styles.scrollable : undefined,
        className,
      )}
      style={mergeStyle({ width, height, maxWidth, minHeight }, style)}
    >
      {children}
    </div>
  );
}

/** 横向堆叠：`Stack` 固定 `direction="horizontal"` 的薄封装。 */
export interface HStackProps extends Omit<StackProps, "direction" | "hAlign" | "vAlign"> {
  /** 主轴（水平）对齐别名，等价于横向的 `hAlign`。 */
  justify?: StackMainAlignment;
  /** 交叉轴（垂直）对齐别名，等价于横向的 `vAlign`，默认 `stretch`。 */
  align?: StackCrossAlignment;
  /** 主轴（水平）对齐。 */
  hAlign?: StackMainAlignment;
  /** 交叉轴（垂直）对齐，默认 `stretch`。 */
  vAlign?: StackCrossAlignment;
}

export function HStack({ hAlign, vAlign, justify, align, ...rest }: HStackProps) {
  return (
    <Stack
      {...rest}
      direction="horizontal"
      hAlign={hAlign}
      vAlign={vAlign}
      justify={justify}
      align={align}
    />
  );
}

/** 纵向堆叠：`Stack` 固定 `direction="vertical"` 的薄封装。 */
export interface VStackProps extends Omit<StackProps, "direction" | "hAlign" | "vAlign"> {
  /** 主轴（垂直）对齐别名，等价于纵向的 `vAlign`。 */
  justify?: StackMainAlignment;
  /** 交叉轴（水平）对齐别名，等价于纵向的 `hAlign`，默认 `stretch`。 */
  align?: StackCrossAlignment;
  /** 交叉轴（水平）对齐，默认 `stretch`。 */
  hAlign?: StackCrossAlignment;
  /** 主轴（垂直）对齐。 */
  vAlign?: StackMainAlignment;
}

export function VStack({ hAlign, vAlign, justify, align, ...rest }: VStackProps) {
  return (
    <Stack
      {...rest}
      direction="vertical"
      hAlign={hAlign}
      vAlign={vAlign}
      justify={justify}
      align={align}
    />
  );
}

export interface StackItemProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** 交叉轴自我对齐（纵向栈为水平，横向栈为垂直）。 */
  crossAlignSelf?: StackItemCrossAlignSelf;
  /** 尺寸行为：`static`（默认）保持自身尺寸，`fill` 撑满剩余空间。 */
  size?: StackItemSize;
  /** 自身溢出滚动；`fill` + `isScrollable` 即可得到一个完整滚动区。 */
  isScrollable?: boolean;
  children?: ReactNode;
}

/**
 * 栈内子项：只描述「这一项在栈里怎么占位」，不引入新的间距。
 * `fill` 与 `isScrollable` 会带上 flex 收缩所需的 `min-width/height: 0` 重置。
 */
export function StackItem({
  ref,
  crossAlignSelf,
  size = "static",
  isScrollable = false,
  className,
  children,
  ...rest
}: StackItemProps) {
  const styles = useItemStyles();
  const crossClasses: Record<string, string | undefined> = {
    start: styles.crossStart,
    center: styles.crossCenter,
    end: styles.crossEnd,
    stretch: styles.crossStretch,
  };

  return (
    <div
      {...rest}
      ref={ref}
      className={mergeClasses(
        size === "fill" ? styles.fill : styles.static,
        isScrollable ? styles.scrollable : undefined,
        crossAlignSelf ? crossClasses[crossAlignSelf] : undefined,
        className,
      )}
    >
      {children}
    </div>
  );
}
