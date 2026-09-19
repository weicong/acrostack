import { useEffect, useState } from "react";

/**
 * 宽屏断点：达到此宽度时侧边导航常驻，否则收进抽屉。
 * 由外壳与顶栏共用，确保两处的布局判断始终一致。
 */
export const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

/**
 * 订阅媒体查询结果（响应式布局用）。
 * 使用 matchMedia 的 change 事件而非 window.resize，避免缩放/滚动条引起的抖动。
 */
export function useMediaQuery(query: string): boolean {
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
