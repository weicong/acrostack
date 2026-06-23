import { useMemo, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { SortingState, PaginationState } from "@tanstack/react-table";

interface AbpPagedResult<T> {
  items?: T[] | null;
  totalCount?: number | bigint;
}

interface AbpGridParams {
  Filter?: string;
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
}

interface UseDataTableQueryOptions<TParams extends AbpGridParams> {
  queryOptions: (params?: TParams, config?: any) => any;
  sorting?: SortingState;
  pagination?: PaginationState;
  globalFilter?: string;
  extraParams?: Partial<TParams>;
  enabled?: boolean;
  keepPreviousData?: boolean;
}

function buildSortingString(sorting: SortingState): string | undefined {
  if (sorting.length === 0) return undefined;
  return sorting.map((s) => `${s.id} ${s.desc ? "desc" : "asc"}`).join(", ");
}

function useDataTableQuery<TData, TParams extends AbpGridParams>(
  options: UseDataTableQueryOptions<TParams>,
) {
  const {
    queryOptions,
    sorting = [],
    pagination,
    globalFilter,
    extraParams,
    enabled = true,
    keepPreviousData = true,
  } = options;
  const queryClient = useQueryClient();

  const queryOptionsRef = useRef(queryOptions);
  queryOptionsRef.current = queryOptions;

  const pageSize = pagination?.pageSize ?? 10;
  const pageIndex = pagination?.pageIndex ?? 0;

  const params = useMemo<TParams>(
    () =>
      ({
        ...extraParams,
        Sorting: buildSortingString(sorting),
        Filter: globalFilter || undefined,
        SkipCount: pageIndex * pageSize,
        MaxResultCount: pageSize,
      }) as TParams,
    [extraParams, sorting, globalFilter, pageIndex, pageSize],
  );

  const resolvedOptions = useMemo(() => queryOptionsRef.current(params), [params]);

  const query = useQuery<AbpPagedResult<TData>>({
    ...resolvedOptions,
    enabled,
    placeholderData: keepPreviousData ? (prev) => prev : undefined,
  });

  const data = query.data?.items ?? [];
  const totalCount = Number(query.data?.totalCount ?? 0);
  const pageCount = Math.ceil(totalCount / pageSize);

  const invalidate = useMemo(
    () => () => {
      const queryKey = resolvedOptions?.queryKey;
      if (queryKey) {
        void queryClient.invalidateQueries({ queryKey });
      }
    },
    [queryClient, resolvedOptions?.queryKey],
  );

  return {
    data,
    totalCount,
    pageCount,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    invalidate,
    refetch: query.refetch,
  };
}

export { useDataTableQuery };
export type { UseDataTableQueryOptions, AbpPagedResult, AbpGridParams };
