import { describe, it, expect, vi } from "vite-plus/test";
import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createElement, type ReactNode } from "react";
import { useDataTableState } from "./useDataTableState";
import { useDataTable } from "./useDataTable";
import type { AppTableFeatures } from "./useDataTable";
import { useDataTableQuery } from "./useDataTableQuery";
import { type ColumnDef } from "@tanstack/react-table";

interface TestRow {
  id: string;
  name: string;
  age: number;
}

const columns: ColumnDef<AppTableFeatures, TestRow>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
];

const data: TestRow[] = [
  { id: "1", name: "Alice", age: 30 },
  { id: "2", name: "Bob", age: 25 },
  { id: "3", name: "Charlie", age: 35 },
];

describe("useDataTableState", () => {
  it("returns default state", () => {
    const { result } = renderHook(() => useDataTableState());
    expect(result.current.state.sorting).toEqual([]);
    expect(result.current.state.pagination).toEqual({ pageIndex: 0, pageSize: 10 });
    expect(result.current.state.globalFilter).toBe("");
    expect(result.current.state.rowSelection).toEqual({});
    expect(result.current.state.columnVisibility).toEqual({});
    expect(result.current.state.columnSizing).toEqual({});
  });

  it("accepts initial overrides", () => {
    const { result } = renderHook(() =>
      useDataTableState({
        sorting: [{ id: "name", desc: true }],
        pagination: { pageIndex: 2, pageSize: 25 },
      }),
    );
    expect(result.current.state.sorting).toEqual([{ id: "name", desc: true }]);
    expect(result.current.state.pagination).toEqual({ pageIndex: 2, pageSize: 25 });
  });

  it("updates sorting via onSortingChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onSortingChange([{ id: "age", desc: false }]);
    });
    expect(result.current.snapshot.sorting).toEqual([{ id: "age", desc: false }]);
  });

  it("updates pagination via onPaginationChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onPaginationChange({ pageIndex: 1, pageSize: 20 });
    });
    expect(result.current.snapshot.pagination).toEqual({ pageIndex: 1, pageSize: 20 });
  });

  it("updates globalFilter via onGlobalFilterChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onGlobalFilterChange("test");
    });
    expect(result.current.snapshot.globalFilter).toBe("test");
  });

  it("updates rowSelection via onRowSelectionChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onRowSelectionChange({ "1": true });
    });
    expect(result.current.snapshot.rowSelection).toEqual({ "1": true });
  });

  it("updates columnVisibility via onColumnVisibilityChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onColumnVisibilityChange({ age: false });
    });
    expect(result.current.snapshot.columnVisibility).toEqual({ age: false });
  });

  it("updates columnSizing via onColumnSizingChange", () => {
    const { result } = renderHook(() => useDataTableState());
    act(() => {
      result.current.state.onColumnSizingChange({ age: 150 });
    });
    expect(result.current.snapshot.columnSizing).toEqual({ age: 150 });
  });

  it("calls onStateChange callback on each update", () => {
    const onStateChange = vi.fn();
    const { result } = renderHook(() => useDataTableState(undefined, onStateChange));
    act(() => {
      result.current.state.onSortingChange([{ id: "name", desc: false }]);
    });
    expect(onStateChange).toHaveBeenCalledTimes(1);
    expect(onStateChange.mock.calls[0][0].sorting).toEqual([{ id: "name", desc: false }]);
  });

  it("supports updater functions", () => {
    const { result } = renderHook(() =>
      useDataTableState({ sorting: [{ id: "name", desc: false }] }),
    );
    act(() => {
      result.current.state.onSortingChange((prev) => [...prev, { id: "age", desc: true }]);
    });
    expect(result.current.snapshot.sorting).toEqual([
      { id: "name", desc: false },
      { id: "age", desc: true },
    ]);
  });

  it("onStateChange uses stable ref, not recreated on callback change", () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    const { result, rerender } = renderHook(({ cb }) => useDataTableState(undefined, cb), {
      initialProps: { cb: firstCallback },
    });

    act(() => {
      result.current.state.onSortingChange([{ id: "name", desc: true }]);
    });
    expect(firstCallback).toHaveBeenCalledTimes(1);

    rerender({ cb: secondCallback });

    act(() => {
      result.current.state.onPaginationChange({ pageIndex: 3, pageSize: 50 });
    });
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).toHaveBeenCalledTimes(1);
  });
});

