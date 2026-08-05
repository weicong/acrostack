/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetEntityChangePathEntityChangeId,
  AuditLogGetEntityChangeStatus200,
  AuditLogGetEntityChangeStatus400,
  AuditLogGetEntityChangeStatus401,
  AuditLogGetEntityChangeStatus403,
  AuditLogGetEntityChangeStatus404,
  AuditLogGetEntityChangeStatus500,
  AuditLogGetEntityChangeStatus501,
} from "../../models/auditLog/AuditLogGetEntityChange.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetEntityChange } from "../../clients/auditLog/auditLogGetEntityChange.ts";

export const auditLogGetEntityChangeQueryKey = (
  entityChangeId?: AuditLogGetEntityChangePathEntityChangeId,
) =>
  [
    {
      url: "/api/app/audit-log/entity-change/:entityChangeId",
      params: { entityChangeId: entityChangeId },
    },
  ] as const;

type AuditLogGetEntityChangeQueryKey = ReturnType<typeof auditLogGetEntityChangeQueryKey>;

export function auditLogGetEntityChangeQueryOptions(
  entityChangeId?: AuditLogGetEntityChangePathEntityChangeId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetEntityChangeQueryKey(entityChangeId);
  return queryOptions<
    AuditLogGetEntityChangeStatus200,
    ResponseErrorConfig<
      | AuditLogGetEntityChangeStatus400
      | AuditLogGetEntityChangeStatus401
      | AuditLogGetEntityChangeStatus403
      | AuditLogGetEntityChangeStatus404
      | AuditLogGetEntityChangeStatus500
      | AuditLogGetEntityChangeStatus501
    >,
    AuditLogGetEntityChangeStatus200,
    typeof queryKey
  >({
    enabled: !!entityChangeId,
    queryKey,
    queryFn: async ({ signal }) => {
      return auditLogGetEntityChange(entityChangeId!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/app/audit-log/entity-change/:entityChangeId}
 */
export function useAuditLogGetEntityChange<
  TData = AuditLogGetEntityChangeStatus200,
  TQueryData = AuditLogGetEntityChangeStatus200,
  TQueryKey extends QueryKey = AuditLogGetEntityChangeQueryKey,
>(
  entityChangeId?: AuditLogGetEntityChangePathEntityChangeId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetEntityChangeStatus200,
        ResponseErrorConfig<
          | AuditLogGetEntityChangeStatus400
          | AuditLogGetEntityChangeStatus401
          | AuditLogGetEntityChangeStatus403
          | AuditLogGetEntityChangeStatus404
          | AuditLogGetEntityChangeStatus500
          | AuditLogGetEntityChangeStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetEntityChangeQueryKey(entityChangeId);

  const query = useQuery(
    {
      ...auditLogGetEntityChangeQueryOptions(entityChangeId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetEntityChangeStatus400
      | AuditLogGetEntityChangeStatus401
      | AuditLogGetEntityChangeStatus403
      | AuditLogGetEntityChangeStatus404
      | AuditLogGetEntityChangeStatus500
      | AuditLogGetEntityChangeStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
