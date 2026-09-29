/**
 * 用户管理页（UsersPage）。
 *
 * 本文件只负责编排：权限判定、对话框开关状态与各子组件组装；
 * 表格聚合见 hooks/useUsersTable，动作聚合见 hooks/useUserActions，
 * 工具栏见 components/UsersToolbar。
 */
import { useCallback, useState } from "react";
import { PageHeader } from "@workspace/layout";
import { Card, CardContent } from "@workspace/ui/components/card";
import { DataTable } from "@workspace/ui/data-table";
import { ConfirmDialog } from "@workspace/ui/dialog";
import { usePermissions, useCurrentUser } from "@workspace/core";

import { toFormUserFromIdentity, type UserFormUser } from "./types/user";
import type { UserItem } from "./hooks/useUsersTable";
import { useUsersTable } from "./hooks/useUsersTable";
import { useUserActions } from "./hooks/useUserActions";
import { UsersToolbar } from "./components/UsersToolbar";
import { UserFormDialog } from "./components/UserFormDialog";

export function UsersPage() {
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const canImpersonate = isGranted("AbpIdentity.Users.Impersonation");

  // 对话框开关状态
  const [formOpen, setFormOpen] = useState(false);
  const [formUser, setFormUser] = useState<UserFormUser | undefined>();
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  // 动作聚合：删除/模拟登录（内含列表失效与统一错误提示）
  const { remove, removePending, impersonate, invalidateList } = useUserActions();

  const handleCreate = useCallback(() => {
    setFormUser(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((user: UserItem) => {
    setFormUser(toFormUserFromIdentity(user));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteUserId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    invalidateList();
  }, [invalidateList]);

  const { table, query, tableState } = useUsersTable({
    onEdit: handleEdit,
    onDelete: handleDelete,
    onImpersonate: impersonate,
    canImpersonate,
    currentUserId: currentUser?.id,
  });

  return (
    <>
      <PageHeader
        title={"用户"}
        description="创建与管理用户账户、分配角色，并对指定用户发起模拟登录。"
      />

      <Card>
        <CardContent className="flex flex-col gap-4">
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
        </CardContent>
      </Card>

      <UserFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        user={formUser}
        onSuccess={handleFormSuccess}
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
    </>
  );
}
