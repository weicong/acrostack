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
  Input,
  Text,
  makeStyles,
  tokens,
  mergeClasses,
} from "@fluentui/react-components";
import {
  ChevronLeftFilled,
  ArrowNextFilled,
  ArrowPreviousFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  tableWrapper: {
    overflowX: "auto",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
    paddingBlock: tokens.spacingVerticalXS,
    flexWrap: "wrap",
  },
  paginationControls: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
  paginationPageJump: {
    width: "64px",
    textAlign: "center",
  },
  stateCell: {
    textAlign: "center",
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    color: tokens.colorNeutralForeground3,
  },
  stateCellError: {
    textAlign: "center",
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    color: tokens.colorPaletteRedForeground1,
  },
  resizer: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "5px",
    cursor: "col-resize",
    userSelect: "none",
    touchAction: "none",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: tokens.colorBrandStroke1,
    },
  },
  resizerActive: {
    backgroundColor: tokens.colorBrandStroke1,
  },
});

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
  const pageCount = table.getPageCount() || 1;
  const currentPageIndex = table.state.pagination.pageIndex;
  const currentPageSize = table.state.pagination.pageSize;

  const handlePageJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.currentTarget;
      const value = parseInt(target.value, 10);
      if (!isNaN(value) && value >= 1 && value <= pageCount) {
        table.setPageIndex(value - 1);
      }
      target.value = "";
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.tableWrapper}>
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
                  const pinned = header.column.getIsPinned();

                  const sortDirection =
                    sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : undefined;

                  let pinStyle: React.CSSProperties = {};
                  if (pinned === "start") {
                    pinStyle = {
                      position: "sticky",
                      left: 0,
                      zIndex: 2,
                      borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
                    };
                  } else if (pinned === "end") {
                    pinStyle = {
                      position: "sticky",
                      right: 0,
                      zIndex: 2,
                      borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
                    };
                  }

                  return (
                    <TableHeaderCell
                      key={header.id}
                      sortDirection={sortDirection}
                      style={pinStyle}
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
                      {header.column.getCanResize() && (
                        <div
                          className={mergeClasses(
                            styles.resizer,
                            header.column.getIsResizing() ? styles.resizerActive : "",
                          )}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                    </TableHeaderCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell style={{ gridColumn: "1 / -1" }} className={styles.stateCell}>
                  {loading}
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell style={{ gridColumn: "1 / -1" }} className={styles.stateCellError}>
                  {errorMessage ?? "Failed to load data"}
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell style={{ gridColumn: "1 / -1" }} className={styles.stateCell}>
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
                    {row.getVisibleCells().map((cell) => {
                      const pinned = cell.column.getIsPinned();
                      let pinStyle: React.CSSProperties = {};
                      if (pinned === "start") {
                        pinStyle = {
                          position: "sticky",
                          left: 0,
                          zIndex: 1,
                          borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
                        };
                      } else if (pinned === "end") {
                        pinStyle = {
                          position: "sticky",
                          right: 0,
                          zIndex: 1,
                          borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
                        };
                      }
                      return (
                        <TableCell key={cell.id} style={pinStyle}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </FluentTable>
      </div>

      {showPagination && (
        <div className={styles.pagination} role="navigation" aria-label="Table pagination">
          <div className={styles.paginationControls}>
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
          </div>

          <Text size={200}>{`第 ${currentPageIndex + 1} 页，共 ${pageCount} 页`}</Text>

          <div className={styles.paginationControls}>
            <Button
              appearance="subtle"
              shape="circular"
              icon={<ArrowPreviousFilled />}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label={"首页"}
            />
            <Button
              appearance="subtle"
              shape="circular"
              icon={<ChevronLeftFilled />}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"上一页"}
            />

            <Input
              className={styles.paginationPageJump}
              appearance="underline"
              placeholder={`${currentPageIndex + 1}`}
              onKeyDown={handlePageJump}
              aria-label={"跳转到"}
            />

            <Button
              appearance="subtle"
              shape="circular"
              icon={<ChevronRightFilled />}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"下一页"}
            />
            <Button
              appearance="subtle"
              shape="circular"
              icon={<ArrowNextFilled />}
              onClick={() => table.setPageIndex(pageCount - 1)}
              disabled={!table.getCanNextPage()}
              aria-label={"末页"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps };
