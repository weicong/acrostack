/**
 * 后台任务页（BackgroundJobsPage）。
 *
 * 本文件只负责编排：权限判定、确认对话框状态与各子组件组装；
 * 样式见 styles/backgroundJobs，表格聚合见 hooks/useBackgroundJobsTable，
 * 动作聚合见 hooks/useBackgroundJobActions，工具栏见 components/BackgroundJobsToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import type { ConfirmAction } from "./hooks/useBackgroundJobActions";
import { useBackgroundJobActions } from "./hooks/useBackgroundJobActions";
import { useBackgroundJobsTable } from "./hooks/useBackgroundJobsTable";
import { BackgroundJobsToolbar } from "./components/BackgroundJobsToolbar";

export function BackgroundJobsPage() {
  const { isGranted } = usePermissions();
  const canDelete = isGranted("AcroStack.BackgroundJobs.Delete");

  // 待确认操作（删除/重新排队/放弃）
  const [confirmAction, setConfirmAction] = useState<ConfirmAction | null>(null);

  // 动作聚合：删除/重新排队/放弃（内含列表失效与统一提示）
  const { runConfirm, actionPending } = useBackgroundJobActions();

  const handleAction = useCallback((action: ConfirmAction) => {
    setConfirmAction(action);
  }, []);

  const handleConfirm = useCallback(() => {
    void runConfirm(confirmAction).then((ok) => ok && setConfirmAction(null));
  }, [confirmAction, runConfirm]);

  const confirmTitle =
    confirmAction?.kind === "delete"
      ? "你确定吗?"
      : confirmAction?.kind === "requeue"
        ? "重新排队"
        : "放弃";
  const confirmDescription =
    confirmAction?.kind === "delete"
      ? "确定要删除此后台任务吗？"
      : confirmAction?.kind === "requeue"
        ? "确定要重新排队此后台任务吗？"
        : "确定要放弃此后台任务吗？";
  const confirmLabel =
    confirmAction?.kind === "delete"
      ? "删除"
      : confirmAction?.kind === "requeue"
        ? "重新排队"
        : "放弃";

  const { table, query, tableState } = useBackgroundJobsTable({
    canDelete,
    onAction: handleAction,
  });

  return (
    <PageLayout title={"后台任务"}>
      <BackgroundJobsToolbar onGlobalFilterChange={tableState.state.onGlobalFilterChange} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={confirmAction !== null}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmTitle}
        description={confirmDescription}
        confirmLabel={confirmLabel}
        variant={confirmAction?.kind === "delete" ? "destructive" : "default"}
        onConfirm={handleConfirm}
        isPending={actionPending}
      />
    </PageLayout>
  );
}
