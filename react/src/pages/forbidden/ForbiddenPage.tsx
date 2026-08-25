import { Link } from "@tanstack/react-router";
import { Button, Text } from "@fluentui/react-components";
import { ShieldError20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { useForbiddenStyles } from "./styles/forbidden";

const useStyles = useForbiddenStyles;

export function ForbiddenPage() {
  const styles = useStyles();

  return (
    <PageLayout title="403">
      <div className={styles.content}>
        <ShieldError20Regular className={styles.icon} />
        <div className={styles.textBlock}>
          <Text as="h2" size={600} weight="semibold">
            403
          </Text>
          <Text as="p" block>
            {"您没有权限执行此操作"}
          </Text>
        </div>
        <Link to="/">
          <Button>{"返回应用"}</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
