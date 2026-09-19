import { Link } from "@tanstack/react-router";
import { Button, Text } from "@fluentui/react-components";
import { ShieldError20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";

export function ForbiddenPage() {
  return (
    <PageLayout title="403">
      <ShieldError20Regular />
      <Text as="h2" size={600} weight="semibold">
        403
      </Text>
      <Text as="p" block>
        {"您没有权限执行此操作"}
      </Text>
      <Link to="/">
        <Button>{"返回应用"}</Button>
      </Link>
    </PageLayout>
  );
}
