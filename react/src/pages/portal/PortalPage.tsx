import { Link } from "@tanstack/react-router";
import { Card, Text } from "@fluentui/react-components";
import { Settings20Regular } from "@fluentui/react-icons";
import { getApplicationName } from "@/lib/runtimeConfig";

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

const ENTRIES: WorkspaceEntry[] = [
  {
    to: "/admin",
    icon: Settings20Regular,
    title: "后台管理",
    description: "系统设置、用户、角色与权限管理",
  },
];

export function PortalPage() {
  const appName = getApplicationName();

  return (
    <div>
      <Text as="h1" size={800} weight="bold">
        {appName}
      </Text>
      <Text size={400} block>
        选择工作区
      </Text>

      {ENTRIES.map((entry) => {
        const Icon = entry.icon;
        return (
          <Link key={entry.to} to={entry.to}>
            <Card>
              <Icon />
              <Text size={500} weight="semibold">
                {entry.title}
              </Text>
              <Text size={300} block>
                {entry.description}
              </Text>
            </Card>
          </Link>
        );
      })}

      <Text as="p" size={200} block>
        © {new Date().getFullYear()} {appName}
      </Text>
    </div>
  );
}
