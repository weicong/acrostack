/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserGetListOptions,
  UserGetListStatus200,
  UserGetListStatus400,
  UserGetListStatus401,
  UserGetListStatus403,
  UserGetListStatus404,
  UserGetListStatus500,
  UserGetListStatus501,
} from "../../models/user/UserGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userGetList } from "../../clients/user/userGetList";

export const userGetListQueryKey = ({ query }: Omit<UserGetListOptions, "headers"> = {}) =>
  [{ url: "/api/identity/users" }, ...(query ? [query] : [])] as const;

type UserGetListQueryKey = ReturnType<typeof userGetListQueryKey>;

export function userGetListQueryOptions(
  { query }: UserGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userGetListQueryKey({ query });
  return queryOptions<
    UserGetListStatus200,
    ResponseErrorConfig<
      | UserGetListStatus400
      | UserGetListStatus401
      | UserGetListStatus403
      | UserGetListStatus404
      | UserGetListStatus500
      | UserGetListStatus501
    >,
    UserGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userGetList({
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
 * {@link /api/identity/users}
 */
export function useUserGetList<
  TData = UserGetListStatus200,
  TQueryData = UserGetListStatus200,
  TQueryKey extends QueryKey = UserGetListQueryKey,
>(
  { query }: { query?: UserGetListOptions["query"] | (() => UserGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserGetListStatus200,
        ResponseErrorConfig<
          | UserGetListStatus400
          | UserGetListStatus401
          | UserGetListStatus403
          | UserGetListStatus404
          | UserGetListStatus500
          | UserGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserGetListStatus400
      | UserGetListStatus401
      | UserGetListStatus403
      | UserGetListStatus404
      | UserGetListStatus500
      | UserGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
