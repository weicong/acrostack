import { useMemo, useRef } from "react";
import { useQuery, useQueryClient, type QueryFunction, type QueryKey } from "@tanstack/react-query";
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

/**
 * queryOptions（Kubb 生成的 xxxQueryOptions）返回值的最小强类型约束：
 * - queryKey：透传给 useQuery，并用于缓存失效；
 * - queryFn：返回 ABP 分页结果。
 * queryFn 的 context 参数声明为 never，使任意 Kubb 签名
 * （QueryFunctionContext<具体 queryKey 元组>）都能安全赋值；
 * 由本 hook 内部桥接为 react-query 的 QueryFunction。
 */
interface PagedQueryOptions<TData> {
  queryKey: QueryKey;
  queryFn?: (context: never) => AbpPagedResult<TData> | Promise<AbpPagedResult<TData>>;
}

interface UseDataTableQueryOptions<TData, TParams extends AbpGridParams> {
  /**
   * Kubb v5 生成的 xxxQueryOptions 第一个参数是 { query?: {...} }，
   * 第二参数 config 类型为 never：本 hook 从不透传 config
   * （Kubb 函数的 Partial<RequestConfig> 参数在严格逆变下与 unknown 不兼容）。
   */
  queryOptions: (params?: { query?: TParams }, config?: never) => PagedQueryOptions<TData>;
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
  options: UseDataTableQueryOptions<TData, TParams>,
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

  const params = useMemo<{ query: TParams }>(
    () => ({
      // Defaults first, then extraParams so callers can override Filter/Sorting/etc.
      query: {
        Sorting: buildSortingString(sorting),
        Filter: globalFilter || undefined,
        SkipCount: pageIndex * pageSize,
        MaxResultCount: pageSize,
        ...extraParams,
      } as TParams,
    }),
    [extraParams, sorting, globalFilter, pageIndex, pageSize],
  );

  const resolvedOptions = useMemo(() => queryOptionsRef.current(params), [params]);

  const query = useQuery<AbpPagedResult<TData>, Error>({
    ...resolvedOptions,
    // 桥接 queryFn：Kubb 实现运行时接受完整 QueryFunctionContext，
    // 声明侧的 never 参数仅用于兼容各种 Kubb 签名，此处做类型适配
    queryFn: resolvedOptions.queryFn as QueryFunction<AbpPagedResult<TData>, QueryKey> | undefined,
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
