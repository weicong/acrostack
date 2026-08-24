/**
 * 图书列表表格聚合 hook：数据查询、列定义与表格实例。
 */
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { Edit20Regular, Delete20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef } from "@tanstack/react-table";
import { bookGetListQueryOptions } from "@/api/hooks/book/useBookGetList";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { bookTypeOptions } from "../bookTypeOptions";
import type { BookListItem } from "../book-types";
import { useBooksStyles } from "../styles/books";

type BookItem = BookListItem;

export function useBooksTable(
  onEdit: (book: BookItem) => void,
  onDelete: (id: string) => void,
  searchQuery: string,
  typeFilter?: number,
) {
  const styles = useBooksStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const extraParams = useMemo(() => (typeFilter != null ? { Type: typeFilter } : {}), [typeFilter]);

  const query = useDataTableQuery<BookItem, AbpGridParams>({
    queryOptions: bookGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: searchQuery || undefined,
    extraParams: extraParams as Record<string, unknown>,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, BookItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "书名",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "type",
        accessorKey: "type",
        header: "类型",
        cell: (info) => {
          const type = info.getValue() as number | undefined;
          const label = bookTypeOptions.find((o) => o.value === type)?.label;
          return label ?? "-";
        },
      },
      {
        id: "publishDate",
        accessorKey: "publishDate",
        header: "出版日期",
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd") : "-";
        },
      },
      {
        id: "price",
        accessorKey: "price",
        header: "价格",
        cell: (info) => {
          const price = info.getValue() as number | undefined;
          return price != null ? price.toFixed(2) : "-";
        },
      },
      {
        id: "actions",
        header: "",
        cell: (info) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="subtle"
              icon={<Edit20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onEdit(info.row.original);
              }}
              aria-label={"编辑"}
            />
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(info.row.original.id!);
              }}
              aria-label={"删除"}
            />
          </div>
        ),
      },
    ],
    [styles.actionsCell, onEdit, onDelete],
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
