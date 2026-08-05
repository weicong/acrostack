/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuItemAdminGetPageLookupQueryFilter,
  MenuItemAdminGetPageLookupQueryStatus,
  MenuItemAdminGetPageLookupQuerySorting,
  MenuItemAdminGetPageLookupQuerySkipCount,
  MenuItemAdminGetPageLookupQueryMaxResultCount,
  MenuItemAdminGetPageLookupStatus200,
  MenuItemAdminGetPageLookupStatus400,
  MenuItemAdminGetPageLookupStatus401,
  MenuItemAdminGetPageLookupStatus403,
  MenuItemAdminGetPageLookupStatus404,
  MenuItemAdminGetPageLookupStatus500,
  MenuItemAdminGetPageLookupStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetPageLookup.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetPageLookup } from "../../clients/menuItemAdmin/menuItemAdminGetPageLookup.ts";

export const menuItemAdminGetPageLookupQueryKey = (params?: {
  Filter?: MenuItemAdminGetPageLookupQueryFilter;
  Status?: MenuItemAdminGetPageLookupQueryStatus;
  Sorting?: MenuItemAdminGetPageLookupQuerySorting;
  SkipCount?: MenuItemAdminGetPageLookupQuerySkipCount;
  MaxResultCount?: MenuItemAdminGetPageLookupQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/menu-items/lookup/pages" }, ...(params ? [params] : [])] as const;

type MenuItemAdminGetPageLookupQueryKey = ReturnType<typeof menuItemAdminGetPageLookupQueryKey>;

export function menuItemAdminGetPageLookupQueryOptions(
  params?: {
    Filter?: MenuItemAdminGetPageLookupQueryFilter;
    Status?: MenuItemAdminGetPageLookupQueryStatus;
    Sorting?: MenuItemAdminGetPageLookupQuerySorting;
    SkipCount?: MenuItemAdminGetPageLookupQuerySkipCount;
    MaxResultCount?: MenuItemAdminGetPageLookupQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuItemAdminGetPageLookupQueryKey(params);
  return queryOptions<
    MenuItemAdminGetPageLookupStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetPageLookupStatus400
      | MenuItemAdminGetPageLookupStatus401
      | MenuItemAdminGetPageLookupStatus403
      | MenuItemAdminGetPageLookupStatus404
      | MenuItemAdminGetPageLookupStatus500
      | MenuItemAdminGetPageLookupStatus501
    >,
    MenuItemAdminGetPageLookupStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuItemAdminGetPageLookup(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/pages}
 */
export function useMenuItemAdminGetPageLookup<
  TData = MenuItemAdminGetPageLookupStatus200,
  TQueryData = MenuItemAdminGetPageLookupStatus200,
  TQueryKey extends QueryKey = MenuItemAdminGetPageLookupQueryKey,
>(
  params?: {
    Filter?: MenuItemAdminGetPageLookupQueryFilter;
    Status?: MenuItemAdminGetPageLookupQueryStatus;
    Sorting?: MenuItemAdminGetPageLookupQuerySorting;
    SkipCount?: MenuItemAdminGetPageLookupQuerySkipCount;
    MaxResultCount?: MenuItemAdminGetPageLookupQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuItemAdminGetPageLookupStatus200,
        ResponseErrorConfig<
          | MenuItemAdminGetPageLookupStatus400
          | MenuItemAdminGetPageLookupStatus401
          | MenuItemAdminGetPageLookupStatus403
          | MenuItemAdminGetPageLookupStatus404
          | MenuItemAdminGetPageLookupStatus500
          | MenuItemAdminGetPageLookupStatus501
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetPageLookupQueryKey(params);

  const query = useQuery(
    {
      ...menuItemAdminGetPageLookupQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuItemAdminGetPageLookupStatus400
      | MenuItemAdminGetPageLookupStatus401
      | MenuItemAdminGetPageLookupStatus403
      | MenuItemAdminGetPageLookupStatus404
      | MenuItemAdminGetPageLookupStatus500
      | MenuItemAdminGetPageLookupStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
