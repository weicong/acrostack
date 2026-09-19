import { Outlet } from "@tanstack/react-router";

/**
 * 根布局：仅承担全局包装职责（FluentProvider/Toaster 挂在 App.tsx）。
 *
 * 页面区域布局由路由树声明式决定（TanStack Router 布局路由）：
 *   /admin/*        → routes/admin/route.tsx      AppLayout（侧边栏管理后台）
 *   /account/*      → routes/account/route.tsx    AccountLayout（匿名账户页）
 */
export function RootLayout() {
  return <Outlet />;
}
