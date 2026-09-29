import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "@workspace/ui/components/sonner";
import { AuthProvider, queryClient } from "@workspace/core";

import { RouteEventProvider } from "@/lib/RouteEventProvider";
import { router } from "@/router";

/**
 * 根组件：只负责全局上下文——数据缓存、认证、路由，以及 Toast 宿主。
 *
 * 主题不在这里 Provider：它挂在 `<html>` 的 `dark` 类上（首屏由 index.html
 * 的内联脚本按 localStorage 预先应用，避免闪白），所以没有任何 React 上下文
 * 需要往下传。
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouteEventProvider />
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
