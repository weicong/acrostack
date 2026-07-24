/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  OpenIddictApplicationGetPathId,
  OpenIddictApplicationGetStatus200,
  OpenIddictApplicationGetStatus400,
  OpenIddictApplicationGetStatus401,
  OpenIddictApplicationGetStatus403,
  OpenIddictApplicationGetStatus404,
  OpenIddictApplicationGetStatus500,
  OpenIddictApplicationGetStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictApplicationGet } from "../../clients/openIddictApplication/openIddictApplicationGet.ts";

export const openIddictApplicationGetQueryKey = (id?: OpenIddictApplicationGetPathId) =>
  [{ url: "/api/app/open-iddict-application/:id", params: { id: id } }] as const;

type OpenIddictApplicationGetQueryKey = ReturnType<typeof openIddictApplicationGetQueryKey>;

export function openIddictApplicationGetQueryOptions(
  id?: OpenIddictApplicationGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = openIddictApplicationGetQueryKey(id);
  return queryOptions<
    OpenIddictApplicationGetStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationGetStatus400
      | OpenIddictApplicationGetStatus401
      | OpenIddictApplicationGetStatus403
      | OpenIddictApplicationGetStatus404
      | OpenIddictApplicationGetStatus500
      | OpenIddictApplicationGetStatus501
    >,
    OpenIddictApplicationGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return openIddictApplicationGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function useOpenIddictApplicationGet<
  TData = OpenIddictApplicationGetStatus200,
  TQueryData = OpenIddictApplicationGetStatus200,
  TQueryKey extends QueryKey = OpenIddictApplicationGetQueryKey,
>(
  id?: OpenIddictApplicationGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictApplicationGetStatus200,
        ResponseErrorConfig<
          | OpenIddictApplicationGetStatus400
          | OpenIddictApplicationGetStatus401
          | OpenIddictApplicationGetStatus403
          | OpenIddictApplicationGetStatus404
          | OpenIddictApplicationGetStatus500
          | OpenIddictApplicationGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? openIddictApplicationGetQueryKey(id);

  const query = useQuery(
    {
      ...openIddictApplicationGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictApplicationGetStatus400
      | OpenIddictApplicationGetStatus401
      | OpenIddictApplicationGetStatus403
      | OpenIddictApplicationGetStatus404
      | OpenIddictApplicationGetStatus500
      | OpenIddictApplicationGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
