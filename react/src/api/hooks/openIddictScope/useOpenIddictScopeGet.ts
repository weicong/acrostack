/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  OpenIddictScopeGetPathId,
  OpenIddictScopeGetStatus200,
  OpenIddictScopeGetStatus400,
  OpenIddictScopeGetStatus401,
  OpenIddictScopeGetStatus403,
  OpenIddictScopeGetStatus404,
  OpenIddictScopeGetStatus500,
  OpenIddictScopeGetStatus501,
} from "../../models/openIddictScope/OpenIddictScopeGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictScopeGet } from "../../clients/openIddictScope/openIddictScopeGet.ts";

export const openIddictScopeGetQueryKey = (id?: OpenIddictScopeGetPathId) =>
  [{ url: "/api/app/open-iddict-scope/:id", params: { id: id } }] as const;

type OpenIddictScopeGetQueryKey = ReturnType<typeof openIddictScopeGetQueryKey>;

export function openIddictScopeGetQueryOptions(
  id?: OpenIddictScopeGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = openIddictScopeGetQueryKey(id);
  return queryOptions<
    OpenIddictScopeGetStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeGetStatus400
      | OpenIddictScopeGetStatus401
      | OpenIddictScopeGetStatus403
      | OpenIddictScopeGetStatus404
      | OpenIddictScopeGetStatus500
      | OpenIddictScopeGetStatus501
    >,
    OpenIddictScopeGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return openIddictScopeGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeGet<
  TData = OpenIddictScopeGetStatus200,
  TQueryData = OpenIddictScopeGetStatus200,
  TQueryKey extends QueryKey = OpenIddictScopeGetQueryKey,
>(
  id?: OpenIddictScopeGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictScopeGetStatus200,
        ResponseErrorConfig<
          | OpenIddictScopeGetStatus400
          | OpenIddictScopeGetStatus401
          | OpenIddictScopeGetStatus403
          | OpenIddictScopeGetStatus404
          | OpenIddictScopeGetStatus500
          | OpenIddictScopeGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? openIddictScopeGetQueryKey(id);

  const query = useQuery(
    {
      ...openIddictScopeGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictScopeGetStatus400
      | OpenIddictScopeGetStatus401
      | OpenIddictScopeGetStatus403
      | OpenIddictScopeGetStatus404
      | OpenIddictScopeGetStatus500
      | OpenIddictScopeGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
