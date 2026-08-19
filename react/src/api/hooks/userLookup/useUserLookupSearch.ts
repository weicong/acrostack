/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserLookupSearchOptions,
  UserLookupSearchStatus200,
  UserLookupSearchStatus400,
  UserLookupSearchStatus401,
  UserLookupSearchStatus403,
  UserLookupSearchStatus404,
  UserLookupSearchStatus500,
  UserLookupSearchStatus501,
} from "../../models/userLookup/UserLookupSearch";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupSearch } from "../../clients/userLookup/userLookupSearch";

export const userLookupSearchQueryKey = ({
  query,
}: Omit<UserLookupSearchOptions, "headers"> = {}) =>
  [{ url: "/api/identity/users/lookup/search" }, ...(query ? [query] : [])] as const;

type UserLookupSearchQueryKey = ReturnType<typeof userLookupSearchQueryKey>;

export function userLookupSearchQueryOptions(
  { query }: UserLookupSearchOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userLookupSearchQueryKey({ query });
  return queryOptions<
    UserLookupSearchStatus200,
    ResponseErrorConfig<
      | UserLookupSearchStatus400
      | UserLookupSearchStatus401
      | UserLookupSearchStatus403
      | UserLookupSearchStatus404
      | UserLookupSearchStatus500
      | UserLookupSearchStatus501
    >,
    UserLookupSearchStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userLookupSearch({
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
 * {@link /api/identity/users/lookup/search}
 */
export function useUserLookupSearch<
  TData = UserLookupSearchStatus200,
  TQueryData = UserLookupSearchStatus200,
  TQueryKey extends QueryKey = UserLookupSearchQueryKey,
>(
  {
    query,
  }: { query?: UserLookupSearchOptions["query"] | (() => UserLookupSearchOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupSearchStatus200,
        ResponseErrorConfig<
          | UserLookupSearchStatus400
          | UserLookupSearchStatus401
          | UserLookupSearchStatus403
          | UserLookupSearchStatus404
          | UserLookupSearchStatus500
          | UserLookupSearchStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userLookupSearchQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userLookupSearchQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupSearchStatus400
      | UserLookupSearchStatus401
      | UserLookupSearchStatus403
      | UserLookupSearchStatus404
      | UserLookupSearchStatus500
      | UserLookupSearchStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
