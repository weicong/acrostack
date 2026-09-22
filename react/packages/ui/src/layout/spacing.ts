import type { CSSProperties } from "react";
import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  type GriffelStyle,
} from "@fluentui/react-components";

/** 尺寸值：数字按像素处理，字符串原样输出（如 `'100%'`、`'60ch'`）。 */
export type SizeValue = number | string;

/**
 * 间距刻度（对齐 Astryx 的 spacing scale，全部落在 4px 网格上）。
 *
 * | step | 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10 |
 * | ---- | - | --- | - | --- | - | - | - | - | - | - | -- |
 * | px   | 0 | 2   | 4 | 6   | 8 | 12| 16| 20| 24| 32| 40 |
 *
 * 布局原语只接受刻度值，不接受任意像素：一处定义、全局一致，
 * 这样调用方就不必再为间距写自定义样式。
 */
export type SpacingStep = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10;

/** 刻度顺序表：生成类名时按此顺序，保证同族属性「后者覆盖前者」。 */
const SPACING_STEPS: readonly SpacingStep[] = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10];

/** 刻度 → 尺寸（除 10 之外全部复用 Fluent 间距令牌；两轴刻度值相同）。 */
const STEP_SIZE: Record<SpacingStep, string> = {
  0: "0",
  0.5: tokens.spacingVerticalXXS,
  1: tokens.spacingVerticalXS,
  1.5: tokens.spacingVerticalSNudge,
  2: tokens.spacingVerticalS,
  3: tokens.spacingVerticalM,
  4: tokens.spacingVerticalL,
  5: tokens.spacingVerticalXL,
  6: tokens.spacingVerticalXXL,
  8: tokens.spacingVerticalXXXL,
  10: "40px", // Fluent 令牌最大 XXXL=32px，40px 仍在 4px 网格上
};

type StyleMap = Record<string, GriffelStyle>;

/** 小数不能出现在类名里（`0.5` → `0_5`）。 */
const stepKey = (step: SpacingStep) => String(step).replace(".", "_");

/** 为同一族的每个刻度生成一个类名，`prefix` 只用于区分族。 */
function stepGroup(prefix: string, build: (size: string) => GriffelStyle): StyleMap {
  const styles: StyleMap = {};
  for (const step of SPACING_STEPS) {
    styles[`${prefix}${stepKey(step)}`] = build(STEP_SIZE[step]);
  }
  return styles;
}

/**
 * 间距类名表。
 *
 * 定义顺序即 CSS 优先级（同优先级下后定义者胜），与 Astryx 的覆盖语义一致：
 * `padding` → `paddingInline` → `paddingInlineStart`/`End` → `paddingBlock` → `paddingBlockStart`/`End`；
 * `gap` → `rowGap` → `columnGap`。
 */
const useSpacingStyles = makeStyles({
  ...stepGroup("pad", (size) => shorthands.padding(size)),
  ...stepGroup("padInline", (size) => ({ paddingInlineStart: size, paddingInlineEnd: size })),
  ...stepGroup("padInlineStart", (size) => ({ paddingInlineStart: size })),
  ...stepGroup("padInlineEnd", (size) => ({ paddingInlineEnd: size })),
  ...stepGroup("padBlock", (size) => ({ paddingBlockStart: size, paddingBlockEnd: size })),
  ...stepGroup("padBlockStart", (size) => ({ paddingBlockStart: size })),
  ...stepGroup("padBlockEnd", (size) => ({ paddingBlockEnd: size })),
  ...stepGroup("gap", (size) => ({ rowGap: size, columnGap: size })),
  ...stepGroup("rowGap", (size) => ({ rowGap: size })),
  ...stepGroup("colGap", (size) => ({ columnGap: size })),
});

