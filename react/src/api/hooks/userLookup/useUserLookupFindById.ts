/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserLookupFindByIdOptions,
  UserLookupFindByIdStatus200,
  UserLookupFindByIdStatus400,
  UserLookupFindByIdStatus401,
  UserLookupFindByIdStatus403,
  UserLookupFindByIdStatus404,
  UserLookupFindByIdStatus500,
  UserLookupFindByIdStatus501,
} from "../../models/userLookup/UserLookupFindById";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupFindById } from "../../clients/userLookup/userLookupFindById";

export const userLookupFindByIdQueryKey = ({ path }: Omit<UserLookupFindByIdOptions, "headers">) =>
  [{ url: "/api/identity/users/lookup/:id", params: path }] as const;

type UserLookupFindByIdQueryKey = ReturnType<typeof userLookupFindByIdQueryKey>;

export function userLookupFindByIdQueryOptions(
  { path }: UserLookupFindByIdOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = userLookupFindByIdQueryKey({ path });
  return queryOptions<
    UserLookupFindByIdStatus200,
    ResponseErrorConfig<
      | UserLookupFindByIdStatus400
      | UserLookupFindByIdStatus401
      | UserLookupFindByIdStatus403
      | UserLookupFindByIdStatus404
      | UserLookupFindByIdStatus500
      | UserLookupFindByIdStatus501
    >,
    UserLookupFindByIdStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await userLookupFindById({
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
 * {@link /api/identity/users/lookup/:id}
 */
export function useUserLookupFindById<
  TData = UserLookupFindByIdStatus200,
  TQueryData = UserLookupFindByIdStatus200,
  TQueryKey extends QueryKey = UserLookupFindByIdQueryKey,
>(
  { path }: { path: UserLookupFindByIdOptions["path"] | (() => UserLookupFindByIdOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupFindByIdStatus200,
        ResponseErrorConfig<
          | UserLookupFindByIdStatus400
          | UserLookupFindByIdStatus401
          | UserLookupFindByIdStatus403
          | UserLookupFindByIdStatus404
          | UserLookupFindByIdStatus500
          | UserLookupFindByIdStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userLookupFindByIdQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...userLookupFindByIdQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupFindByIdStatus400
      | UserLookupFindByIdStatus401
      | UserLookupFindByIdStatus403
      | UserLookupFindByIdStatus404
      | UserLookupFindByIdStatus500
      | UserLookupFindByIdStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
