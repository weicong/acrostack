/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityUserClaimGetListOptions,
  IdentityUserClaimGetListStatus200,
  IdentityUserClaimGetListStatus400,
  IdentityUserClaimGetListStatus401,
  IdentityUserClaimGetListStatus403,
  IdentityUserClaimGetListStatus404,
  IdentityUserClaimGetListStatus500,
  IdentityUserClaimGetListStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { identityUserClaimGetList } from "../../clients/identityUserClaim/identityUserClaimGetList";

export const identityUserClaimGetListQueryKey = ({
  query,
}: Omit<IdentityUserClaimGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/identity-user-claim" }, ...(query ? [query] : [])] as const;

type IdentityUserClaimGetListQueryKey = ReturnType<typeof identityUserClaimGetListQueryKey>;

export function identityUserClaimGetListQueryOptions(
  { query }: IdentityUserClaimGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = identityUserClaimGetListQueryKey({ query });
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
      const { data } = await identityUserClaimGetList({
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
 * {@link /api/app/identity-user-claim}
 */
export function useIdentityUserClaimGetList<
  TData = IdentityUserClaimGetListStatus200,
  TQueryData = IdentityUserClaimGetListStatus200,
  TQueryKey extends QueryKey = IdentityUserClaimGetListQueryKey,
>(
  {
    query,
  }: {
    query?:
      | IdentityUserClaimGetListOptions["query"]
      | (() => IdentityUserClaimGetListOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? identityUserClaimGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...identityUserClaimGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
