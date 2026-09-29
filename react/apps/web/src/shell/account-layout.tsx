import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { getApplicationName } from "@workspace/core";

/**
 * 匿名账户区布局（登录/注册/找回密码等）：
 * 整屏居中、品牌标题在上、返回入口在下，中间是路由提供的账户表单。
 *
 * 这里刻意不用 `@workspace/layout` 的 AppShell——账户页没有导航，套外壳只会
 * 多出一圈侧栏与顶栏。它也不需要主题 Provider：主题类挂在 `<html>` 上（见
 * `index.html` 的首屏脚本），页面用 Tailwind 令牌即可。
 */
export function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 py-6">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-lg font-medium">{getApplicationName()}</h1>
          <p className="text-sm text-muted-foreground">请登录以继续</p>
        </div>

        {children}

        <p className="text-sm text-muted-foreground">
          <Link to="/" className="underline-offset-4 hover:underline">
            返回应用首页
          </Link>
        </p>
      </div>
    </div>
  );
}
