import {
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Ref,
} from "react";
import { Button, DrawerBody, OverlayDrawer } from "@fluentui/react-components";
import { Navigation20Regular } from "@fluentui/react-icons";
import { HStack, StackItem, VStack, type LayoutHeight, type SpacingStep } from "../layout";

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
  /** 系统级通告条，渲染在顶栏之上。 */
  banner?: ReactNode;
  /** 主内容区（渲染为 `<main>`）。 */
  children: ReactNode;
  /** 主内容内边距（间距刻度），默认 `4`（16px）。 */
  contentPadding?: SpacingStep;
  /** 高度模式：`fill` 撑满视口、内容区内部滚动（默认）；`auto` 随内容增长、整页滚动。 */
  height?: LayoutHeight;
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
    typeof value === "object" && value !== null && !Array.isArray(value) && !isValidElement(value)
  );
}

/**
 * `AppShell` —— 应用级页面骨架（对标 Astryx `@astryxdesign/core` 的 AppShell）。
 *
 * 槽位式 API：`banner` / `topNav` / `sideNav` / `children`（主内容，渲染为 `<main>`）。
 * 行为：
 *   - 外壳自身的布局（`fill` 高度、顶栏/侧栏常驻、内容区滚动、内边距）由
 *     `@acrostack/ui/layout` 的布局原语组合而成，消费方不必再补样式；
 *   - 响应式：低于 `mobileNav.breakpoint` 时侧栏移入浮层抽屉，并自动渲染汉堡开关；
 *   - `mobileNav` 支持 `false`（禁用）、配置对象（受控/定制）、或直接给节点（完全自定义）。
 */
export function AppShell({
  ref,
  banner,
  children,
  contentPadding = 4,
  height = "fill",
  mobileNav,
  sideNav,
  topNav,
  className,
}: AppShellProps) {
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
  const isFill = height === "fill";

  return (
    <AppShellMobileContext.Provider value={contextValue}>
      <VStack
        ref={ref}
        className={className}
        height={isFill ? "100dvh" : undefined}
        minHeight={isFill ? undefined : "100dvh"}
      >
        {banner !== undefined && <StackItem>{banner}</StackItem>}

        {/* 顶栏以下（含侧栏与内容）占满剩余高度 */}
        <StackItem size="fill">
          <VStack height="100%">
            {topNav !== undefined && (
              <StackItem>
                <header>
                  <HStack align="center" gap={2} paddingBlock={2} paddingInline={4}>
                    {showToggle && (
                      <Button
                        appearance="subtle"
                        icon={<Navigation20Regular />}
                        aria-label="打开导航"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(!isOpen)}
                      />
                    )}
                    {/* 槽位内容两端对齐：定位/品牌在左，操作区在右 */}
                    <HStack gap={4} justify="between" align="center" width="100%" minWidth={0}>
                      {topNav}
                    </HStack>
                  </HStack>
                </header>
              </StackItem>
            )}

            <StackItem size="fill">
              <HStack height="100%" minHeight={0}>
                {!isMobile && sideNav !== undefined && <StackItem>{sideNav}</StackItem>}

                {/* 内容区自己滚动（`auto` 模式下交给整页滚动），内边距由外壳统一给出 */}
                <StackItem size="fill" isScrollable={isFill}>
                  <main>
                    <VStack padding={contentPadding}>{children}</VStack>
                  </main>
                </StackItem>
              </HStack>
            </StackItem>
          </VStack>
        </StackItem>

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
      </VStack>
    </AppShellMobileContext.Provider>
  );
}
