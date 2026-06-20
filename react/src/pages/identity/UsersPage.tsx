import * as React from "react";
import { useTranslation } from "react-i18next";
import { Title1 } from "@fluentui/react-components";
import type { DataGridProps } from "@fluentui/react-components";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import { useAppUserDelete } from "@/api/hooks/appUser/useAppUserDelete";
import { PaginationBar } from "@/components/common/PaginationBar";
import { UserFilters } from "./components/UserFilters";
import { UserTable } from "./components/UserTable";
import { UserDeleteDialog } from "./components/UserDeleteDialog";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

const DEFAULT_PAGE_SIZE = 10;

const COLUMN_ID_TO_API_FIELD: Record<string, string> = {
  userName: "UserName",
  email: "Email",
  phoneNumber: "PhoneNumber",
  name: "Name",
  isActive: "IsActive",
};

export function UsersPage() {
  const { t } = useTranslation();
  const [sortState, setSortState] = React.useState<
    Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]
  >({
    sortColumn: "userName",
    sortDirection: "ascending",
  });
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(DEFAULT_PAGE_SIZE);
  const [filter, setFilter] = React.useState("");
  const [deleteTarget, setDeleteTarget] = React.useState<AcroStackAppUsersAppUserDto | undefined>();

  const deleteMutation = useAppUserDelete();

  const onSortChange: DataGridProps["onSortChange"] = (_e, nextSortState) => {
    setSortState(nextSortState);
    setPageIndex(0);
  };

  const onPageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setPageIndex(0);
  };

  const onFilterChange = (nextFilter: string) => {
    setFilter(nextFilter);
    setPageIndex(0);
  };

  const sortingParam = `${COLUMN_ID_TO_API_FIELD[sortState.sortColumn ?? ""] ?? sortState.sortColumn ?? ""} ${sortState.sortDirection === "ascending" ? "asc" : "desc"}`;

  const query = useAppUserGetList({
    Filter: filter || undefined,
    Sorting: sortingParam,
    SkipCount: pageIndex * pageSize,
    MaxResultCount: pageSize,
  });

  const totalCount = Number(query.data?.totalCount ?? 0);
  const pageCount = Math.ceil(totalCount / pageSize);

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

  return (
    <div>
      <Title1 id="users-heading">{t("AbpIdentity::Users")}</Title1>
      <UserFilters onFilterChange={onFilterChange} />
      <UserTable
        users={query.data?.items ?? []}
        sortState={sortState}
        onSortChange={onSortChange}
        onDelete={setDeleteTarget}
        ariaLabelledBy="users-heading"
      />
      <PaginationBar
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={pageCount}
        total={totalCount}
        onPageChange={setPageIndex}
        onPageSizeChange={onPageSizeChange}
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
    </div>
  );
}
