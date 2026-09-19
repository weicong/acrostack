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
  Select,
  Spinner,
  Text,
  Toolbar,
  ToolbarButton,
  makeStyles,
  shorthands,
  tokens,
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

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  /** 窄屏下让表格自身横向滚动，避免撑破页面布局 */
  tableScroll: {
    overflowX: "auto",
  },
  /** 空态/加载/错误提示：整行合并，避免被读成"第一列的内容" */
  statusCell: {
    color: tokens.colorNeutralForeground3,
  },
  /** Toolbar 自带 display / align-items / 内边距，这里只补右对齐与窄屏换行 */
  pagination: {
    justifyContent: "flex-end",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  pageSize: {
    minWidth: "110px",
  },
  pageIndicator: {
    color: tokens.colorNeutralForeground3,
  },
});

/**
 * Fluent Table 封装：使用 Fluent 原生表格组件与默认外观，
 * 不设置列宽、粘性列等自定义样式（需要更宽的列时请在列定义中调整内容）。
 * 排序、行选中、分页均带键盘与读屏支持，状态提示整行合并。
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
  const styles = useStyles();
  // 未显式传入时使用中文默认值
  const empty = emptyMessage ?? "无数据";
  const loading = loadingMessage ?? "正在加载...";

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const columnCount = table.getVisibleLeafColumns().length;
  const pageCount = table.getPageCount() || 1;
  const currentPageIndex = table.state.pagination.pageIndex;
  const currentPageSize = table.state.pagination.pageSize;

  return (
    <div className={styles.root}>
      <div className={styles.tableScroll}>
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
                <TableCell colSpan={columnCount} className={styles.statusCell}>
                  <Spinner size="tiny" label={loading} labelPosition="after" />
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={columnCount} className={styles.statusCell}>
                  {errorMessage ?? "数据加载失败，请稍后重试"}
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columnCount} className={styles.statusCell}>
                  {empty}
                </TableCell>
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
      </div>

      {showPagination && (
        <Toolbar className={styles.pagination} aria-label="分页">
          <Select
            className={styles.pageSize}
            value={String(currentPageSize)}
            onChange={(e) => {
              table.setPageSize(Number(e.currentTarget.value));
            }}
            aria-label="每页行数"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {`${size} 条/页`}
              </option>
            ))}
          </Select>

          <Text size={200} className={styles.pageIndicator}>
            {`第 ${currentPageIndex + 1} 页，共 ${pageCount} 页`}
          </Text>

          <ToolbarButton
            appearance="subtle"
            icon={<ArrowPreviousFilled />}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            aria-label="首页"
          />
          <ToolbarButton
            appearance="subtle"
            icon={<ChevronLeftFilled />}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label="上一页"
          />
          <ToolbarButton
            appearance="subtle"
            icon={<ChevronRightFilled />}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label="下一页"
          />
          <ToolbarButton
            appearance="subtle"
            icon={<ArrowNextFilled />}
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={!table.getCanNextPage()}
            aria-label="末页"
          />
        </Toolbar>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps };
