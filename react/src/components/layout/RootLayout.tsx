import { Outlet } from "@tanstack/react-router";

/**
 * 根布局：仅承担全局包装职责（FluentProvider/Toaster 挂在 App.tsx）。
 *
 * 页面区域布局由路由树声明式决定（TanStack Router 布局路由）：
 *   /admin/*        → routes/admin/route.tsx      AppLayout（侧边栏管理后台）
 *   /classroom/*    → routes/classroom/route.tsx  ClassroomLayout（教师教学端）
 *   /student/*      → routes/student/route.tsx    StudentLayout（学员移动端）
 *   /presentation/* → routes/presentation/route.tsx 裸布局（投屏）
 *   /account/*      → routes/account/route.tsx    AccountLayout（匿名账户页）
 */
export function RootLayout() {
  return <Outlet />;
}
