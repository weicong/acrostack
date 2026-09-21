/**
 * `@acrostack/ui/app-shell` 的公开入口。
 * 导出面与 Astryx `@astryxdesign/core/AppShell` 对齐：
 * 组件 + 移动端上下文与 hook + props/配置类型 + 可扩展的变体映射表。
 */
export { AppShell, APP_SHELL_BREAKPOINTS, resolveMobileNavBreakpoint } from "./AppShell";
export {
  AppShellMobileContext,
  useAppShellMobile,
  type AppShellMobileContextValue,
  type AppShellProps,
  type AppShellBreakpoint,
  type AppShellVariant,
  type AppShellVariantMap,
  type AppShellSpacingStep,
  type MobileNavConfig,
} from "./AppShell";
