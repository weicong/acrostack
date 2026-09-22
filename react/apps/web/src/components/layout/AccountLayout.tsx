import { Link } from "@tanstack/react-router";
import { Text, Title3 } from "@fluentui/react-components";
import type { ReactNode } from "react";
import { getApplicationName } from "@acrostack/core";
import { Center, VStack } from "@acrostack/ui/layout";

/**
 * 匿名账户区布局（登录/注册/找回密码等）：
 * 整屏居中、品牌标题在上、返回入口在下，中间是路由提供的账户表单。
 * 居中、限宽与间距全部由 `@acrostack/ui/layout` 的原语给出。
 */
export function AccountLayout({ children }: { children: ReactNode }) {
  const appName = getApplicationName();

  return (
    <Center minHeight="100dvh" paddingBlock={6} paddingInline={4}>
      <VStack gap={4} width="100%" maxWidth={440} align="center">
        <VStack gap={0.5} align="center">
          <Title3 as="h1">{appName}</Title3>
          <Text>请登录以继续</Text>
        </VStack>

        {children}

        <Text as="p" size={200}>
          <Link to="/">返回应用首页</Link>
        </Text>
      </VStack>
    </Center>
  );
}
