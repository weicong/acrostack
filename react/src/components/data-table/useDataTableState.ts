import { useCallback, useRef, useState } from "react";
import type {
  SortingState,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
  RowSelectionState,
  ColumnPinningState,
  ColumnSizingState,
  OnChangeFn,
  Updater,
} from "@tanstack/react-table";
import { resolveUpdater } from "./useDataTable";

interface DataTableState {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  globalFilter: string;
  pagination: PaginationState;
  columnVisibility: VisibilityState;
  columnPinning: ColumnPinningState;
  rowSelection: RowSelectionState;
  columnSizing: ColumnSizingState;
}

const defaultState: DataTableState = {
  sorting: [],
  columnFilters: [],
  globalFilter: "",
  pagination: { pageIndex: 0, pageSize: 10 },
  columnVisibility: {},
  columnPinning: {},
  rowSelection: {},
  columnSizing: {},
};

function useDataTableState(
  initial?: Partial<DataTableState>,
  onStateChange?: (state: DataTableState) => void,
) {
  const [state, setState] = useState<DataTableState>({
    ...defaultState,
    ...initial,
    pagination: { ...defaultState.pagination, ...initial?.pagination },
  });

  const onStateChangeRef = useRef(onStateChange);
  onStateChangeRef.current = onStateChange;

  const update = useCallback(
    <T extends keyof DataTableState>(key: T) =>
      (updater: Updater<DataTableState[T]>) => {
        setState((prev) => {
          const next = { ...prev, [key]: resolveUpdater(updater, prev[key]) };
          onStateChangeRef.current?.(next);
          return next;
        });
      },
    [],
  );

  const onSortingChange = useCallback(update("sorting"), [update]) as OnChangeFn<SortingState>;
  const onColumnFiltersChange = useCallback(update("columnFilters"), [
    update,
  ]) as OnChangeFn<ColumnFiltersState>;
  const onGlobalFilterChange = useCallback(update("globalFilter"), [update]) as OnChangeFn<string>;
  const onPaginationChange = useCallback(update("pagination"), [
    update,
  ]) as OnChangeFn<PaginationState>;
  const onColumnVisibilityChange = useCallback(update("columnVisibility"), [
    update,
  ]) as OnChangeFn<VisibilityState>;
  const onColumnPinningChange = useCallback(update("columnPinning"), [
    update,
  ]) as OnChangeFn<ColumnPinningState>;
  const onRowSelectionChange = useCallback(update("rowSelection"), [
    update,
  ]) as OnChangeFn<RowSelectionState>;
  const onColumnSizingChange = useCallback(update("columnSizing"), [
    update,
  ]) as OnChangeFn<ColumnSizingState>;

  return {
    state: {
      sorting: state.sorting,
      onSortingChange,
      columnFilters: state.columnFilters,
      onColumnFiltersChange,
      globalFilter: state.globalFilter,
      onGlobalFilterChange,
      pagination: state.pagination,
      onPaginationChange,
      columnVisibility: state.columnVisibility,
      onColumnVisibilityChange,
      columnPinning: state.columnPinning,
      onColumnPinningChange,
      rowSelection: state.rowSelection,
      onRowSelectionChange,
      columnSizing: state.columnSizing,
      onColumnSizingChange,
    },
    snapshot: state,
  };
}

export { useDataTableState };
export type { DataTableState };
