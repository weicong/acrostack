import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  InboxIcon,
} from "lucide-react";
import { flexRender } from "@tanstack/react-table";
import type { ReactTable, RowData } from "@tanstack/react-table";
import { Button } from "#components/button";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "#components/empty";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#components/select";
import { Spinner } from "#components/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "#components/table";
import { cn } from "#lib/utils";
import type { AppTableFeatures } from "./useDataTable";

interface DataTableProps<TData extends RowData> {
  table: ReactTable<AppTableFeatures, TData>;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  emptyMessage?: string;
  showPagination?: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  isError?: boolean;
  errorMessage?: string;
  onRowClick?: (row: TData) => void;
  pageSizeOptions?: number[];
}

const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 50, 100];

/**
 * 数据表格：TanStack Table v9 的渲染层。
 *
 * 机制（排序 / 分页 / 行选中 / 列宽）全部来自 `useDataTable`，这里只负责把它
 * 画成 shadcn 的 `<Table>`，并统一加载态、错误态与空态的呈现——三者都整行合并，
 * 列数变化时不用改调用方。排序表头用真实的 `<button>`，键盘与读屏天然可达。
 */
function DataTable<TData extends RowData>({
  table,
  ariaLabel,
  ariaLabelledBy,
  emptyMessage,
  showPagination = true,
  isLoading = false,
  loadingMessage,
  isError = false,
  errorMessage,
  onRowClick,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
}: DataTableProps<TData>) {
  const empty = emptyMessage ?? "无数据";
  const loading = loadingMessage ?? "正在加载...";

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const columnCount = table.getVisibleLeafColumns().length;
  const pageCount = table.getPageCount() || 1;
  const currentPageIndex = table.state.pagination.pageIndex;
  const currentPageSize = table.state.pagination.pageSize;

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border">
        <Table aria-label={ariaLabelledBy ? undefined : ariaLabel} aria-labelledby={ariaLabelledBy}>
          <TableHeader>
            {headerGroups.map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  const sorted = header.column.getIsSorted();
                  const sortable = header.column.getCanSort();
                  const content = header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext());

                  return (
                    <TableHead key={header.id}>
                      {sortable ? (
                        <button
                          type="button"
                          className="-ml-2 inline-flex h-8 items-center gap-1.5 rounded-md px-2 font-medium transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {content}
                          {sorted === "asc" ? (
                            <ChevronUpIcon className="size-3.5" />
                          ) : sorted === "desc" ? (
                            <ChevronDownIcon className="size-3.5" />
                          ) : null}
                        </button>
                      ) : (
                        content
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columnCount} className="h-24 text-center">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Spinner />
                    {loading}
                  </span>
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columnCount} className="h-24 text-center text-destructive">
                  {errorMessage ?? "数据加载失败，请稍后重试"}
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columnCount} className="p-0">
                  <Empty className="border-0">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <InboxIcon />
                      </EmptyMedia>
                      <EmptyTitle>{empty}</EmptyTitle>
                      <EmptyDescription>调整筛选条件或稍后重试</EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => {
                const selected = row.getIsSelected();
                return (
                  <TableRow
                    key={row.id}
                    data-state={selected ? "selected" : undefined}
                    aria-selected={selected || undefined}
                    className={cn(onRowClick && "cursor-pointer")}
                    onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                    onKeyDown={
                      onRowClick
                        ? (event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              onRowClick(row.original);
                            }
                          }
                        : undefined
                    }
                    tabIndex={onRowClick ? 0 : undefined}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {showPagination && (
        <div
          className="flex flex-wrap items-center justify-end gap-2"
          role="group"
          aria-label="分页"
        >
          <Select
            value={String(currentPageSize)}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger size="sm" aria-label="每页行数">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {`${size} 条/页`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <span className="text-sm text-muted-foreground">
            {`第 ${currentPageIndex + 1} 页，共 ${pageCount} 页`}
          </span>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label="首页"
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="上一页"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="下一页"
            >
              <ChevronRightIcon />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => table.setPageIndex(pageCount - 1)}
              disabled={!table.getCanNextPage()}
              aria-label="末页"
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps };
