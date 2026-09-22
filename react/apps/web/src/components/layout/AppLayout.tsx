import { Outlet } from "@tanstack/react-router";
import { AppShell } from "@acrostack/ui/app-shell";
import { Center, VStack } from "@acrostack/ui/layout";
import { Header } from "./Header";
import { Sidebar, SidebarNav } from "./Sidebar";
import { ImpersonationBanner } from "./ImpersonationBanner";

/** 内容列最大宽度：与外壳的内边距一起保证长行可读。 */
const CONTENT_MAX_WIDTH = 1440;

/**
 * 管理后台布局：外壳交给 `@acrostack/ui/app-shell`，内容列宽用布局原语表达。
 *
 * 槽位映射：`topNav` = 顶栏（含面包屑与账户区）、`sideNav` = 常驻侧栏、
 * `banner` = 模拟登录提示、`children` = 当前页面（`<Outlet />`）。
 * 窄屏（< lg）时 AppShell 把侧栏收进浮层抽屉并自动渲染汉堡开关，
 * 抽屉内容复用同一份 `SidebarNav`。
 */
export function AppLayout() {
  return (
    <AppShell
      contentPadding={6}
      mobileNav={{ hasToggle: true, breakpoint: "lg", content: <SidebarNav /> }}
      banner={<ImpersonationBanner />}
      topNav={<Header />}
      sideNav={<Sidebar />}
    >
      {/* 内容列限宽并水平居中；窄屏时自然占满 */}
      <Center axis="horizontal">
        <VStack gap={4} width="100%" maxWidth={CONTENT_MAX_WIDTH}>
          <Outlet />
        </VStack>
      </Center>
    </AppShell>
  );
}
