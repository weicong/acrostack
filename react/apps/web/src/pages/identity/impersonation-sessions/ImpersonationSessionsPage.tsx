/**
 * 模拟登录会话页（ImpersonationSessionsPage）。
 *
 * 审计视角：谁（管理员）在何时模拟了谁（被模拟用户），以及会话状态；
 * 支持撤销进行中的会话（撤销后该会话无法再用于"返回我的账户"）。
 * 权限为 host 专属：AbpIdentity.Users.ManageImpersonationSessions。
 */
import { useCallback, useState } from "react";
import { PageHeader } from "@acrostack/layout";
import { Card, CardContent } from "@acrostack/ui/components/card";
import { DataTable } from "@acrostack/ui/data-table";
import { ConfirmDialog } from "@acrostack/ui/dialog";
import { useImpersonationSessionActions } from "./hooks/useImpersonationSessionActions";
import { useImpersonationSessionsTable } from "./hooks/useImpersonationSessionsTable";
import { ImpersonationSessionsToolbar } from "./components/ImpersonationSessionsToolbar";

export function ImpersonationSessionsPage() {
  const [revokeTarget, setRevokeTarget] = useState<string | null>(null);

  const { revoke, revokePending } = useImpersonationSessionActions();

  const handleRevoke = useCallback((id: string) => {
    setRevokeTarget(id);
  }, []);

  const handleConfirm = useCallback(() => {
    void revoke(revokeTarget ?? "").then((ok) => ok && setRevokeTarget(null));
  }, [revokeTarget, revoke]);

  const { table, query, statusFilter, setStatusFilter } = useImpersonationSessionsTable({
    canRevoke: true,
    onRevoke: handleRevoke,
  });

  return (
    <>
      <PageHeader
        title={"模拟登录记录"}
        description="查看谁在何时以他人身份登录，并可在必要时提前撤销会话。"
      />

      <Card>
        <CardContent className="flex flex-col gap-4">
          <ImpersonationSessionsToolbar status={statusFilter} onStatusChange={setStatusFilter} />

          <DataTable
            table={table}
            isLoading={query.isLoading}
            isError={query.isError}
            errorMessage={query.error ? String(query.error) : undefined}
          />
        </CardContent>
      </Card>

      <ConfirmDialog
        open={revokeTarget !== null}
        onOpenChange={(open) => !open && setRevokeTarget(null)}
        title={"撤销模拟会话"}
        description={
          "撤销后该会话无法再用于「返回我的账户」，但被模拟端当前令牌在其有效期内仍可使用。确定要撤销吗？"
        }
        confirmLabel={"撤销"}
        variant="destructive"
        onConfirm={handleConfirm}
        isPending={revokePending}
      />
    </>
  );
}
