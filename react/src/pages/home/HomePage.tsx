import { Button, Card, Text } from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { PageLayout } from "@/components/layout/PageLayout";

export function HomePage() {
  const { isAuthenticated, navigateToLogin } = useAuth();

  return (
    <PageLayout title={"欢迎"}>
      {!isAuthenticated && <Button onClick={navigateToLogin}>{"登录"}</Button>}

      <Card>
        <Text as="h2" size={600} weight="semibold">
          ABP React UI
        </Text>
        <Text as="p" block>
          本应用基于 ABP Framework React UI
          构建。你可以使用预置的组件、布局和服务快速开发应用。查阅完整的 React UI
          文档，了解如何自定义和扩展 UI 的各个方面。
        </Text>
        <a
          href="https://abp.io/docs/latest/framework/ui/react/index"
          target="_blank"
          rel="noreferrer"
        >
          <Button appearance="outline">React UI 文档</Button>
        </a>
      </Card>
    </PageLayout>
  );
}
