import { Link } from "@tanstack/react-router";
import { Card, tokens, Text } from "@fluentui/react-components";
import { Settings20Regular } from "@fluentui/react-icons";
import { getApplicationName } from "@/lib/runtimeConfig";
import { usePortalStyles } from "./styles/portal";

/**
 * 门户入口页（/）。
 *
 * 应用入口页：匿名可访问——卡片点击后由目标路由守卫触发 OIDC 登录
 * （returnUrl 自动回跳）。
 * 各布局顶栏的品牌名（后端 AppName）均链接回本页。
 */

interface WorkspaceEntry {
  to: string;
  icon: typeof Settings20Regular;
  title: string;
  description: string;
}

const useStyles = usePortalStyles;

const ENTRIES: WorkspaceEntry[] = [
  {
    to: "/admin",
    icon: Settings20Regular,
    title: "后台管理",
    description: "系统设置、用户、角色与权限管理",
  },
];

export function PortalPage() {
  const styles = useStyles();
  const appName = getApplicationName();

  return (
    <div className={styles.root}>
      <div className={styles.brand}>
        <div className={styles.logo} aria-hidden="true">
          {appName.charAt(0)}
        </div>
        <Text as="h1" size={800} weight="bold">
          {appName}
        </Text>
        <Text size={400} style={{ color: tokens.colorNeutralForeground2 }}>
          选择工作区
        </Text>
      </div>

      <div className={styles.cards}>
        {ENTRIES.map((entry) => {
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
        © {new Date().getFullYear()} {appName}
      </Text>
    </div>
  );
}
