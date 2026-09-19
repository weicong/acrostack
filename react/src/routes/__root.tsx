import { createRootRoute, useRouter } from "@tanstack/react-router";
import { Button, Spinner, Text } from "@fluentui/react-components";
import { RootLayout } from "@/components/layout/RootLayout";
import { RedirectingError } from "@/lib/routing/guards";

function NotFoundComponent() {
  return (
    <div>
      <Text as="h1" size={700} weight="bold">
        404
      </Text>
      <Text as="p" block>
        Page not found
      </Text>
    </div>
  );
}

/**
 * 路由错误组件：展示友好中文提示与错误信息。
 * 当前版本 react-router 通过 props 传入 error（无 useRouteError 导出）；
 * "重试"通过 useRouter().invalidate() 重新加载当前路由。
 */
function RouteErrorComponent({ error }: { error: unknown }) {
  const router = useRouter();

  // 守卫已发起 OIDC 跳转：这是预期的"导航中断"，展示加载态而非错误页
  if (error instanceof RedirectingError) {
    return (
      <div>
        <Spinner label="正在跳转到登录..." />
      </div>
    );
  }

  const message = error instanceof Error ? error.message : String(error);

  return (
    <div role="alert">
      <Text as="h1" size={600} weight="bold">
        页面出现错误
      </Text>
      <Text as="p" block>
        页面加载时发生意外错误，请重试；若问题持续存在，请刷新页面。
      </Text>
      <Text as="p" block size={200}>
        {message}
      </Text>
      <Button appearance="primary" onClick={() => void router.invalidate()}>
        重试
      </Button>
    </div>
  );
}

/** 路由默认 pending 组件：Spinner（root 路由配置对整棵路由树生效） */
function RoutePendingComponent() {
  return (
    <div>
      <Spinner />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
  errorComponent: RouteErrorComponent,
  pendingComponent: RoutePendingComponent,
});
