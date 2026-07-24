/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AuditLogGetListQueryFilter,
  AuditLogGetListQueryUserId,
  AuditLogGetListQueryHttpMethod,
  AuditLogGetListQueryUrl,
  AuditLogGetListQueryStartTime,
  AuditLogGetListQueryEndTime,
  AuditLogGetListQueryHttpStatusCode,
  AuditLogGetListQueryHasException,
  AuditLogGetListQuerySorting,
  AuditLogGetListQuerySkipCount,
  AuditLogGetListQueryMaxResultCount,
  AuditLogGetListStatus200,
  AuditLogGetListStatus400,
  AuditLogGetListStatus401,
  AuditLogGetListStatus403,
  AuditLogGetListStatus404,
  AuditLogGetListStatus500,
  AuditLogGetListStatus501,
} from "../../models/auditLog/AuditLogGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetList } from "../../clients/auditLog/auditLogGetList.ts";

export const auditLogGetListQueryKey = (params?: {
  Filter?: AuditLogGetListQueryFilter;
  UserId?: AuditLogGetListQueryUserId;
  HttpMethod?: AuditLogGetListQueryHttpMethod;
  Url?: AuditLogGetListQueryUrl;
  StartTime?: AuditLogGetListQueryStartTime;
  EndTime?: AuditLogGetListQueryEndTime;
  HttpStatusCode?: AuditLogGetListQueryHttpStatusCode;
  HasException?: AuditLogGetListQueryHasException;
  Sorting?: AuditLogGetListQuerySorting;
  SkipCount?: AuditLogGetListQuerySkipCount;
  MaxResultCount?: AuditLogGetListQueryMaxResultCount;
}) => [{ url: "/api/app/audit-log" }, ...(params ? [params] : [])] as const;

type AuditLogGetListQueryKey = ReturnType<typeof auditLogGetListQueryKey>;

export function auditLogGetListQueryOptions(
  params?: {
    Filter?: AuditLogGetListQueryFilter;
    UserId?: AuditLogGetListQueryUserId;
    HttpMethod?: AuditLogGetListQueryHttpMethod;
    Url?: AuditLogGetListQueryUrl;
    StartTime?: AuditLogGetListQueryStartTime;
    EndTime?: AuditLogGetListQueryEndTime;
    HttpStatusCode?: AuditLogGetListQueryHttpStatusCode;
    HasException?: AuditLogGetListQueryHasException;
    Sorting?: AuditLogGetListQuerySorting;
    SkipCount?: AuditLogGetListQuerySkipCount;
    MaxResultCount?: AuditLogGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = auditLogGetListQueryKey(params);
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
      return auditLogGetList(params, { ...config, signal: config.signal ?? signal });
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
  params?: {
    Filter?: AuditLogGetListQueryFilter;
    UserId?: AuditLogGetListQueryUserId;
    HttpMethod?: AuditLogGetListQueryHttpMethod;
    Url?: AuditLogGetListQueryUrl;
    StartTime?: AuditLogGetListQueryStartTime;
    EndTime?: AuditLogGetListQueryEndTime;
    HttpStatusCode?: AuditLogGetListQueryHttpStatusCode;
    HasException?: AuditLogGetListQueryHasException;
    Sorting?: AuditLogGetListQuerySorting;
    SkipCount?: AuditLogGetListQuerySkipCount;
    MaxResultCount?: AuditLogGetListQueryMaxResultCount;
  },
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetListQueryKey(params);

  const query = useQuery(
    {
      ...auditLogGetListQueryOptions(params, config),
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
