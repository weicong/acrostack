"use client";

import { useEffect, useState } from "react";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

/**
 * 读取 `<html>` 上的 `dark` 类，并订阅它的变化。
 *
 * 本包是 `@workspace/layout` 的**下层**（layout 依赖 ui，不能反向依赖），所以这里不能
 * 用 layout 的 `useTheme`。主题在文档根节点上的类名是两者唯一稳定的交汇点。
 */
function useDocumentTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.classList.contains("dark") ? "dark" : "light");

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}

/**
 * Toast 宿主。挂在应用根部（见 `apps/web` 的 `App.tsx`），调用侧用 sonner 的模块级
 * 函数 `toast.success(...)` / `toast.error(...)`，无需 hook。
 */
function Toaster({ ...props }: ToasterProps) {
  const theme = useDocumentTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
