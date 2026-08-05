/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuItemAdminGetPermissionLookupQueryFilter,
  MenuItemAdminGetPermissionLookupStatus200,
  MenuItemAdminGetPermissionLookupStatus400,
  MenuItemAdminGetPermissionLookupStatus401,
  MenuItemAdminGetPermissionLookupStatus403,
  MenuItemAdminGetPermissionLookupStatus404,
  MenuItemAdminGetPermissionLookupStatus500,
  MenuItemAdminGetPermissionLookupStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetPermissionLookup.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetPermissionLookup } from "../../clients/menuItemAdmin/menuItemAdminGetPermissionLookup.ts";

export const menuItemAdminGetPermissionLookupQueryKey = (params?: {
  Filter?: MenuItemAdminGetPermissionLookupQueryFilter;
}) =>
  [
    { url: "/api/cms-kit-admin/menu-items/lookup/permissions" },
    ...(params ? [params] : []),
  ] as const;

type MenuItemAdminGetPermissionLookupQueryKey = ReturnType<
  typeof menuItemAdminGetPermissionLookupQueryKey
>;

export function menuItemAdminGetPermissionLookupQueryOptions(
  params?: { Filter?: MenuItemAdminGetPermissionLookupQueryFilter },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuItemAdminGetPermissionLookupQueryKey(params);
  return queryOptions<
    MenuItemAdminGetPermissionLookupStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetPermissionLookupStatus400
      | MenuItemAdminGetPermissionLookupStatus401
      | MenuItemAdminGetPermissionLookupStatus403
      | MenuItemAdminGetPermissionLookupStatus404
      | MenuItemAdminGetPermissionLookupStatus500
      | MenuItemAdminGetPermissionLookupStatus501
    >,
    MenuItemAdminGetPermissionLookupStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuItemAdminGetPermissionLookup(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/permissions}
 */
export function useMenuItemAdminGetPermissionLookup<
  TData = MenuItemAdminGetPermissionLookupStatus200,
  TQueryData = MenuItemAdminGetPermissionLookupStatus200,
  TQueryKey extends QueryKey = MenuItemAdminGetPermissionLookupQueryKey,
>(
  params?: { Filter?: MenuItemAdminGetPermissionLookupQueryFilter },
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuItemAdminGetPermissionLookupStatus200,
        ResponseErrorConfig<
          | MenuItemAdminGetPermissionLookupStatus400
          | MenuItemAdminGetPermissionLookupStatus401
          | MenuItemAdminGetPermissionLookupStatus403
          | MenuItemAdminGetPermissionLookupStatus404
          | MenuItemAdminGetPermissionLookupStatus500
          | MenuItemAdminGetPermissionLookupStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetPermissionLookupQueryKey(params);

  const query = useQuery(
    {
      ...menuItemAdminGetPermissionLookupQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuItemAdminGetPermissionLookupStatus400
      | MenuItemAdminGetPermissionLookupStatus401
      | MenuItemAdminGetPermissionLookupStatus403
      | MenuItemAdminGetPermissionLookupStatus404
      | MenuItemAdminGetPermissionLookupStatus500
      | MenuItemAdminGetPermissionLookupStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
