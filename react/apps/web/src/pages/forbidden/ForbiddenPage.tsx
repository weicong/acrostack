import { useNavigate } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { PageHeader } from "@workspace/layout";

/**
 * 403 页面：说明「为什么进不来」以及「下一步怎么做」，
 * 并给出明确出口（返回首页）。
 */
export function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="无权访问" description="你的账号没有访问该页面的权限。" />

      <Card className="max-w-[560px]">
        <CardHeader className="grid-cols-[auto_1fr] items-center gap-x-3">
          <ShieldAlert className="row-span-2 size-5 text-muted-foreground" />
          <CardTitle className="text-lg">需要额外权限</CardTitle>
          <CardDescription>
            请联系管理员为你的账号（或所属角色）分配相应权限，然后重新打开该页面。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => void navigate({ to: "/admin" })}>返回首页</Button>
        </CardContent>
      </Card>
    </>
  );
}
