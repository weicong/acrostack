/**
 * 全局 TanStack Query 客户端单例。
 * 守卫（beforeLoad）等非 React 上下文也需要它，因此由 core 持有并导出。
 */
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 默认 1 分钟
      retry: 1,
    },
  },
});
