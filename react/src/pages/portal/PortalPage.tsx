import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Card, makeStyles, tokens, Text } from "@fluentui/react-components";
import { Poll20Regular, Settings20Regular } from "@fluentui/react-icons";
import { useAuth } from "@/lib/auth/AuthContext";
import { ensureAppConfig, usePermissions } from "@/lib/auth/permissions";
import { queryClient } from "@/lib/queryClient";

/**
 * 门户入口页（/）。
 *
 * 多工作区导航中心：后台管理 / 课堂答题。匿名可访问——卡片点击后由目标
 * 路由守卫触发 OIDC 登录（returnUrl 自动回跳）。已登录时按权限过滤课堂
 * 入口（Classroom.Sessions.ViewDashboard）；后台入口始终显示，内部菜单
 * 自行按权限过滤。
 *
 * 学员不提供入口（既定设计：学员仅通过教师分享的课堂码/链接进入）。
 * 各布局顶栏的 "AcroStack" 品牌名均链接回本页。
 */

interface WorkspaceEntry {
  to: string;
  icon: typeof Poll20Regular;
  title: string;
  description: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalXXL,
    padding: tokens.spacingVerticalXXL + " " + tokens.spacingHorizontalL,
    background: tokens.colorNeutralBackground2,
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalS,
  },
  logo: {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: tokens.borderRadiusXLarge,
    background: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 300px))",
    gap: tokens.spacingHorizontalL,
    justifyContent: "center",
    width: "100%",
    maxWidth: "720px",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalXL + " " + tokens.spacingHorizontalXL,
    height: "100%",
    transitionProperty: "transform, border-color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: tokens.shadow16,
    },
  },
  cardIcon: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    color: tokens.colorNeutralForeground3,
  },
});

export function PortalPage() {
  const styles = useStyles();
  const { isAuthenticated } = useAuth();
  const { isGranted } = usePermissions();

  // 已登录时加载应用配置以获取权限快照（去重缓存，见 guards.ts 同款用法）
  useEffect(() => {
    if (isAuthenticated) void ensureAppConfig(queryClient);
  }, [isAuthenticated]);

  // 未登录时入口全部显示（点击由目标路由守卫触发登录）；
  // 已登录时课堂入口按教师权限过滤。
  const showClassroom = !isAuthenticated || isGranted("Classroom.Sessions.ViewDashboard");

  const entries: WorkspaceEntry[] = [
    {
      to: "/classroom/sessions",
      icon: Poll20Regular,
      title: "课堂答题",
      description: "创建课堂、管理题库与试卷，实时答题互动与统计",
    },
    {
      to: "/admin",
      icon: Settings20Regular,
      title: "后台管理",
      description: "系统设置、用户、租户与内容管理",
    },
  ];

  const visibleEntries = entries.filter((e) => e.to !== "/classroom/sessions" || showClassroom);

  return (
    <div className={styles.root}>
      <div className={styles.brand}>
        <div className={styles.logo} aria-hidden="true">
          A
        </div>
        <Text as="h1" size={800} weight="bold">
          AcroStack
        </Text>
        <Text size={400} style={{ color: tokens.colorNeutralForeground2 }}>
          选择工作区
        </Text>
      </div>

      <div className={styles.cards}>
        {visibleEntries.map((entry) => {
          const Icon = entry.icon;
          return (
            <Link key={entry.to} to={entry.to} className={styles.cardLink}>
              <Card className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon />
                </div>
                <Text size={500} weight="semibold">
                  {entry.title}
                </Text>
                <Text size={300} style={{ color: tokens.colorNeutralForeground2 }}>
                  {entry.description}
                </Text>
              </Card>
            </Link>
          );
        })}
      </div>

      <Text as="p" size={200} className={styles.footer}>
        © {new Date().getFullYear()} AcroStack
      </Text>
    </div>
  );
}
