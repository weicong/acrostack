/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuGetListStatus200,
  MenuGetListStatus400,
  MenuGetListStatus401,
  MenuGetListStatus403,
  MenuGetListStatus404,
  MenuGetListStatus500,
  MenuGetListStatus501,
} from "../../models/menu/MenuGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuGetList } from "../../clients/menu/menuGetList.ts";

export const menuGetListQueryKey = () => [{ url: "/api/app/menu" }] as const;

type MenuGetListQueryKey = ReturnType<typeof menuGetListQueryKey>;

export function menuGetListQueryOptions(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const queryKey = menuGetListQueryKey();
  return queryOptions<
    MenuGetListStatus200,
    ResponseErrorConfig<
      | MenuGetListStatus400
      | MenuGetListStatus401
      | MenuGetListStatus403
      | MenuGetListStatus404
      | MenuGetListStatus500
      | MenuGetListStatus501
    >,
    MenuGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return menuGetList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/menu}
 */
export function useMenuGetList<
  TData = MenuGetListStatus200,
  TQueryData = MenuGetListStatus200,
  TQueryKey extends QueryKey = MenuGetListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuGetListStatus200,
        ResponseErrorConfig<
          | MenuGetListStatus400
          | MenuGetListStatus401
          | MenuGetListStatus403
          | MenuGetListStatus404
          | MenuGetListStatus500
          | MenuGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuGetListQueryKey();

  const query = useQuery(
    {
      ...menuGetListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuGetListStatus400
      | MenuGetListStatus401
      | MenuGetListStatus403
      | MenuGetListStatus404
      | MenuGetListStatus500
      | MenuGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
