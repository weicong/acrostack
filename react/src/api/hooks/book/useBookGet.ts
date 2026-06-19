/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BookGetPathId,
  BookGetStatus200,
  BookGetStatus400,
  BookGetStatus401,
  BookGetStatus403,
  BookGetStatus404,
  BookGetStatus500,
  BookGetStatus501,
} from "../../models/book/BookGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { bookGet } from "../../clients/book/bookGet.ts";

export const bookGetQueryKey = (id?: BookGetPathId) =>
  [{ url: "/api/app/book/:id", params: { id: id } }] as const;

type BookGetQueryKey = ReturnType<typeof bookGetQueryKey>;

export function bookGetQueryOptions(
  id?: BookGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = bookGetQueryKey(id);
  return queryOptions<
    BookGetStatus200,
    ResponseErrorConfig<
      | BookGetStatus400
      | BookGetStatus401
      | BookGetStatus403
      | BookGetStatus404
      | BookGetStatus500
      | BookGetStatus501
    >,
    BookGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return bookGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/book/:id}
 */
export function useBookGet<
  TData = BookGetStatus200,
  TQueryData = BookGetStatus200,
  TQueryKey extends QueryKey = BookGetQueryKey,
>(
  id?: BookGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BookGetStatus200,
        ResponseErrorConfig<
          | BookGetStatus400
          | BookGetStatus401
          | BookGetStatus403
          | BookGetStatus404
          | BookGetStatus500
          | BookGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? bookGetQueryKey(id);

  const query = useQuery(
    {
      ...bookGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BookGetStatus400
      | BookGetStatus401
      | BookGetStatus403
      | BookGetStatus404
      | BookGetStatus500
      | BookGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
