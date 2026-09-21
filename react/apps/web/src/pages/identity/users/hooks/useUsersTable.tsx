/**
 * 用户列表表格聚合 hook：状态徽标、列定义（含行内操作按钮）、
 * 查询组装与 TanStack 表实例构建。
 */
import { useMemo } from "react";
import {
  Avatar,
  Badge,
  Button,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Edit20Regular, Delete20Regular, PersonArrowLeft20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { userGetListQueryOptions } from "@/api/hooks/user/useUserGetList";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import { RowActions } from "@/components/ui/data-table/RowActions";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { UserListItem } from "../types/user";

/** 用户列表行类型（页面本地别名）。 */
export type UserItem = UserListItem;

const useStyles = makeStyles({
  /* 用户格：头像与名称横向排列并互相垂直居中；
     单元格本身已随行垂直居中（Fluent 默认 middle），
     因此任意行高、内容长度与屏幕尺寸下两者都保持在行中线上 */
  user: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

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
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "userName", desc: false }],
  });

  const query = useDataTableQuery<UserItem, AbpGridParams>({
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
            <span className={styles.user}>
              <Avatar name={userName || "-"} size={24} aria-hidden />
              <Text>{userName || "-"}</Text>
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
            </RowActions>
          );
        },
      },
    ],
    [onEdit, onDelete, onImpersonate, canImpersonate, currentUserId, styles],
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
