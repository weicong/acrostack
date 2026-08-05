/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuItemAdminGetAvailableMenuOrderQueryParentId,
  MenuItemAdminGetAvailableMenuOrderStatus200,
  MenuItemAdminGetAvailableMenuOrderStatus400,
  MenuItemAdminGetAvailableMenuOrderStatus401,
  MenuItemAdminGetAvailableMenuOrderStatus403,
  MenuItemAdminGetAvailableMenuOrderStatus404,
  MenuItemAdminGetAvailableMenuOrderStatus500,
  MenuItemAdminGetAvailableMenuOrderStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetAvailableMenuOrder.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetAvailableMenuOrder } from "../../clients/menuItemAdmin/menuItemAdminGetAvailableMenuOrder.ts";

export const menuItemAdminGetAvailableMenuOrderQueryKey = (params?: {
  parentId?: MenuItemAdminGetAvailableMenuOrderQueryParentId;
}) =>
  [{ url: "/api/cms-kit-admin/menu-items/available-order" }, ...(params ? [params] : [])] as const;

type MenuItemAdminGetAvailableMenuOrderQueryKey = ReturnType<
  typeof menuItemAdminGetAvailableMenuOrderQueryKey
>;

export function menuItemAdminGetAvailableMenuOrderQueryOptions(
  params?: { parentId?: MenuItemAdminGetAvailableMenuOrderQueryParentId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuItemAdminGetAvailableMenuOrderQueryKey(params);
  return queryOptions<
    MenuItemAdminGetAvailableMenuOrderStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetAvailableMenuOrderStatus400
      | MenuItemAdminGetAvailableMenuOrderStatus401
      | MenuItemAdminGetAvailableMenuOrderStatus403
      | MenuItemAdminGetAvailableMenuOrderStatus404
      | MenuItemAdminGetAvailableMenuOrderStatus500
      | MenuItemAdminGetAvailableMenuOrderStatus501
    >,
    MenuItemAdminGetAvailableMenuOrderStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuItemAdminGetAvailableMenuOrder(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/available-order}
 */
export function useMenuItemAdminGetAvailableMenuOrder<
  TData = MenuItemAdminGetAvailableMenuOrderStatus200,
  TQueryData = MenuItemAdminGetAvailableMenuOrderStatus200,
  TQueryKey extends QueryKey = MenuItemAdminGetAvailableMenuOrderQueryKey,
>(
  params?: { parentId?: MenuItemAdminGetAvailableMenuOrderQueryParentId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuItemAdminGetAvailableMenuOrderStatus200,
        ResponseErrorConfig<
          | MenuItemAdminGetAvailableMenuOrderStatus400
          | MenuItemAdminGetAvailableMenuOrderStatus401
          | MenuItemAdminGetAvailableMenuOrderStatus403
          | MenuItemAdminGetAvailableMenuOrderStatus404
          | MenuItemAdminGetAvailableMenuOrderStatus500
          | MenuItemAdminGetAvailableMenuOrderStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetAvailableMenuOrderQueryKey(params);

  const query = useQuery(
    {
      ...menuItemAdminGetAvailableMenuOrderQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuItemAdminGetAvailableMenuOrderStatus400
      | MenuItemAdminGetAvailableMenuOrderStatus401
      | MenuItemAdminGetAvailableMenuOrderStatus403
      | MenuItemAdminGetAvailableMenuOrderStatus404
      | MenuItemAdminGetAvailableMenuOrderStatus500
      | MenuItemAdminGetAvailableMenuOrderStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
