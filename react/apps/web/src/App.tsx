import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "@fluentui/react-components";
import { router } from "@/lib/routing/router";
import { AuthProvider, queryClient } from "@acrostack/core";
import { RouteEventProvider } from "@/lib/routing/RouteEventProvider";
import { AppThemeProvider } from "@acrostack/ui/theme";

/**
 * 根组件：提供品牌主题（含明暗色）与全局数据/认证上下文。
 * 主题由 AppThemeProvider 注入，界面中的颜色一律通过 Fluent 令牌获取。
 */
function App() {
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouteEventProvider />
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}

export default App;
