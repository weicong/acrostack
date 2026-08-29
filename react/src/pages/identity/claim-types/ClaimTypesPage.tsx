/**
 * 声明类型管理页（ClaimTypesPage）。
 *
 * 本文件只负责编排：权限判定、对话框开关状态与各子组件组装；
 * 样式见 styles/claimTypes，表格聚合见 hooks/useClaimTypesTable，
 * 动作聚合见 hooks/useClaimTypeActions，工具栏见 components/ClaimTypesToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { toFormSeed } from "./types/claimType";
import type { ClaimTypeRow } from "./hooks/useClaimTypesTable";
import { useClaimTypesTable } from "./hooks/useClaimTypesTable";
import { useClaimTypeActions } from "./hooks/useClaimTypeActions";
import { ClaimTypesToolbar } from "./components/ClaimTypesToolbar";
import { ClaimTypeFormDialog } from "./components/ClaimTypeFormDialog";

export function ClaimTypesPage() {
  const { isGranted } = usePermissions();
  const canManage = isGranted("AcroStack.IdentityClaims.ClaimTypes");

  // 对话框开关状态
  const [formOpen, setFormOpen] = useState(false);
  const [formSeed, setFormSeed] = useState<ReturnType<typeof toFormSeed> | undefined>();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // 动作聚合：删除声明类型（内含列表失效与统一错误提示）
  const { remove, removePending, invalidateList } = useClaimTypeActions();

  const handleCreate = useCallback(() => {
    setFormSeed(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((row: ClaimTypeRow) => {
    setFormSeed(toFormSeed(row));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    invalidateList();
  }, [invalidateList]);

  const { table, query, tableState } = useClaimTypesTable({
    canManage,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <PageLayout title={"声明类型"}>
      <ClaimTypesToolbar
        canCreate={canManage}
        onCreate={handleCreate}
        onGlobalFilterChange={tableState.state.onGlobalFilterChange}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ClaimTypeFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        seed={formSeed}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteId(null);
        }}
        title={"你确定吗?"}
        description={"确定要删除此声明类型吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteId).then((ok) => ok && setDeleteId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
