/**
 * 角色管理页（RolesPage）。
 *
 * 本文件只负责编排：权限判定、对话框开关状态与各子组件组装；
 * 样式见 styles/roles，表格聚合见 hooks/useRolesTable，
 * 动作聚合见 hooks/useRoleActions，工具栏见 components/RolesToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { toFormRole, type RoleFormRole } from "./role-types";
import type { RoleItemRow } from "./hooks/useRolesTable";
import { useRolesTable } from "./hooks/useRolesTable";
import { useRoleActions } from "./hooks/useRoleActions";
import { RolesToolbar } from "./components/RolesToolbar";
import { RoleFormDialog } from "./RoleFormDialog";
import { RoleClaimsDialog } from "./RoleClaimsDialog";

export function RolesPage() {
  const { isGranted } = usePermissions();
  const canManageRoleClaims = isGranted("AcroStack.IdentityClaims.RoleClaims");

  // 对话框开关状态
  const [formOpen, setFormOpen] = useState(false);
  const [formRole, setFormRole] = useState<RoleFormRole | undefined>();
  const [deleteRoleId, setDeleteRoleId] = useState<string | null>(null);
  const [claimsRole, setClaimsRole] = useState<RoleItemRow | null>(null);

  // 动作聚合：删除角色（内含列表失效与统一错误提示）
  const { remove, removePending, notifySaved } = useRoleActions();

  const handleCreate = useCallback(() => {
    setFormRole(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((role: RoleItemRow) => {
    setFormRole(toFormRole(role));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteRoleId(id);
  }, []);

  const handleManageClaims = useCallback((role: RoleItemRow) => {
    setClaimsRole(role);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    notifySaved();
  }, [notifySaved]);

  const { table, query, tableState } = useRolesTable({
    onEdit: handleEdit,
    onDelete: handleDelete,
    onManageClaims: handleManageClaims,
    canManageClaims: canManageRoleClaims,
  });

  return (
    <PageLayout title={"角色"}>
      <RolesToolbar
        onCreate={handleCreate}
        onGlobalFilterChange={tableState.state.onGlobalFilterChange}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <RoleFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        role={formRole}
        onSuccess={handleFormSuccess}
      />

      <RoleClaimsDialog
        open={claimsRole !== null}
        onOpenChange={(open) => {
          if (!open) setClaimsRole(null);
        }}
        roleId={claimsRole?.id}
        roleName={claimsRole?.name}
      />

      <ConfirmDialog
        open={deleteRoleId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteRoleId(null);
        }}
        title={"你确定吗?"}
        description={"确定要删除此角色吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteRoleId).then((ok) => ok && setDeleteRoleId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
