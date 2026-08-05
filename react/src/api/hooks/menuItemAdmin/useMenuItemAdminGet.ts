/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuItemAdminGetPathId,
  MenuItemAdminGetStatus200,
  MenuItemAdminGetStatus400,
  MenuItemAdminGetStatus401,
  MenuItemAdminGetStatus403,
  MenuItemAdminGetStatus404,
  MenuItemAdminGetStatus500,
  MenuItemAdminGetStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGet } from "../../clients/menuItemAdmin/menuItemAdminGet.ts";

export const menuItemAdminGetQueryKey = (id?: MenuItemAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/menu-items/:id", params: { id: id } }] as const;

type MenuItemAdminGetQueryKey = ReturnType<typeof menuItemAdminGetQueryKey>;

export function menuItemAdminGetQueryOptions(
  id?: MenuItemAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuItemAdminGetQueryKey(id);
  return queryOptions<
    MenuItemAdminGetStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetStatus400
      | MenuItemAdminGetStatus401
      | MenuItemAdminGetStatus403
      | MenuItemAdminGetStatus404
      | MenuItemAdminGetStatus500
      | MenuItemAdminGetStatus501
    >,
    MenuItemAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return menuItemAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function useMenuItemAdminGet<
  TData = MenuItemAdminGetStatus200,
  TQueryData = MenuItemAdminGetStatus200,
  TQueryKey extends QueryKey = MenuItemAdminGetQueryKey,
>(
  id?: MenuItemAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuItemAdminGetStatus200,
        ResponseErrorConfig<
          | MenuItemAdminGetStatus400
          | MenuItemAdminGetStatus401
          | MenuItemAdminGetStatus403
          | MenuItemAdminGetStatus404
          | MenuItemAdminGetStatus500
          | MenuItemAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...menuItemAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuItemAdminGetStatus400
      | MenuItemAdminGetStatus401
      | MenuItemAdminGetStatus403
      | MenuItemAdminGetStatus404
      | MenuItemAdminGetStatus500
      | MenuItemAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
