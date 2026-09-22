import { createRootRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { Button, Card, CardHeader, Spinner, Text, Title2 } from "@fluentui/react-components";
import type { ReactElement, ReactNode } from "react";
import { Center, HStack, VStack } from "@acrostack/ui/layout";
import { RootLayout } from "@/components/layout/RootLayout";
import { RedirectingError } from "@acrostack/core";

/** 说明卡片：用于 404、路由错误等无外壳的场景（整屏居中）。 */
function CenteredCard({
  title,
  description,
  children,
}: {
  title: string;
  description: ReactElement;
  children?: ReactNode;
}) {
  return (
    <Center minHeight="100dvh" paddingBlock={6} paddingInline={4}>
      <VStack width="100%" maxWidth={520}>
        <Card>
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
      </VStack>
    </Center>
  );
}

function NotFoundComponent() {
  const navigate = useNavigate();

  return (
    <CenteredCard title="页面不存在" description={<Text>你访问的地址可能已被移动或删除。</Text>}>
      <HStack role="toolbar" aria-label="前往其他页面" gap={2} wrap="wrap">
        <Button appearance="primary" onClick={() => void navigate({ to: "/admin" })}>
          返回首页
        </Button>
        <Button onClick={() => void navigate({ to: "/" })}>回到入口页</Button>
      </HStack>
    </CenteredCard>
  );
}

/**
 * 路由错误组件：展示友好中文提示与错误信息。
 * "重试"通过 useRouter().invalidate() 重新加载当前路由。
 */
function RouteErrorComponent({ error }: { error: unknown }) {
  const router = useRouter();
  const navigate = useNavigate();

  // 守卫已发起 OIDC 跳转：这是预期的"导航中断"，展示加载态而非错误页
  if (error instanceof RedirectingError) {
    return (
      <Center minHeight="100dvh">
        <Spinner label="正在跳转到登录..." />
      </Center>
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
      <Text size={200}>{message}</Text>
      <HStack role="toolbar" aria-label="错误处理" gap={2} wrap="wrap">
        <Button appearance="primary" onClick={() => void router.invalidate()}>
          重试
        </Button>
        <Button onClick={() => void navigate({ to: "/admin" })}>返回首页</Button>
      </HStack>
    </CenteredCard>
  );
}

/** 路由默认 pending 组件：加载提示（root 路由配置对整棵路由树生效） */
function RoutePendingComponent() {
  return (
    <Center minHeight="100dvh">
      <Spinner label="正在加载..." />
    </Center>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
  errorComponent: RouteErrorComponent,
  pendingComponent: RoutePendingComponent,
});
