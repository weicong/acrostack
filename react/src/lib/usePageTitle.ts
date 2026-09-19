/**
 * 页面标题管理：把页面名写入浏览器标签页标题（document.title）。
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
