import {
  createContext,
  useContext,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import {
  mergeStyle,
  toCssValue,
  usePaddingClass,
  type PaddingProps,
  type SizeProps,
  type SizeValue,
} from "./spacing";

/** 高度行为：`fill` 撑满容器、内容区内部滚动（默认）；`auto` 随内容增长、整页滚动。 */
export type LayoutHeight = "fill" | "auto";

/** 侧栏面板所在插槽（决定分隔线朝向）。 */
export type LayoutArea = "start" | "end";

/** 当前面板所处的插槽；`LayoutPanel` 据此自动决定分隔线画在哪条边。 */
export const LayoutAreaContext = createContext<LayoutArea | undefined>(undefined);

/** 由 `Layout` 下发的分隔线默认值（`LayoutHeader`/`LayoutFooter`/`LayoutPanel` 继承）。 */
export const LayoutDividerContext = createContext<boolean | undefined>(undefined);

const useStyles = makeStyles({
  root: { display: "flex", flexDirection: "column", minWidth: 0 },
  fill: { height: "100%", minHeight: 0 },
  row: { display: "flex", flexDirection: "row", flexGrow: 1, minHeight: 0, minWidth: 0 },
  content: { flexGrow: 1, minWidth: 0 },
  header: { flexShrink: 0 },
  footer: { flexShrink: 0 },
  panel: { display: "flex", flexDirection: "column", flexShrink: 0 },
  scrollable: { overflowX: "auto", overflowY: "auto", minWidth: 0, minHeight: 0 },
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

/**
 * 内容宽度的统一约束：每个插槽各包一层，保证页头/内容/页脚对齐到同一列，
 * 而分隔线仍可通栏（由插槽自身的边框负责）。
 */
function Slot({
  contentWidth,
  className,
  children,
}: {
  contentWidth?: SizeValue;
  className?: string;
  children: ReactNode;
}) {
  const frame: CSSProperties | undefined =
    contentWidth === undefined
      ? undefined
      : { width: "100%", maxWidth: toCssValue(contentWidth), marginInline: "auto" };

  return (
    <div className={className} style={frame}>
      {children}
    </div>
  );
}

/** `content` 是插槽名，与 HTML 的 `content` 属性同名，这里把它从透传属性中排除。 */
export interface LayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, "content">, SizeProps {
  ref?: Ref<HTMLDivElement>;
  /** 页头插槽（用 `LayoutHeader`）。 */
  header?: ReactNode;
  /** 左侧面板插槽（LTR 左 / RTL 右，用 `LayoutPanel`）。 */
  start?: ReactNode;
  /** 主内容插槽；也可直接用 `children`。 */
  content?: ReactNode;
  /** 右侧面板插槽（LTR 右 / RTL 左，用 `LayoutPanel`）。 */
  end?: ReactNode;
  /** 页脚插槽（用 `LayoutFooter`）。 */
  footer?: ReactNode;
  /** 页头/内容/页脚对齐到同一宽度（分隔线仍通栏）。 */
  contentWidth?: SizeValue;
  /** 高度行为，默认 `fill`。 */
  height?: LayoutHeight;
  /** 整体外边距（间距刻度）。 */
  padding?: PaddingProps["padding"];
  /** 页头/页脚默认是否画分隔线；子组件可用 `hasDivider` 覆盖。 */
  defaultHasDividers?: boolean;
  /** `content` 的简写；两者都传时以 `content` 为准。 */
  children?: ReactNode;
}

/**
 * 五槽位页面骨架：`header` / `start` / `content` / `end` / `footer`。
 *
 * 页内有侧栏用 `start`，有详情面板用 `end`，有固定页头/页脚用 `header`/`footer`；
 * 只是纵向排一列内容则用 `VStack`。滚动只发生在内容区，页头页脚常驻。
 */
export function Layout({
  ref,
  header,
  start,
  content,
  end,
  footer,
  contentWidth,
  height = "fill",
  padding,
  defaultHasDividers,
  className,
  style,
  children,
  ...rest
}: LayoutProps) {
  const styles = useStyles();
  const paddingClass = usePaddingClass({ padding });
  const body = content ?? children;

  return (
    <LayoutDividerContext.Provider value={defaultHasDividers}>
      <div
        {...rest}
        ref={ref}
        className={mergeClasses(
          styles.root,
          height === "fill" ? styles.fill : undefined,
          paddingClass,
          className,
        )}
        style={style}
      >
        {header !== undefined && (
          <Slot contentWidth={contentWidth} className={styles.header}>
            {header}
          </Slot>
        )}

        <div className={styles.row}>
          {start !== undefined && (
            <LayoutAreaContext.Provider value="start">{start}</LayoutAreaContext.Provider>
          )}
          <Slot contentWidth={contentWidth} className={styles.content}>
            {body}
          </Slot>
          {end !== undefined && (
            <LayoutAreaContext.Provider value="end">{end}</LayoutAreaContext.Provider>
          )}
        </div>

        {footer !== undefined && (
          <Slot contentWidth={contentWidth} className={styles.footer}>
            {footer}
          </Slot>
        )}
      </div>
    </LayoutDividerContext.Provider>
  );
}

export interface LayoutHeaderProps extends HTMLAttributes<HTMLElement>, PaddingProps {
  ref?: Ref<HTMLElement>;
  /** 是否在底边画分隔线；未设置时继承 `Layout` 的 `defaultHasDividers`。 */
  hasDivider?: boolean;
  /** 固定高度（数字按像素）。 */
  height?: SizeValue;
  /** 读屏名称（`aria-label`），同类型地标有多个时必填。 */
  label?: string;
  children?: ReactNode;
}

/** 布局页头：常驻不滚动，可选底边分隔线。 */
export function LayoutHeader({
  ref,
  hasDivider,
  height,
  label,
  padding,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  className,
  style,
  children,
  ...rest
}: LayoutHeaderProps) {
  const styles = useStyles();
  const inherited = useContext(LayoutDividerContext);
  const showDivider = hasDivider ?? inherited ?? false;
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
    <header
      {...rest}
      ref={ref}
      aria-label={label}
      className={mergeClasses(
        styles.header,
        paddingClass,
        showDivider ? styles.dividerBottom : undefined,
        className,
      )}
      style={mergeStyle({ height }, style)}
    >
      {children}
    </header>
  );
}

export interface LayoutContentProps extends HTMLAttributes<HTMLDivElement>, PaddingProps {
  ref?: Ref<HTMLDivElement>;
  /** 是否作为滚动区（默认 `true`）；`auto` 高度布局下设为 `false`。 */
  isScrollable?: boolean;
  /** 读屏名称（`aria-label`）。 */
  label?: string;
  children?: ReactNode;
}

/**
 * 布局主内容区：自带内边距与滚动（默认开启），因此不要在其子元素上再加
 * padding/overflow；需要通栏内容时传 `padding={0}`。
 */
export function LayoutContent({
  ref,
  isScrollable = true,
  label,
  padding,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  className,
  style,
  children,
  ...rest
}: LayoutContentProps) {
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
      aria-label={label}
      className={mergeClasses(
        styles.content,
        isScrollable ? styles.scrollable : undefined,
        paddingClass,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export interface LayoutFooterProps extends HTMLAttributes<HTMLElement>, PaddingProps {
  ref?: Ref<HTMLElement>;
  /** 是否在顶边画分隔线；未设置时继承 `Layout` 的 `defaultHasDividers`。 */
  hasDivider?: boolean;
  /** 固定高度（数字按像素）。 */
  height?: SizeValue;
  /** 读屏名称（`aria-label`）。 */
  label?: string;
  children?: ReactNode;
}

/** 布局页脚：操作条、分页、状态栏等常驻底部内容。 */
export function LayoutFooter({
  ref,
  hasDivider,
  height,
  label,
  padding,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  className,
  style,
  children,
  ...rest
}: LayoutFooterProps) {
  const styles = useStyles();
  const inherited = useContext(LayoutDividerContext);
  const showDivider = hasDivider ?? inherited ?? false;
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
    <footer
      {...rest}
      ref={ref}
      aria-label={label}
      className={mergeClasses(
        styles.footer,
        paddingClass,
        showDivider ? styles.dividerTop : undefined,
        className,
      )}
      style={mergeStyle({ height }, style)}
    >
      {children}
    </footer>
  );
}

export interface LayoutPanelProps extends HTMLAttributes<HTMLElement>, PaddingProps {
  ref?: Ref<HTMLElement>;
  /**
   * 是否画分隔线：`start` 插槽画在尾边、`end` 插槽画在首边；
   * 未设置时继承 `Layout` 的 `defaultHasDividers`。
   */
  hasDivider?: boolean;
  /** 面板宽度（数字按像素）。 */
  width?: SizeValue;
  /** 是否作为滚动区（默认 `true`）。 */
  isScrollable?: boolean;
  /** 读屏名称（`aria-label`），同类型地标有多个时必填。 */
  label?: string;
  children?: ReactNode;
}

/**
 * 布局侧栏面板：放进 `Layout` 的 `start`（导航）或 `end`（详情/检查器）插槽，
 * 分隔线朝向由所在插槽自动决定。
 *
 * 已知差异：Astryx 的 `resizable` 依赖其 Resizable 能力，这里暂未提供。
 */
export function LayoutPanel({
  ref,
  hasDivider,
  width,
  isScrollable = true,
  label,
  padding,
  paddingInline,
  paddingInlineStart,
  paddingInlineEnd,
  paddingBlock,
  paddingBlockStart,
  paddingBlockEnd,
  className,
  style,
  children,
  ...rest
}: LayoutPanelProps) {
  const styles = useStyles();
  const area = useContext(LayoutAreaContext);
  const inherited = useContext(LayoutDividerContext);
  const showDivider = hasDivider ?? inherited ?? false;
  const paddingClass = usePaddingClass({
    padding,
    paddingInline,
    paddingInlineStart,
    paddingInlineEnd,
    paddingBlock,
    paddingBlockStart,
    paddingBlockEnd,
  });
  const dividerClass =
    area === "end" ? styles.dividerStart : area === "start" ? styles.dividerEnd : undefined;

  return (
    <aside
      {...rest}
      ref={ref}
      aria-label={label}
      className={mergeClasses(
        styles.panel,
        isScrollable ? styles.scrollable : undefined,
        paddingClass,
        showDivider ? dividerClass : undefined,
        className,
      )}
      style={mergeStyle({ width }, style)}
    >
      {children}
    </aside>
  );
}
