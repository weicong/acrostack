import { Button, Card, makeStyles, tokens, Text } from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { PageLayout } from "@/components/layout/PageLayout";

const useStyles = makeStyles({
  loginActions: {
    marginTop: tokens.spacingVerticalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  docLink: {
    marginTop: tokens.spacingVerticalM,
    display: "inline-block",
  },
});

export function HomePage() {
  const { isAuthenticated, navigateToLogin } = useAuth();
  const styles = useStyles();

  return (
    <PageLayout title={"欢迎"}>
      {!isAuthenticated && (
        <div className={styles.loginActions}>
          <Button onClick={navigateToLogin}>{"登录"}</Button>
        </div>
      )}

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
          className={styles.docLink}
        >
          <Button appearance="outline">React UI 文档</Button>
        </a>
      </Card>
    </PageLayout>
  );
}
