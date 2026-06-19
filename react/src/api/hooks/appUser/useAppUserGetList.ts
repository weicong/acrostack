/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AppUserGetListQueryFilter,
  AppUserGetListQuerySorting,
  AppUserGetListQuerySkipCount,
  AppUserGetListQueryMaxResultCount,
  AppUserGetListStatus200,
  AppUserGetListStatus400,
  AppUserGetListStatus401,
  AppUserGetListStatus403,
  AppUserGetListStatus404,
  AppUserGetListStatus500,
  AppUserGetListStatus501,
} from "../../models/appUser/AppUserGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { appUserGetList } from "../../clients/appUser/appUserGetList.ts";

export const appUserGetListQueryKey = (params?: {
  Filter?: AppUserGetListQueryFilter;
  Sorting?: AppUserGetListQuerySorting;
  SkipCount?: AppUserGetListQuerySkipCount;
  MaxResultCount?: AppUserGetListQueryMaxResultCount;
}) => [{ url: "/api/app/app-user" }, ...(params ? [params] : [])] as const;

type AppUserGetListQueryKey = ReturnType<typeof appUserGetListQueryKey>;

export function appUserGetListQueryOptions(
  params?: {
    Filter?: AppUserGetListQueryFilter;
    Sorting?: AppUserGetListQuerySorting;
    SkipCount?: AppUserGetListQuerySkipCount;
    MaxResultCount?: AppUserGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = appUserGetListQueryKey(params);
  return queryOptions<
    AppUserGetListStatus200,
    ResponseErrorConfig<
      | AppUserGetListStatus400
      | AppUserGetListStatus401
      | AppUserGetListStatus403
      | AppUserGetListStatus404
      | AppUserGetListStatus500
      | AppUserGetListStatus501
    >,
    AppUserGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return appUserGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/app-user}
 */
export function useAppUserGetList<
  TData = AppUserGetListStatus200,
  TQueryData = AppUserGetListStatus200,
  TQueryKey extends QueryKey = AppUserGetListQueryKey,
>(
  params?: {
    Filter?: AppUserGetListQueryFilter;
    Sorting?: AppUserGetListQuerySorting;
    SkipCount?: AppUserGetListQuerySkipCount;
    MaxResultCount?: AppUserGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AppUserGetListStatus200,
        ResponseErrorConfig<
          | AppUserGetListStatus400
          | AppUserGetListStatus401
          | AppUserGetListStatus403
          | AppUserGetListStatus404
          | AppUserGetListStatus500
          | AppUserGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? appUserGetListQueryKey(params);

  const query = useQuery(
    {
      ...appUserGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AppUserGetListStatus400
      | AppUserGetListStatus401
      | AppUserGetListStatus403
      | AppUserGetListStatus404
      | AppUserGetListStatus500
      | AppUserGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
