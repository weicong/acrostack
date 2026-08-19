/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BookGetListOptions,
  BookGetListStatus200,
  BookGetListStatus400,
  BookGetListStatus401,
  BookGetListStatus403,
  BookGetListStatus404,
  BookGetListStatus500,
  BookGetListStatus501,
} from "../../models/book/BookGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { bookGetList } from "../../clients/book/bookGetList";

export const bookGetListQueryKey = ({ query }: Omit<BookGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/book" }, ...(query ? [query] : [])] as const;

type BookGetListQueryKey = ReturnType<typeof bookGetListQueryKey>;

export function bookGetListQueryOptions(
  { query }: BookGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = bookGetListQueryKey({ query });
  return queryOptions<
    BookGetListStatus200,
    ResponseErrorConfig<
      | BookGetListStatus400
      | BookGetListStatus401
      | BookGetListStatus403
      | BookGetListStatus404
      | BookGetListStatus500
      | BookGetListStatus501
    >,
    BookGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await bookGetList({
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
 * {@link /api/app/book}
 */
export function useBookGetList<
  TData = BookGetListStatus200,
  TQueryData = BookGetListStatus200,
  TQueryKey extends QueryKey = BookGetListQueryKey,
>(
  { query }: { query?: BookGetListOptions["query"] | (() => BookGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        BookGetListStatus200,
        ResponseErrorConfig<
          | BookGetListStatus400
          | BookGetListStatus401
          | BookGetListStatus403
          | BookGetListStatus404
          | BookGetListStatus500
          | BookGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? bookGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...bookGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BookGetListStatus400
      | BookGetListStatus401
      | BookGetListStatus403
      | BookGetListStatus404
      | BookGetListStatus500
      | BookGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
