/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetListToExcelQueryFilter,
  AuditLogGetListToExcelQueryUserId,
  AuditLogGetListToExcelQueryHttpMethod,
  AuditLogGetListToExcelQueryUrl,
  AuditLogGetListToExcelQueryStartTime,
  AuditLogGetListToExcelQueryEndTime,
  AuditLogGetListToExcelQueryHttpStatusCode,
  AuditLogGetListToExcelQueryHasException,
  AuditLogGetListToExcelQuerySorting,
  AuditLogGetListToExcelQuerySkipCount,
  AuditLogGetListToExcelQueryMaxResultCount,
  AuditLogGetListToExcelStatus200,
  AuditLogGetListToExcelStatus400,
  AuditLogGetListToExcelStatus401,
  AuditLogGetListToExcelStatus403,
  AuditLogGetListToExcelStatus404,
  AuditLogGetListToExcelStatus500,
  AuditLogGetListToExcelStatus501,
} from "../../models/auditLog/AuditLogGetListToExcel.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetListToExcel } from "../../clients/auditLog/auditLogGetListToExcel.ts";

export const auditLogGetListToExcelQueryKey = (params?: {
  Filter?: AuditLogGetListToExcelQueryFilter;
  UserId?: AuditLogGetListToExcelQueryUserId;
  HttpMethod?: AuditLogGetListToExcelQueryHttpMethod;
  Url?: AuditLogGetListToExcelQueryUrl;
  StartTime?: AuditLogGetListToExcelQueryStartTime;
  EndTime?: AuditLogGetListToExcelQueryEndTime;
  HttpStatusCode?: AuditLogGetListToExcelQueryHttpStatusCode;
  HasException?: AuditLogGetListToExcelQueryHasException;
  Sorting?: AuditLogGetListToExcelQuerySorting;
  SkipCount?: AuditLogGetListToExcelQuerySkipCount;
  MaxResultCount?: AuditLogGetListToExcelQueryMaxResultCount;
}) => [{ url: "/api/app/audit-log/to-excel" }, ...(params ? [params] : [])] as const;

type AuditLogGetListToExcelQueryKey = ReturnType<typeof auditLogGetListToExcelQueryKey>;

export function auditLogGetListToExcelQueryOptions(
  params?: {
    Filter?: AuditLogGetListToExcelQueryFilter;
    UserId?: AuditLogGetListToExcelQueryUserId;
    HttpMethod?: AuditLogGetListToExcelQueryHttpMethod;
    Url?: AuditLogGetListToExcelQueryUrl;
    StartTime?: AuditLogGetListToExcelQueryStartTime;
    EndTime?: AuditLogGetListToExcelQueryEndTime;
    HttpStatusCode?: AuditLogGetListToExcelQueryHttpStatusCode;
    HasException?: AuditLogGetListToExcelQueryHasException;
    Sorting?: AuditLogGetListToExcelQuerySorting;
    SkipCount?: AuditLogGetListToExcelQuerySkipCount;
    MaxResultCount?: AuditLogGetListToExcelQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetListToExcelQueryKey(params);
  return queryOptions<
    AuditLogGetListToExcelStatus200,
    ResponseErrorConfig<
      | AuditLogGetListToExcelStatus400
      | AuditLogGetListToExcelStatus401
      | AuditLogGetListToExcelStatus403
      | AuditLogGetListToExcelStatus404
      | AuditLogGetListToExcelStatus500
      | AuditLogGetListToExcelStatus501
    >,
    AuditLogGetListToExcelStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return auditLogGetListToExcel(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/audit-log/to-excel}
 */
export function useAuditLogGetListToExcel<
  TData = AuditLogGetListToExcelStatus200,
  TQueryData = AuditLogGetListToExcelStatus200,
  TQueryKey extends QueryKey = AuditLogGetListToExcelQueryKey,
>(
  params?: {
    Filter?: AuditLogGetListToExcelQueryFilter;
    UserId?: AuditLogGetListToExcelQueryUserId;
    HttpMethod?: AuditLogGetListToExcelQueryHttpMethod;
    Url?: AuditLogGetListToExcelQueryUrl;
    StartTime?: AuditLogGetListToExcelQueryStartTime;
    EndTime?: AuditLogGetListToExcelQueryEndTime;
    HttpStatusCode?: AuditLogGetListToExcelQueryHttpStatusCode;
    HasException?: AuditLogGetListToExcelQueryHasException;
    Sorting?: AuditLogGetListToExcelQuerySorting;
    SkipCount?: AuditLogGetListToExcelQuerySkipCount;
    MaxResultCount?: AuditLogGetListToExcelQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AuditLogGetListToExcelStatus200,
        ResponseErrorConfig<
          | AuditLogGetListToExcelStatus400
          | AuditLogGetListToExcelStatus401
          | AuditLogGetListToExcelStatus403
          | AuditLogGetListToExcelStatus404
          | AuditLogGetListToExcelStatus500
          | AuditLogGetListToExcelStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetListToExcelQueryKey(params);

  const query = useQuery(
    {
      ...auditLogGetListToExcelQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AuditLogGetListToExcelStatus400
      | AuditLogGetListToExcelStatus401
      | AuditLogGetListToExcelStatus403
      | AuditLogGetListToExcelStatus404
      | AuditLogGetListToExcelStatus500
      | AuditLogGetListToExcelStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
