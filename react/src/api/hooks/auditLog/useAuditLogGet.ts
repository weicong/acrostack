/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetPathId,
  AuditLogGetStatus200,
  AuditLogGetStatus400,
  AuditLogGetStatus401,
  AuditLogGetStatus403,
  AuditLogGetStatus404,
  AuditLogGetStatus500,
  AuditLogGetStatus501,
} from "../../models/auditLog/AuditLogGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGet } from "../../clients/auditLog/auditLogGet.ts";

export const auditLogGetQueryKey = (id?: AuditLogGetPathId) =>
  [{ url: "/api/app/audit-log/:id", params: { id: id } }] as const;

type AuditLogGetQueryKey = ReturnType<typeof auditLogGetQueryKey>;

export function auditLogGetQueryOptions(
  id?: AuditLogGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetQueryKey(id);
  return queryOptions<
    AuditLogGetStatus200,
    ResponseErrorConfig<
      | AuditLogGetStatus400
      | AuditLogGetStatus401
      | AuditLogGetStatus403
      | AuditLogGetStatus404
      | AuditLogGetStatus500
      | AuditLogGetStatus501
    >,
    AuditLogGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return auditLogGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/audit-log/:id}
 */
export function useAuditLogGet<
  TData = AuditLogGetStatus200,
  TQueryData = AuditLogGetStatus200,
  TQueryKey extends QueryKey = AuditLogGetQueryKey,
>(
  id?: AuditLogGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetStatus200,
        ResponseErrorConfig<
          | AuditLogGetStatus400
          | AuditLogGetStatus401
          | AuditLogGetStatus403
          | AuditLogGetStatus404
          | AuditLogGetStatus500
          | AuditLogGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetQueryKey(id);

  const query = useQuery(
    {
      ...auditLogGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetStatus400
      | AuditLogGetStatus401
      | AuditLogGetStatus403
      | AuditLogGetStatus404
      | AuditLogGetStatus500
      | AuditLogGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
