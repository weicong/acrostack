/**
 * 租户管理页（TenantsPage）。
 *
 * 本文件只负责编排：权限判定、对话框开关状态与各子组件组装；
 * 样式见 styles/tenants，表格聚合见 hooks/useTenantsTable，
 * 动作聚合见 hooks/useTenantActions，工具栏见 components/TenantsToolbar。
 */
import { useCallback, useMemo, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import type {
  TenantItem,
  TenantsTableHandlers,
  TenantsTablePermissions,
} from "./hooks/useTenantsTable";
import { useTenantsTable } from "./hooks/useTenantsTable";
import { useTenantActions } from "./hooks/useTenantActions";
import { TenantsToolbar } from "./components/TenantsToolbar";
import { TenantFormDialog } from "./components/TenantFormDialog";

type TenantFormTenant = Pick<TenantItem, "id" | "name" | "concurrencyStamp">;

export function TenantsPage() {
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();

  // 租户模拟登录仅宿主可用：租户用户不能模拟登录其他租户。
  const isHostUser = !currentUser?.tenantId;
  const canCreate = isGranted("AbpTenantManagement.Tenants.Create");
  const canUpdate = isGranted("AbpTenantManagement.Tenants.Update");
  const canDelete = isGranted("AbpTenantManagement.Tenants.Delete");
  const canImpersonate = isHostUser && isGranted("AbpTenantManagement.Tenants.Impersonation");

  // 对话框开关状态
  const [formOpen, setFormOpen] = useState(false);
  const [formTenant, setFormTenant] = useState<TenantFormTenant | undefined>();
  const [deleteTenant, setDeleteTenant] = useState<TenantItem | null>(null);

  // 动作聚合：删除/模拟登录（内含列表失效与统一错误提示）
  const { remove, deletePending, impersonate, invalidateList } = useTenantActions();

  const handleCreate = useCallback(() => {
    setFormTenant(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((tenant: TenantItem) => {
    setFormTenant({
      id: tenant.id!,
      name: tenant.name ?? "",
      concurrencyStamp: tenant.concurrencyStamp,
    });
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((tenant: TenantItem) => {
    setDeleteTenant(tenant);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    invalidateList();
  }, [invalidateList]);

  const handlers = useMemo<TenantsTableHandlers>(
    () => ({ onEdit: handleEdit, onDelete: handleDelete, onImpersonate: impersonate }),
    [handleEdit, handleDelete, impersonate],
  );
  const perms = useMemo<TenantsTablePermissions>(
    () => ({ canUpdate, canDelete, canImpersonate }),
    [canUpdate, canDelete, canImpersonate],
  );

  const { table, query, tableState } = useTenantsTable(handlers, perms);

  return (
    <PageLayout title={"租户"}>
      <TenantsToolbar
        canCreate={canCreate}
        onCreate={handleCreate}
        onGlobalFilterChange={tableState.state.onGlobalFilterChange}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <TenantFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        tenant={formTenant}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteTenant !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTenant(null);
        }}
        title={"你确定吗?"}
        description={deleteTenant ? `确定要删除租户「${deleteTenant.name}」吗？` : undefined}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void remove(deleteTenant).then((ok) => ok && setDeleteTenant(null))}
        isPending={deletePending}
      />
    </PageLayout>
  );
}
