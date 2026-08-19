/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  AuditLogGetListOptions,
  AuditLogGetListStatus200,
  AuditLogGetListStatus400,
  AuditLogGetListStatus401,
  AuditLogGetListStatus403,
  AuditLogGetListStatus404,
  AuditLogGetListStatus500,
  AuditLogGetListStatus501,
} from "../../models/auditLog/AuditLogGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetList } from "../../clients/auditLog/auditLogGetList";

export const auditLogGetListQueryKey = ({ query }: Omit<AuditLogGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/audit-log" }, ...(query ? [query] : [])] as const;

type AuditLogGetListQueryKey = ReturnType<typeof auditLogGetListQueryKey>;

export function auditLogGetListQueryOptions(
  { query }: AuditLogGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = auditLogGetListQueryKey({ query });
  return queryOptions<
    AuditLogGetListStatus200,
    ResponseErrorConfig<
      | AuditLogGetListStatus400
      | AuditLogGetListStatus401
      | AuditLogGetListStatus403
      | AuditLogGetListStatus404
      | AuditLogGetListStatus500
      | AuditLogGetListStatus501
    >,
    AuditLogGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await auditLogGetList({
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
 * {@link /api/app/audit-log}
 */
export function useAuditLogGetList<
  TData = AuditLogGetListStatus200,
  TQueryData = AuditLogGetListStatus200,
  TQueryKey extends QueryKey = AuditLogGetListQueryKey,
>(
  {
    query,
  }: { query?: AuditLogGetListOptions["query"] | (() => AuditLogGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetListStatus200,
        ResponseErrorConfig<
          | AuditLogGetListStatus400
          | AuditLogGetListStatus401
          | AuditLogGetListStatus403
          | AuditLogGetListStatus404
          | AuditLogGetListStatus500
          | AuditLogGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...auditLogGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetListStatus400
      | AuditLogGetListStatus401
      | AuditLogGetListStatus403
      | AuditLogGetListStatus404
      | AuditLogGetListStatus500
      | AuditLogGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
