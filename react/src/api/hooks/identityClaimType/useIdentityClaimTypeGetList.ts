/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityClaimTypeGetListOptions,
  IdentityClaimTypeGetListStatus200,
  IdentityClaimTypeGetListStatus400,
  IdentityClaimTypeGetListStatus401,
  IdentityClaimTypeGetListStatus403,
  IdentityClaimTypeGetListStatus404,
  IdentityClaimTypeGetListStatus500,
  IdentityClaimTypeGetListStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityClaimTypeGetList } from "../../clients/identityClaimType/identityClaimTypeGetList";

export const identityClaimTypeGetListQueryKey = ({
  query,
}: Omit<IdentityClaimTypeGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/identity-claim-type" }, ...(query ? [query] : [])] as const;

type IdentityClaimTypeGetListQueryKey = ReturnType<typeof identityClaimTypeGetListQueryKey>;

export function identityClaimTypeGetListQueryOptions(
  { query }: IdentityClaimTypeGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = identityClaimTypeGetListQueryKey({ query });
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
      const { data } = await identityClaimTypeGetList({
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
 * {@link /api/app/identity-claim-type}
 */
export function useIdentityClaimTypeGetList<
  TData = IdentityClaimTypeGetListStatus200,
  TQueryData = IdentityClaimTypeGetListStatus200,
  TQueryKey extends QueryKey = IdentityClaimTypeGetListQueryKey,
>(
  {
    query,
  }: {
    query?:
      | IdentityClaimTypeGetListOptions["query"]
      | (() => IdentityClaimTypeGetListOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? identityClaimTypeGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...identityClaimTypeGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
