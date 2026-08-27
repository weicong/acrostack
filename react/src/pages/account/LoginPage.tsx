import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

import { Button, Card, CardHeader, Spinner, Text } from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAccountCardStyles } from "./styles/account";

export function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const styles = useAccountCardStyles();

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
      <Card>
        <CardHeader
          header={<Text weight="semibold">{"登录"}</Text>}
          description={<Text size={200}>{"正在跳转到登录..."}</Text>}
        />
        <div className={styles.body}>
          <Spinner />
        </div>
      </Card>
    );
  }

  if (isAuthenticated) {
    return (
      <Card>
        <CardHeader
          header={<Text weight="semibold">{"登录"}</Text>}
          description={<Text size={200}>{"您已登录。"}</Text>}
        />
        <div className={styles.body}>
          <Link to="/">
            <Button>{"返回应用"}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">{"登录"}</Text>}
        description={<Text size={200}>{"正在跳转到登录..."}</Text>}
      />
      <div className={styles.body}>
        <div className={styles.form}>
          <Button className={styles.fullWidthButton} onClick={() => void login()}>
            {"登录"}
          </Button>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/forgot-password" className={styles.link}>
              {"忘记密码？"}
            </Link>
          </Text>
          <Text as="p" size={200} align="center" block>
            {"还没有账户？"}{" "}
            <Link to="/account/register" className={styles.link}>
              {"注册"}
            </Link>
          </Text>
        </div>
      </div>
    </Card>
  );
}
