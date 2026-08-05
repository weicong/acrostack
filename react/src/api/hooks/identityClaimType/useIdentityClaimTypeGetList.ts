/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdentityClaimTypeGetListQueryName,
  IdentityClaimTypeGetListQuerySorting,
  IdentityClaimTypeGetListQuerySkipCount,
  IdentityClaimTypeGetListQueryMaxResultCount,
  IdentityClaimTypeGetListStatus200,
  IdentityClaimTypeGetListStatus400,
  IdentityClaimTypeGetListStatus401,
  IdentityClaimTypeGetListStatus403,
  IdentityClaimTypeGetListStatus404,
  IdentityClaimTypeGetListStatus500,
  IdentityClaimTypeGetListStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityClaimTypeGetList } from "../../clients/identityClaimType/identityClaimTypeGetList.ts";

export const identityClaimTypeGetListQueryKey = (params?: {
  Name?: IdentityClaimTypeGetListQueryName;
  Sorting?: IdentityClaimTypeGetListQuerySorting;
  SkipCount?: IdentityClaimTypeGetListQuerySkipCount;
  MaxResultCount?: IdentityClaimTypeGetListQueryMaxResultCount;
}) => [{ url: "/api/app/identity-claim-type" }, ...(params ? [params] : [])] as const;

type IdentityClaimTypeGetListQueryKey = ReturnType<typeof identityClaimTypeGetListQueryKey>;

export function identityClaimTypeGetListQueryOptions(
  params?: {
    Name?: IdentityClaimTypeGetListQueryName;
    Sorting?: IdentityClaimTypeGetListQuerySorting;
    SkipCount?: IdentityClaimTypeGetListQuerySkipCount;
    MaxResultCount?: IdentityClaimTypeGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = identityClaimTypeGetListQueryKey(params);
  return queryOptions<
    IdentityClaimTypeGetListStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetListStatus400
      | IdentityClaimTypeGetListStatus401
      | IdentityClaimTypeGetListStatus403
      | IdentityClaimTypeGetListStatus404
      | IdentityClaimTypeGetListStatus500
      | IdentityClaimTypeGetListStatus501
    >,
    IdentityClaimTypeGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return identityClaimTypeGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/identity-claim-type}
 */
export function useIdentityClaimTypeGetList<
  TData = IdentityClaimTypeGetListStatus200,
  TQueryData = IdentityClaimTypeGetListStatus200,
  TQueryKey extends QueryKey = IdentityClaimTypeGetListQueryKey,
>(
  params?: {
    Name?: IdentityClaimTypeGetListQueryName;
    Sorting?: IdentityClaimTypeGetListQuerySorting;
    SkipCount?: IdentityClaimTypeGetListQuerySkipCount;
    MaxResultCount?: IdentityClaimTypeGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        IdentityClaimTypeGetListStatus200,
        ResponseErrorConfig<
          | IdentityClaimTypeGetListStatus400
          | IdentityClaimTypeGetListStatus401
          | IdentityClaimTypeGetListStatus403
          | IdentityClaimTypeGetListStatus404
          | IdentityClaimTypeGetListStatus500
          | IdentityClaimTypeGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? identityClaimTypeGetListQueryKey(params);

  const query = useQuery(
    {
      ...identityClaimTypeGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | IdentityClaimTypeGetListStatus400
      | IdentityClaimTypeGetListStatus401
      | IdentityClaimTypeGetListStatus403
      | IdentityClaimTypeGetListStatus404
      | IdentityClaimTypeGetListStatus500
      | IdentityClaimTypeGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
