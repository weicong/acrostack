/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  AuditLogGetListToExcelOptions,
  AuditLogGetListToExcelStatus200,
  AuditLogGetListToExcelStatus400,
  AuditLogGetListToExcelStatus401,
  AuditLogGetListToExcelStatus403,
  AuditLogGetListToExcelStatus404,
  AuditLogGetListToExcelStatus500,
  AuditLogGetListToExcelStatus501,
} from "../../models/auditLog/AuditLogGetListToExcel";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetListToExcel } from "../../clients/auditLog/auditLogGetListToExcel";

export const auditLogGetListToExcelQueryKey = ({
  query,
}: Omit<AuditLogGetListToExcelOptions, "headers"> = {}) =>
  [{ url: "/api/app/audit-log/to-excel" }, ...(query ? [query] : [])] as const;

type AuditLogGetListToExcelQueryKey = ReturnType<typeof auditLogGetListToExcelQueryKey>;

export function auditLogGetListToExcelQueryOptions(
  { query }: AuditLogGetListToExcelOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = auditLogGetListToExcelQueryKey({ query });
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
      const { data } = await auditLogGetListToExcel({
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
 * {@link /api/app/audit-log/to-excel}
 */
export function useAuditLogGetListToExcel<
  TData = AuditLogGetListToExcelStatus200,
  TQueryData = AuditLogGetListToExcelStatus200,
  TQueryKey extends QueryKey = AuditLogGetListToExcelQueryKey,
>(
  {
    query,
  }: {
    query?: AuditLogGetListToExcelOptions["query"] | (() => AuditLogGetListToExcelOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetListToExcelQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...auditLogGetListToExcelQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
