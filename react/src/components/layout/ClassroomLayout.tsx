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
    // 品牌底上的交互态：沿用 Fluent on-brand 配方（PrimaryButton 同款色阶），
    // 明色主题下压暗、暗色主题下提亮，随主题自适应
    "& button": {
      color: tokens.colorNeutralForegroundOnBrand,
      ":hover": { backgroundColor: tokens.colorBrandBackgroundHover },
      ":active": { backgroundColor: tokens.colorBrandBackgroundPressed },
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
    "& [role='tablist']": { gap: tokens.spacingHorizontalS },
    // 品牌色顶栏内的反色适配：Tab 文本色由内部 .fui-Tab__content 显式指定
    // （未选中 Foreground2、选中 Foreground1），不继承 header 的 OnBrand 前景，
    // 需逐状态覆盖；悬停底色（Subtle 灰）与选中指示条（品牌蓝）在蓝底上同样失效，
    // 分别改为 on-brand 品牌色阶（Hover/Pressed）与 OnBrand 白色叠加。
    "& [role='tab']": {
      ":hover": { backgroundColor: tokens.colorBrandBackgroundHover },
      ":active": { backgroundColor: tokens.colorBrandBackgroundPressed },
      // 未选中 Tab 的悬停指示条（::before）：OnBrand 前景 + 透明度模拟半透明白
      // （无白色 alpha token；StrokeOnBrand 在暗色主题为深灰，蓝底上不可用）
      ":hover::before": {
        backgroundColor: tokens.colorNeutralForegroundOnBrand,
        opacity: 0.4,
      },
    },
    "& [role='tab'] .fui-Tab__content": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
    "& [role='tab']:hover .fui-Tab__content": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
    "& [role='tab']:active .fui-Tab__content": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
    "& [role='tab'][aria-selected='true'] .fui-Tab__content": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
    "& [role='tab'][aria-selected='true']::after": {
      backgroundColor: tokens.colorNeutralForegroundOnBrand,
    },
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
