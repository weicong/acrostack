/**
 * 声明类型列表表格聚合 hook：描述省略列、值类型标签列、
 * 按权限显隐的操作列、查询组装与 TanStack 表实例构建。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { Edit20Regular, Delete20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { identityClaimTypeGetListQueryOptions } from "@/api/hooks/identityClaimType/useIdentityClaimTypeGetList";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import type { ClaimTypeItem } from "../types/claimType";
import { useClaimTypesStyles } from "../styles/claimTypes";

/** 声明类型列表行类型（页面本地别名）。 */
export type ClaimTypeRow = ClaimTypeItem;

const VALUE_TYPE_LABELS: Record<number, string> = {
  0: "字符串",
  1: "整数",
  2: "布尔值",
  3: "日期时间",
};

function valueTypeLabel(valueType: number | undefined): string {
  if (valueType === undefined || valueType === null) return "-";
  return VALUE_TYPE_LABELS[valueType] ?? VALUE_TYPE_LABELS[0];
}

interface UseClaimTypesTableOptions {
  /** 是否具有管理权限（决定操作列是否渲染）。 */
  canManage: boolean;
  onEdit: (row: ClaimTypeRow) => void;
  onDelete: (id: string) => void;
}

/** 构建声明类型列表表格：列定义 + 查询 + 表实例。 */
export function useClaimTypesTable({ canManage, onEdit, onDelete }: UseClaimTypesTableOptions) {
  const styles = useClaimTypesStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<ClaimTypeRow, AbpGridParams>({
    queryOptions: identityClaimTypeGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, ClaimTypeRow>[]>(() => {
    const base: ColumnDef<AppTableFeatures, ClaimTypeRow>[] = [
      {
        id: "name",
        accessorKey: "name",
        header: "名称",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "description",
        header: "描述",
        cell: ({ row }) => (
          <span className={styles.description} title={row.original.description ?? undefined}>
            {row.original.description || "-"}
          </span>
        ),
      },
      {
        id: "valueType",
        header: "值类型",
        cell: ({ row }) => valueTypeLabel(row.original.valueType),
      },
      {
        id: "isRequired",
        accessorKey: "isRequired",
        header: "必填",
        cell: (info) =>
          info.getValue() ? (
            <Badge appearance="filled" color="brand" size="small">
              {"是"}
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
    ];

    if (canManage) {
      base.push({
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const isStatic = row.isStatic === true;
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
                  if (row.id) onDelete(row.id);
                }}
                aria-label={"删除"}
              />
            </div>
          );
        },
      });
    }

    return base;
  }, [styles.description, styles.actionsCell, canManage, onEdit, onDelete]);

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
