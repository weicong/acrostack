/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MenuItemAdminGetOptions,
  MenuItemAdminGetStatus200,
  MenuItemAdminGetStatus400,
  MenuItemAdminGetStatus401,
  MenuItemAdminGetStatus403,
  MenuItemAdminGetStatus404,
  MenuItemAdminGetStatus500,
  MenuItemAdminGetStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuItemAdminGet } from "../../clients/menuItemAdmin/menuItemAdminGet";

export const menuItemAdminGetQueryKey = ({ path }: Omit<MenuItemAdminGetOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/menu-items/:id", params: path }] as const;

type MenuItemAdminGetQueryKey = ReturnType<typeof menuItemAdminGetQueryKey>;

export function menuItemAdminGetQueryOptions(
  { path }: MenuItemAdminGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = menuItemAdminGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await menuItemAdminGet({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  { path }: { path: MenuItemAdminGetOptions["path"] | (() => MenuItemAdminGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...menuItemAdminGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