/** 内边距 props：`paddingInline*` / `paddingBlock*` 按逻辑边缘逐级覆盖 `padding`。 */
export interface PaddingProps {
  padding?: SpacingStep;
  paddingInline?: SpacingStep;
  paddingInlineStart?: SpacingStep;
  paddingInlineEnd?: SpacingStep;
  paddingBlock?: SpacingStep;
  paddingBlockStart?: SpacingStep;
  paddingBlockEnd?: SpacingStep;
}

/** 任意尺寸 props：值域开放，只能走内联样式（见 `sizeStyle`）。 */
export interface SizeProps {
  width?: SizeValue;
  height?: SizeValue;
  maxWidth?: SizeValue;
  /** 比 Astryx 多的一项：flex 子项需要 `minWidth: 0` 才肯收缩。 */
  minWidth?: SizeValue;
  minHeight?: SizeValue;
}

/** 把内边距 props 解析成类名（`undefined` 表示该边沿用默认值）。 */
export function usePaddingClass(props: PaddingProps): string | undefined {
  const styles = useSpacingStyles();
  return mergeClasses(
    props.padding !== undefined ? styles[`pad${stepKey(props.padding)}`] : undefined,
    props.paddingInline !== undefined
      ? styles[`padInline${stepKey(props.paddingInline)}`]
      : undefined,
    props.paddingInlineStart !== undefined
      ? styles[`padInlineStart${stepKey(props.paddingInlineStart)}`]
      : undefined,
    props.paddingInlineEnd !== undefined
      ? styles[`padInlineEnd${stepKey(props.paddingInlineEnd)}`]
      : undefined,
    props.paddingBlock !== undefined ? styles[`padBlock${stepKey(props.paddingBlock)}`] : undefined,
    props.paddingBlockStart !== undefined
      ? styles[`padBlockStart${stepKey(props.paddingBlockStart)}`]
      : undefined,
    props.paddingBlockEnd !== undefined
      ? styles[`padBlockEnd${stepKey(props.paddingBlockEnd)}`]
      : undefined,
  );
}

/** 把间距 props 解析成类名（`gap` 之后 `rowGap`/`columnGap` 覆盖各自轴）。 */
export function useGapClass(
  gap?: SpacingStep,
  rowGap?: SpacingStep,
  columnGap?: SpacingStep,
): string | undefined {
  const styles = useSpacingStyles();
  return mergeClasses(
    gap !== undefined ? styles[`gap${stepKey(gap)}`] : undefined,
    rowGap !== undefined ? styles[`rowGap${stepKey(rowGap)}`] : undefined,
    columnGap !== undefined ? styles[`colGap${stepKey(columnGap)}`] : undefined,
  );
}

/** 尺寸值 → CSS 值。 */
export function toCssValue(value: SizeValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

/** 刻度 → CSS 值（Grid 的 `max` 需要按间距刻度做算术）。 */
export function stepToCss(step: SpacingStep): string {
  return STEP_SIZE[step];
}

/**
 * `width` / `height` / `maxWidth` / `minHeight` 走内联样式：值域开放
 * （任意像素、百分比、`calc()`、`ch` 等），无法枚举成静态类名。
 * 间距类 props 则一律走刻度类名，不需要内联样式。
 */
export function sizeStyle(props: SizeProps): CSSProperties | undefined {
  const { width, height, maxWidth, minWidth, minHeight } = props;
  if (
    width === undefined &&
    height === undefined &&
    maxWidth === undefined &&
    minWidth === undefined &&
    minHeight === undefined
  ) {
    return undefined;
  }
  return {
    width: toCssValue(width),
    height: toCssValue(height),
    maxWidth: toCssValue(maxWidth),
    minWidth: toCssValue(minWidth),
    minHeight: toCssValue(minHeight),
  };
}

/** 合并内联尺寸样式与调用方传入的 `style`（调用方优先）。 */
export function mergeStyle(
  sizes: SizeProps,
  style: CSSProperties | undefined,
  extra?: CSSProperties,
): CSSProperties | undefined {
  const merged = { ...sizeStyle(sizes), ...extra, ...style };
  return Object.keys(merged).length > 0 ? merged : undefined;
}
