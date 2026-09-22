import { useNavigate } from "@tanstack/react-router";
import { Button, Card, CardHeader, Text, Title3 } from "@fluentui/react-components";
import { ShieldError20Regular } from "@fluentui/react-icons";
import { VStack } from "@acrostack/ui/layout";
import { PageLayout } from "@/components/layout/PageLayout";

/**
 * 403 页面：说明「为什么进不来」以及「下一步怎么做」，
 * 并给出明确出口（返回首页）。卡片内只有一个按钮，直接作为 Card 子元素即可。
 */
export function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <PageLayout title="无权访问" description="你的账号没有访问该页面的权限。">
      <VStack maxWidth={560}>
        <Card>
          <CardHeader
            image={<ShieldError20Regular />}
            header={
              <Title3 as="h2" block>
                需要额外权限
              </Title3>
            }
            description={
              <Text>请联系管理员为你的账号（或所属角色）分配相应权限，然后重新打开该页面。</Text>
            }
          />
          <Button appearance="primary" onClick={() => void navigate({ to: "/admin" })}>
            返回首页
          </Button>
        </Card>
      </VStack>
    </PageLayout>
  );
}
