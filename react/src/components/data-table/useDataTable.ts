import { useMemo } from "react";
import {
  useTable,
  tableFeatures,
  rowSortingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  columnPinningFeature,
  columnVisibilityFeature,
  columnSizingFeature,
  columnResizingFeature,
  createFilteredRowModel,
  createSortedRowModel,
  createPaginatedRowModel,
  sortFns,
  filterFns,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  ColumnPinningState,
  ColumnSizingState,
  Updater,
  OnChangeFn,
  ReactTable,
  RowData,
} from "@tanstack/react-table";

// Table V9: features are opt-in and tree-shakeable. Register only the features
// this DataTable abstraction needs (sorting, filtering, pagination, selection,
// pinning, visibility, sizing, resizing) plus the client-side row-model
// factories that actually apply sorting/filtering/pagination state to the rows.
// `tableFeatures` provides type inference and validates feature prerequisites
// (e.g. globalFilteringFeature requires columnFilteringFeature,
// columnResizingFeature requires columnSizingFeature).
const appTableFeatures = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  columnPinningFeature,
  columnVisibilityFeature,
  columnSizingFeature,
  columnResizingFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  sortFns,
  filterFns,
});

type AppTableFeatures = typeof appTableFeatures;

// VisibilityState was removed in Table V9; use an inline record type instead.
type VisibilityState = Record<string, boolean>;

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

interface UseDataTableOptions<TData extends RowData> {
  data: TData[];
  columns: ColumnDef<AppTableFeatures, TData>[];
  rowCount?: number;
  getRowId?: (row: TData) => string;
  state?: UseDataTableStateOptions;
  enableSorting?: boolean;
  enableMultiSort?: boolean;
  enableColumnFilters?: boolean;
  enableGlobalFilter?: boolean;
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

function useDataTable<TData extends RowData>(
  options: UseDataTableOptions<TData>,
): ReactTable<AppTableFeatures, TData> {
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

  const table = useTable({
    // Table V9: declare features via the `features` option. `appTableFeatures`
    // registers the feature modules and row-model factories this DataTable
    // abstraction needs (defined once at module scope above).
    features: appTableFeatures,
    data,
    columns,
    getRowId,
    rowCount,
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

export { useDataTable, resolveUpdater, appTableFeatures };
export type { UseDataTableOptions, UseDataTableStateOptions, AppTableFeatures };
