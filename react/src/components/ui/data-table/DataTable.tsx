import { flexRender } from "@tanstack/react-table";
import type { ReactTable, RowData } from "@tanstack/react-table";
import type { AppTableFeatures } from "./useDataTable";

import {
  Table as FluentTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  Button,
  Select,
  Text,
} from "@fluentui/react-components";
import {
  ChevronLeftFilled,
  ArrowNextFilled,
  ArrowPreviousFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";

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
 * Fluent Table 封装：只使用 Fluent UI 原生组件与默认外观，
 * 不设置列宽、粘性列等自定义样式（需要更宽的列时请在列定义中调整内容）。
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
  // 未显式传入时使用中文默认值
  const empty = emptyMessage ?? "无数据";
  const loading = loadingMessage ?? "正在加载...";

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const pageCount = table.getPageCount() || 1;
  const currentPageIndex = table.state.pagination.pageIndex;
  const currentPageSize = table.state.pagination.pageSize;

  return (
    <div>
      <FluentTable
        aria-label={ariaLabelledBy ? undefined : ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                const sortable = header.column.getCanSort();

                const sortDirection =
                  sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : undefined;

                return (
                  <TableHeaderCell
                    key={header.id}
                    sortDirection={sortDirection}
                    onClick={sortable ? header.column.getToggleSortingHandler() : undefined}
                    onKeyDown={(e) => {
                      if (sortable && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        // 直接切换排序方向，避免把键盘事件强转为鼠标事件处理器
                        header.column.toggleSorting(header.column.getIsSorted() === "asc");
                      }
                    }}
                    tabIndex={sortable ? 0 : undefined}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell>{loading}</TableCell>
            </TableRow>
          ) : isError ? (
            <TableRow>
              <TableCell>{errorMessage ?? "Failed to load data"}</TableCell>
            </TableRow>
          ) : rows.length === 0 ? (
            <TableRow>
              <TableCell>{empty}</TableCell>
            </TableRow>
          ) : (
            rows.map((row) => {
              const selected = row.getIsSelected();
              return (
                <TableRow
                  key={row.id}
                  appearance={selected ? "brand" : undefined}
                  aria-selected={selected || undefined}
                  onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  onKeyDown={
                    onRowClick
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
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
      </FluentTable>

      {showPagination && (
        <div role="navigation" aria-label="Table pagination">
          <Select
            value={String(currentPageSize)}
            onChange={(e) => {
              table.setPageSize(Number(e.currentTarget.value));
            }}
            aria-label={"每页行数"}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} {"条/页"}
              </option>
            ))}
          </Select>

          <Text size={200}>{`第 ${currentPageIndex + 1} 页，共 ${pageCount} 页`}</Text>

          <Button
            appearance="subtle"
            icon={<ArrowPreviousFilled />}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            aria-label={"首页"}
          />
          <Button
            appearance="subtle"
            icon={<ChevronLeftFilled />}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label={"上一页"}
          />
          <Button
            appearance="subtle"
            icon={<ChevronRightFilled />}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label={"下一页"}
          />
          <Button
            appearance="subtle"
            icon={<ArrowNextFilled />}
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={!table.getCanNextPage()}
            aria-label={"末页"}
          />
        </div>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps };
