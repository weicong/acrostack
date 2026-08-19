/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserFindByIdOptions,
  UserFindByIdStatus200,
  UserFindByIdStatus400,
  UserFindByIdStatus401,
  UserFindByIdStatus403,
  UserFindByIdStatus404,
  UserFindByIdStatus500,
  UserFindByIdStatus501,
} from "../../models/user/UserFindById";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userFindById } from "../../clients/user/userFindById";

export const userFindByIdQueryKey = ({ path }: Omit<UserFindByIdOptions, "headers">) =>
  [{ url: "/api/identity/users/by-id/:id", params: path }] as const;

type UserFindByIdQueryKey = ReturnType<typeof userFindByIdQueryKey>;

export function userFindByIdQueryOptions(
  { path }: UserFindByIdOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userFindByIdQueryKey({ path });
  return queryOptions<
    UserFindByIdStatus200,
    ResponseErrorConfig<
      | UserFindByIdStatus400
      | UserFindByIdStatus401
      | UserFindByIdStatus403
      | UserFindByIdStatus404
      | UserFindByIdStatus500
      | UserFindByIdStatus501
    >,
    UserFindByIdStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userFindById({
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
 * {@link /api/identity/users/by-id/:id}
 */
export function useUserFindById<
  TData = UserFindByIdStatus200,
  TQueryData = UserFindByIdStatus200,
  TQueryKey extends QueryKey = UserFindByIdQueryKey,
>(
  { path }: { path: UserFindByIdOptions["path"] | (() => UserFindByIdOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserFindByIdStatus200,
        ResponseErrorConfig<
          | UserFindByIdStatus400
          | UserFindByIdStatus401
          | UserFindByIdStatus403
          | UserFindByIdStatus404
          | UserFindByIdStatus500
          | UserFindByIdStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userFindByIdQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userFindByIdQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserFindByIdStatus400
      | UserFindByIdStatus401
      | UserFindByIdStatus403
      | UserFindByIdStatus404
      | UserFindByIdStatus500
      | UserFindByIdStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
