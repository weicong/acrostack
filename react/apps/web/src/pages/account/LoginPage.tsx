import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@acrostack/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acrostack/ui/components/card";
import { Spinner } from "@acrostack/ui/components/spinner";
import { useAuth } from "@acrostack/core";

export function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth();

  // 只在首次挂载时自动发起一次 OIDC 跳转：若 IdP 侧失败回到本页，
  // 停留为手动按钮，避免"自动重定向 → 失败 → 再重定向"死循环。
  const autoLoginAttempted = useRef(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !autoLoginAttempted.current) {
      autoLoginAttempted.current = true;
      void login();
    }
  }, [isLoading, isAuthenticated, login]);

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>正在跳转到登录...</CardDescription>
        </CardHeader>
        <CardContent>
          <Spinner />
        </CardContent>
      </Card>
    );
  }

  if (isAuthenticated) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>您已登录。</CardDescription>
        </CardHeader>
        <CardContent>
          <Button render={<Link to="/" />} nativeButton={false}>
            {"返回应用"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>登录</CardTitle>
        <CardDescription>正在跳转到登录...</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button onClick={() => void login()}>{"登录"}</Button>
        <p className="text-sm text-muted-foreground">
          <Link to="/account/forgot-password">{"忘记密码？"}</Link>
        </p>
        <p className="text-sm text-muted-foreground">
          {"还没有账户？"} <Link to="/account/register">{"注册"}</Link>
        </p>
      </CardContent>
    </Card>
  );
}
