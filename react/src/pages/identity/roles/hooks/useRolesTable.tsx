/**
 * 角色列表表格聚合 hook：默认/公开/静态徽标列、行内操作按钮列、
 * 查询组装与 TanStack 表实例构建。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { Edit20Regular, Delete20Regular, Tag20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { roleGetListQueryOptions } from "@/api/hooks/role/useRoleGetList";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { RoleItem } from "../types/role";
import { useRolesStyles } from "../styles/roles";

/** 角色列表行类型（页面本地别名）。 */
export type RoleItemRow = RoleItem;

interface UseRolesTableOptions {
  onEdit: (role: RoleItemRow) => void;
  onDelete: (id: string) => void;
  onManageClaims: (role: RoleItemRow) => void;
  canManageClaims: boolean;
}

/** 构建角色列表表格：列定义 + 查询 + 表实例。 */
export function useRolesTable({
  onEdit,
  onDelete,
  onManageClaims,
  canManageClaims,
}: UseRolesTableOptions) {
  const styles = useRolesStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<RoleItemRow, AbpGridParams>({
    queryOptions: roleGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, RoleItemRow>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "角色名称",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isDefault",
        accessorKey: "isDefault",
        header: "默认",
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="brand" size="small">
              {"默认"}
            </Badge>
          ) : (
            "-"
          ),
      },
      {
        id: "isPublic",
        accessorKey: "isPublic",
        header: "公开",
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="success" size="small">
              {"公开"}
            </Badge>
          ) : (
            "-"
          ),
      },
      {
        id: "isStatic",
        accessorKey: "isStatic",
        header: "静态",
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="warning" size="small">
              {"是"}
            </Badge>
          ) : (
            "-"
          ),
      },
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const isStatic = row.isStatic === true;
          const canManageClaimsRow = canManageClaims && !!row.id;
          return (
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<Edit20Regular />}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(row);
                }}
                aria-label={"编辑"}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                disabled={isStatic}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(row.id!);
                }}
                aria-label={"删除"}
              />
              {canManageClaimsRow && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Tag20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onManageClaims(row);
                  }}
                  aria-label={"声明"}
                  title={"声明"}
                />
              )}
            </div>
          );
        },
      },
    ],
    [styles.actionsCell, onEdit, onDelete, onManageClaims, canManageClaims],
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
