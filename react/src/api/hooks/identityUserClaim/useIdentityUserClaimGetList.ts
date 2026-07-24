/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdentityUserClaimGetListQueryUserId,
  IdentityUserClaimGetListStatus200,
  IdentityUserClaimGetListStatus400,
  IdentityUserClaimGetListStatus401,
  IdentityUserClaimGetListStatus403,
  IdentityUserClaimGetListStatus404,
  IdentityUserClaimGetListStatus500,
  IdentityUserClaimGetListStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityUserClaimGetList } from "../../clients/identityUserClaim/identityUserClaimGetList.ts";

export const identityUserClaimGetListQueryKey = (params?: {
  userId?: IdentityUserClaimGetListQueryUserId;
}) => [{ url: "/api/app/identity-user-claim" }, ...(params ? [params] : [])] as const;

type IdentityUserClaimGetListQueryKey = ReturnType<typeof identityUserClaimGetListQueryKey>;

export function identityUserClaimGetListQueryOptions(
  params?: { userId?: IdentityUserClaimGetListQueryUserId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = identityUserClaimGetListQueryKey(params);
  return queryOptions<
    IdentityUserClaimGetListStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimGetListStatus400
      | IdentityUserClaimGetListStatus401
      | IdentityUserClaimGetListStatus403
      | IdentityUserClaimGetListStatus404
      | IdentityUserClaimGetListStatus500
      | IdentityUserClaimGetListStatus501
    >,
    IdentityUserClaimGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return identityUserClaimGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/identity-user-claim}
 */
export function useIdentityUserClaimGetList<
  TData = IdentityUserClaimGetListStatus200,
  TQueryData = IdentityUserClaimGetListStatus200,
  TQueryKey extends QueryKey = IdentityUserClaimGetListQueryKey,
>(
  params?: { userId?: IdentityUserClaimGetListQueryUserId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        IdentityUserClaimGetListStatus200,
        ResponseErrorConfig<
          | IdentityUserClaimGetListStatus400
          | IdentityUserClaimGetListStatus401
          | IdentityUserClaimGetListStatus403
          | IdentityUserClaimGetListStatus404
          | IdentityUserClaimGetListStatus500
          | IdentityUserClaimGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? identityUserClaimGetListQueryKey(params);

  const query = useQuery(
    {
      ...identityUserClaimGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | IdentityUserClaimGetListStatus400
      | IdentityUserClaimGetListStatus401
      | IdentityUserClaimGetListStatus403
      | IdentityUserClaimGetListStatus404
      | IdentityUserClaimGetListStatus500
      | IdentityUserClaimGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
