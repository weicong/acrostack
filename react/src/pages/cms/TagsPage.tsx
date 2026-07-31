import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchBox, makeStyles, tokens } from "@fluentui/react-components";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { tagGetListQueryOptions } from "@/api/hooks/tag/useTagGetList";
import type { AcroStackServicesDtosCmsTagDto as TagDto } from "@/api/models/acroStack/services/dtos/cms/TagDto";

type TagItem = TagDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    minWidth: 0,
  },
});

export function TagsPage() {
  const { t } = useTranslation();
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<TagItem, AbpGridParams>({
    queryOptions: tagGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
  });

  const columns = useMemo<ColumnDef<TagItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: t("Cms:Name"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: t("AbpUi::CreationTime"),
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd HH:mm") : "-";
        },
      },
    ],
    [t],
  );

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    getRowId: (row) => row.id ?? "",
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue, tableState.state]);

  return (
    <PageLayout title={t("Cms:Tags")}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <SearchBox
            placeholder={t("AbpUi::Search")}
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            appearance="outline"
          />
        </div>
      </div>

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />
    </PageLayout>
  );
}
