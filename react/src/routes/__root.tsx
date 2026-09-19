import { createRootRoute, useNavigate, useRouter } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardHeader,
  Spinner,
  Text,
  Title2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import type { ReactElement, ReactNode } from "react";
import { RootLayout } from "@/components/layout/RootLayout";
import { RedirectingError } from "@/lib/routing/guards";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  card: {
    width: "100%",
    maxWidth: "520px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  detail: {
    overflowWrap: "anywhere",
    color: tokens.colorNeutralForeground3,
  },
});

/** 页内居中的说明卡片：用于 404、路由错误等无外壳的场景。 */
function CenteredCard({
  title,
  description,
  children,
}: {
  title: string;
  description: ReactElement;
  children?: ReactNode;
}) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          header={
            <Title2 as="h1" block>
              {title}
            </Title2>
          }
          description={description}
        />
        {children}
      </Card>
    </div>
  );
}

function NotFoundComponent() {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <CenteredCard title="页面不存在" description={<Text>你访问的地址可能已被移动或删除。</Text>}>
      <div className={styles.actions}>
        <Button appearance="primary" onClick={() => void navigate({ to: "/admin" })}>
          返回首页
        </Button>
        <Button onClick={() => void navigate({ to: "/" })}>回到入口页</Button>
      </div>
    </CenteredCard>
  );
}

/**
 * 路由错误组件：展示友好中文提示与错误信息。
 * "重试"通过 useRouter().invalidate() 重新加载当前路由。
 */
function RouteErrorComponent({ error }: { error: unknown }) {
  const styles = useStyles();
  const router = useRouter();
  const navigate = useNavigate();

  // 守卫已发起 OIDC 跳转：这是预期的"导航中断"，展示加载态而非错误页
  if (error instanceof RedirectingError) {
    return (
      <div className={styles.root}>
        <Spinner label="正在跳转到登录..." />
      </div>
    );
  }

  const message = error instanceof Error ? error.message : String(error);

  return (
    <CenteredCard
      title="页面出现错误"
      description={
        <Text>页面加载时发生意外错误。你可以重试；若问题持续存在，请刷新页面或联系管理员。</Text>
      }
    >
      <Text className={styles.detail} size={200}>
        {message}
      </Text>
      <div className={styles.actions}>
        <Button appearance="primary" onClick={() => void router.invalidate()}>
          重试
        </Button>
        <Button onClick={() => void navigate({ to: "/admin" })}>返回首页</Button>
      </div>
    </CenteredCard>
  );
}

/** 路由默认 pending 组件：加载提示（root 路由配置对整棵路由树生效） */
function RoutePendingComponent() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Spinner label="正在加载..." />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
  errorComponent: RouteErrorComponent,
  pendingComponent: RoutePendingComponent,
});
