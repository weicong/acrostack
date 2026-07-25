/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  EditionGetPathId,
  EditionGetStatus200,
  EditionGetStatus400,
  EditionGetStatus401,
  EditionGetStatus403,
  EditionGetStatus404,
  EditionGetStatus500,
  EditionGetStatus501,
} from "../../models/edition/EditionGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { editionGet } from "../../clients/edition/editionGet.ts";

export const editionGetQueryKey = (id?: EditionGetPathId) =>
  [{ url: "/api/app/edition/:id", params: { id: id } }] as const;

type EditionGetQueryKey = ReturnType<typeof editionGetQueryKey>;

export function editionGetQueryOptions(
  id?: EditionGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = editionGetQueryKey(id);
  return queryOptions<
    EditionGetStatus200,
    ResponseErrorConfig<
      | EditionGetStatus400
      | EditionGetStatus401
      | EditionGetStatus403
      | EditionGetStatus404
      | EditionGetStatus500
      | EditionGetStatus501
    >,
    EditionGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return editionGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/edition/:id}
 */
export function useEditionGet<
  TData = EditionGetStatus200,
  TQueryData = EditionGetStatus200,
  TQueryKey extends QueryKey = EditionGetQueryKey,
>(
  id?: EditionGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        EditionGetStatus200,
        ResponseErrorConfig<
          | EditionGetStatus400
          | EditionGetStatus401
          | EditionGetStatus403
          | EditionGetStatus404
          | EditionGetStatus500
          | EditionGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? editionGetQueryKey(id);

  const query = useQuery(
    {
      ...editionGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | EditionGetStatus400
      | EditionGetStatus401
      | EditionGetStatus403
      | EditionGetStatus404
      | EditionGetStatus500
      | EditionGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
