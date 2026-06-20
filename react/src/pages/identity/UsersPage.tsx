import * as React from "react";
import { useTranslation } from "react-i18next";
import type { DataGridProps } from "@fluentui/react-components";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import { PaginationBar } from "@/components/common/PaginationBar";
import { UserFilters } from "./components/UserFilters";
import { UserTable } from "./components/UserTable";

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

  const onSortChange: DataGridProps["onSortChange"] = (_e, nextSortState) => {
    setSortState(nextSortState);
    setPageIndex(0);
  };

  const onPageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setPageIndex(0);
  };

  const sortingParam = `${COLUMN_ID_TO_API_FIELD[sortState.sortColumn ?? ""] ?? sortState.sortColumn ?? ""} ${sortState.sortDirection === "ascending" ? "asc" : "desc"}`;

  const query = useAppUserGetList({
    Sorting: sortingParam,
    SkipCount: pageIndex * pageSize,
    MaxResultCount: pageSize,
  });

  const totalCount = Number(query.data?.totalCount ?? 0);
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <h1 id="users-heading">{t("AbpIdentity::Users")}</h1>
      <UserFilters />
      <UserTable
        users={query.data?.items ?? []}
        sortState={sortState}
        onSortChange={onSortChange}
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
    </div>
  );
}
