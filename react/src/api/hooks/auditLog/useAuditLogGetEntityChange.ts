/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  AuditLogGetEntityChangeOptions,
  AuditLogGetEntityChangeStatus200,
  AuditLogGetEntityChangeStatus400,
  AuditLogGetEntityChangeStatus401,
  AuditLogGetEntityChangeStatus403,
  AuditLogGetEntityChangeStatus404,
  AuditLogGetEntityChangeStatus500,
  AuditLogGetEntityChangeStatus501,
} from "../../models/auditLog/AuditLogGetEntityChange";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { auditLogGetEntityChange } from "../../clients/auditLog/auditLogGetEntityChange";

export const auditLogGetEntityChangeQueryKey = ({
  path,
}: Omit<AuditLogGetEntityChangeOptions, "headers">) =>
  [{ url: "/api/app/audit-log/entity-change/:entityChangeId", params: path }] as const;

type AuditLogGetEntityChangeQueryKey = ReturnType<typeof auditLogGetEntityChangeQueryKey>;

export function auditLogGetEntityChangeQueryOptions(
  { path }: AuditLogGetEntityChangeOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = auditLogGetEntityChangeQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await auditLogGetEntityChange({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    path,
  }: {
    path: AuditLogGetEntityChangeOptions["path"] | (() => AuditLogGetEntityChangeOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetEntityChangeQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...auditLogGetEntityChangeQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
