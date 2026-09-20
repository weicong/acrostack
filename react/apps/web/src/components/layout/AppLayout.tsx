import { Outlet } from "@tanstack/react-router";
import { AppShell } from "@acrostack/app-shell";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Header } from "./Header";
import { Sidebar, SidebarNav } from "./Sidebar";
import { ImpersonationBanner } from "./ImpersonationBanner";

const useStyles = makeStyles({
  // 长行可读性：内容区居中并限宽（外壳自身的两列与留白由 AppShell 负责）
  content: {
    width: "100%",
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
});

/**
 * 管理后台布局：外壳交给 `@acrostack/app-shell`。
 *
 * 槽位映射：`topNav` = 顶栏（含面包屑与账户区）、`sideNav` = 常驻侧栏、
 * `banner` = 模拟登录提示、`children` = 当前页面（`<Outlet />`）。
 * 窄屏（< lg）时 AppShell 把侧栏收进浮层抽屉并自动渲染汉堡开关，
 * 抽屉内容复用同一份 `SidebarNav`。
 */
export function AppLayout() {
  const styles = useStyles();

  return (
    <AppShell
      variant="elevated"
      contentPadding={6}
      mobileNav={{ hasToggle: true, breakpoint: "lg", content: <SidebarNav /> }}
      banner={<ImpersonationBanner />}
      topNav={<Header />}
      sideNav={<Sidebar />}
    >
      <div className={styles.content}>
        <Outlet />
      </div>
    </AppShell>
  );
}
