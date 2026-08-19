/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserLookupFindByUserNameOptions,
  UserLookupFindByUserNameStatus200,
  UserLookupFindByUserNameStatus400,
  UserLookupFindByUserNameStatus401,
  UserLookupFindByUserNameStatus403,
  UserLookupFindByUserNameStatus404,
  UserLookupFindByUserNameStatus500,
  UserLookupFindByUserNameStatus501,
} from "../../models/userLookup/UserLookupFindByUserName";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupFindByUserName } from "../../clients/userLookup/userLookupFindByUserName";

export const userLookupFindByUserNameQueryKey = ({
  path,
}: Omit<UserLookupFindByUserNameOptions, "headers">) =>
  [{ url: "/api/identity/users/lookup/by-username/:userName", params: path }] as const;

type UserLookupFindByUserNameQueryKey = ReturnType<typeof userLookupFindByUserNameQueryKey>;

export function userLookupFindByUserNameQueryOptions(
  { path }: UserLookupFindByUserNameOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userLookupFindByUserNameQueryKey({ path });
  return queryOptions<
    UserLookupFindByUserNameStatus200,
    ResponseErrorConfig<
      | UserLookupFindByUserNameStatus400
      | UserLookupFindByUserNameStatus401
      | UserLookupFindByUserNameStatus403
      | UserLookupFindByUserNameStatus404
      | UserLookupFindByUserNameStatus500
      | UserLookupFindByUserNameStatus501
    >,
    UserLookupFindByUserNameStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userLookupFindByUserName({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/identity/users/lookup/by-username/:userName}
 */
export function useUserLookupFindByUserName<
  TData = UserLookupFindByUserNameStatus200,
  TQueryData = UserLookupFindByUserNameStatus200,
  TQueryKey extends QueryKey = UserLookupFindByUserNameQueryKey,
>(
  {
    path,
  }: {
    path: UserLookupFindByUserNameOptions["path"] | (() => UserLookupFindByUserNameOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupFindByUserNameStatus200,
        ResponseErrorConfig<
          | UserLookupFindByUserNameStatus400
          | UserLookupFindByUserNameStatus401
          | UserLookupFindByUserNameStatus403
          | UserLookupFindByUserNameStatus404
          | UserLookupFindByUserNameStatus500
          | UserLookupFindByUserNameStatus501
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
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? userLookupFindByUserNameQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userLookupFindByUserNameQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupFindByUserNameStatus400
      | UserLookupFindByUserNameStatus401
      | UserLookupFindByUserNameStatus403
      | UserLookupFindByUserNameStatus404
      | UserLookupFindByUserNameStatus500
      | UserLookupFindByUserNameStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
