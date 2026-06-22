import { useState } from "react";
import { useTranslation } from "react-i18next";
import { keepPreviousData } from "@tanstack/react-query";
import DataTable, { type TableColumn, SortOrder } from "react-data-table-component";
import { Avatar, Badge, Button, SearchBox, makeStyles } from "@fluentui/react-components";
import { AddRegular, DeleteRegular, EditRegular } from "@fluentui/react-icons";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import { useAppUserDelete } from "@/api/hooks/appUser/useAppUserDelete";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import { UserFormDialog, toFormUser, type UserFormUser } from "./UserFormDialog";

type UserItem = AcroStackAppUsersAppUserDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    gap: "var(--spacingHorizontalS)",
    marginBlockEnd: "var(--spacingVerticalS)",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
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

export function UsersPage() {
  const styles = useStyles();
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortField, setSortField] = useState("UserName");
  const [sortDir, setSortDir] = useState<SortOrder>(SortOrder.ASC);
  const [filter, setFilter] = useState("");
  const [resetPage, setResetPage] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<UserItem | undefined>();
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<UserFormUser | undefined>();

  const deleteMutation = useAppUserDelete();

  const { data, isLoading, refetch } = useAppUserGetList(
    {
      Filter: filter || undefined,
      Sorting: `${sortField} ${sortDir}`,
      SkipCount: (page - 1) * perPage,
      MaxResultCount: perPage,
    },
    { query: { placeholderData: keepPreviousData } },
  );

  const handleSearch = (value: string) => {
    setFilter(value);
    setPage(1);
    setResetPage((prev) => !prev);
  };

  const handleDelete = () => {
    if (!deleteTarget?.id) return;
    deleteMutation.mutate(
      { id: deleteTarget.id },
      {
        onSuccess: () => {
          setDeleteTarget(undefined);
          void refetch();
        },
      },
    );
  };

  const handleFormSuccess = () => {
    setFormOpen(false);
    setEditTarget(undefined);
    void refetch();
  };

  const columns: TableColumn<UserItem>[] = [
    {
      id: "userName",
      name: t("AbpIdentity::UserName"),
      sortable: true,
      sortField: "UserName",
      selector: (row) => row.userName ?? "",
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar aria-label={row.userName ?? ""} name={row.userName ?? ""} size={24} />
          <span>{row.userName ?? "-"}</span>
        </div>
      ),
    },
    {
      id: "name",
      name: t("AbpIdentity::DisplayName"),
      sortable: true,
      sortField: "Name",
      selector: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim(),
      cell: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim() || "-",
    },
    {
      id: "email",
      name: t("AbpIdentity::Email"),
      sortable: true,
      sortField: "Email",
      selector: (row) => row.email ?? "",
      cell: (row) => row.email ?? "-",
    },
    {
      id: "phoneNumber",
      name: t("AbpIdentity::PhoneNumber"),
      sortable: true,
      sortField: "PhoneNumber",
      selector: (row) => row.phoneNumber ?? "",
      cell: (row) => row.phoneNumber ?? "-",
    },
    {
      id: "isActive",
      name: t("AbpIdentity::Status"),
      sortable: true,
      sortField: "IsActive",
      selector: (row) => (row.isActive ? 1 : 0),
      cell: (row) => <UserStatusBadge isActive={row.isActive} />,
    },
    {
      id: "actions",
      name: t("AbpIdentity::Actions"),
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "0.25rem" }}>
          <Button
            appearance="subtle"
            size="small"
            icon={<EditRegular />}
            onClick={() => {
              setEditTarget(toFormUser(row));
              setFormOpen(true);
            }}
            aria-label={t("AbpIdentity::Edit")}
          />
          <Button
            appearance="subtle"
            size="small"
            icon={<DeleteRegular />}
            onClick={() => setDeleteTarget(row)}
            aria-label={t("AbpIdentity::Delete")}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className={styles.toolbar}>
        <SearchBox
          placeholder={t("AbpIdentity::Search")}
          value={filter}
          onChange={(_, d) => handleSearch(d.value)}
        />
        <div className={styles.spacer} />
        <Button
          appearance="primary"
          icon={<AddRegular />}
          onClick={() => {
            setEditTarget(undefined);
            setFormOpen(true);
          }}
        >
          {t("AbpIdentity::NewUser")}
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data?.items ?? []}
        progressPending={isLoading}
        pagination
        paginationServer
        paginationTotalRows={Number(data?.totalCount ?? 0)}
        paginationResetDefaultPage={resetPage}
        onChangePage={setPage}
        onChangeRowsPerPage={(pp) => {
          setPerPage(pp);
          setPage(1);
        }}
        sortServer
        defaultSortFieldId="userName"
        defaultSortAsc
        onSort={(col, dir) => {
          setSortField(col.sortField ?? String(col.id));
          setSortDir(dir);
          setPage(1);
        }}
        highlightOnHover
      />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(undefined);
        }}
        title={t("AbpIdentity::Delete")}
        description={`Are you sure you want to delete the user '${deleteTarget?.userName ?? ""}'?`}
        confirmLabel={t("AbpIdentity::Delete")}
        cancelLabel={t("AbpUi::Cancel")}
        variant="destructive"
        onConfirm={handleDelete}
        isPending={deleteMutation.isPending}
      />
      <UserFormDialog
        open={formOpen}
        onOpenChange={(open) => {
          if (!open) {
            setFormOpen(false);
            setEditTarget(undefined);
          }
        }}
        user={editTarget}
        onSuccess={handleFormSuccess}
      />
    </div>
  );
}
