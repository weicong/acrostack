import type { KeyboardEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Settings, UserRound } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { getApplicationName, getBackendAccountUrl } from "@workspace/core";

/** 可点击卡片：Enter / Space 与鼠标点击行为一致，保持键盘可达。 */
function activateOnKey(event: KeyboardEvent<HTMLDivElement>, action: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}

/**
 * 门户入口页（/）：匿名可访问，只做一件事——让用户选一个去处。
 * 进入受保护的工作区时，由目标路由的守卫触发登录并自动回跳。
 */
export function PortalPage() {
  const navigate = useNavigate();
  const appName = getApplicationName();

  const openAdmin = () => void navigate({ to: "/admin" });
  const openAccount = () => window.location.assign(getBackendAccountUrl("/account/manage"));

  return (
    <div className="flex min-h-dvh items-center justify-center px-4 py-6">
      <div className="flex w-full max-w-xl flex-col gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <h1 className="text-2xl font-medium">{appName}</h1>
          <p className="text-sm text-muted-foreground">选择要进入的工作区</p>
        </div>

        <Card
          role="button"
          tabIndex={0}
          aria-label="进入后台管理"
          onClick={openAdmin}
          onKeyDown={(event) => activateOnKey(event, openAdmin)}
          className="cursor-pointer hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-3">
            <Settings className="row-span-2 size-5 text-muted-foreground" />
            <CardTitle>后台管理</CardTitle>
            <CardDescription>系统设置、用户、角色与权限管理</CardDescription>
          </CardHeader>
        </Card>

        <Card
          role="button"
          tabIndex={0}
          aria-label="打开我的账户"
          onClick={openAccount}
          onKeyDown={(event) => activateOnKey(event, openAccount)}
          className="cursor-pointer hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-3">
            <UserRound className="row-span-2 size-5 text-muted-foreground" />
            <CardTitle>我的账户</CardTitle>
            <CardDescription>修改密码、绑定邮箱与登录会话</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
