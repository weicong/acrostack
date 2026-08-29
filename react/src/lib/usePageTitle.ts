/**
 * 页面标题管理：把页面名写入浏览器标签页标题（document.title）。
 *
 * main.tsx 启动时将 document.title 设为应用名，之后各页面不再变更，
 * 导致多标签页时无法区分。页面组件调用 usePageTitle("题库管理") 后
 * 标题变为 "题库管理 · 中卫云"；卸载时恢复为应用名，
 * 未接入的页面保持原有行为。
 */
import { useEffect } from "react";
import { getApplicationName } from "./runtimeConfig";

export function usePageTitle(title?: string | null) {
  const appName = getApplicationName();
  useEffect(() => {
    document.title = title ? `${title} · ${appName}` : appName;
    return () => {
      document.title = appName;
    };
  }, [appName, title]);
}
