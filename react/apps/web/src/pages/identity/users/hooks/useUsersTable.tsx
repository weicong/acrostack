/**
 * 用户列表表格聚合 hook：状态徽标、列定义（含行内操作按钮）、
 * 查询组装与 TanStack 表实例构建。
 */
import { useMemo } from "react";
import { Pencil, Trash2, UserRoundCog } from "lucide-react";
import { type ColumnDef } from "@tanstack/react-table";
import { userGetListQueryOptions } from "@acrostack/api-client/hooks/user/useUserGetList";
import { Avatar, AvatarFallback } from "@acrostack/ui/components/avatar";
import { Badge } from "@acrostack/ui/components/badge";
import { Button } from "@acrostack/ui/components/button";
import { useDataTableState } from "@acrostack/ui/data-table";
import { RowActions } from "@acrostack/ui/data-table";
import { useDataTable, type AppTableFeatures } from "@acrostack/ui/data-table";
import { useDataTableQuery, type GridQueryParams } from "@/lib/useDataTableQuery";

import type { UserListItem } from "../types/user";

/** 用户列表行类型（页面本地别名）。 */
export type UserItem = UserListItem;

/** 用户激活状态徽标。 */
function UserStatusBadge({ isActive }: { isActive?: boolean }) {
  if (isActive === false) {
    return <Badge variant="destructive">{"未激活"}</Badge>;
  }
  return <Badge variant="secondary">{"激活"}</Badge>;
}

interface UseUsersTableOptions {
  onEdit: (user: UserItem) => void;
  onDelete: (id: string) => void;
  onImpersonate: (user: UserItem) => void;
  canImpersonate: boolean;
  currentUserId?: string;
}

/** 构建用户列表表格：列定义 + 查询 + 表实例。 */
export function useUsersTable({
  onEdit,
  onDelete,
  onImpersonate,
  canImpersonate,
  currentUserId,
}: UseUsersTableOptions) {
  const tableState = useDataTableState({
    sorting: [{ id: "userName", desc: false }],
  });

  const query = useDataTableQuery<UserItem, GridQueryParams>({
    queryOptions: userGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, UserItem>[]>(
    () => [
      {
        id: "userName",
        accessorKey: "userName",
        header: "用户名称",
        cell: (info) => {
          const userName = (info.getValue() as string) ?? "";
          return (
            <span className="inline-flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarFallback>{(userName || "-").charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              {userName || "-"}
            </span>
          );
        },
      },
      {
        id: "displayName",
        header: "显示名称",
        accessorFn: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim() || "-",
      },
      {
        id: "email",
        accessorKey: "email",
        header: "邮箱",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "phoneNumber",
        accessorKey: "phoneNumber",
        header: "手机号",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isActive",
        accessorKey: "isActive",
        header: "状态",
        cell: (info) => <UserStatusBadge isActive={info.getValue() as boolean | undefined} />,
      },
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const canImpersonateRow = canImpersonate && !!row.id && row.id !== currentUserId;
          return (
            <RowActions>
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(row);
                }}
                aria-label={"编辑"}
              >
                <Pencil />
              </Button>
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(row.id!);
                }}
                aria-label={"删除"}
              >
                <Trash2 />
              </Button>
              {canImpersonateRow && (
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImpersonate(row);
                  }}
                  aria-label={"模拟登录"}
                  title={"模拟登录"}
                >
                  <UserRoundCog />
                </Button>
              )}
            </RowActions>
          );
        },
      },
    ],
    [onEdit, onDelete, onImpersonate, canImpersonate, currentUserId],
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
