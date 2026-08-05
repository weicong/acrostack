/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdentityClaimTypeGetPathId,
  IdentityClaimTypeGetStatus200,
  IdentityClaimTypeGetStatus400,
  IdentityClaimTypeGetStatus401,
  IdentityClaimTypeGetStatus403,
  IdentityClaimTypeGetStatus404,
  IdentityClaimTypeGetStatus500,
  IdentityClaimTypeGetStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityClaimTypeGet } from "../../clients/identityClaimType/identityClaimTypeGet.ts";

export const identityClaimTypeGetQueryKey = (id?: IdentityClaimTypeGetPathId) =>
  [{ url: "/api/app/identity-claim-type/:id", params: { id: id } }] as const;

type IdentityClaimTypeGetQueryKey = ReturnType<typeof identityClaimTypeGetQueryKey>;

export function identityClaimTypeGetQueryOptions(
  id?: IdentityClaimTypeGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = identityClaimTypeGetQueryKey(id);
  return queryOptions<
    IdentityClaimTypeGetStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetStatus400
      | IdentityClaimTypeGetStatus401
      | IdentityClaimTypeGetStatus403
      | IdentityClaimTypeGetStatus404
      | IdentityClaimTypeGetStatus500
      | IdentityClaimTypeGetStatus501
    >,
    IdentityClaimTypeGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return identityClaimTypeGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function useIdentityClaimTypeGet<
  TData = IdentityClaimTypeGetStatus200,
  TQueryData = IdentityClaimTypeGetStatus200,
  TQueryKey extends QueryKey = IdentityClaimTypeGetQueryKey,
>(
  id?: IdentityClaimTypeGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        IdentityClaimTypeGetStatus200,
        ResponseErrorConfig<
          | IdentityClaimTypeGetStatus400
          | IdentityClaimTypeGetStatus401
          | IdentityClaimTypeGetStatus403
          | IdentityClaimTypeGetStatus404
          | IdentityClaimTypeGetStatus500
          | IdentityClaimTypeGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? identityClaimTypeGetQueryKey(id);

  const query = useQuery(
    {
      ...identityClaimTypeGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | IdentityClaimTypeGetStatus400
      | IdentityClaimTypeGetStatus401
      | IdentityClaimTypeGetStatus403
      | IdentityClaimTypeGetStatus404
      | IdentityClaimTypeGetStatus500
      | IdentityClaimTypeGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
