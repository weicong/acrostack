/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MenuGetPathId,
  MenuGetStatus200,
  MenuGetStatus400,
  MenuGetStatus401,
  MenuGetStatus403,
  MenuGetStatus404,
  MenuGetStatus500,
  MenuGetStatus501,
} from "../../models/menu/MenuGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { menuGet } from "../../clients/menu/menuGet.ts";

export const menuGetQueryKey = (id?: MenuGetPathId) =>
  [{ url: "/api/app/menu/:id", params: { id: id } }] as const;

type MenuGetQueryKey = ReturnType<typeof menuGetQueryKey>;

export function menuGetQueryOptions(
  id?: MenuGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = menuGetQueryKey(id);
  return queryOptions<
    MenuGetStatus200,
    ResponseErrorConfig<
      | MenuGetStatus400
      | MenuGetStatus401
      | MenuGetStatus403
      | MenuGetStatus404
      | MenuGetStatus500
      | MenuGetStatus501
    >,
    MenuGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return menuGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/menu/:id}
 */
export function useMenuGet<
  TData = MenuGetStatus200,
  TQueryData = MenuGetStatus200,
  TQueryKey extends QueryKey = MenuGetQueryKey,
>(
  id?: MenuGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        MenuGetStatus200,
        ResponseErrorConfig<
          | MenuGetStatus400
          | MenuGetStatus401
          | MenuGetStatus403
          | MenuGetStatus404
          | MenuGetStatus500
          | MenuGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? menuGetQueryKey(id);

  const query = useQuery(
    {
      ...menuGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MenuGetStatus400
      | MenuGetStatus401
      | MenuGetStatus403
      | MenuGetStatus404
      | MenuGetStatus500
      | MenuGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
