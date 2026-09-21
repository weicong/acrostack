/**
 * 页面标题管理：把页面名写入浏览器标签页标题（document.title），
 * 同时发布到模块级的小仓库，供顶栏面包屑读取当前页名。
 *
 * 为什么需要仓库：侧栏菜单只覆盖菜单内的路由（个人信息、设置、功能等
 * 非菜单页匹配不到），顶栏若只认菜单就会显示错误的位置。
 */
import { useEffect, useSyncExternalStore } from "react";
import { getApplicationName } from "./runtimeConfig";

let currentPageTitle: string | undefined;
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** 当前页面名（页面未声明时返回 `undefined`）。 */
export function useCurrentPageTitle(): string | undefined {
  return useSyncExternalStore(subscribe, () => currentPageTitle);
}

export function usePageTitle(title?: string | null) {
  const appName = getApplicationName();

  useEffect(() => {
    currentPageTitle = title ?? undefined;
    notify();
    document.title = title ? `${title} · ${appName}` : appName;
    return () => {
      currentPageTitle = undefined;
      notify();
      document.title = appName;
    };
  }, [appName, title]);
}
