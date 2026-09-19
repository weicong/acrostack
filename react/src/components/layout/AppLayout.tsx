import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ImpersonationBanner } from "./ImpersonationBanner";

/**
 * 应用外壳：只使用 Fluent UI 组件与原生语义元素，不引入任何自定义样式
 * （无 CSS 类、无内联样式、无样式文件）。
 */
export function AppLayout() {
  return (
    <div>
      <Header />
      <ImpersonationBanner />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
