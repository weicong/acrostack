/**
 * `@acrostack/ui/layout` 的公开入口。
 *
 * 布局原语（对标 Astryx `@astryxdesign/core` 的 Layout 家族，用 Fluent 实现）：
 * 把「排列、间距、分区、滚动」这类反复出现的样式收敛到组件里，
 * 应用侧只声明结构，不再为布局写自定义样式。
 *
 * 约定：
 * - 间距只接受刻度值（`SpacingStep`），组件内部映射到 Fluent 间距令牌；
 * - `width`/`height`/`maxWidth`/`minHeight` 接受任意尺寸（数字按像素），走内联样式；
 * - 颜色、字体不在这里定义，需要底色/分隔线时用 `Section` / `Layout*`。
 */
export type { SizeValue, SpacingStep, PaddingProps, SizeProps } from "./spacing";

export { Stack, HStack, VStack, StackItem } from "./Stack";
export type {
  StackProps,
  StackAlignment,
  StackMainAlignment,
  StackCrossAlignment,
  StackDirection,
  StackWrap,
  HStackProps,
  VStackProps,
  StackItemProps,
  StackItemSize,
  StackItemCrossAlignSelf,
} from "./Stack";

export { Grid, GridSpan } from "./Grid";
export type { GridProps, GridColumns, GridAlignment, GridSpanProps } from "./Grid";

export { Center } from "./Center";
export type { CenterProps, CenterAxis } from "./Center";

export { Section } from "./Section";
export type { SectionProps, SectionVariant, SectionDivider } from "./Section";

export { Layout, LayoutHeader, LayoutContent, LayoutFooter, LayoutPanel } from "./Layout";
export { LayoutAreaContext, LayoutDividerContext } from "./Layout";
export type {
  LayoutProps,
  LayoutHeight,
  LayoutArea,
  LayoutHeaderProps,
  LayoutContentProps,
  LayoutFooterProps,
  LayoutPanelProps,
} from "./Layout";

export { FormLayout, FormLayoutContext, useFormLayoutDirection } from "./FormLayout";
export type { FormLayoutProps, FormLayoutDirection } from "./FormLayout";
