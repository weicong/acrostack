/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuGetByNameQueryName,
  MenuGetByNameStatus200,
  MenuGetByNameStatus400,
  MenuGetByNameStatus401,
  MenuGetByNameStatus403,
  MenuGetByNameStatus404,
  MenuGetByNameStatus500,
  MenuGetByNameStatus501,
} from "../../models/menu/MenuGetByName.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuGetByName } from "../../clients/menu/menuGetByName.ts";

export const menuGetByNameQueryKey = (params?: { name?: MenuGetByNameQueryName }) =>
  [{ url: "/api/app/menu/by-name" }, ...(params ? [params] : [])] as const;

type MenuGetByNameQueryKey = ReturnType<typeof menuGetByNameQueryKey>;

export function menuGetByNameQueryOptions(
  params?: { name?: MenuGetByNameQueryName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuGetByNameQueryKey(params);
  return queryOptions<
    MenuGetByNameStatus200,
    ResponseErrorConfig<
      | MenuGetByNameStatus400
      | MenuGetByNameStatus401
      | MenuGetByNameStatus403
      | MenuGetByNameStatus404
      | MenuGetByNameStatus500
      | MenuGetByNameStatus501
    >,
    MenuGetByNameStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuGetByName(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/menu/by-name}
 */
export function useMenuGetByName<
  TData = MenuGetByNameStatus200,
  TQueryData = MenuGetByNameStatus200,
  TQueryKey extends QueryKey = MenuGetByNameQueryKey,
>(
  params?: { name?: MenuGetByNameQueryName },
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuGetByNameStatus200,
        ResponseErrorConfig<
          | MenuGetByNameStatus400
          | MenuGetByNameStatus401
          | MenuGetByNameStatus403
          | MenuGetByNameStatus404
          | MenuGetByNameStatus500
          | MenuGetByNameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuGetByNameQueryKey(params);

  const query = useQuery(
    {
      ...menuGetByNameQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuGetByNameStatus400
      | MenuGetByNameStatus401
      | MenuGetByNameStatus403
      | MenuGetByNameStatus404
      | MenuGetByNameStatus500
      | MenuGetByNameStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