describe("useDataTable", () => {
  it("creates a table with rows", () => {
    const { result } = renderHook(() => useDataTable({ data, columns, getRowId: (r) => r.id }));
    expect(result.current.getRowModel().rows).toHaveLength(3);
  });

  it("supports sorting", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        state: {
          sorting: [{ id: "age", desc: false }],
          onSortingChange: () => {},
        },
      }),
    );
    const rows = result.current.getRowModel().rows;
    expect(rows[0].original.age).toBe(25);
    expect(rows[1].original.age).toBe(30);
    expect(rows[2].original.age).toBe(35);
  });

  it("supports descending sort", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        state: {
          sorting: [{ id: "age", desc: true }],
          onSortingChange: () => {},
        },
      }),
    );
    const rows = result.current.getRowModel().rows;
    expect(rows[0].original.age).toBe(35);
    expect(rows[2].original.age).toBe(25);
  });

  it("supports pagination", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        state: {
          pagination: { pageIndex: 0, pageSize: 2 },
          onPaginationChange: () => {},
        },
      }),
    );
    expect(result.current.getRowModel().rows).toHaveLength(2);
    expect(result.current.getPageCount()).toBe(2);
  });

  it("supports column visibility", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        state: {
          columnVisibility: { age: false },
          onColumnVisibilityChange: () => {},
        },
      }),
    );
    const visibleCols = result.current.getVisibleLeafColumns();
    expect(visibleCols.map((c) => c.id)).not.toContain("age");
  });

  it("supports row selection", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        enableRowSelection: true,
        state: {
          rowSelection: { "1": true },
          onRowSelectionChange: () => {},
        },
      }),
    );
    expect(result.current.getFilteredSelectedRowModel().rows).toHaveLength(1);
  });

  it("supports column resizing when enabled", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        enableColumnResizing: true,
      }),
    );
    const col = result.current.getColumn("age")!;
    expect(col.getCanResize()).toBe(true);
  });

  it("does not support column resizing when disabled", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        enableColumnResizing: false,
      }),
    );
    const col = result.current.getColumn("age")!;
    expect(col.getCanResize()).toBe(false);
  });

  it("respects manualPagination", () => {
    const { result } = renderHook(() =>
      useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        manualPagination: true,
        rowCount: 100,
        pageCount: 10,
        state: {
          pagination: { pageIndex: 0, pageSize: 10 },
          onPaginationChange: () => {},
        },
      }),
    );
    expect(result.current.getPageCount()).toBe(10);
  });

  it("integrates with useDataTableState for full controlled flow", () => {
    const { result } = renderHook(() => {
      const tableState = useDataTableState({
        sorting: [{ id: "name", desc: true }],
      });
      const table = useDataTable({
        data,
        columns,
        getRowId: (r) => r.id,
        state: tableState.state,
      });
      return { tableState, table };
    });

    const rows = result.current.table.getRowModel().rows;
    expect(rows[0].original.name).toBe("Charlie");
    expect(rows[2].original.name).toBe("Alice");
  });
});

describe("useDataTableQuery", () => {
  const mockResult: { items: TestRow[]; totalCount: number } = {
    items: [
      { id: "1", name: "Alice", age: 30 },
      { id: "2", name: "Bob", age: 25 },
    ],
    totalCount: 2,
  };

  function createWrapper() {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    return ({ children }: { children: ReactNode }) =>
      createElement(QueryClientProvider, { client: queryClient }, children);
  }

  it("builds correct params from sorting and pagination", () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve(mockResult),
    });

    const { result: _result } = renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [{ id: "name", desc: false }],
          pagination: { pageIndex: 1, pageSize: 20 },
          globalFilter: "search",
        }),
      { wrapper: createWrapper() },
    );

    expect(queryOptions).toHaveBeenCalled();
    const params = queryOptions.mock.calls[0][0];
    expect(params.Sorting).toBe("name asc");
    expect(params.SkipCount).toBe(20);
    expect(params.MaxResultCount).toBe(20);
    expect(params.Filter).toBe("search");
  });

  it("returns empty data when sorting is empty", () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve(mockResult),
    });

    const { result: _result } = renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [],
          pagination: { pageIndex: 0, pageSize: 10 },
        }),
      { wrapper: createWrapper() },
    );

    const params = queryOptions.mock.calls[0][0];
    expect(params.Sorting).toBeUndefined();
  });

  it("returns refetch function", () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve(mockResult),
    });

    const { result } = renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [],
          pagination: { pageIndex: 0, pageSize: 10 },
        }),
      { wrapper: createWrapper() },
    );

    expect(result.current.refetch).toBeDefined();
    expect(typeof result.current.refetch).toBe("function");
  });

  it("computes pageCount correctly", async () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve({ items: [], totalCount: 100 }),
    });

    const { result } = renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [],
          pagination: { pageIndex: 0, pageSize: 10 },
        }),
      { wrapper: createWrapper() },
    );

    await waitFor(() => {
      expect(result.current.pageCount).toBe(10);
    });
  });

  it("respects keepPreviousData option", () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve(mockResult),
    });

    const { result } = renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [],
          pagination: { pageIndex: 0, pageSize: 10 },
          keepPreviousData: false,
        }),
      { wrapper: createWrapper() },
    );
    expect(result.current).toBeDefined();
  });

  it("merges extraParams into query params", () => {
    const queryOptions = vi.fn().mockReturnValue({
      queryKey: ["test"],
      queryFn: () => Promise.resolve(mockResult),
    });

    renderHook(
      () =>
        useDataTableQuery({
          queryOptions,
          sorting: [],
          pagination: { pageIndex: 0, pageSize: 10 },
          extraParams: { Filter: "overridden" } as any,
        }),
      { wrapper: createWrapper() },
    );

    const params = queryOptions.mock.calls[0][0];
    expect(params.Filter).toBe("overridden");
  });
});
