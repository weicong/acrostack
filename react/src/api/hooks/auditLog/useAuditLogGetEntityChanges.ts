/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetEntityChangesPathAuditLogId,
  AuditLogGetEntityChangesStatus200,
  AuditLogGetEntityChangesStatus400,
  AuditLogGetEntityChangesStatus401,
  AuditLogGetEntityChangesStatus403,
  AuditLogGetEntityChangesStatus404,
  AuditLogGetEntityChangesStatus500,
  AuditLogGetEntityChangesStatus501,
} from "../../models/auditLog/AuditLogGetEntityChanges.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetEntityChanges } from "../../clients/auditLog/auditLogGetEntityChanges.ts";

export const auditLogGetEntityChangesQueryKey = (
  auditLogId?: AuditLogGetEntityChangesPathAuditLogId,
) =>
  [
    { url: "/api/app/audit-log/entity-changes/:auditLogId", params: { auditLogId: auditLogId } },
  ] as const;

type AuditLogGetEntityChangesQueryKey = ReturnType<typeof auditLogGetEntityChangesQueryKey>;

export function auditLogGetEntityChangesQueryOptions(
  auditLogId?: AuditLogGetEntityChangesPathAuditLogId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetEntityChangesQueryKey(auditLogId);
  return queryOptions<
    AuditLogGetEntityChangesStatus200,
    ResponseErrorConfig<
      | AuditLogGetEntityChangesStatus400
      | AuditLogGetEntityChangesStatus401
      | AuditLogGetEntityChangesStatus403
      | AuditLogGetEntityChangesStatus404
      | AuditLogGetEntityChangesStatus500
      | AuditLogGetEntityChangesStatus501
    >,
    AuditLogGetEntityChangesStatus200,
    typeof queryKey
  >({
    enabled: !!auditLogId,
    queryKey,
    queryFn: async ({ signal }) => {
      return auditLogGetEntityChanges(auditLogId!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/audit-log/entity-changes/:auditLogId}
 */
export function useAuditLogGetEntityChanges<
  TData = AuditLogGetEntityChangesStatus200,
  TQueryData = AuditLogGetEntityChangesStatus200,
  TQueryKey extends QueryKey = AuditLogGetEntityChangesQueryKey,
>(
  auditLogId?: AuditLogGetEntityChangesPathAuditLogId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetEntityChangesStatus200,
        ResponseErrorConfig<
          | AuditLogGetEntityChangesStatus400
          | AuditLogGetEntityChangesStatus401
          | AuditLogGetEntityChangesStatus403
          | AuditLogGetEntityChangesStatus404
          | AuditLogGetEntityChangesStatus500
          | AuditLogGetEntityChangesStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetEntityChangesQueryKey(auditLogId);

  const query = useQuery(
    {
      ...auditLogGetEntityChangesQueryOptions(auditLogId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetEntityChangesStatus400
      | AuditLogGetEntityChangesStatus401
      | AuditLogGetEntityChangesStatus403
      | AuditLogGetEntityChangesStatus404
      | AuditLogGetEntityChangesStatus500
      | AuditLogGetEntityChangesStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
