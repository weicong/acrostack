/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdentityClaimTypeGetAllClaimTypesStatus200,
  IdentityClaimTypeGetAllClaimTypesStatus400,
  IdentityClaimTypeGetAllClaimTypesStatus401,
  IdentityClaimTypeGetAllClaimTypesStatus403,
  IdentityClaimTypeGetAllClaimTypesStatus404,
  IdentityClaimTypeGetAllClaimTypesStatus500,
  IdentityClaimTypeGetAllClaimTypesStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGetAllClaimTypes.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityClaimTypeGetAllClaimTypes } from "../../clients/identityClaimType/identityClaimTypeGetAllClaimTypes.ts";

export const identityClaimTypeGetAllClaimTypesQueryKey = () =>
  [{ url: "/api/app/identity-claim-type/all" }] as const;

type IdentityClaimTypeGetAllClaimTypesQueryKey = ReturnType<
  typeof identityClaimTypeGetAllClaimTypesQueryKey
>;

export function identityClaimTypeGetAllClaimTypesQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = identityClaimTypeGetAllClaimTypesQueryKey();
  return queryOptions<
    IdentityClaimTypeGetAllClaimTypesStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetAllClaimTypesStatus400
      | IdentityClaimTypeGetAllClaimTypesStatus401
      | IdentityClaimTypeGetAllClaimTypesStatus403
      | IdentityClaimTypeGetAllClaimTypesStatus404
      | IdentityClaimTypeGetAllClaimTypesStatus500
      | IdentityClaimTypeGetAllClaimTypesStatus501
    >,
    IdentityClaimTypeGetAllClaimTypesStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return identityClaimTypeGetAllClaimTypes({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/identity-claim-type/all}
 */
export function useIdentityClaimTypeGetAllClaimTypes<
  TData = IdentityClaimTypeGetAllClaimTypesStatus200,
  TQueryData = IdentityClaimTypeGetAllClaimTypesStatus200,
  TQueryKey extends QueryKey = IdentityClaimTypeGetAllClaimTypesQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        IdentityClaimTypeGetAllClaimTypesStatus200,
        ResponseErrorConfig<
          | IdentityClaimTypeGetAllClaimTypesStatus400
          | IdentityClaimTypeGetAllClaimTypesStatus401
          | IdentityClaimTypeGetAllClaimTypesStatus403
          | IdentityClaimTypeGetAllClaimTypesStatus404
          | IdentityClaimTypeGetAllClaimTypesStatus500
          | IdentityClaimTypeGetAllClaimTypesStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? identityClaimTypeGetAllClaimTypesQueryKey();

  const query = useQuery(
    {
      ...identityClaimTypeGetAllClaimTypesQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | IdentityClaimTypeGetAllClaimTypesStatus400
      | IdentityClaimTypeGetAllClaimTypesStatus401
      | IdentityClaimTypeGetAllClaimTypesStatus403
      | IdentityClaimTypeGetAllClaimTypesStatus404
      | IdentityClaimTypeGetAllClaimTypesStatus500
      | IdentityClaimTypeGetAllClaimTypesStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
