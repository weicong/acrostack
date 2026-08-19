/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityRoleClaimGetListOptions,
  IdentityRoleClaimGetListStatus200,
  IdentityRoleClaimGetListStatus400,
  IdentityRoleClaimGetListStatus401,
  IdentityRoleClaimGetListStatus403,
  IdentityRoleClaimGetListStatus404,
  IdentityRoleClaimGetListStatus500,
  IdentityRoleClaimGetListStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityRoleClaimGetList } from "../../clients/identityRoleClaim/identityRoleClaimGetList";

export const identityRoleClaimGetListQueryKey = ({
  query,
}: Omit<IdentityRoleClaimGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/identity-role-claim" }, ...(query ? [query] : [])] as const;

type IdentityRoleClaimGetListQueryKey = ReturnType<typeof identityRoleClaimGetListQueryKey>;

export function identityRoleClaimGetListQueryOptions(
  { query }: IdentityRoleClaimGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = identityRoleClaimGetListQueryKey({ query });
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
      const { data } = await identityRoleClaimGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    query,
  }: {
    query?:
      | IdentityRoleClaimGetListOptions["query"]
      | (() => IdentityRoleClaimGetListOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? identityRoleClaimGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...identityRoleClaimGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
