import { useEffect, useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ImpersonationBanner } from "./ImpersonationBanner";
import { DESKTOP_MEDIA_QUERY, useMediaQuery } from "@/lib/useMediaQuery";

const useStyles = makeStyles({
  shell: {
    display: "flex",
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  body: {
    ...shorthands.flex(1),
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },
  topbar: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    minHeight: "56px",
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  content: {
    ...shorthands.flex(1),
    minHeight: 0,
    overflowY: "auto",
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalM),
    "@media (min-width: 1024px)": {
      ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
    },
  },
  contentInner: {
    width: "100%",
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  skipLink: {
    position: "absolute",
    top: tokens.spacingVerticalS,
    left: "-9999px",
    zIndex: 1000,
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    boxShadow: tokens.shadow8,
    ":focus": {
      left: tokens.spacingHorizontalM,
    },
  },
});

/**
 * 管理后台外壳：侧边导航 + 顶栏 + 内容区。
 *
 * 响应式策略：
 *   - 宽屏（≥1024px）侧边导航常驻，内容区居中且限宽，保证长行可读性；
 *   - 窄屏导航收进浮层抽屉（由顶栏按钮打开），切换路由后自动收起；
 *   - 切换页面只替换 <Outlet />，外壳不重建，导航滚动位置与抽屉状态不丢。
 */
export function AppLayout() {
  const styles = useStyles();
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        跳到主要内容
      </a>

      {isDesktop && <Sidebar variant="inline" />}

      <div className={styles.body}>
        <header className={styles.topbar}>
          <Header onOpenNav={() => setNavOpen(true)} />
        </header>
        <main id="main-content" className={styles.content} tabIndex={-1}>
          <div className={styles.contentInner}>
            <ImpersonationBanner />
            <Outlet />
          </div>
        </main>
      </div>

      {!isDesktop && navOpen && <Sidebar variant="overlay" open onOpenChange={setNavOpen} />}
    </div>
  );
}
