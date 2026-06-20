import * as React from "react";
import { useTranslation } from "react-i18next";
import type { DataGridProps } from "@fluentui/react-components";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import { UsersDataGrid } from "./UsersDataGrid";

const PAGE_SIZE = 100;

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

  const onSortChange: DataGridProps["onSortChange"] = (_e, nextSortState) => {
    setSortState(nextSortState);
  };

  const sortingParam = `${COLUMN_ID_TO_API_FIELD[sortState.sortColumn ?? ""] ?? sortState.sortColumn ?? ""} ${sortState.sortDirection === "ascending" ? "asc" : "desc"}`;

  const query = useAppUserGetList({
    Sorting: sortingParam,
    SkipCount: 0,
    MaxResultCount: PAGE_SIZE,
  });

  return (
    <div>
      <h1 id="users-heading">{t("AbpIdentity::Users")}</h1>
      <UsersDataGrid
        users={query.data?.items ?? []}
        sortState={sortState}
        onSortChange={onSortChange}
        ariaLabelledBy="users-heading"
      />
    </div>
  );
}
