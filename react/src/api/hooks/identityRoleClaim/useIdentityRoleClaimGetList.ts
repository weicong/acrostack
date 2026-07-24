/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdentityRoleClaimGetListQueryRoleId,
  IdentityRoleClaimGetListStatus200,
  IdentityRoleClaimGetListStatus400,
  IdentityRoleClaimGetListStatus401,
  IdentityRoleClaimGetListStatus403,
  IdentityRoleClaimGetListStatus404,
  IdentityRoleClaimGetListStatus500,
  IdentityRoleClaimGetListStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityRoleClaimGetList } from "../../clients/identityRoleClaim/identityRoleClaimGetList.ts";

export const identityRoleClaimGetListQueryKey = (params?: {
  roleId?: IdentityRoleClaimGetListQueryRoleId;
}) => [{ url: "/api/app/identity-role-claim" }, ...(params ? [params] : [])] as const;

type IdentityRoleClaimGetListQueryKey = ReturnType<typeof identityRoleClaimGetListQueryKey>;

export function identityRoleClaimGetListQueryOptions(
  params?: { roleId?: IdentityRoleClaimGetListQueryRoleId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = identityRoleClaimGetListQueryKey(params);
  return queryOptions<
    IdentityRoleClaimGetListStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimGetListStatus400
      | IdentityRoleClaimGetListStatus401
      | IdentityRoleClaimGetListStatus403
      | IdentityRoleClaimGetListStatus404
      | IdentityRoleClaimGetListStatus500
      | IdentityRoleClaimGetListStatus501
    >,
    IdentityRoleClaimGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return identityRoleClaimGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/identity-role-claim}
 */
export function useIdentityRoleClaimGetList<
  TData = IdentityRoleClaimGetListStatus200,
  TQueryData = IdentityRoleClaimGetListStatus200,
  TQueryKey extends QueryKey = IdentityRoleClaimGetListQueryKey,
>(
  params?: { roleId?: IdentityRoleClaimGetListQueryRoleId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        IdentityRoleClaimGetListStatus200,
        ResponseErrorConfig<
          | IdentityRoleClaimGetListStatus400
          | IdentityRoleClaimGetListStatus401
          | IdentityRoleClaimGetListStatus403
          | IdentityRoleClaimGetListStatus404
          | IdentityRoleClaimGetListStatus500
          | IdentityRoleClaimGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? identityRoleClaimGetListQueryKey(params);

  const query = useQuery(
    {
      ...identityRoleClaimGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | IdentityRoleClaimGetListStatus400
      | IdentityRoleClaimGetListStatus401
      | IdentityRoleClaimGetListStatus403
      | IdentityRoleClaimGetListStatus404
      | IdentityRoleClaimGetListStatus500
      | IdentityRoleClaimGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
