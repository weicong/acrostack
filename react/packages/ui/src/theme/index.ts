/**
 * `@acrostack/ui/theme` 的公开入口：品牌色阶与明暗外观。
 *
 * 颜色令牌属于设计系统，因此和样式一样只在本包内定义：
 * 应用侧只消费 `AppThemeProvider` / `useThemeMode` 与主题对象，
 * 不再自己声明颜色。
 */
export { AppThemeProvider, getPreferredTheme, useThemeMode } from "./ThemeProvider";
export type { ThemeMode } from "./ThemeProvider";
export { appDarkTheme, appLightTheme, brandRamp } from "./brand";
