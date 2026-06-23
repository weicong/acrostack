import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Avatar, Badge, makeStyles } from "@fluentui/react-components";
import type { ColumnDef } from "@tanstack/react-table";
import { appUserGetListQueryOptions } from "@/api/hooks/appUser/useAppUserGetList";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserItem = AcroStackAppUsersAppUserDto;

const useStyles = makeStyles({
  userNameCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

function UserStatusBadge({ isActive }: { isActive?: boolean }) {
  const { t } = useTranslation();
  if (isActive !== false) {
    return (
      <Badge appearance="filled" color="success" size="small">
        {t("AbpIdentity::Active")}
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="danger" size="small">
      {t("AbpIdentity::NotActive")}
    </Badge>
  );
}

function useUsersTable() {
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
        accessorFn: (row) => {
          return `${row.name ?? ""} ${row.surname ?? ""}`.trim() || "-";
        },
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
    ],
    [t, styles.userNameCell],
  );

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id ?? "",
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState };
}

export function UsersPage() {
  const { table, query } = useUsersTable();

  return (
    <DataTable
      table={table}
      isLoading={query.isLoading}
      isError={query.isError}
      errorMessage={query.error ? String(query.error) : undefined}
    />
  );
}
