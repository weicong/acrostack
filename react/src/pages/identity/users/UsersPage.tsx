/**
 * 用户管理页（UsersPage）。
 *
 * 本文件只负责编排：权限判定、对话框开关状态与各子组件组装；
 * 样式见 styles/users，表格聚合见 hooks/useUsersTable，
 * 动作聚合见 hooks/useUserActions，工具栏见 components/UsersToolbar。
 */
import { useCallback, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import { toFormUser, type UserFormUser } from "./types/user";
import type { UserItem } from "./hooks/useUsersTable";
import { useUsersTable } from "./hooks/useUsersTable";
import { useUserActions } from "./hooks/useUserActions";
import { UsersToolbar } from "./components/UsersToolbar";
import { UserFormDialog } from "./UserFormDialog";
import { UserClaimsDialog } from "./UserClaimsDialog";

export function UsersPage() {
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const canImpersonate = isGranted("AbpIdentity.Users.Impersonation");
  const canManageUserClaims = isGranted("AcroStack.IdentityClaims.UserClaims");

  // 对话框开关状态
  const [formOpen, setFormOpen] = useState(false);
  const [formUser, setFormUser] = useState<UserFormUser | undefined>();
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [claimsUser, setClaimsUser] = useState<UserItem | null>(null);

  // 动作聚合：删除/模拟登录（内含列表失效与统一错误提示）
  const { remove, removePending, impersonate, invalidateList } = useUserActions();

  const handleCreate = useCallback(() => {
    setFormUser(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((user: UserItem) => {
    setFormUser(toFormUser(user));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteUserId(id);
  }, []);

  const handleManageClaims = useCallback((user: UserItem) => {
    setClaimsUser(user);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    invalidateList();
  }, [invalidateList]);

  const { table, query, tableState } = useUsersTable({
    onEdit: handleEdit,
    onDelete: handleDelete,
    onImpersonate: impersonate,
    onManageClaims: handleManageClaims,
    canImpersonate,
    canManageClaims: canManageUserClaims,
    currentUserId: currentUser?.id,
  });

  return (
    <PageLayout title={"用户"}>
      <UsersToolbar
        onCreate={handleCreate}
        onGlobalFilterChange={tableState.state.onGlobalFilterChange}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <UserFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        user={formUser}
        onSuccess={handleFormSuccess}
      />

      <UserClaimsDialog
        open={claimsUser !== null}
        onOpenChange={(open) => {
          if (!open) setClaimsUser(null);
        }}
        userId={claimsUser?.id}
        userName={claimsUser?.userName}
      />

      <ConfirmDialog
        open={deleteUserId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteUserId(null);
        }}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteUserId).then((ok) => ok && setDeleteUserId(null))}
        isPending={removePending}
      />
    </PageLayout>
  );
}
