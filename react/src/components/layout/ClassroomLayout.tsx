import { useMemo } from "react";
import { Link, Outlet, useMatches, useNavigate, useRouterState } from "@tanstack/react-router";
import { makeStyles, Tab, TabList, Text, tokens } from "@fluentui/react-components";
import { usePermissions } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/AuthContext";
import { UserMenu } from "./UserMenu";

/**
 * 教师课堂布局（/classroom/*）。
 *
 * 精简教学 chrome：品牌顶栏 + 课堂导航（我的课堂/题库管理/试卷管理）+ 用户菜单，
 * 无侧边栏/Footer——与管理后台（AppLayout）完全分离，教师进入课堂不被管理菜单打扰。
 *
 * 全屏变体：叶子路由声明 `staticData: { fullscreen: true }`（如驾驶舱
 * /classroom/$sessionId）时隐藏顶栏，实时统计可用足屏宽度。
 */

interface ClassroomNavItem {
  value: string;
  name: string;
  requiredPolicy: string;
}

const NAV_ITEMS: ClassroomNavItem[] = [
  {
    value: "/classroom/sessions",
    name: "我的课堂",
    requiredPolicy: "Classroom.Sessions.ViewDashboard",
  },
  { value: "/classroom/questions", name: "题库管理", requiredPolicy: "Classroom.Questions.Manage" },
  { value: "/classroom/quizzes", name: "试卷管理", requiredPolicy: "Classroom.Quizzes.Manage" },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: tokens.colorNeutralBackground2,
  },
  header: {
    display: "flex",
    height: "3.5rem",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: `0 ${tokens.spacingHorizontalL}`,
    background: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    "& button": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
  },
  brand: {
    flexShrink: 0,
    display: "flex",
    alignItems: "baseline",
    gap: tokens.spacingHorizontalXS,
  },
  // 品牌名回链：点击返回门户入口（/）
  brandLink: {
    textDecoration: "none",
    color: "inherit",
  },
  nav: {
    flex: 1,
    minWidth: 0,
    // TabList 品牌色顶栏内的反色样式
    "& [role='tablist']": { gap: tokens.spacingHorizontalS },
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
  content: {
    flex: 1,
    minHeight: 0,
  },
});

export function ClassroomLayout() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useRouterState().location;
  const { isAuthenticated } = useAuth();
  const { isGranted } = usePermissions();

  // 全屏变体：任一活动路由声明 fullscreen（如驾驶舱）
  const fullscreen = useMatches().some(
    (m) => (m.staticData as { fullscreen?: boolean } | undefined)?.fullscreen === true,
  );

  const visibleItems = useMemo(
    () => (isAuthenticated ? NAV_ITEMS.filter((i) => isGranted(i.requiredPolicy)) : []),
    [isAuthenticated, isGranted],
  );

  // 驾驶舱（/classroom/$sessionId）归属"我的课堂"导航域
  const selectedValue = useMemo(() => {
    if (pathname.startsWith("/classroom/questions")) return "/classroom/questions";
    if (pathname.startsWith("/classroom/quizzes")) return "/classroom/quizzes";
    return "/classroom/sessions";
  }, [pathname]);

  if (fullscreen) {
    return <Outlet />;
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink} aria-label="AcroStack">
            <Text weight="semibold">AcroStack</Text>
          </Link>
          <Text size={300}>{"课堂答题"}</Text>
        </div>
        <nav className={styles.nav}>
          <TabList
            size="medium"
            appearance="subtle"
            selectedValue={selectedValue}
            onTabSelect={(_, d) => {
              if (typeof d.value === "string") void navigate({ to: d.value });
            }}
          >
            {visibleItems.map((item) => (
              <Tab key={item.value} value={item.value}>
                {item.name}
              </Tab>
            ))}
          </TabList>
        </nav>
        <div className={styles.actions}>{isAuthenticated && <UserMenu />}</div>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
