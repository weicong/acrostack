/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetStatisticsQueryStartTime,
  AuditLogGetStatisticsQueryEndTime,
  AuditLogGetStatisticsQueryTopCount,
  AuditLogGetStatisticsStatus200,
  AuditLogGetStatisticsStatus400,
  AuditLogGetStatisticsStatus401,
  AuditLogGetStatisticsStatus403,
  AuditLogGetStatisticsStatus404,
  AuditLogGetStatisticsStatus500,
  AuditLogGetStatisticsStatus501,
} from "../../models/auditLog/AuditLogGetStatistics.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetStatistics } from "../../clients/auditLog/auditLogGetStatistics.ts";

export const auditLogGetStatisticsQueryKey = (params?: {
  StartTime?: AuditLogGetStatisticsQueryStartTime;
  EndTime?: AuditLogGetStatisticsQueryEndTime;
  TopCount?: AuditLogGetStatisticsQueryTopCount;
}) => [{ url: "/api/app/audit-log/statistics" }, ...(params ? [params] : [])] as const;

type AuditLogGetStatisticsQueryKey = ReturnType<typeof auditLogGetStatisticsQueryKey>;

export function auditLogGetStatisticsQueryOptions(
  params?: {
    StartTime?: AuditLogGetStatisticsQueryStartTime;
    EndTime?: AuditLogGetStatisticsQueryEndTime;
    TopCount?: AuditLogGetStatisticsQueryTopCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetStatisticsQueryKey(params);
  return queryOptions<
    AuditLogGetStatisticsStatus200,
    ResponseErrorConfig<
      | AuditLogGetStatisticsStatus400
      | AuditLogGetStatisticsStatus401
      | AuditLogGetStatisticsStatus403
      | AuditLogGetStatisticsStatus404
      | AuditLogGetStatisticsStatus500
      | AuditLogGetStatisticsStatus501
    >,
    AuditLogGetStatisticsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return auditLogGetStatistics(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/audit-log/statistics}
 */
export function useAuditLogGetStatistics<
  TData = AuditLogGetStatisticsStatus200,
  TQueryData = AuditLogGetStatisticsStatus200,
  TQueryKey extends QueryKey = AuditLogGetStatisticsQueryKey,
>(
  params?: {
    StartTime?: AuditLogGetStatisticsQueryStartTime;
    EndTime?: AuditLogGetStatisticsQueryEndTime;
    TopCount?: AuditLogGetStatisticsQueryTopCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetStatisticsStatus200,
        ResponseErrorConfig<
          | AuditLogGetStatisticsStatus400
          | AuditLogGetStatisticsStatus401
          | AuditLogGetStatisticsStatus403
          | AuditLogGetStatisticsStatus404
          | AuditLogGetStatisticsStatus500
          | AuditLogGetStatisticsStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetStatisticsQueryKey(params);

  const query = useQuery(
    {
      ...auditLogGetStatisticsQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetStatisticsStatus400
      | AuditLogGetStatisticsStatus401
      | AuditLogGetStatisticsStatus403
      | AuditLogGetStatisticsStatus404
      | AuditLogGetStatisticsStatus500
      | AuditLogGetStatisticsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
