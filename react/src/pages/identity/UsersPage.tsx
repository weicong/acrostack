import { useState } from "react";
import { useTranslation } from "react-i18next";
import { keepPreviousData } from "@tanstack/react-query";
import DataTable, { type TableColumn, SortOrder } from "react-data-table-component";
import { Avatar, Badge, SearchBox, makeStyles } from "@fluentui/react-components";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserItem = AcroStackAppUsersAppUserDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    gap: "var(--spacingHorizontalS)",
    marginBlockEnd: "var(--spacingVerticalS)",
    alignItems: "center",
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

  const { data, isLoading } = useAppUserGetList(
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
  ];

  return (
    <div>
      <div className={styles.toolbar}>
        <SearchBox
          placeholder={t("AbpIdentity::Search")}
          value={filter}
          onChange={(_, d) => handleSearch(d.value)}
        />
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
    </div>
  );
}
