import {
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Ref,
} from "react";
import {
  Button,
  DrawerBody,
  OverlayDrawer,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Navigation20Regular } from "@fluentui/react-icons";

/**
 * 断点名与像素宽度的对应表（对标 Astryx `AppShellBreakpoint` 的语义：
 * 命名点解析为宽度阈值，达到阈值即视为宽屏；`none` 关闭自动移动布局）。
 */
export const APP_SHELL_BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type AppShellBreakpoint = keyof typeof APP_SHELL_BREAKPOINTS | "none";

/**
 * 把断点解析为「最小宽度」像素值；`none` 返回 `null`（永不进入移动布局）。
 * 未指定时按 Astryx 的默认值取 `md`。
 */
export function resolveMobileNavBreakpoint(breakpoint: AppShellBreakpoint = "md"): number | null {
  return breakpoint === "none" ? null : APP_SHELL_BREAKPOINTS[breakpoint];
}

/** 导航区与内容区的对比方式（对应 Astryx 的四个内置变体）。 */
export interface AppShellVariantMap {
  wash: true;
  surface: true;
  section: true;
  elevated: true;
}

export type AppShellVariant = keyof AppShellVariantMap;

/** 主内容区留白档位（映射到 Fluent 间距令牌；`0` 用于需要贴边的表格/看板页面）。 */
export type AppShellSpacingStep = 0 | 3 | 4 | 5 | 6;

/** 移动端导航配置：控制自动生成的抽屉与汉堡开关。 */
export interface MobileNavConfig {
  /** 是否自动渲染汉堡开关（默认 true）；关掉后可用 `useAppShellMobile()` 自行放置。 */
  hasToggle?: boolean;
  /** 受控的抽屉开关状态；提供后组件不再自行管理。 */
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  /** 自定义抽屉内容；省略时使用 `sideNav`。 */
  content?: ReactNode;
  /** 低于该断点启用移动布局（默认 `md`，`none` 为禁用）。 */
  breakpoint?: AppShellBreakpoint;
  /** SSR 提示：初次渲染是否按移动布局处理，避免首屏闪烁。 */
  defaultIsMobile?: boolean;
}

export interface AppShellProps {
  /** 根元素 ref。 */
  ref?: Ref<HTMLDivElement>;
  /** 导航区与内容区的对比方式，默认 `elevated`。 */
  variant?: AppShellVariant;
  /** 系统级通告条，渲染在顶栏之上。 */
  banner?: ReactNode;
  /** 主内容区（渲染为 `<main>`）。 */
  children: ReactNode;
  /** 主内容区留白，默认 `4`。 */
  contentPadding?: AppShellSpacingStep;
  /** 高度模式：`fill` 撑满视口、内容内部滚动（默认）；`auto` 随内容增长、整页滚动。 */
  height?: "fill" | "auto";
  /** 移动端导航：`false` 禁用；配置对象为受控/自定义；节点为完全自定义的抽屉内容。 */
  mobileNav?: false | MobileNavConfig | ReactNode;
  /** 侧边导航槽位；没有侧栏时不要传（不要传渲染 null 的组件）。 */
  sideNav?: ReactNode;
  /** 顶部导航槽位。 */
  topNav?: ReactNode;
  className?: string;
}

export interface AppShellMobileContextValue {
  /** 当前是否为移动布局（低于配置的断点时为 true）。 */
  isMobile: boolean;
  /** 移动抽屉是否打开。 */
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const AppShellMobileContext = createContext<AppShellMobileContextValue>({
  isMobile: false,
  isOpen: false,
  setOpen: () => undefined,
});

/** 读取移动布局状态：`topNav`/`sideNav` 槽位里的组件据此决定渲染什么。 */
export function useAppShellMobile(): AppShellMobileContextValue {
  return useContext(AppShellMobileContext);
}

/** 订阅媒体查询（SSR 下首次渲染为 false，与 Astryx 的 `defaultIsMobile` 配合）。 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** 配置对象与 React 节点（逃生舱）的判别：元素一律当内容。 */
function isMobileNavConfig(value: unknown): value is MobileNavConfig {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    !isValidElement(value)
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  fill: {
    height: "100dvh",
    ...shorthands.overflow("hidden"),
  },
  auto: {
    minHeight: "100dvh",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 0,
  },
  banner: {
    flexShrink: 0,
  },
  row: {
    display: "flex",
    flexGrow: 1,
    minHeight: 0,
  },
  topNav: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
  },
  topNavContent: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    minWidth: 0,
  },
  sideNav: {
    flexShrink: 0,
    display: "flex",
  },
  main: {
    flexGrow: 1,
    minWidth: 0,
    ...shorthands.overflow("auto"),
  },
  /* ── 变体：只调整背景与分隔线，颜色全部来自令牌 ── */
  rootElevated: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  navElevated: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  sideElevated: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  rootSection: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  navSection: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  sideSection: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRightWidth: tokens.strokeWidthThin,
    borderRightStyle: "solid",
    borderRightColor: tokens.colorNeutralStroke2,
  },
  rootWash: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  navWash: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  sideWash: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  rootSurface: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  navSurface: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  sideSurface: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  /* ── 内容留白档位 ── */
  pad0: {
    ...shorthands.padding(0),
  },
  pad3: {
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
  },
  pad4: {
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
  pad5: {
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
  },
  pad6: {
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
  },
});

