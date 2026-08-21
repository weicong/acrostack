import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  PersonArrowLeft20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { type ColumnDef } from "@tanstack/react-table";
import {
  tenantGetListQueryKey,
  tenantGetListQueryOptions,
} from "@/api/hooks/tenant/useTenantGetList";
import { useTenantDelete } from "@/api/hooks/tenant/useTenantDelete";
import type { VoloAbpTenantManagementTenantDto } from "@/api/models/volo/abp/tenantManagement/TenantDto";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import { impersonateTenant } from "@/lib/auth/impersonation";
import { TenantFormDialog } from "./TenantFormDialog";

type TenantItem = VoloAbpTenantManagementTenantDto;

type TenantFormTenant = Pick<TenantItem, "id" | "name" | "concurrencyStamp">;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

interface TenantsTableHandlers {
  onEdit: (tenant: TenantItem) => void;
  onDelete: (tenant: TenantItem) => void;
  onImpersonate: (tenant: TenantItem) => void;
}

interface TenantsTablePermissions {
  canUpdate: boolean;
  canDelete: boolean;
  canImpersonate: boolean;
}

function useTenantsTable(handlers: TenantsTableHandlers, perms: TenantsTablePermissions) {
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<TenantItem, AbpGridParams>({
    queryOptions: tenantGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, TenantItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "名称",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          return (
            <div className={styles.actionsCell}>
              {perms.canUpdate && !!row.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Edit20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlers.onEdit(row);
                  }}
                  aria-label={"编辑"}
                  title={"编辑"}
                />
              )}
              {perms.canDelete && !!row.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Delete20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlers.onDelete(row);
                  }}
                  aria-label={"删除"}
                  title={"删除"}
                />
              )}
              {perms.canImpersonate && !!row.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<PersonArrowLeft20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlers.onImpersonate(row);
                  }}
                  aria-label={"模拟登录"}
                  title={"模拟登录"}
                />
              )}
            </div>
          );
        },
      },
    ],
    [styles.actionsCell, handlers, perms],
  );

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState };
}

export function TenantsPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const deleteMutation = useTenantDelete();
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const { dispatchToast } = useToastController();

  // Tenant impersonation is host-only: a tenant user cannot impersonate another tenant.
  const isHostUser = !currentUser?.tenantId;
  const canCreate = isGranted("AbpTenantManagement.Tenants.Create");
  const canUpdate = isGranted("AbpTenantManagement.Tenants.Update");
  const canDelete = isGranted("AbpTenantManagement.Tenants.Delete");
  const canImpersonate = isHostUser && isGranted("AbpTenantManagement.Tenants.Impersonation");

  const [formOpen, setFormOpen] = useState(false);
  const [formTenant, setFormTenant] = useState<TenantFormTenant | undefined>();
  const [deleteTenant, setDeleteTenant] = useState<TenantItem | null>(null);

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

  const handleImpersonate = useCallback(
    (tenant: TenantItem) => {
      if (!tenant.id) return;
      void impersonateTenant(tenant.id).catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err);
        console.error("[impersonation] failed:", err);
        dispatchToast(message, { intent: "error" });
      });
    },
    [dispatchToast],
  );

  const handlers = useMemo<TenantsTableHandlers>(
    () => ({ onEdit: handleEdit, onDelete: handleDelete, onImpersonate: handleImpersonate }),
    [handleEdit, handleDelete, handleImpersonate],
  );
  const perms = useMemo<TenantsTablePermissions>(
    () => ({ canUpdate, canDelete, canImpersonate }),
    [canUpdate, canDelete, canImpersonate],
  );

  const { table, query, tableState } = useTenantsTable(handlers, perms);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: tenantGetListQueryKey() });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteTenant?.id) return;
    deleteMutation.mutate(
      { path: { id: deleteTenant.id } },
      {
        onSuccess: () => {
          setDeleteTenant(null);
          void queryClient.invalidateQueries({ queryKey: tenantGetListQueryKey() });
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteTenant, deleteMutation, queryClient, dispatchToast]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={"租户"}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={"搜索"}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        {canCreate && (
          <div className={styles.actionButtons}>
            <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
              {"新建租户"}
            </Button>
          </div>
        )}
      </div>

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
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
