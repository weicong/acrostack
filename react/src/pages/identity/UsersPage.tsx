import * as React from "react";
import { useTranslation } from "react-i18next";
import { Title1 } from "@fluentui/react-components";
import { keepPreviousData } from "@tanstack/react-query";
import type { TableColumn, SortOrder } from "react-data-table-component";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import { useAppUserDelete } from "@/api/hooks/appUser/useAppUserDelete";
import { UserFilters } from "./components/UserFilters";
import { UserTable } from "./components/UserTable";
import { UserDeleteDialog } from "./components/UserDeleteDialog";
import { UserFormDialog } from "./components/UserFormDialog";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import type { VoloAbpIdentityIdentityUserDto } from "@/api/models/volo/abp/identity/IdentityUserDto";

const DEFAULT_PER_PAGE = 10;
const DEFAULT_SORT_COLUMN_ID = "userName";

type FormUser = Pick<
  VoloAbpIdentityIdentityUserDto,
  | "id"
  | "userName"
  | "name"
  | "surname"
  | "email"
  | "phoneNumber"
  | "isActive"
  | "lockoutEnabled"
  | "concurrencyStamp"
>;

function toFormUser(dto: AcroStackAppUsersAppUserDto): FormUser {
  return {
    id: dto.id,
    userName: dto.userName,
    name: dto.name,
    surname: dto.surname,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    isActive: dto.isActive,
    lockoutEnabled: undefined,
    concurrencyStamp: undefined,
  };
}

export function UsersPage() {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(DEFAULT_PER_PAGE);
  const [sortField, setSortField] = React.useState("UserName");
  const [sortDir, setSortDir] = React.useState<SortOrder>("asc" as SortOrder);
  const [filter, setFilter] = React.useState("");
  const [resetPage, setResetPage] = React.useState(false);
  const [deleteTarget, setDeleteTarget] = React.useState<AcroStackAppUsersAppUserDto | undefined>();
  const [formOpen, setFormOpen] = React.useState(false);
  const [editTarget, setEditTarget] = React.useState<FormUser | undefined>();

  const deleteMutation = useAppUserDelete();

  const apiSorting = `${sortField} ${sortDir === ("asc" as SortOrder) ? "asc" : "desc"}`;

  const query = useAppUserGetList(
    {
      Filter: filter || undefined,
      Sorting: apiSorting,
      SkipCount: (page - 1) * perPage,
      MaxResultCount: perPage,
    },
    { query: { placeholderData: keepPreviousData } },
  );

  const totalCount = Number(query.data?.totalCount ?? 0);

  const handleSort = (column: TableColumn<AcroStackAppUsersAppUserDto>, dir: SortOrder) => {
    setSortField((column.sortField ?? String(column.id)) as string);
    setSortDir(dir);
    setPage(1);
    setResetPage((prev) => !prev);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  const handlePerPageChange = (nextPerPage: number, currentPage: number) => {
    setPerPage(nextPerPage);
    setPage(currentPage);
  };

  const handleFilterChange = (nextFilter: string) => {
    setFilter(nextFilter);
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
          void query.refetch();
        },
      },
    );
  };

  const handleCreateClick = () => {
    setEditTarget(undefined);
    setFormOpen(true);
  };

  const handleEditClick = (user: AcroStackAppUsersAppUserDto) => {
    setEditTarget(toFormUser(user));
    setFormOpen(true);
  };

  const handleFormSuccess = () => {
    setFormOpen(false);
    setEditTarget(undefined);
    void query.refetch();
  };

  return (
    <div>
      <Title1 id="users-heading">{t("AbpIdentity::Users")}</Title1>
      <UserFilters onFilterChange={handleFilterChange} onCreateClick={handleCreateClick} />
      <UserTable
        users={query.data?.items ?? []}
        loading={query.isLoading}
        totalRows={totalCount}
        resetPage={resetPage}
        defaultSortFieldId={DEFAULT_SORT_COLUMN_ID}
        defaultSortAsc={sortDir === ("asc" as SortOrder)}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
        onSort={handleSort}
        onDelete={setDeleteTarget}
        onEdit={handleEditClick}
      />
      <UserDeleteDialog
        open={!!deleteTarget}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(undefined);
        }}
        user={deleteTarget}
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
