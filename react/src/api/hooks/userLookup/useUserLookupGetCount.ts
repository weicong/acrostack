/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserLookupGetCountOptions,
  UserLookupGetCountStatus200,
  UserLookupGetCountStatus400,
  UserLookupGetCountStatus401,
  UserLookupGetCountStatus403,
  UserLookupGetCountStatus404,
  UserLookupGetCountStatus500,
  UserLookupGetCountStatus501,
} from "../../models/userLookup/UserLookupGetCount";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupGetCount } from "../../clients/userLookup/userLookupGetCount";

export const userLookupGetCountQueryKey = ({
  query,
}: Omit<UserLookupGetCountOptions, "headers"> = {}) =>
  [{ url: "/api/identity/users/lookup/count" }, ...(query ? [query] : [])] as const;

type UserLookupGetCountQueryKey = ReturnType<typeof userLookupGetCountQueryKey>;

export function userLookupGetCountQueryOptions(
  { query }: UserLookupGetCountOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userLookupGetCountQueryKey({ query });
  return queryOptions<
    UserLookupGetCountStatus200,
    ResponseErrorConfig<
      | UserLookupGetCountStatus400
      | UserLookupGetCountStatus401
      | UserLookupGetCountStatus403
      | UserLookupGetCountStatus404
      | UserLookupGetCountStatus500
      | UserLookupGetCountStatus501
    >,
    UserLookupGetCountStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userLookupGetCount({
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
 * {@link /api/identity/users/lookup/count}
 */
export function useUserLookupGetCount<
  TData = UserLookupGetCountStatus200,
  TQueryData = UserLookupGetCountStatus200,
  TQueryKey extends QueryKey = UserLookupGetCountQueryKey,
>(
  {
    query,
  }: {
    query?: UserLookupGetCountOptions["query"] | (() => UserLookupGetCountOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupGetCountStatus200,
        ResponseErrorConfig<
          | UserLookupGetCountStatus400
          | UserLookupGetCountStatus401
          | UserLookupGetCountStatus403
          | UserLookupGetCountStatus404
          | UserLookupGetCountStatus500
          | UserLookupGetCountStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userLookupGetCountQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userLookupGetCountQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupGetCountStatus400
      | UserLookupGetCountStatus401
      | UserLookupGetCountStatus403
      | UserLookupGetCountStatus404
      | UserLookupGetCountStatus500
      | UserLookupGetCountStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
