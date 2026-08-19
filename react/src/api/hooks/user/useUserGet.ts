/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserGetOptions,
  UserGetStatus200,
  UserGetStatus400,
  UserGetStatus401,
  UserGetStatus403,
  UserGetStatus404,
  UserGetStatus500,
  UserGetStatus501,
} from "../../models/user/UserGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userGet } from "../../clients/user/userGet";

export const userGetQueryKey = ({ path }: Omit<UserGetOptions, "headers">) =>
  [{ url: "/api/identity/users/:id", params: path }] as const;

type UserGetQueryKey = ReturnType<typeof userGetQueryKey>;

export function userGetQueryOptions(
  { path }: UserGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userGetQueryKey({ path });
  return queryOptions<
    UserGetStatus200,
    ResponseErrorConfig<
      | UserGetStatus400
      | UserGetStatus401
      | UserGetStatus403
      | UserGetStatus404
      | UserGetStatus500
      | UserGetStatus501
    >,
    UserGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userGet({
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
 * {@link /api/identity/users/:id}
 */
export function useUserGet<
  TData = UserGetStatus200,
  TQueryData = UserGetStatus200,
  TQueryKey extends QueryKey = UserGetQueryKey,
>(
  { path }: { path: UserGetOptions["path"] | (() => UserGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserGetStatus200,
        ResponseErrorConfig<
          | UserGetStatus400
          | UserGetStatus401
          | UserGetStatus403
          | UserGetStatus404
          | UserGetStatus500
          | UserGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserGetStatus400
      | UserGetStatus401
      | UserGetStatus403
      | UserGetStatus404
      | UserGetStatus500
      | UserGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