/**
 * `AppShell` —— 应用级页面骨架（对标 Astryx `@astryxdesign/core` 的 AppShell）。
 *
 * 槽位式 API：`banner` / `topNav` / `sideNav` / `children`（主内容，渲染为 `<main>`）。
 * 行为：
 *   - `height`：`fill` 撑满视口、内容内部滚动；`auto` 随内容增长；
 *   - 响应式：低于 `mobileNav.breakpoint` 时侧栏移入浮层抽屉，并自动渲染汉堡开关；
 *   - `mobileNav` 支持 `false`（禁用）、配置对象（受控/定制）、或直接给节点（完全自定义）。
 * 样式全部来自 Fluent 令牌与 `shorthands`，不覆盖 Fluent 组件外观。
 */
export function AppShell({
  ref,
  variant = "elevated",
  banner,
  children,
  contentPadding = 4,
  height = "fill",
  mobileNav,
  sideNav,
  topNav,
  className,
}: AppShellProps) {
  const styles = useStyles();

  const navDisabled = mobileNav === false;
  const navConfig = !navDisabled && isMobileNavConfig(mobileNav) ? mobileNav : undefined;
  const customDrawer = !navDisabled && !navConfig ? (mobileNav as ReactNode) : undefined;

  const breakpoint: AppShellBreakpoint = navDisabled ? "none" : (navConfig?.breakpoint ?? "md");
  const minWidth = resolveMobileNavBreakpoint(breakpoint);
  const isDesktop = useMediaQuery(`(min-width: ${minWidth ?? 1}px)`);
  const isMobile = minWidth !== null && !isDesktop;

  const controlledOpen = navConfig?.isOpen;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(navConfig?.defaultIsMobile ?? false);
  const isOpen = navDisabled ? false : (controlledOpen ?? uncontrolledOpen);

  const setOpen = (next: boolean) => {
    if (navDisabled) return;
    navConfig?.onOpenChange?.(next);
    if (controlledOpen === undefined) setUncontrolledOpen(next);
  };

  // 上下文每次渲染新建对象：AppShell 只在布局状态变化时重渲染，这里换取实现的简单与可读。
  const contextValue: AppShellMobileContextValue = { isMobile, isOpen, setOpen };

  const drawerContent = navDisabled ? undefined : (navConfig?.content ?? customDrawer ?? sideNav);
  const showToggle = isMobile && !navDisabled && navConfig?.hasToggle !== false;

  const rootVariant =
    variant === "wash"
      ? styles.rootWash
      : variant === "section"
        ? styles.rootSection
        : variant === "surface"
          ? styles.rootSurface
          : styles.rootElevated;
  const navVariant =
    variant === "wash"
      ? styles.navWash
      : variant === "section"
        ? styles.navSection
        : variant === "surface"
          ? styles.navSurface
          : styles.navElevated;
  const sideVariant =
    variant === "wash"
      ? styles.sideWash
      : variant === "section"
        ? styles.sideSection
        : variant === "surface"
          ? styles.sideSurface
          : styles.sideElevated;

  const paddingClass =
    contentPadding === 0
      ? styles.pad0
      : contentPadding === 3
        ? styles.pad3
        : contentPadding === 5
          ? styles.pad5
          : contentPadding === 6
            ? styles.pad6
            : styles.pad4;

  return (
    <AppShellMobileContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={mergeClasses(
          styles.root,
          rootVariant,
          height === "fill" ? styles.fill : styles.auto,
          className,
        )}
      >
        {banner && <div className={styles.banner}>{banner}</div>}

        <div className={styles.body}>
          {topNav && (
            <header className={mergeClasses(styles.topNav, navVariant)}>
              {showToggle && (
                <Button
                  appearance="subtle"
                  icon={<Navigation20Regular />}
                  aria-label="打开导航"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(!isOpen)}
                />
              )}
              <div className={styles.topNavContent}>{topNav}</div>
            </header>
          )}

          <div className={styles.row}>
            {!isMobile && sideNav && (
              <aside className={mergeClasses(styles.sideNav, sideVariant)}>{sideNav}</aside>
            )}
            <main className={mergeClasses(styles.main, paddingClass)}>{children}</main>
          </div>
        </div>

        {isMobile && drawerContent && (
          <OverlayDrawer
            open={isOpen}
            onOpenChange={(_event, data) => setOpen(data.open)}
            size="small"
            aria-label="导航"
          >
            <DrawerBody>{drawerContent}</DrawerBody>
          </OverlayDrawer>
        )}
      </div>
    </AppShellMobileContext.Provider>
  );
}
