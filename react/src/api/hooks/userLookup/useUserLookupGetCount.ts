/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserLookupGetCountQueryFilter,
  UserLookupGetCountStatus200,
  UserLookupGetCountStatus400,
  UserLookupGetCountStatus401,
  UserLookupGetCountStatus403,
  UserLookupGetCountStatus404,
  UserLookupGetCountStatus500,
  UserLookupGetCountStatus501,
} from "../../models/userLookup/UserLookupGetCount.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupGetCount } from "../../clients/userLookup/userLookupGetCount.ts";

export const userLookupGetCountQueryKey = (params?: { Filter?: UserLookupGetCountQueryFilter }) =>
  [{ url: "/api/identity/users/lookup/count" }, ...(params ? [params] : [])] as const;

type UserLookupGetCountQueryKey = ReturnType<typeof userLookupGetCountQueryKey>;

export function userLookupGetCountQueryOptions(
  params?: { Filter?: UserLookupGetCountQueryFilter },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userLookupGetCountQueryKey(params);
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
      return userLookupGetCount(params, { ...config, signal: config.signal ?? signal });
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
  params?: { Filter?: UserLookupGetCountQueryFilter },
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? userLookupGetCountQueryKey(params);

  const query = useQuery(
    {
      ...userLookupGetCountQueryOptions(params, config),
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
