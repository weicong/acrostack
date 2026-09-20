import { useNavigate } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  Text,
  Title1,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Person20Regular, Settings20Regular } from "@fluentui/react-icons";
import { getApplicationName, getBackendAccountUrl } from "@/lib/runtimeConfig";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ...shorthands.gap(tokens.spacingVerticalL),
    minHeight: "100%",
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
    width: "100%",
    maxWidth: "520px",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
    textAlign: "center",
    marginBottom: tokens.spacingVerticalS,
  },
  lead: {
    color: tokens.colorNeutralForeground3,
  },
  entry: {
    cursor: "pointer",
  },
});

/**
 * 门户入口页（/）：匿名可访问。
 *
 * 只做一件事——让用户选一个去处。进入受保护的工作区时，
 * 由目标路由的守卫触发登录并自动回跳，无需用户理解跳转细节。
 */
export function PortalPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const appName = getApplicationName();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Title1 as="h1">{appName}</Title1>
          <Text className={styles.lead}>选择要进入的工作区</Text>
        </div>

        <Card
          className={styles.entry}
          focusMode="tab-only"
          aria-label="进入后台管理"
          onClick={() => void navigate({ to: "/admin" })}
        >
          <CardHeader
            image={<Settings20Regular />}
            header={<Text weight="semibold">后台管理</Text>}
            description={<Text size={200}>系统设置、用户、角色与权限管理</Text>}
          />
        </Card>

        <Card
          className={styles.entry}
          focusMode="tab-only"
          aria-label="打开我的账户"
          onClick={() => window.location.assign(getBackendAccountUrl("/account/manage"))}
        >
          <CardHeader
            image={<Person20Regular />}
            header={<Text weight="semibold">我的账户</Text>}
            description={<Text size={200}>修改密码、绑定邮箱与登录会话</Text>}
          />
        </Card>
      </div>
    </div>
  );
}
