/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserFindByUsernameOptions,
  UserFindByUsernameStatus200,
  UserFindByUsernameStatus400,
  UserFindByUsernameStatus401,
  UserFindByUsernameStatus403,
  UserFindByUsernameStatus404,
  UserFindByUsernameStatus500,
  UserFindByUsernameStatus501,
} from "../../models/user/UserFindByUsername";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userFindByUsername } from "../../clients/user/userFindByUsername";

export const userFindByUsernameQueryKey = ({ path }: Omit<UserFindByUsernameOptions, "headers">) =>
  [{ url: "/api/identity/users/by-username/:userName", params: path }] as const;

type UserFindByUsernameQueryKey = ReturnType<typeof userFindByUsernameQueryKey>;

export function userFindByUsernameQueryOptions(
  { path }: UserFindByUsernameOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userFindByUsernameQueryKey({ path });
  return queryOptions<
    UserFindByUsernameStatus200,
    ResponseErrorConfig<
      | UserFindByUsernameStatus400
      | UserFindByUsernameStatus401
      | UserFindByUsernameStatus403
      | UserFindByUsernameStatus404
      | UserFindByUsernameStatus500
      | UserFindByUsernameStatus501
    >,
    UserFindByUsernameStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userFindByUsername({
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
 * {@link /api/identity/users/by-username/:userName}
 */
export function useUserFindByUsername<
  TData = UserFindByUsernameStatus200,
  TQueryData = UserFindByUsernameStatus200,
  TQueryKey extends QueryKey = UserFindByUsernameQueryKey,
>(
  { path }: { path: UserFindByUsernameOptions["path"] | (() => UserFindByUsernameOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserFindByUsernameStatus200,
        ResponseErrorConfig<
          | UserFindByUsernameStatus400
          | UserFindByUsernameStatus401
          | UserFindByUsernameStatus403
          | UserFindByUsernameStatus404
          | UserFindByUsernameStatus500
          | UserFindByUsernameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userFindByUsernameQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userFindByUsernameQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserFindByUsernameStatus400
      | UserFindByUsernameStatus401
      | UserFindByUsernameStatus403
      | UserFindByUsernameStatus404
      | UserFindByUsernameStatus500
      | UserFindByUsernameStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
