import { useNavigate } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  Text,
  Title1,
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
    minHeight: "100dvh",
    ...shorthands.gap(tokens.spacingVerticalL),
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "520px",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    ...shorthands.gap(tokens.spacingVerticalXS),
    marginBottom: tokens.spacingVerticalS,
  },
  entry: {
    cursor: "pointer",
  },
});

/**
 * 门户入口页（/）：匿名可访问，只做一件事——让用户选一个去处。
 * 进入受保护的工作区时，由目标路由的守卫触发登录并自动回跳。
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
          <Text>选择要进入的工作区</Text>
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
