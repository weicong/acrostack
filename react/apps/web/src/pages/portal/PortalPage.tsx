import { useNavigate } from "@tanstack/react-router";
import { Card, CardHeader, Text, Title1 } from "@fluentui/react-components";
import { Person20Regular, Settings20Regular } from "@fluentui/react-icons";
import { getApplicationName, getBackendAccountUrl } from "@acrostack/core";
import { Center, VStack } from "@acrostack/ui/layout";

/**
 * 门户入口页（/）：匿名可访问，只做一件事——让用户选一个去处。
 * 进入受保护的工作区时，由目标路由的守卫触发登录并自动回跳。
 */
export function PortalPage() {
  const navigate = useNavigate();
  const appName = getApplicationName();

  return (
    <Center minHeight="100dvh" paddingBlock={6} paddingInline={4}>
      <VStack gap={3} width="100%" maxWidth={520}>
        <VStack gap={0.5} align="center">
          <Title1 as="h1">{appName}</Title1>
          <Text>选择要进入的工作区</Text>
        </VStack>

        <Card
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
      </VStack>
    </Center>
  );
}
