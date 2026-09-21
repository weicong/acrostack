import { useNavigate } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardHeader,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowExit20Regular,
  BookQuestionMark20Regular,
  Code20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { useShellMenu } from "@/components/layout/shellMenu";
import { getApiUrl, getApplicationName, useAuth, useCurrentUser } from "@acrostack/core";
import { useThemeMode } from "@/lib/theme/ThemeProvider";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  tile: {
    cursor: "pointer",
  },
  info: {
    display: "grid",
    gridTemplateColumns: "minmax(96px, auto) 1fr",
    rowGap: tokens.spacingVerticalM,
    columnGap: tokens.spacingHorizontalL,
    ...shorthands.margin(0),
  },
  term: {
    color: tokens.colorNeutralForeground3,
  },
  value: {
    ...shorthands.margin(0),
    minWidth: 0,
    overflowWrap: "anywhere",
  },
});

/**
 * 工作台首页：把「能做什么」直接摆在用户面前。
 *
 *  - 常用功能：直接复用侧栏菜单模型（已按权限过滤），点击即进入；
 *  - 运行信息：应用名、当前用户、外观与后端地址，便于排查环境问题；
 *  - 帮助与文档：需要查资料时不必离开应用去找入口。
 */
export function HomePage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { isAuthenticated, navigateToLogin } = useAuth();
  const currentUser = useCurrentUser();
  const { groups } = useShellMenu();
  const { mode, resolvedMode } = useThemeMode();
  const appName = getApplicationName();

  // 外链项不进入工作台快捷入口（保留在侧栏，避免误触离开应用）
  const shortcuts = groups.flatMap((group) =>
    group.items
      .filter((item) => !item.externalHref)
      .map((item) => ({ path: item.path, name: item.name, icon: item.icon, group: group.caption })),
  );

  const displayName = currentUser?.name ?? currentUser?.userName ?? null;
  const themeLabel =
    mode === "system"
      ? `跟随系统（当前${resolvedMode === "dark" ? "深色" : "浅色"}）`
      : mode === "dark"
        ? "深色"
        : "浅色";

  return (
    <PageLayout
      title={displayName ? `欢迎回来，${displayName}` : "欢迎"}
      description="这里汇总了你可以访问的功能入口与当前运行信息，选择卡片即可进入对应页面。"
    >
      {!isAuthenticated && (
        <MessageBar intent="info">
          <MessageBarBody>你尚未登录，登录后即可使用管理功能。</MessageBarBody>
          <MessageBarActions>
            <Button appearance="primary" icon={<ArrowExit20Regular />} onClick={navigateToLogin}>
              登录
            </Button>
          </MessageBarActions>
        </MessageBar>
      )}

      <Card>
        <CardHeader
          header={<Text weight="semibold">常用功能</Text>}
          description={<Text size={200}>按你拥有的权限展示，点击卡片直接进入</Text>}
        />
        {shortcuts.length === 0 ? (
          <Text className={styles.term}>当前没有可访问的功能，请联系管理员分配权限。</Text>
        ) : (
          <div className={styles.grid}>
            {shortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.path}
                  className={styles.tile}
                  appearance="outline"
                  focusMode="tab-only"
                  aria-label={`${item.name}（${item.group}）`}
                  onClick={() => void navigate({ to: item.path })}
                >
                  <CardHeader
                    image={Icon ? <Icon /> : undefined}
                    header={<Text weight="semibold">{item.name}</Text>}
                    description={
                      <Text size={200} className={styles.term}>
                        {item.group}
                      </Text>
                    }
                  />
                </Card>
              );
            })}
          </div>
        )}
      </Card>

      <Card>
        <CardHeader
          header={<Text weight="semibold">运行信息</Text>}
          description={<Text size={200}>当前会话与应用配置</Text>}
        />
        <dl className={styles.info}>
          <dt className={styles.term}>应用名称</dt>
          <dd className={styles.value}>{appName}</dd>
          <dt className={styles.term}>当前用户</dt>
          <dd className={styles.value}>{displayName ?? "未登录"}</dd>
          <dt className={styles.term}>外观</dt>
          <dd className={styles.value}>{themeLabel}</dd>
          <dt className={styles.term}>后端地址</dt>
          <dd className={styles.value}>{getApiUrl()}</dd>
        </dl>
      </Card>

      <Card>
        <CardHeader
          header={<Text weight="semibold">帮助与文档</Text>}
          description={<Text size={200}>需要查资料时可直接打开</Text>}
        />
        <div className={styles.grid}>
          <Button
            as="a"
            appearance="outline"
            icon={<Code20Regular />}
            href="https://react.fluentui.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Fluent UI 组件文档
          </Button>
          <Button
            as="a"
            appearance="outline"
            icon={<BookQuestionMark20Regular />}
            href="https://abp.io/docs/latest/framework/ui/react/index"
            target="_blank"
            rel="noreferrer"
          >
            ABP React UI 文档
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}
