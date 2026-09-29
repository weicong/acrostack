import type { ReactElement, ReactNode } from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { Button } from "@acrostack/ui/components/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@acrostack/ui/components/card";
import { Spinner } from "@acrostack/ui/components/spinner";
import { RedirectingError } from "@acrostack/core";

/** 说明卡片：用于 404、路由错误等无外壳的场景（整屏居中）。 */
function CenteredCard({
  title,
  description,
  children,
}: {
  title: string;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 py-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
}

/** 路由默认 pending 组件：加载提示（root 路由配置对整棵路由树生效）。 */
export function RoutePending() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Spinner />
        正在加载...
      </span>
    </div>
  );
}

/** 404。 */
export function RouteNotFound(): ReactElement {
  const navigate = useNavigate();

  return (
    <CenteredCard title="页面不存在" description="你访问的地址可能已被移动或删除。">
      <div role="toolbar" aria-label="前往其他页面" className="flex flex-wrap gap-2">
        <Button onClick={() => void navigate({ to: "/admin" })}>返回首页</Button>
        <Button variant="outline" onClick={() => void navigate({ to: "/" })}>
          回到入口页
        </Button>
      </div>
    </CenteredCard>
  );
}

/** 路由错误：展示友好中文提示与错误信息，"重试"重新加载当前路由。 */
export function RouteError({ error }: { error: unknown }): ReactElement {
  const router = useRouter();
  const navigate = useNavigate();

  // 守卫已发起 OIDC 跳转：这是预期的「导航中断」，展示加载态而非错误页
  if (error instanceof RedirectingError) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Spinner />
          正在跳转到登录...
        </span>
      </div>
    );
  }

  const message = error instanceof Error ? error.message : String(error);

  return (
    <CenteredCard
      title="页面出现错误"
      description="页面加载时发生意外错误。你可以重试；若问题持续存在，请刷新页面或联系管理员。"
    >
      <p className="text-sm text-muted-foreground">{message}</p>
      <div role="toolbar" aria-label="错误处理" className="flex flex-wrap gap-2">
        <Button onClick={() => void router.invalidate()}>重试</Button>
        <Button variant="outline" onClick={() => void navigate({ to: "/admin" })}>
          返回首页
        </Button>
      </div>
    </CenteredCard>
  );
}
