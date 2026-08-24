/**
 * 租户列表表格聚合 hook：数据查询、列定义与表格实例。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular, PersonArrowLeft20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { tenantGetListQueryOptions } from "@/api/hooks/tenant/useTenantGetList";
import type { VoloAbpTenantManagementTenantDto } from "@/api/models/volo/abp/tenantManagement/TenantDto";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { useTenantsStyles } from "../styles/tenants";

export type TenantItem = VoloAbpTenantManagementTenantDto;

export interface TenantsTableHandlers {
  onEdit: (tenant: TenantItem) => void;
  onDelete: (tenant: TenantItem) => void;
  onImpersonate: (tenant: TenantItem) => void;
}

export interface TenantsTablePermissions {
  canUpdate: boolean;
  canDelete: boolean;
  canImpersonate: boolean;
}

export function useTenantsTable(handlers: TenantsTableHandlers, perms: TenantsTablePermissions) {
  const styles = useTenantsStyles();

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
