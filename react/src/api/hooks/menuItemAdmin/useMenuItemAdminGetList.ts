/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuItemAdminGetListStatus200,
  MenuItemAdminGetListStatus400,
  MenuItemAdminGetListStatus401,
  MenuItemAdminGetListStatus403,
  MenuItemAdminGetListStatus404,
  MenuItemAdminGetListStatus500,
  MenuItemAdminGetListStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetList } from "../../clients/menuItemAdmin/menuItemAdminGetList.ts";

export const menuItemAdminGetListQueryKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items" }] as const;

type MenuItemAdminGetListQueryKey = ReturnType<typeof menuItemAdminGetListQueryKey>;

export function menuItemAdminGetListQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuItemAdminGetListQueryKey();
  return queryOptions<
    MenuItemAdminGetListStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetListStatus400
      | MenuItemAdminGetListStatus401
      | MenuItemAdminGetListStatus403
      | MenuItemAdminGetListStatus404
      | MenuItemAdminGetListStatus500
      | MenuItemAdminGetListStatus501
    >,
    MenuItemAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuItemAdminGetList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function useMenuItemAdminGetList<
  TData = MenuItemAdminGetListStatus200,
  TQueryData = MenuItemAdminGetListStatus200,
  TQueryKey extends QueryKey = MenuItemAdminGetListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuItemAdminGetListStatus200,
        ResponseErrorConfig<
          | MenuItemAdminGetListStatus400
          | MenuItemAdminGetListStatus401
          | MenuItemAdminGetListStatus403
          | MenuItemAdminGetListStatus404
          | MenuItemAdminGetListStatus500
          | MenuItemAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetListQueryKey();

  const query = useQuery(
    {
      ...menuItemAdminGetListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuItemAdminGetListStatus400
      | MenuItemAdminGetListStatus401
      | MenuItemAdminGetListStatus403
      | MenuItemAdminGetListStatus404
      | MenuItemAdminGetListStatus500
      | MenuItemAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
