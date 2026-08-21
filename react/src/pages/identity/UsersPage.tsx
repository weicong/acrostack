import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Avatar,
  Button,
  Badge,
  SearchBox,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Edit20Regular,
  Delete20Regular,
  PersonArrowLeft20Regular,
  Tag20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { type ColumnDef } from "@tanstack/react-table";
import {
  appUserGetListQueryOptions,
  appUserGetListQueryKey,
} from "@/api/hooks/appUser/useAppUserGetList";
import { useUserDelete } from "@/api/hooks/user/useUserDelete";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import { impersonateUser } from "@/lib/auth/impersonation";
import { UserFormDialog } from "./UserFormDialog";
import { UserClaimsDialog } from "./UserClaimsDialog";
import { toFormUser, type UserFormUser, type UserListItem } from "./user-types";

type UserItem = UserListItem;

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
  userNameCell: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

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

function useUsersTable(
  onEdit: (user: UserItem) => void,
  onDelete: (id: string) => void,
  onImpersonate: (user: UserItem) => void,
  onManageClaims: (user: UserItem) => void,
  canImpersonate: boolean,
  canManageClaims: boolean,
  currentUserId?: string,
) {
  const styles = useStyles();

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

export function UsersPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const deleteMutation = useUserDelete();
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const { dispatchToast } = useToastController();
  const canImpersonate = isGranted("AbpIdentity.Users.Impersonation");
  const canManageUserClaims = isGranted("AcroStack.IdentityClaims.UserClaims");

  const [formOpen, setFormOpen] = useState(false);
  const [formUser, setFormUser] = useState<UserFormUser | undefined>();
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [claimsUser, setClaimsUser] = useState<UserItem | null>(null);

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

  const handleImpersonate = useCallback(
    (user: UserItem) => {
      if (!user.id) return;
      void impersonateUser(user.id).catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err);
        console.error("[impersonation] failed:", err);
        dispatchToast(message, { intent: "error" });
      });
    },
    [dispatchToast],
  );

  const handleManageClaims = useCallback((user: UserItem) => {
    setClaimsUser(user);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: appUserGetListQueryKey() });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteUserId) return;
    deleteMutation.mutate(
      { path: { id: deleteUserId } },
      {
        onSuccess: () => {
          setDeleteUserId(null);
          void queryClient.invalidateQueries({ queryKey: appUserGetListQueryKey() });
        },
      },
    );
  }, [deleteUserId, deleteMutation, queryClient]);

  const { table, query, tableState } = useUsersTable(
    handleEdit,
    handleDelete,
    handleImpersonate,
    handleManageClaims,
    canImpersonate,
    canManageUserClaims,
    currentUser?.id,
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <PageLayout title={"用户"}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={"搜索"}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        <div className={styles.actionButtons}>
          <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
            {"新用户"}
          </Button>
        </div>
      </div>

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
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
