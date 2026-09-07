/**
 * 学员门户底部导航（移动端）：我的课堂 / 我的资料。
 * 答题页与记录详情页不挂导航（子页面，返回即回列表）。
 */
import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { makeStyles, Text, tokens } from "@fluentui/react-components";
import { Board20Regular, Person20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  tabs: {
    display: "flex",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    background: tokens.colorNeutralBackground1,
    paddingBottom: "env(safe-area-inset-bottom)",
  },
  tab: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: tokens.spacingVerticalXXS,
    padding: `${tokens.spacingVerticalS} 0`,
    color: tokens.colorNeutralForeground3,
    textDecoration: "none",
  },
  tabActive: {
    color: tokens.colorBrandForeground1,
  },
});

const TABS = [
  { to: "/student", label: "我的课堂", icon: Board20Regular },
  { to: "/student/profile", label: "我的资料", icon: Person20Regular },
] as const;

export function StudentPortalTabs() {
  const styles = useStyles();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={styles.tabs}>
      {TABS.map(({ to, label, icon: Icon }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to} className={`${styles.tab} ${active ? styles.tabActive : ""}`}>
            <Icon />
            <Text size={200}>{label}</Text>
          </Link>
        );
      })}
    </nav>
  );
}
