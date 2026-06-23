import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
  RowSelectionState,
  ColumnPinningState,
  ColumnSizingState,
  Updater,
  OnChangeFn,
  Table,
} from "@tanstack/react-table";

interface UseDataTableStateOptions {
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  columnFilters?: ColumnFiltersState;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
  columnPinning?: ColumnPinningState;
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  columnSizing?: ColumnSizingState;
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;
}

interface UseDataTableOptions<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  rowCount?: number;
  getRowId?: (row: TData) => string;
  state?: UseDataTableStateOptions;
  enableSorting?: boolean;
  enableMultiSort?: boolean;
  enableColumnFilters?: boolean;
  enableGlobalFilter?: boolean;
  enablePagination?: boolean;
  enableRowSelection?: boolean;
  enableMultiRowSelection?: boolean;
  enableColumnResizing?: boolean;
  columnResizeMode?: "onChange" | "onEnd";
  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualPagination?: boolean;
  pageCount?: number;
  autoResetPageIndex?: boolean;
}

function resolveUpdater<T>(updater: Updater<T>, current: T): T {
  if (typeof updater === "function") {
    return (updater as (prev: T) => T)(current);
  }
  return updater;
}

function useDataTable<TData>(options: UseDataTableOptions<TData>): Table<TData> {
  const {
    data,
    columns,
    rowCount,
    getRowId,
    state: stateOptions,
    enableSorting = true,
    enableMultiSort = false,
    enableColumnFilters = false,
    enableGlobalFilter = false,
    enablePagination = true,
    enableRowSelection = false,
    enableMultiRowSelection = false,
    enableColumnResizing = false,
    columnResizeMode = "onChange",
    manualSorting = false,
    manualFiltering = false,
    manualPagination = false,
    pageCount: pageCountProp,
    autoResetPageIndex = false,
  } = options;

  const controlledState = useMemo(() => {
    const s: Partial<UseDataTableStateOptions> = {};
    if (stateOptions?.sorting !== undefined) s.sorting = stateOptions.sorting;
    if (stateOptions?.columnFilters !== undefined) s.columnFilters = stateOptions.columnFilters;
    if (stateOptions?.globalFilter !== undefined) s.globalFilter = stateOptions.globalFilter;
    if (stateOptions?.pagination !== undefined) s.pagination = stateOptions.pagination;
    if (stateOptions?.columnVisibility !== undefined)
      s.columnVisibility = stateOptions.columnVisibility;
    if (stateOptions?.columnPinning !== undefined) s.columnPinning = stateOptions.columnPinning;
    if (stateOptions?.rowSelection !== undefined) s.rowSelection = stateOptions.rowSelection;
    if (stateOptions?.columnSizing !== undefined) s.columnSizing = stateOptions.columnSizing;
    return s;
  }, [
    stateOptions?.sorting,
    stateOptions?.columnFilters,
    stateOptions?.globalFilter,
    stateOptions?.pagination,
    stateOptions?.columnVisibility,
    stateOptions?.columnPinning,
    stateOptions?.rowSelection,
    stateOptions?.columnSizing,
  ]);

  const table = useReactTable<TData>({
    data,
    columns,
    getRowId,
    rowCount,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting && !manualSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel:
      (enableColumnFilters || enableGlobalFilter) && !manualFiltering
        ? getFilteredRowModel()
        : undefined,
    getPaginationRowModel:
      enablePagination && !manualPagination ? getPaginationRowModel() : undefined,
    enableSorting,
    enableMultiSort,
    enableColumnFilters,
    enableGlobalFilter,
    enableRowSelection,
    enableMultiRowSelection,
    enableColumnResizing,
    columnResizeMode,
    manualSorting,
    manualFiltering,
    manualPagination,
    pageCount: pageCountProp,
    autoResetPageIndex,
    state: controlledState,
    onSortingChange: stateOptions?.onSortingChange,
    onColumnFiltersChange: stateOptions?.onColumnFiltersChange,
    onGlobalFilterChange: stateOptions?.onGlobalFilterChange,
    onPaginationChange: stateOptions?.onPaginationChange,
    onColumnVisibilityChange: stateOptions?.onColumnVisibilityChange,
    onColumnPinningChange: stateOptions?.onColumnPinningChange,
    onRowSelectionChange: stateOptions?.onRowSelectionChange,
    onColumnSizingChange: stateOptions?.onColumnSizingChange,
  });

  return table;
}

export { useDataTable, resolveUpdater };
export type { UseDataTableOptions, UseDataTableStateOptions };
