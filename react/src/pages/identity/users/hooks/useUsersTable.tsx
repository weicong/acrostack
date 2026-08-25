/**
 * 用户列表表格聚合 hook：状态徽标、列定义（含行内操作按钮）、
 * 查询组装与 TanStack 表实例构建。
 */
import { useMemo } from "react";
import { Avatar, Badge, Button } from "@fluentui/react-components";
import {
  Edit20Regular,
  Delete20Regular,
  PersonArrowLeft20Regular,
  Tag20Regular,
} from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { appUserGetListQueryOptions } from "@/api/hooks/appUser/useAppUserGetList";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import type { UserListItem } from "../types/user";
import { useUsersStyles } from "../styles/users";

/** 用户列表行类型（页面本地别名）。 */
export type UserItem = UserListItem;

/** 用户激活状态徽标。 */
function UserStatusBadge({ isActive }: { isActive?: boolean }) {
  if (isActive === false) {
    return (
      <Badge appearance="filled" color="danger" size="small">
        {"未激活"}
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="success" size="small">
      {"激活"}
    </Badge>
  );
}

interface UseUsersTableOptions {
  onEdit: (user: UserItem) => void;
  onDelete: (id: string) => void;
  onImpersonate: (user: UserItem) => void;
  onManageClaims: (user: UserItem) => void;
  canImpersonate: boolean;
  canManageClaims: boolean;
  currentUserId?: string;
}

/** 构建用户列表表格：列定义 + 查询 + 表实例。 */
export function useUsersTable({
  onEdit,
  onDelete,
  onImpersonate,
  onManageClaims,
  canImpersonate,
  canManageClaims,
  currentUserId,
}: UseUsersTableOptions) {
  const styles = useUsersStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "userName", desc: false }],
  });

  const query = useDataTableQuery<UserItem, AbpGridParams>({
    queryOptions: appUserGetListQueryOptions,
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
            <div className={styles.userNameCell}>
              <Avatar aria-label={userName} name={userName} size={24} />
              <span>{userName || "-"}</span>
            </div>
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
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(row.id!);
                }}
                aria-label={"删除"}
              />
              {canImpersonateRow && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<PersonArrowLeft20Regular />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onImpersonate(row);
                  }}
                  aria-label={"模拟登录"}
                  title={"模拟登录"}
                />
              )}
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
    [
      styles.userNameCell,
      styles.actionsCell,
      onEdit,
      onDelete,
      onImpersonate,
      onManageClaims,
      canImpersonate,
      canManageClaims,
      currentUserId,
    ],
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
