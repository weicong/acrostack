import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { Avatar, Button, Badge, SearchBox, makeStyles, tokens } from "@fluentui/react-components";
import {
  Add20Regular,
  Edit20Regular,
  Delete20Regular,
  PersonArrowLeft20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import type { ColumnDef } from "@tanstack/react-table";
import {
  appUserGetListQueryOptions,
  appUserGetListQueryKey,
} from "@/api/hooks/appUser/useAppUserGetList";
import { useUserDelete } from "@/api/hooks/user/useUserDelete";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import { impersonateUser } from "@/lib/auth/impersonation";
import { UserFormDialog } from "./UserFormDialog";
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
  const { t } = useTranslation();
  if (isActive === false) {
    return (
      <Badge appearance="filled" color="danger" size="small">
        {t("AbpIdentity::NotActive")}
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="success" size="small">
      {t("AbpIdentity::Active")}
    </Badge>
  );
}

function useUsersTable(
  onEdit: (user: UserItem) => void,
  onDelete: (id: string) => void,
  onImpersonate: (user: UserItem) => void,
  canImpersonate: boolean,
  currentUserId?: string,
) {
  const { t } = useTranslation();
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

  const columns = useMemo<ColumnDef<UserItem>[]>(
    () => [
      {
        id: "userName",
        accessorKey: "userName",
        header: t("AbpIdentity::UserName"),
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
        header: t("AbpIdentity::DisplayName"),
        accessorFn: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim() || "-",
      },
      {
        id: "email",
        accessorKey: "email",
        header: t("AbpIdentity::Email"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "phoneNumber",
        accessorKey: "phoneNumber",
        header: t("AbpIdentity::PhoneNumber"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "isActive",
        accessorKey: "isActive",
        header: t("AbpIdentity::Status"),
        cell: (info) => <UserStatusBadge isActive={info.getValue() as boolean | undefined} />,
      },
      {
        id: "actions",
        header: "",
        cell: (info) => {
          const row = info.row.original;
          const canImpersonateRow = canImpersonate && !!row.id && row.id !== currentUserId;
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
                aria-label={t("AbpUi::Edit")}
              />
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(row.id!);
                }}
                aria-label={t("AbpUi::Delete")}
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
                  aria-label={t("AbpIdentity::Permission:Impersonation")}
                  title={t("AbpIdentity::Permission:Impersonation")}
                />
              )}
            </div>
          );
        },
      },
    ],
    [
      t,
      styles.userNameCell,
      styles.actionsCell,
      onEdit,
      onDelete,
      onImpersonate,
      canImpersonate,
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
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const deleteMutation = useUserDelete();
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const canImpersonate = isGranted("AbpIdentity.Users.Impersonation");

  const [formOpen, setFormOpen] = useState(false);
  const [formUser, setFormUser] = useState<UserFormUser | undefined>();
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

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

  const handleImpersonate = useCallback((user: UserItem) => {
    if (!user.id) return;
    void impersonateUser(user.id).catch((err: unknown) => {
      console.error("[impersonation] failed:", err);
    });
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: appUserGetListQueryKey() });
  }, [queryClient]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteUserId) return;
    deleteMutation.mutate(
      { id: deleteUserId },
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
    canImpersonate,
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
    <PageLayout title={t("AbpIdentity::Users")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
        <div className={styles.actionButtons}>
          <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
            {t("AbpIdentity::NewUser")}
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

      <ConfirmDialog
        open={deleteUserId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteUserId(null);
        }}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
