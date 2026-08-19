/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MenuItemAdminGetAvailableMenuOrderOptions,
  MenuItemAdminGetAvailableMenuOrderStatus200,
  MenuItemAdminGetAvailableMenuOrderStatus400,
  MenuItemAdminGetAvailableMenuOrderStatus401,
  MenuItemAdminGetAvailableMenuOrderStatus403,
  MenuItemAdminGetAvailableMenuOrderStatus404,
  MenuItemAdminGetAvailableMenuOrderStatus500,
  MenuItemAdminGetAvailableMenuOrderStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetAvailableMenuOrder";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetAvailableMenuOrder } from "../../clients/menuItemAdmin/menuItemAdminGetAvailableMenuOrder";

export const menuItemAdminGetAvailableMenuOrderQueryKey = ({
  query,
}: Omit<MenuItemAdminGetAvailableMenuOrderOptions, "headers"> = {}) =>
  [{ url: "/api/cms-kit-admin/menu-items/available-order" }, ...(query ? [query] : [])] as const;

type MenuItemAdminGetAvailableMenuOrderQueryKey = ReturnType<
  typeof menuItemAdminGetAvailableMenuOrderQueryKey
>;

export function menuItemAdminGetAvailableMenuOrderQueryOptions(
  { query }: MenuItemAdminGetAvailableMenuOrderOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = menuItemAdminGetAvailableMenuOrderQueryKey({ query });
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
      const { data } = await menuItemAdminGetAvailableMenuOrder({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    query,
  }: {
    query?:
      | MenuItemAdminGetAvailableMenuOrderOptions["query"]
      | (() => MenuItemAdminGetAvailableMenuOrderOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey =
    resolvedOptions?.queryKey ?? menuItemAdminGetAvailableMenuOrderQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...menuItemAdminGetAvailableMenuOrderQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
