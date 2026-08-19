/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MenuItemAdminGetListStatus200,
  MenuItemAdminGetListStatus400,
  MenuItemAdminGetListStatus401,
  MenuItemAdminGetListStatus403,
  MenuItemAdminGetListStatus404,
  MenuItemAdminGetListStatus500,
  MenuItemAdminGetListStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGetList } from "../../clients/menuItemAdmin/menuItemAdminGetList";

export const menuItemAdminGetListQueryKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items" }] as const;

type MenuItemAdminGetListQueryKey = ReturnType<typeof menuItemAdminGetListQueryKey>;

export function menuItemAdminGetListQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await menuItemAdminGetList({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetListQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
